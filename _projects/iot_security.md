---
layout: page
title: IoT Security & Abandonware
description: Security risks of devices whose vendors have ceased support
img: assets/img/banner_iot_security.jpg
importance: 1
category: research
related_publications: false
---

{% include figure.liquid loading="eager" path="assets/img/banner_iot_security.jpg" class="img-fluid rounded z-depth-1 mb-4" alt="City lights from space representing the global scale of IoT connectivity" %}

IoT devices increasingly face a common but underexplored threat: **vendor abandonment**. When manufacturers discontinue support—ceasing firmware updates, shutting down cloud backends, or simply going out of business—the devices they leave behind become *abandonware*. These orphaned devices continue operating in homes and critical infrastructure, often running with unpatched vulnerabilities, inaccessible management interfaces, and no viable path to remediation.

This project investigates the **security implications of IoT abandonware**, examining how abandoned devices create long-tail risks in real-world deployments. Key questions we address include:

- How prevalent is IoT abandonware in practice, and how do we characterize it?
- What attack surface do abandoned devices expose, and how does that surface evolve over time?
- What can users, vendors, and platform providers do when traditional security response mechanisms are absent?

Our work explores detection, measurement, and responsible disclosure strategies for a threat landscape where the normal expectation of vendor-driven patching no longer applies.

#### Related Work

- *When Apps Outlive Vendors: Security Implications of IoT Abandonware* — Under Review, USENIX Security 2026
