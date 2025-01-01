"use strict";(self.webpackChunksingletonmatrix=self.webpackChunksingletonmatrix||[]).push([[6004],{8269:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>u,frontMatter:()=>t,metadata:()=>i,toc:()=>c});var i=l(1253),r=l(4848),s=l(8453);const t={title:"Understanding Firewalls in Operating Systems and Cloud Environments",authors:["rahulkumar"],author_email:"rahulumar.aws@gmail.com",tags:["networking","security","firewall","aws","azure"]},a="Understanding Firewalls in Operating Systems and Cloud Environments",o={authorsImageUrls:[void 0]},c=[{value:"What Is a Firewall?",id:"what-is-a-firewall",level:2},{value:"Firewalls in Operating Systems",id:"firewalls-in-operating-systems",level:2},{value:"Key Features",id:"key-features",level:3},{value:"Configuration Example: Linux iptables",id:"configuration-example-linux-iptables",level:3},{value:"Firewalls in Cloud Environments",id:"firewalls-in-cloud-environments",level:2},{value:"Key Features",id:"key-features-1",level:3},{value:"Cloud Firewall Capabilities",id:"cloud-firewall-capabilities",level:3},{value:"Cloud Firewall Configuration Examples",id:"cloud-firewall-configuration-examples",level:2},{value:"1. AWS Security Groups",id:"1-aws-security-groups",level:3},{value:"2. Azure NSGs",id:"2-azure-nsgs",level:3},{value:"Additional Azure NSG Example: Restricting RDP Access",id:"additional-azure-nsg-example-restricting-rdp-access",level:4},{value:"Azure Firewall: Application Rule Collection Example",id:"azure-firewall-application-rule-collection-example",level:3},{value:"Azure Firewall: Network Rule Collection Example",id:"azure-firewall-network-rule-collection-example",level:4},{value:"3. GCP VPC Firewall Rules",id:"3-gcp-vpc-firewall-rules",level:3},{value:"Benefits of Cloud Firewalls",id:"benefits-of-cloud-firewalls",level:2},{value:"Deployment Strategies for Cloud Firewalls",id:"deployment-strategies-for-cloud-firewalls",level:2},{value:"1. <strong>Start with Least Privilege</strong>",id:"1-start-with-least-privilege",level:3},{value:"2. <strong>Use Layered Security</strong>",id:"2-use-layered-security",level:3},{value:"3. <strong>Automate Rule Management</strong>",id:"3-automate-rule-management",level:3},{value:"OS Firewalls vs. Cloud Firewalls",id:"os-firewalls-vs-cloud-firewalls",level:2},{value:"Conclusion",id:"conclusion",level:2}];function d(e){const n={code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Firewalls are essential components of modern network security, serving as a protective barrier between trusted and untrusted networks. Whether on-premises or in the cloud, firewalls monitor and control traffic to enforce security policies. This blog explores the role of firewalls in operating systems (OS) and cloud environments, highlighting their similarities, differences, and best practices for cloud usage."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"what-is-a-firewall",children:"What Is a Firewall?"}),"\n",(0,r.jsxs)(n.p,{children:["A ",(0,r.jsx)(n.strong,{children:"firewall"})," is a security device or software designed to monitor and control incoming and outgoing network traffic. Firewalls enforce policies based on pre-configured rules to prevent unauthorized access and protect systems from malicious traffic."]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"firewalls-in-operating-systems",children:"Firewalls in Operating Systems"}),"\n",(0,r.jsxs)(n.p,{children:["Firewalls integrated with operating systems operate at the host level, safeguarding individual devices. These are often referred to as ",(0,r.jsx)(n.strong,{children:"host-based firewalls"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"key-features",children:"Key Features"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Location"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Positioned within the OS networking stack, filtering traffic before it reaches applications or leaves the system."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Types"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Packet Filtering Firewalls"}),": Inspect packets at the network layer based on IP, port, and protocol."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Stateful Firewalls"}),": Monitor connection states and allow only legitimate traffic."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Examples"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Windows Firewall"}),": Built into Windows OS, offering GUI and command-line control."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"iptables/nftables"}),": Commonly used in Linux for detailed traffic filtering."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"pf"}),": Used in macOS and BSD systems."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"configuration-example-linux-iptables",children:"Configuration Example: Linux iptables"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# Allow SSH traffic\niptables -A INPUT -p tcp --dport 22 -j ACCEPT\n\n# Drop all other incoming traffic\niptables -A INPUT -j DROP\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"firewalls-in-cloud-environments",children:"Firewalls in Cloud Environments"}),"\n",(0,r.jsxs)(n.p,{children:["Cloud firewalls operate at a broader scale, managing traffic across multiple virtual resources like virtual machines (VMs), containers, and managed services. These are often categorized as ",(0,r.jsx)(n.strong,{children:"network firewalls"})," or ",(0,r.jsx)(n.strong,{children:"perimeter firewalls"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"key-features-1",children:"Key Features"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Location"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Positioned within the cloud provider's network infrastructure, controlling traffic at the virtual network or subnet level."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Types"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Network Security Groups (NSGs)"}),": Define inbound and outbound traffic rules for specific cloud resources."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Perimeter Firewalls"}),": Apply rules for traffic entering or leaving a Virtual Private Cloud (VPC) or Virtual Network (VNet)."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Web Application Firewalls (WAFs)"}),": Protect web applications from common vulnerabilities like SQL injection and XSS."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Examples by Cloud Provider"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"AWS"}),":","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Security Groups"}),": Host-based firewall rules."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Network ACLs"}),": Subnet-level traffic filtering."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"AWS WAF"}),": Web application security."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Azure"}),":","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"NSGs"}),": Control VM and subnet traffic."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Azure Firewall"}),": Centralized, managed firewall service."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"GCP"}),":","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"VPC Firewall Rules"}),": Apply to resources within a VPC."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Cloud Armor"}),": WAF for HTTP(S) applications."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"cloud-firewall-capabilities",children:"Cloud Firewall Capabilities"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Centralized Management"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Cloud firewalls allow centralized rule creation and enforcement across multiple resources."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Scalability"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Automatically adapts to changes in infrastructure, such as autoscaling."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Threat Intelligence"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Integrates with threat detection systems for proactive security (e.g., AWS Shield, Azure Threat Protection)."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Logging and Monitoring"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Provides centralized logs for compliance and forensic analysis."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"cloud-firewall-configuration-examples",children:"Cloud Firewall Configuration Examples"}),"\n",(0,r.jsx)(n.h3,{id:"1-aws-security-groups",children:"1. AWS Security Groups"}),"\n",(0,r.jsx)(n.p,{children:"Security Groups act as virtual firewalls for EC2 instances. Example configuration:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# Allow HTTP (80) and HTTPS (443) inbound traffic\nInbound Rules:\n- Type: HTTP    Protocol: TCP    Port: 80    Source: 0.0.0.0/0\n- Type: HTTPS   Protocol: TCP    Port: 443   Source: 0.0.0.0/0\n\n# Allow all outbound traffic\nOutbound Rules:\n- Type: All Traffic    Protocol: All    Port Range: All    Destination: 0.0.0.0/0\n"})}),"\n",(0,r.jsx)(n.h3,{id:"2-azure-nsgs",children:"2. Azure NSGs"}),"\n",(0,r.jsx)(n.p,{children:"NSGs filter traffic at the subnet or VM level. Example configuration:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-plaintext",children:"Rule Name: Allow-SSH\nPriority: 100\nSource: Any\nSource Port: Any\nDestination: VirtualNetwork\nDestination Port: 22\nProtocol: TCP\nAction: Allow\n"})}),"\n",(0,r.jsx)(n.h4,{id:"additional-azure-nsg-example-restricting-rdp-access",children:"Additional Azure NSG Example: Restricting RDP Access"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-plaintext",children:"Rule Name: Restrict-RDP\nPriority: 200\nSource: Any\nSource Port: Any\nDestination: VirtualNetwork\nDestination Port: 3389\nProtocol: TCP\nAction: Deny\n"})}),"\n",(0,r.jsx)(n.h3,{id:"azure-firewall-application-rule-collection-example",children:"Azure Firewall: Application Rule Collection Example"}),"\n",(0,r.jsx)(n.p,{children:"Azure Firewall enables defining application-specific rules for outbound traffic:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-plaintext",children:"Rule Name: Allow-Web\nPriority: 100\nAction: Allow\nTarget FQDNs: *.microsoft.com, *.azure.com\nProtocols: HTTP, HTTPS\n"})}),"\n",(0,r.jsx)(n.h4,{id:"azure-firewall-network-rule-collection-example",children:"Azure Firewall: Network Rule Collection Example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-plaintext",children:"Rule Name: Allow-DNS\nPriority: 100\nAction: Allow\nSource IP: 10.0.0.0/16\nDestination IP: 8.8.8.8\nProtocol: UDP\nDestination Port: 53\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"3-gcp-vpc-firewall-rules",children:"3. GCP VPC Firewall Rules"}),"\n",(0,r.jsx)(n.p,{children:"GCP VPC Firewall Rules control access at the VPC level. Example rule:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"# Allow SSH traffic to all instances in a VPC\nDirection: Ingress\nAction: Allow\nProtocol: TCP\nPort: 22\nSource IP: 0.0.0.0/0\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"benefits-of-cloud-firewalls",children:"Benefits of Cloud Firewalls"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Granular Control"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Define specific rules for individual instances, subnets, or entire virtual networks."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Integrated Security"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Seamlessly integrates with cloud-native services like IAM and monitoring tools."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"High Availability"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Managed firewalls ensure availability and redundancy without manual configuration."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Cost Efficiency"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Pay-as-you-go pricing eliminates the need for expensive hardware firewalls."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"deployment-strategies-for-cloud-firewalls",children:"Deployment Strategies for Cloud Firewalls"}),"\n",(0,r.jsxs)(n.h3,{id:"1-start-with-least-privilege",children:["1. ",(0,r.jsx)(n.strong,{children:"Start with Least Privilege"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Allow only necessary traffic and deny everything else."}),"\n",(0,r.jsx)(n.li,{children:"Example: Default deny-all rule in AWS Security Groups."}),"\n"]}),"\n",(0,r.jsxs)(n.h3,{id:"2-use-layered-security",children:["2. ",(0,r.jsx)(n.strong,{children:"Use Layered Security"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Combine host-based firewalls (OS-level) with cloud firewalls for a defense-in-depth approach."}),"\n"]}),"\n",(0,r.jsxs)(n.h3,{id:"3-automate-rule-management",children:["3. ",(0,r.jsx)(n.strong,{children:"Automate Rule Management"})]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Use Infrastructure as Code (IaC) tools like Terraform to define and deploy firewall rules."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Example Terraform for AWS Security Group:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-hcl",children:'resource "aws_security_group" "example" {\n  name        = "example-sg"\n  description = "Example security group"\n\n  ingress {\n    from_port   = 80\n    to_port     = 80\n    protocol    = "tcp"\n    cidr_blocks = ["0.0.0.0/0"]\n  }\n\n  egress {\n    from_port   = 0\n    to_port     = 0\n    protocol    = "-1"\n    cidr_blocks = ["0.0.0.0/0"]\n  }\n}\n'})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"os-firewalls-vs-cloud-firewalls",children:"OS Firewalls vs. Cloud Firewalls"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Feature"}),(0,r.jsx)(n.th,{children:"OS Firewalls"}),(0,r.jsx)(n.th,{children:"Cloud Firewalls"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Scope"})}),(0,r.jsx)(n.td,{children:"Protect individual devices."}),(0,r.jsx)(n.td,{children:"Manage traffic across resources."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Management"})}),(0,r.jsx)(n.td,{children:"Configured per device."}),(0,r.jsx)(n.td,{children:"Centrally managed."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Scalability"})}),(0,r.jsx)(n.td,{children:"Limited to local resources."}),(0,r.jsx)(n.td,{children:"Dynamic and scalable."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Integration"})}),(0,r.jsx)(n.td,{children:"Works with the local system."}),(0,r.jsx)(n.td,{children:"Integrates with cloud services."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"Cost"})}),(0,r.jsx)(n.td,{children:"No additional cost."}),(0,r.jsx)(n.td,{children:"Pay-as-you-go pricing."})]})]})]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,r.jsx)(n.p,{children:"Firewalls play a vital role in securing both on-premises and cloud environments. While OS firewalls protect individual devices, cloud firewalls offer broader, scalable solutions for managing network traffic across complex infrastructures. Combining both ensures a robust, layered security approach, safeguarding resources from evolving threats."}),"\n",(0,r.jsx)(n.p,{children:"By leveraging the advanced capabilities of cloud firewalls in AWS, Azure, and GCP, organizations can enhance security while maintaining flexibility and cost-efficiency. Whether deploying a simple application or managing a multi-cloud infrastructure, a well-configured firewall strategy is essential for operational success."})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},8453:(e,n,l)=>{l.d(n,{R:()=>t,x:()=>a});var i=l(6540);const r={},s=i.createContext(r);function t(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),i.createElement(s.Provider,{value:n},e.children)}},1253:e=>{e.exports=JSON.parse('{"permalink":"/blog/2024/12/22/firewalls-in-os-and-cloud/firewalls_in_os_and_cloud","editUrl":"https://github.com/rahulkumar-aws/singletonmatrix/edit/main/blog/2024-12-22-firewalls-in-os-and-cloud/firewalls_in_os_and_cloud.md","source":"@site/blog/2024-12-22-firewalls-in-os-and-cloud/firewalls_in_os_and_cloud.md","title":"Understanding Firewalls in Operating Systems and Cloud Environments","description":"Firewalls are essential components of modern network security, serving as a protective barrier between trusted and untrusted networks. Whether on-premises or in the cloud, firewalls monitor and control traffic to enforce security policies. This blog explores the role of firewalls in operating systems (OS) and cloud environments, highlighting their similarities, differences, and best practices for cloud usage.","date":"2024-12-22T00:00:00.000Z","tags":[{"inline":false,"label":"Networking","permalink":"/blog/tags/networking","description":"networking tag description"},{"inline":false,"label":"Security","permalink":"/blog/tags/security","description":"networking tag description"},{"inline":false,"label":"Firewall","permalink":"/blog/tags/firewall","description":"networking tag description"},{"inline":false,"label":"AWS","permalink":"/blog/tags/aws","description":"networking tag description"},{"inline":false,"label":"Azure","permalink":"/blog/tags/azure","description":"networking tag description"}],"readingTime":5.275,"hasTruncateMarker":true,"authors":[{"name":"Rahul Kumar","title":"Senior Data Engineer @ AON","url":"https://github.com/rahulkumar-aws","page":{"permalink":"/blog/authors/rahulkumar"},"socials":{"x":"https://x.com/rahul_kumar_aws","github":"https://github.com/rahulkumar-aws"},"imageURL":"https://github.com/rahulkumar-aws.png","key":"rahulkumar"}],"frontMatter":{"title":"Understanding Firewalls in Operating Systems and Cloud Environments","authors":["rahulkumar"],"author_email":"rahulumar.aws@gmail.com","tags":["networking","security","firewall","aws","azure"]},"unlisted":false,"prevItem":{"title":"Designing Your Own Firewall: Concepts and Implementation","permalink":"/blog/2024/12/27/custom-firewall-blog/custom_firewall_blog"},"nextItem":{"title":"Understanding the Number of Ports an Operating System Can Have","permalink":"/blog/2024/12/20/understanding-os-ports/understanding_os_ports"}}')}}]);