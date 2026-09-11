---
layout: page
title: Network Security
description: Securing network infrastructure against misconfiguration and conflicting policy across intent-driven and traditional network architectures
img: assets/img/network-sec.webp
importance: 3
category: research
related_publications: false
---

{% include figure.liquid loading="eager" path="assets/img/network-sec.webp" class="img-fluid rounded z-depth-1 mb-4" alt="Abstract geometric network nodes representing intent-based network topology" %}

Networks are governed by layers of policy — routing rules, firewall configurations, access controls — written by different operators, tenants, and services, often without full visibility into how those policies interact. This project studies **security in network infrastructure**, with a focus on how policy composition, automation, and abstraction can silently introduce misconfiguration and risk.

Key questions we address include:

- How do independently authored network policies interact, and when do those interactions become conflicts or security gaps?
- What formal models can capture policy composition and catch violations before deployment?
- How does abstraction in network configuration — from manual rules to higher-level automation — change the security guarantees operators can rely on?

One focus area within this project is **Intent-Based Networking (IBN)**, which lets operators express high-level goals — *intents* — that the network automatically translates into low-level configurations, rather than manually writing routing or firewall rules. Real-world networks must satisfy **multiple, potentially conflicting intents** from different operators, tenants, or services simultaneously; this *multi-intent problem* carries direct security implications, since conflicting intents can silently produce misconfigured network states or undermine security policies that each intent would individually enforce. We examine both the theoretical foundations of intent conflict resolution and the practical challenges of deploying IBN securely in production environments.
