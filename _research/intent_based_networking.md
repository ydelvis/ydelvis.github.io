---
layout: page
title: Intent-Based Networking & Security
description: Resolving conflicts and enforcing security in multi-intent network policies
img: assets/img/banner_ibn_network.jpg
importance: 3
category: research
related_publications: false
---

{% include figure.liquid loading="eager" path="assets/img/banner_ibn_network.jpg" class="img-fluid rounded z-depth-1 mb-4" alt="Abstract geometric network nodes representing intent-based network topology" %}

Intent-Based Networking (IBN) promises to simplify network management by letting operators express high-level goals—*intents*—that the network automatically translates into low-level configurations. Rather than manually writing routing rules or firewall policies, an operator might simply declare: *"ensure all traffic from department A reaches service B with low latency."*

However, real-world networks must simultaneously satisfy **multiple, potentially conflicting intents** from different operators, tenants, or services. This is the *multi-intent problem*, and it carries significant security implications: conflicting intents can silently produce misconfigured network states, open unintended access paths, or undermine security policies that each intent would individually enforce.

This project investigates:

- How do multiple co-existing intents interact, and when do those interactions become conflicts?
- What formal models can capture intent composition and detect policy violations before deployment?
- How does ambiguity in intent expression translate into network-level security risks?

We examine both the theoretical foundations of intent conflict resolution and practical challenges in deploying IBN in production environments, with the goal of making intent-driven networks both expressive and provably secure.

#### Related Work

- *Multi-Intent Challenges in Intent-Based Networking* — Under Review, IEEE NetSoft 2026
