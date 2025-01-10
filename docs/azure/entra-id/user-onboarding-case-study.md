---
sidebar_position: 1
---
# Case Study: Cloud Onboarding Process and Identity Management Cost Analysis

## Objective
To onboard employees to a cloud platform, ensuring:
1. Role-specific tools and resources.
2. Secure identity and access management.
3. Cost-effectiveness across Azure and AWS, calculated per user.

---

## Cloud Platforms Chosen
- **Azure:** Using Microsoft Entra ID for identity management.
- **AWS:** Using IAM with additional Security Hub and Config for advanced identity features.

---

## Role-Based Requirements

| **Role**         | **Tools & Services Required**            | **Azure Entra ID Role**         | **AWS IAM Role**            |
|-------------------|------------------------------------------|----------------------------------|-----------------------------|
| Developer         | Azure DevOps, VM for coding             | Contributor                     | DevOps Engineer            |
| Tester            | Azure Test Plans, VM                    | Reader + Test Contributor       | Quality Assurance           |
| Data Engineer     | Data Factory, Databricks                | Data Engineer Role              | DataPipelineUser            |
| Data Scientist    | Azure ML, GPU-enabled VMs               | Data Scientist Role             | DataScientist               |
| Analyst           | Power BI, Synapse Analytics             | Reader + Analyst                | BIReadOnly                  |
| BI Developer      | Power BI Pro, SQL Database              | BI Developer Role               | DataModeler                 |
| App Developer     | App Service, Kubernetes Cluster         | Developer                       | KubernetesUser              |

---

## Identity Management Cost Analysis (Per User)

### Azure Entra ID Licensing

#### **Standalone Entra ID Plans**

| **Plan**                   | **Features**                                                                                       | **Cost/User (USD/Month)** |
|-----------------------------|---------------------------------------------------------------------------------------------------|---------------------------|
| Microsoft Entra ID Free     | Basic SSO, limited self-service password reset, device registration                              | $0                        |
| Microsoft Entra ID P1       | Conditional Access, MFA, hybrid identity support                                                | $6                        |
| Microsoft Entra ID P2       | All P1 features + Identity Protection, Privileged Identity Management                           | $9                        |

#### **Entra ID with Microsoft 365**

| **Microsoft 365 Plan**           | **Features Included**                                                       | **Cost/User (USD/Month)** |
|-----------------------------------|-----------------------------------------------------------------------------|---------------------------|
| Microsoft 365 Business Basic      | Entra ID Free, Office Online, OneDrive                                      | $6                        |
| Microsoft 365 Business Standard   | Entra ID P1, Desktop Office Apps, Email, OneDrive                          | $12.50                    |
| Microsoft 365 E3                  | Entra ID P1, Advanced Security, Device Management                          | $36                       |
| Microsoft 365 E5                  | Entra ID P2, Advanced Security & Compliance                                | $57                       |

---

### AWS IAM with Security Hub and Config

AWS IAM provides basic identity management for free. For advanced functionalities, additional services are required:

| **Service**                     | **Features**                                                                 | **Cost/User (USD/Month)** |
|----------------------------------|-------------------------------------------------------------------------------|---------------------------|
| AWS IAM                          | Basic identity and access management, policies, groups                        | $0                        |
| AWS Security Hub                 | Security monitoring, insights, compliance checks                              | ~$0.75–1.00               |
| AWS Config                       | Compliance auditing, monitoring of drift detection                            | ~$1.50                    |

**Total Cost/User for Advanced Features:** **$2–$3/month**

---

## Cost Comparison (Per User)

| **Feature**                       | **Azure Entra ID (P1/P2)**                     | **AWS IAM with Security Hub/Config**         |
|-----------------------------------|-----------------------------------------------|---------------------------------------------|
| Basic Identity Management         | Included (Free Tier)                          | Free IAM policies and groups                |
| Advanced Features                 | Conditional Access, MFA, PIM (P1: $6, P2: $9) | Security monitoring via Security Hub + Config |
| Cost/User                         | $6–$9                                         | ~$2–$3                                      |

---

## Role-Specific Cost Analysis (Per User)

| **Role**         | **Azure Monthly Cost/User (USD)** | **AWS Monthly Cost/User (USD)** |
|-------------------|-----------------------------------|----------------------------------|
| Developer         | $50                               | $55                              |
| Tester            | $40                               | $45                              |
| Data Engineer     | $120                              | $125                             |
| Data Scientist    | $200                              | $210                             |
| Analyst           | $75                               | $80                              |
| BI Developer      | $90                               | $95                              |
| App Developer     | $100                              | $105                             |

---

## Total Cost Comparison (Per User)

| **Cloud Platform**             | **Basic Identity Management (USD)** | **Advanced Features (USD)** | **Total Cost/User (USD)** |
|--------------------------------|--------------------------------------|-----------------------------|---------------------------|
| **Azure Entra ID P1**          | $0                                   | $6                          | $6                        |
| **Azure Entra ID P2**          | $0                                   | $9                          | $9                        |
| **AWS IAM with Security Hub**  | $0                                   | ~$2–$3                      | ~$2–$3                    |

---

## Key Insights

1. **Azure Entra ID** provides comprehensive identity management solutions for a predictable cost, particularly beneficial in Microsoft-heavy environments. 
2. **AWS IAM** is free for basic needs, but advanced features require **AWS Security Hub** and **AWS Config**, adding complexity and ~$2–$3/month/user.
3. Azure Entra ID P1/P2 offers more integrated tools like MFA and Privileged Identity Management, making it more suitable for organizations prioritizing ease of use and security.

---

## Conclusion
For **one user**, **Azure Entra ID P1** costs $6/month, while **AWS IAM with Security Hub and Config** costs approximately $2–$3/month. Organizations with heavy use of Microsoft products benefit from Azure's seamless integration, while AWS provides cost efficiency for cross-cloud flexibility.
