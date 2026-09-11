---
layout: page
title: Service
permalink: /service/
description: Academic service, mentoring, and community engagement
nav: true
nav_order: 5
---

<div class="projects">
  {% assign visible_service = site.service | where_exp: "item", "item.hidden != true" %}
  {% assign sorted_service = visible_service | sort: "importance" %}
  <div class="row row-cols-1 row-cols-md-3">
    {% for project in sorted_service %}
      {% include projects.liquid %}
    {% endfor %}
  </div>
</div>
