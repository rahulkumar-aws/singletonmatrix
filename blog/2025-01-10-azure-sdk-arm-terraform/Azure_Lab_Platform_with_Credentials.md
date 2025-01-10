---
title: "Building a Dynamic Azure Lab Platform: SDK, ARM Templates, or Terraform?"
authors: [rahulkumar]
author_email: "rahulumar.aws@gmail.com"
tags:
  - "azure"
  - "arm"
  - "terraform"
  - "azure-sdk"
---


# Building a Dynamic Azure Lab Platform: SDK, ARM Templates, or Terraform?

Creating an Azure-based lab platform like the one shown in platforms like Whizlabs requires a well-thought-out design to manage lab environments dynamically, ensure scalability, and provide seamless user experiences. In this blog, we'll explore how to build such a system and discuss the pros and cons of using Azure SDKs, ARM Templates, and Terraform for different parts of the infrastructure.

## **Understanding the Requirements**
To build a lab platform, we need to address several core functionalities:

1. **Dynamic Resource Provisioning**: The platform should provision Azure resources (e.g., VMs, storage accounts) dynamically as users start a lab.
2. **Resource Isolation**: Each lab session should be isolated to prevent conflicts.
3. **User Progress Tracking**: Track lab progress and provide real-time feedback.
4. **Resource Cleanup**: Automatically clean up resources after a lab ends.
5. **Scalability**: Handle multiple concurrent users and labs efficiently.
<!-- truncate -->
## **The Tools: Azure SDK, ARM Templates, and Terraform**
Azure offers three main tools for managing infrastructure:

### **1. Azure SDK**
Azure SDKs allow developers to programmatically interact with Azure resources in their preferred programming languages (e.g., Python, Node.js, .NET, Go).

#### **Advantages**:
- **Dynamic and Flexible**: Ideal for runtime provisioning and custom workflows.
- **Integration with Applications**: Great for building custom logic directly into your application (e.g., validating lab steps dynamically).
- **Multi-Language Support**: Available in Python, Node.js, C#, Go, and others.

#### **Limitations**:
- **Requires Custom Code**: More code is needed compared to declarative tools.
- **Not as Scalable**: Less suited for managing large-scale environments.

#### **Best Use Case**: When you need dynamic provisioning or validation of resources during runtime.

---

### **2. ARM Templates**
Azure Resource Manager (ARM) templates are Azure’s native Infrastructure-as-Code (IaC) solution for declaratively managing resources.

#### **Advantages**:
- **Azure-Native**: Fully integrated with Azure.
- **Repeatable**: Easy to deploy the same infrastructure multiple times.
- **Portal Integration**: Directly deployable from the Azure Portal.

#### **Limitations**:
- **Verbose Syntax**: JSON-based templates can become unwieldy for complex setups.
- **Limited Logic**: Doesn’t support advanced conditional logic or dynamic workflows.

#### **Best Use Case**: For predefined, static lab setups where resources don't change dynamically.

---

### **3. Terraform**
Terraform is a multi-cloud Infrastructure-as-Code (IaC) tool that allows you to define resources declaratively and manage their lifecycle.

#### **Advantages**:
- **Multi-Cloud Support**: Works with Azure, AWS, GCP, and others.
- **Modular and Scalable**: Easily organize infrastructure into reusable modules.
- **State Management**: Tracks changes to ensure resources remain consistent.

#### **Limitations**:
- **Requires Learning HCL**: HashiCorp Configuration Language (HCL) may be new to some teams.
- **State File Management**: Requires careful handling of state files.

#### **Best Use Case**: For scalable and modular infrastructure setups, especially when combining Azure with other cloud services.

---

## **Choosing the Right Tool for a Lab Platform**
Given the requirements of a lab platform, the best approach is often a hybrid of these tools:

- **Terraform**: Use for setting up the baseline infrastructure (e.g., networking, shared resources).
- **Azure SDK**: Use for dynamic provisioning and runtime validation of user-specific resources.
- **ARM Templates**: Use for predefined lab setups if required.

---

## **Architecture Overview**
Here's how you can design your Azure lab platform:

### **1. Core Components**
1. **Frontend**: Interactive UI for lab tutorials and user progress.
2. **Backend**: API service to manage resources and validate user actions.
3. **Resource Management**: Tools like Terraform and Azure SDK for provisioning resources.
4. **Database**: Store user progress, lab configurations, and logs.

### **2. Workflow**
1. **User Logs In**:
   - Authenticate users via Azure Active Directory (Azure AD).
2. **Lab Launch**:
   - Use Azure SDK or ARM templates to provision resources dynamically.
3. **Lab Validation**:
   - Backend validates lab steps using Azure SDK.
4. **Lab Expiry**:
   - Automatically delete resources using Azure Functions or Terraform.

---

## **Implementation Examples**

Here, we'll demonstrate how to implement a simple workflow: selecting a subscription, creating a resource group, starting a virtual machine, and cleaning up resources.

### **Step 1: Authenticate and Select Subscription**
Use Azure SDK to authenticate and list subscriptions.

#### Python Example:
```python
from azure.identity import DefaultAzureCredential
from azure.mgmt.resource import SubscriptionClient

# Authenticate with Azure
credential = DefaultAzureCredential()
subscription_client = SubscriptionClient(credential)

# List all subscriptions
subscriptions = subscription_client.subscriptions.list()
for subscription in subscriptions:
    print(f"Subscription ID: {subscription.subscription_id}, Display Name: {subscription.display_name}")
```

### **Step 2: Create a Resource Group**
A resource group is required to manage related Azure resources.

#### Python Example:
```python
from azure.mgmt.resource import ResourceManagementClient

# Initialize Resource Management Client
resource_client = ResourceManagementClient(credential, "<SUBSCRIPTION_ID>")

# Create a resource group
resource_group_params = {"location": "eastus"}
resource_group = resource_client.resource_groups.create_or_update(
    "my-lab-resource-group",
    resource_group_params
)
print(f"Resource Group Created: {resource_group.name}")
```

### **Step 3: Start a Virtual Machine**
Provision a virtual machine within the resource group.

#### Python Example:
```python
from azure.mgmt.compute import ComputeManagementClient

# Initialize Compute Management Client
compute_client = ComputeManagementClient(credential, "<SUBSCRIPTION_ID>")

# VM parameters
vm_parameters = {
    "location": "eastus",
    "hardware_profile": {"vm_size": "Standard_B1s"},
    "storage_profile": {
        "image_reference": {
            "publisher": "Canonical",
            "offer": "UbuntuServer",
            "sku": "18.04-LTS",
            "version": "latest",
        }
    },
    "os_profile": {
        "admin_username": "azureuser",
        "admin_password": "<PASSWORD>"
    },
    "network_profile": {
        "network_interfaces": [
            {"id": "<NIC_ID>"}
        ]
    }
}

# Create the VM
vm = compute_client.virtual_machines.begin_create_or_update(
    "my-lab-resource-group",
    "my-lab-vm",
    vm_parameters
)
print(f"VM creation initiated: {vm.result().name}")
```

### **Step 4: Delete Resources**
Clean up the resources after the lab session ends.

#### Python Example:
```python
# Delete the resource group
delete_operation = resource_client.resource_groups.begin_delete("my-lab-resource-group")
delete_operation.wait()
print("Resource group deleted.")
```

---

## **Managing Credentials in Different Scenarios**

Proper credential management is critical for securely interacting with Azure resources in any of the above scenarios. Here are some best practices and approaches for managing credentials:

### **1. Azure SDK**
When using Azure SDK, avoid hardcoding credentials. Instead, use the Azure Identity DefaultAzureCredential class, which supports multiple authentication methods.

#### Steps:
1. Set up environment variables to store sensitive credentials securely:
```bash
export AZURE_CLIENT_ID=<your_client_id>
export AZURE_TENANT_ID=<your_tenant_id>
export AZURE_CLIENT_SECRET=<your_client_secret>
```
2. DefaultAzureCredential automatically retrieves these environment variables during runtime.

This approach ensures credentials are not exposed in your code or scripts.

---

## **Conclusion**

By leveraging Azure SDK for dynamic provisioning, Terraform for scalable infrastructure, and ARM templates for static setups, you can build a secure, flexible, and scalable Azure lab platform. Let me know if you'd like further help implementing these tools.
