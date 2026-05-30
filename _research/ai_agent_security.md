---
layout: page
title: Access Control & Security of AI Agents
description: Enforcing least-privilege and auditable access for LLM-based autonomous agents
img: assets/img/ai-agent-sec.svg
importance: 1
category: research
related_publications: false
---

{% include figure.liquid loading="eager" path="assets/img/ai-agent-sec.svg" class="img-fluid rounded z-depth-1 mb-4" alt="Abstract digital representation of an AI agent operating within a controlled access environment" %}

AI agents—systems where large language models (LLMs) are given tools, memory, and the ability to take autonomous actions—are rapidly moving from demos to production. These agents can browse the web, execute code, call APIs, manage files, and interact with cloud services on a user's behalf. But with this capability comes a fundamental security question: **what should an agent be allowed to do, and how do we enforce it?**

This project investigates the **access control and security challenges unique to LLM-based autonomous agents**. Unlike traditional software, agents operate under natural-language instructions that are ambiguous by design, making it difficult to statically bound their behavior or verify compliance with a security policy. Key questions we address include:

- How do current agent frameworks grant and manage permissions, and how often are those permissions over-provisioned?
- Can we apply least-privilege principles to agent tool use—constraining agents to only the permissions genuinely required for a given task?
- How do adversarial inputs (e.g., prompt injection) interact with access control boundaries, and what enforcement mechanisms are robust to them?
- What formal or automated methods can analyze agent-policy compliance before or during execution?

This work connects directly to our broader research on overprivilege in cloud and serverless systems, extending those principles to a new class of software where the principal is not a developer-defined function but a dynamically-reasoning language model.
