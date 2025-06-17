---
sidebar: toc
title: Transforming High-Performance Libraries to Domain-Specific Languages and Optimizing Compilers with BuildIt
author: Saman Amarasinghe, MIT
tagline: Monday, April 14, 2025 4PM EDT
date: 2025-04-14
eleventyComputed:
  eleventyNavigation:
    parent: Seminar Archive
    key: Saman Amarasinghe on BuildIt
    order: 99
---

## Abstract

There are countless high-performance library implementations available for various domains and hardware platforms, yet Domain-Specific Languages (DSLs) and compilers remain rare. A well-designed DSL can express a far broader range of programs within a domain compared to even the most comprehensive library while also enabling domain-specific, global optimizations that go beyond hand-optimized kernels. The scarcity of high-performance DSLs stems from the complexity of building DSL compilers, which are typically large, intricate systems developed by experts.

In this talk, I will introduce **BuildIt**, a C++ framework designed for the rapid prototyping of high-performance DSLs. **BuildIt** uses a multi-stage programming approach to combine the flexibility of libraries with the performance and specialization of code generation. With **BuildIt**, domain experts can transform existing libraries into efficient, specialized compilers simply by modifying types of the variables. Moreover, it allows them to implement analyses and transformations without needing to write traditional compiler code. Currently, **BuildIt** supports code generation for multi-core CPUs and GPUs, with FPGA support coming soon. I will also showcase four DSLs created with **BuildIt** to highlight its power and ease of use: a reimplementation of the **GraphIt** graph computing language, the **BREeze** DSL for regular expressions, **StreamIt** a DSL for stream computing including PyTorch, and **NetBlocks**, a DSL for custom network protocol development. More information on **BuildIt** can be found at [https://buildit.so/](https://buildit.so/).

## Recording

https://mit.zoom.us/rec/share/W2i3StHGfhHeF0TvOgQ8Qe301jWXB9FS7NORT_KOKvlX4VmxeeE3nmvLtNi5lStE.BnPuCd1MQSSpzwOI

## Bio

Saman Amarasinghe is the Thomas and Gerd Perkins Professor in the Department of Electrical Engineering and Computer Science at the Massachusetts Institute of Technology and a member of the Computer Science and Artificial Intelligence Laboratory (CSAIL), where he leads the [Commit Compiler Group](https://commit.csail.mit.edu/). Under his leadership, the Commit group has developed a wide range of innovative programming languages and compilers, including StreamIt, StreamJIT, PetaBricks, Halide, TACO, Finch, SySTeC, GraphIt, Simit, MILK, Cimple, BioStream, NetBlocks, BREeze, CoLa, Shim, AskIt, and Seq. Additionally, the group has created compiler and runtime frameworks such as DynamoRIO, Helium, Tiramisu, Codon, BuildIt, and D2X as well as tools for vectorization like Superword Level Parallelism (SLP), goSLP, and VeGen. Saman’s team also developed Ithemal, a machine-learning-based performance predictor, Program Shepherding to protect programs from external attacks, the OpenTuner extendable autotuner, and the Kendo deterministic execution system. He was also co-leader of the [Raw architecture project](https://groups.csail.mit.edu/cag/raw/). Outside academia, Saman has co-founded several companies, including Determina, Lanka Internet Services Ltd., Venti Technologies, DataCebo, and Exaloop. He earned his BS in Electrical Engineering and Computer Science from Cornell University in 1988, and his MSEE and Ph.D. from Stanford University in 1990 and 1997, respectively. He is also a Fellow of the ACM.