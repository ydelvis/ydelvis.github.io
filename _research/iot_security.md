---
layout: page
title: IoT Security
description: Security and privacy risks across the IoT device lifecycle, from deployment to end-of-support
img: assets/img/banner_iot_security.jpg
importance: 4
category: research
related_publications: false
---

{% include figure.liquid loading="eager" path="assets/img/banner_iot_security.jpg" class="img-fluid rounded z-depth-1 mb-4" alt="City lights from space representing the global scale of IoT connectivity" %}

Internet-of-Things (IoT) devices are now deeply embedded in homes, workplaces, and critical infrastructure — yet they routinely ship with weak defaults, minimal patching support, and little visibility into what they actually do on a network. This project studies **security across the IoT device lifecycle**, from how devices are provisioned and managed to what happens once vendor support ends.

Key questions we address include:

- How do IoT devices expose users and networks to risk, and how does that risk evolve as devices age?
- What visibility and enforcement mechanisms can catch misbehavior or vulnerabilities without vendor cooperation?
- How should responsibility for long-term device security be shared among users, vendors, and platform providers?

One focus area within this project is **IoT abandonware** — devices whose vendors have ceased support entirely, discontinuing firmware updates, shutting down cloud backends, or going out of business altogether. These orphaned devices continue operating with unpatched vulnerabilities and no viable path to remediation. This work characterizes the prevalence and attack surface of IoT abandonware.

## Published Works

<div class="publications">
{% bibliography --query @*[project=iot_security] %}
</div>
