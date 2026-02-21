---
layout: page
title: Access Control for Serverless Cloud
description: Detecting and mitigating overprivilege in cloud security policies
img: assets/img/banner_cloud_access.jpg
importance: 2
category: research
related_publications: false
---

{% include figure.liquid loading="eager" path="assets/img/banner_cloud_access.jpg" class="img-fluid rounded z-depth-1 mb-4" alt="Server rack with fiber optic cables representing cloud infrastructure" %}

Serverless computing abstracts away infrastructure management, letting developers deploy functions without managing servers. But this convenience often comes at a security cost: developers routinely **over-provision permissions** for their functions, violating the principle of least privilege and introducing opportunities for privilege escalation, lateral movement, and data exfiltration.

This project examines **overprivilege in serverless security policies**, focusing on how cloud IAM (Identity and Access Management) policies are configured in practice across platforms like AWS Lambda, Google Cloud Functions, and Azure Functions. Our work asks:

- How common is overprivilege in real-world serverless deployments, and how severe is it?
- What patterns of misconfiguration are most prevalent, and why do they arise?
- How can we automatically detect overprivileged policies and recommend tighter, right-sized alternatives without disrupting application functionality?

We develop static and dynamic analyses of function-level access control configurations, drawing on principles from information flow control and formal policy reasoning to characterize and reduce unnecessary privilege in cloud-native applications.

#### Related Work

- *Overprivilege Analysis of Security Policies in Serverless Cloud* — Under Review, USENIX Security 2026
