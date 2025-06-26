---
layout: layouts/page.njk
sidebar: toc
title: HPX -- a C++ library for parallelism and concurrency
#tagline: Tagline.
eleventyComputed:
  eleventyNavigation:
    parent: IEEE HPEC '25
    key: HPX
    order: 3
---

## Hartmut Kaiser, LSU

## Abstract

With the advent of modern computer architectures characterized by -- amongst other things -- many-core nodes, deep and complex memory hierarchies, heterogeneous subsystems, and power-aware components, it is becoming increasingly difficult to achieve best possible application scalability and satisfactory parallel efficiency. The community is experimenting with new programming models that rely on finer-grain parallelism, and flexible and lightweight synchronization, combined with work-queue-based, message-driven computation. The recently growing interest in the C++ programming language in industry and in the wider community increases the demand for libraries implementing those programming models for the language.

In this talk, we present HPX -- A C++ Standards Library for Parallelism and Concurrency that is built around lightweight tasks and mechanisms to orchestrate massively parallel (and -- if needed -- distributed) execution. We also implement a full set of standard parallel algorithms and related asynchronous extensions to those. The library enables an asynchronous execution model that uses the concept of (Standard C++) futures to make data dependencies explicit, employs explicit and implicit asynchrony to hide latencies and to improve utilization, and manages finer-grain parallelism with a work-stealing scheduling system enabling automatic load balancing of tasks. Lately we have been experimenting with the new sender/receiver model that is currently being discussed as part of the C++ standardization process.

HPX is a C++ library exposing a higher-level parallelism API that is fully conforming to the existing C++11/14/17/20 standards and is aligned with the ongoing standardization work. This API and programming model has shown to enable writing highly efficient parallel applications for heterogeneous resources with excellent performance and scaling characteristics. This talk will highlight the implemented extensions to the C++ standard parallel algorithms and shows recent performance results.

## Bio

Hartmut is a professor at Louisiana State University. He is probably best known for his involvement in open-source software projects, such as being the author of several C++ libraries he has contributed to Boost that are in use by thousands of developers worldwide. In his current research he focusses on leading the STE||AR Group at LSU’s Center for Computation and Technology working on the practical design and implementation of future execution models and programming methods using the HPX runtime system - a modern C++ library for concurrency and parallelism. His research interests are focused on the complex interaction of compiler technologies, runtime systems, active libraries, and modern system’s architectures. His goal is to enable the creation of a new generation of scientific applications in powerful, though complex environments, such as high-performance computing, distributed and cloud computing, spatial information systems, and compiler technologies.
