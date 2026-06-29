---
sidebar: toc
title: Making room for algorithm innovation “at the top” -- the UpDown graph supercomputer
author: Andrew A Chien (UChicago) and David Gleich (Purdue)
tagline: Thursday, June 18, 2026 11AM ET
#zoomreg: https://mit.zoom.us/meeting/register/F6aQgO1iS92Cw2hPn6RBrQ
date: 2026-06-18
eleventyComputed:
  eleventyNavigation:
    parent: Seminar Archive
    key: A. Chien and D. Gleich on the UpDown graph supercomputer
    order: 87
---


## Abstract

Leiserson, et al. declared in 2020, “There’s plenty of room at the Top”.  But most accelerator architectures inhibit algorithmic innovation with their narrow customization and high-Q performance.  In contrast, [UpDown](https://people.cs.uchicago.edu/~aachien/lssg/research/10x10/) graph supercomputer is designed to support absolute performance as well as “top of stack” advances.  

UpDown supports fine-grained parallelism: 1-cycle thread creation and management, 1-cycle messages to enable efficient 10-100 instruction thread invocations.  Further, split-transaction DRAM access unlock the power of HBM’s massive memory bandwidth, while staying under software control.  A flexible map-reduce framework (KVMSR) and event-driven language (UDWeave) enable million-fold vertex and edge parallelism to be directly exploited and managed.  Adding a global address space and software control over reuse enables the UpDown system to supports good algorithms and data structures.  In many cases, programming complexity is comparable to multi-core systems (even for million-fold parallelism and supercomputer performance).

UpDown performance on skewed-graph computations is >100x (vs multicore CPU’s) and up to 60x (vs GPU).  Performance scales 10,000-fold on BFS, Pagerank, Triangle Count, and more.  UpDown’s K-truss implementation won an MIT Graph Challenge Innovation Award in 2025.  The UpDown system was created under IARPA’s AGILE program.  The UpDown system is being commercialized in a Chicago-based startup.

## Recording

https://mit.zoom.us/rec/share/7CIbMH7w2NBEnhC0sYjykFnDWocO3WtAl-qDM3FKyoySH9jyC_xPPSrmSm-kEDtq.V9eloa9vaGz9IsBl

## Bio

### Andrew A Chien

Andrew A Chien is the William Eckhardt Distinguished Service Professor of Computer Science at the University of Chicago and Senior Scientist at Argonne National Laboratories.  He has led the Zero-carbon Cloud project since 2015, and is known for his research on datacenters, renewable energy and sustainability, cloud resource management and software, large-scale system architecture, and graph computing architecture.  Chien is leader of the IARPA funded “UpDown System Project”, designing breakthrough scalable graph analytics systems.  Chien has received numerous recognitions for research.  Dr. Chien currently serves on the NSF CISE Advisory Committee and DARPA ISAT.  He is a Fellow of the ACM, IEEE, and AAAS.  He served as EiC of Communications of the ACM, 2017-2022, and Vice President of Research at Intel Corporation from 2005-2010.  He served as SAIC Chair Professor of University of California, San Diego  (1998-2005) and as faculty at the University of Illinois (1990-98).  He received BS, MS, and PhD degrees from the Massachusetts Institute of Technology.

### David Gleich

David Gleich is a Professor of Computer Science and University Faculty Scholar at Purdue University. His research develops novel models and fast algorithms for network science, graph algorithms, numerical linear algebra, and scientific computing. He has received a Sloan research fellow as well as a SIAM Outstanding Paper prize. Gleich is currently the editor in chief of SIAM Journal on Mathematics of Data Science and is also a section moderator for arXiv. He is a fellow of SIAM. He received a MS and PhD from Stanford University and a BS from Harvey Mudd College. 
