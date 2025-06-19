---
layout: layouts/page.njk
stylesheet: None
background: bg-white
sidebar: toc
title: Comparing task-parallel programming platforms for SPE
eleventyNavigation:
  key: Comparing SPE platforms
  parent: About
  order: 2
---


## INCOMPLETE ROUGH DRAFT

A good task-parallel programming platform will make it easier for you to do software performance engineering.

See this blog post for 6 questions to ask yourself when choosing a platform.


## Feature comparison


The following table is based on [A taxonomy of task-based parallel programming technologies for high-performance computing](https://link.springer.com/article/10.1007/s11227-018-2238-4) by Thoman et al. With the authors' permission, we present an updated version of their classification, slightly abridged to focus on shared memory architecture. Our table adds two platforms: OpenCilk and Taskflow. (OpenCilk replaces Cilk Plus in their classification, and Taskflow is new.)


<table class="table table-responsive table-bordered table-striped">
  <thead>
    <tr>
      <td scope="col"></td>
      <th scope="col" colspan="12" style="background-color: var(--pst-color-surface);"><h3>API Features</h3></th>
      <th scope="col" colspan="3"><h3>Runtime</h3></th>
    <tr>
    <tr>
      <th scope="col"><h3>Platform</h3></th>
      <th scope="col" style="background: rgba(145, 179, 0, 0.4); writing-mode: sideways-lr;"><h4>Communication Model</h4></th>
      <th scope="col" style="background: rgba(145, 179, 0, 0.4); writing-mode: sideways-lr;"><h4>Distributed Memory</h4></th>
      <th scope="col" style="background: rgba(145, 179, 0, 0.4); writing-mode: sideways-lr;"><h4>Heterogeneity</h4></th>
      <th scope="col" style="background: rgba(244, 69, 0, 0.3); writing-mode: sideways-lr;"><h4>Graph Structure</h4></th>
      <th scope="col" style="background: rgba(244, 69, 0, 0.3); writing-mode: sideways-lr;"><h4>Task Partitioning</h4></th>
      <th scope="col" style="background: rgba(244, 69, 0, 0.3); writing-mode: sideways-lr;"><h4>Result Handling</h4></th>
      <th scope="col" style="background: rgba(4, 48, 100, 0.3); writing-mode: sideways-lr;"><h4>Worker Management</h4></th>
      <th scope="col" style="background: rgba(4, 48, 100, 0.3); writing-mode: sideways-lr;"><h4>Resilience Management</h4></th>
      <th scope="col" style="background: rgba(4, 48, 100, 0.3); writing-mode: sideways-lr;"><h4>Work Mapping</h4></th>
      <th scope="col" style="background: rgba(4, 48, 100, 0.3); writing-mode: sideways-lr;"><h4>Synchronization</h4></th>
      <th scope="col" style="background-color: var(--pst-color-on-surface); writing-mode: sideways-lr;"><h4>Technological Readiness</h4></th>
      <th scope="col" style="background-color: var(--pst-color-on-surface); writing-mode: sideways-lr;"><h4>Implementation Type</h4></th>
      <!-- <th scope="col" style="background: rgba(145, 179, 0, 0.4); writing-mode: sideways-lr;"><h4>Target Architecture</h4></th> -->
      <th scope="col" style="background: rgba(244, 69, 0, 0.3); writing-mode: sideways-lr;"><h4>Data Distribution</h4></th>
      <th scope="col" style="background: rgba(4, 48, 100, 0.3); writing-mode: sideways-lr;"><h4>Scheduling Methods (sm)</h4></th>
      <th scope="col" style="background-color: var(--pst-color-on-surface); writing-mode: sideways-lr;"><h4>Performance Monitoring</h4></th>
    </tr>
  </thead>
{% for item in parallel_prog_tech %}
  <tr>
    <th scope="row">{% if item.url %}<h5><a href="{{ item.url }}">{{ item.name }}</a></h5>{% else %}<h5>{{ item.name }}</h5>{% endif %}</th>
    <td><p>{{ item.comm_model }}</p></td>
    <td><p>{{ item.dist_mem }}</p></td>
    <td><p>{{ item.hetero }}</p></td>
    <td><p>{{ item.graph }}</p></td>
    <td><p>{{ item.task_part }}</p></td>
    <td><p>{{ item.result_hand }}</p></td>
    <td><p>{{ item.worker_mgmt }}</p></td>
    <td><p>{{ item.resilience }}</p></td>
    <td><p>{{ item.work_map }}</p></td>
    <td><p>{{ item.synchro }}</p></td>
    <td><p class="mx-2">{{ item.tech_ready }}</p></td>
    <td><p>{{ item.imp_type }}</p></td>
    <!-- <td><p>{{ item.target_arch }}</p></td> -->
    <td><p>{{ item.data_dist }}</p></td>
    <td><p>{{ item.scheduling }}</p></td>
    <td><p>{{ item.perf_mon }}</p></td>
  </tr>
{% endfor %}
</table>

**Table key:**
* Communication model: 
  - **sm** =  shared memory
  - **gas** = global address space
  - **msg** = message passing
* **auto** = the platform does this automatically
* **m** = you can manually do this with the platform
* **a/m** = both automatic and manual
* **ctfg**
* **ws** = work stealing
* **mult** = multiple (including work stealing)
* **off** = offline use of monitoring data
* **on** = online use of monitoring data

Technological readiness is measured according to [this scale](https://en.wikipedia.org/wiki/Technology_readiness_level).