---
layout: page
title: Serverless Cloud Security
description: Securing serverless architectures against misconfiguration, overprivilege, and emerging cloud-native threats
img: assets/img/banner_cloud_access.jpg
importance: 2
category: research
related_publications: true
---

{% include figure.liquid loading="eager" path="assets/img/banner_cloud_access.jpg" class="img-fluid rounded z-depth-1 mb-4" alt="Server rack with fiber optic cables representing cloud infrastructure" %}

Serverless computing abstracts away infrastructure management, letting developers deploy functions without provisioning or maintaining servers. That convenience introduces a distinct security surface: misconfigured permissions, opaque data flows between managed services, and attack patterns that don't map cleanly onto traditional cloud security assumptions.

This project studies **security in serverless cloud environments**, spanning access control, policy misconfiguration, and the broader implications of the serverless execution model for defenders. Key questions we address include:

- How do serverless platforms' permission models fail in practice, and what makes them error-prone to configure correctly?
- What new attack surfaces does the serverless execution model introduce, and how do they differ from traditional cloud threats?
- How can static and dynamic analysis help developers reason about the security posture of their serverless applications?

One focus area within this project is **overprivilege in serverless IAM policies** — measuring how often real-world AWS Lambda, Google Cloud Functions, and Azure Functions deployments grant more permissions than functions actually use, and developing techniques to automatically detect and right-size these policies without disrupting application functionality. This work is detailed in {% cite yeboahduako2026serverless %}.
