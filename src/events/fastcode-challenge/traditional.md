---
layout: layouts/page.njk
sidebar: toc
title: Problem-Solving Track
tagline: Tagline.
permalink: /events/fastcode-challenge/traditional/
eleventyComputed:
  eleventyNavigation:
    parent: Fastcode Challenge
    key: Traditional
    order: 99
---

# FastCode Programming Challenge (FCPC25)

The **FastCode Programming Challenge** aims to push participants to optimize multicore code for high-performance computing applications. Participants will solve two fundamental problems—**Breadth-First Search (BFS)** and **Single Source Shortest Path (SSSP)**—designed to test skills in developing efficient, cache-friendly, and scalable algorithms. 

This competition emphasizes **software performance engineering** on multicore architectures. Participants will leverage parallel computing techniques, and scoring will be based on processing efficiency, measured by the speed (edges processed per second) across diverse graph datasets. Competitors will need to refine their solutions for both high- and low-diameter graphs, carefully balancing memory access patterns, load distribution, and scalability to achieve peak performance.

## Time & Location

* **Competition**: November 2024 \- February 2025, online at [speedcode.org](https://speedcode.org)  
* **Workshop**: March 2, 2025, at The Westin Las Vegas Hotel & Spa, Las Vegas, NV, USA (affiliated with PPoPP’25)

## Problem Descriptions

### Problem 1: Breadth-First Search (BFS)

* **Objective**: Given a graph, perform a BFS traversal starting from a specified source node and compute the shortest (unweighted) distance from the source to each reachable node.  
* **Input Format**:  
  * **Graph Representation**: The graph is provided in Compressed Sparse Row (CSR) format, a compact representation that stores edge data efficiently in memory.  
  * **Source Node**: A single integer representing the starting node for BFS traversal.  
  * **Distance Array**: An array of integers, initialized to `MAX_DISTANCE` for all nodes. This array will be updated to store the shortest path (in terms of the number of edges) from the source node to each other node.   
* **Expected Output**:  
  * The modified distance array with the shortest path lengths from the source node to each reachable node, in terms of edge count. Unreachable nodes should retain the initial `MAX_DISTANCE` value.

### Problem 2: Single Source Shortest Path (SSSP)

* **Objective**: Compute the shortest path distances from a given source node to all other nodes in a graph with weighted edges.  
* **Input Format**:  
  * **Graph Representation**: As with BFS, the graph will be in CSR format, but with an additional array to store edge weights.  
  * **Source Node**: A single integer representing the starting node.  
  * **Distance Array**: Similar to BFS, the distance array is initialized to `MAX_DISTANCE` for all nodes. Participants should update this array to store the minimum distance from the source node to each other node based on edge weights.  
* **Expected Output**:  
  * The modified distance array where each element represents the shortest path distance from the source to that node, using edge weights. Unreachable nodes should retain `MAX_DISTANCE`.

## Dataset Diversity

* Datasets will be selected from a variety of domains and structures to test robustness and adaptability of the solutions. These datasets may vary in the following ways:  
  * **Domains**: Social networks, web graphs, computational biology, road networks, k-nearest neighbors (KNN) graphs as well as some synthetic graphs.  
  * **Graph Characteristics**:   
    * Variations in diameter, including small- and large-diameter graphs.  
    * Diverse weight distributions and ranges for the weighted graphs in SSSP.

## Evaluation and Scoring

* **Primary Scoring Metric**:  
  * **Edges Processed per Second**: The primary score will be calculated as the geometric mean of the number of edges processed per second across all datasets. This metric ensures that solutions are evaluated fairly across graphs of varying sizes, densities, and diameters.  
* **Bonus Prizes for Specialized Excellence**:  
  * Prizes will also be awarded to participants who demonstrate **exceptional performance** on specific categories:  
    * **Low-Diameter Graphs**: Top scores on datasets with low diameters.  
    * **High-Diameter Graphs**: Top scores on datasets with high diameters.  
  * These bonus prizes are intended to recognize outstanding optimizations targeted to specific graph characteristics, encouraging innovative approaches for various scenarios within software performance engineering.  
* **Bonus Prize for Large Scale Solution**  
  * The solutions will be run on a few much bigger graphs on a much larger server and solutions that perform will in this environment will be eligible for a special award   
  * The code will be executed on a machine with 96 cores (196 hyperthreads), xx memory, and xxx \[add the description for the machine\]. The final tested graph may have up to xx vertices and edges, with float edge weights.  
* **Bonus Prize for excellent papers** (Described below) 

## Infrastructure and Code Requirements

### Programming Language

* All submissions must be written in **C++**.

### Execution Environment

* **Platform**: The competition will be run on the **Speedcode platform**, which provides a standardized environment for evaluating and benchmarking submissions.  
  * **CPU Cores**: 8 cores available for parallel execution.  
  * **Memory**: 32 GB of RAM.  
* **Parallelization**: Participants may use **Cilk** or **OpenMP** for parallelization. Solutions are encouraged to leverage parallel computing techniques where appropriate to optimize performance.  
* Solutions must operate fully in memory, with no disk or external memory usage during execution.  
* No preprocessing of the graph can be done before the timer is started

### Allowed Libraries

* **Standard Library**: The standard template library is permitted.  
* **Additional Libraries**:  
  * **ParlayLib**: [ParlayLib on GitHub](https://github.com/cmuparlay/parlaylib) – A library designed for parallel algorithms and data structures.  
  * **Abseil (absl)**: [Abseil on GitHub](https://github.com/abseil/abseil-cpp) – Provides common utilities such as containers, algorithms, and synchronization primitives.  
  * **Boost**: [Boost Libraries](https://www.boost.org/) – A collection of portable and widely used C++ libraries.  
* **Additional Library Requests**: Participants may request approval to use other libraries, which will be evaluated on a case-by-case basis.

## Additional Rules 

* **Submission Requirements**:To be considered as an award winner, the participant(s) are required to submit a workshop paper (described below) and open-source their code.   
* **Team Structure**: Participants can compete in teams of at most two people. There can be more authors in the workshop paper (e.g., including faculty members who help with paper writing). 

## Workshop Papers and Talks

**All submissions must include a workshop paper to be considered for prizes and awards.** The papers will be peer-reviewed separately from the code submissions. Accepted papers will be included as FCPC’25 workshop papers, published along with the PPoPP proceedings at ACM Digital Library. 

The paper will be reviewed independently as short workshop papers. Performance of the code will be considered, but more criteria about paper writing will be considered, including clarity, novelty, formalization, simplicity/elegance/generality of methodology, etc. Even though performance may not be at the top among all participants, a paper may still be accepted if it contains significant technical and scientific contributions.

Some examples include but are not limited to:

* The paper provides an interesting/novel technique that improves performance on a certain type of graphs   
* The paper presents a nice framework/general methodology for this problem  
* The paper includes a detailed and in-depth experimental study

All first, second and third prize winners will be invited to give talks, regardless of paper acceptance. Rejected papers may be considered as posters. 

There will be invited keynote talks at the workshop. The list of speakers will be available soon. 

## Problem Background

### Parallel Breadth-First Search

#### Background 

Most of the state-of-the-art parallel BFS implementations are under a frontier-based framework. Starting from a source *s*, the algorithm will visit all the 1-hop neighbors of *s* in parallel, storing them in the first *frontier* *F*1. In the subsequent rounds, we will always visit all vertices in the current frontier *F*i, and generate the next frontier *F*i+1 by finding all unvisited neighbors for all vertices in the current frontier *F*i. This process is repeated until all vertices have been visited. A simple pseudocode is shown below:

![][image1]

In this case, all the *i*\-hop neighbors of *s* will be visited in parallel in round *i*. The rounds are performed one after the other. 

To update the *visited* array while avoiding duplicates, an atomic operation *compare\_and\_swap* is usually used.

#### Challenges

One inherent challenge in parallel BFS is to achieve parallelism on large-diameter graphs. The frontier-based framework will proceed in *D* rounds, where *D* is the farthest hop distance from any vertex to the source (or roughly, the diameter of the graph). On very sparse graphs with large diameters, the number of rounds can be large, and between them, a global synchronization for all threads is needed. 

Some theoretical results focus on using shortcuts or hopset-based ideas to achieve provable low span, but this usually increases work and it remains unknown whether they can be practical. 

#### Existing Optimizations

A common optimization for parallel BFS is called directional optimization \[1\]. When the frontier size is large, instead of generating the next frontier from the current frontier, one can simply process all vertices in parallel, and determine if one of their in-neighbors is in the current frontier. If so, they are added to the next frontier, and all the rest of the neighbors can be skipped. Such a “pull” version of frontier generation may allow for better cache locality, as well as a simpler frontier representation using just bit-flags. On dense graphs such as social networks, existing results show that this optimization is very effective in improving performance by saving work \- the running time of the parallel algorithm on one core can be faster than the standard queue-based sequential solution. 

A recently developed optimization to overcome the low parallelism on large-diameter graphs is vertical granularity control \[2\]. The idea here is a bit sophisticated and we refer the contestant to read the paper for details. The high-level idea is to explore multiple hops in one round, so that it makes much fewer rounds to finish BFS.  The approach allocates a small “buffer” of size k for each visited vertex in the frontier in the stack memory (invisible from other processors), and does a mini-BFS in the buffer.  Once sufficient work is done (either visiting a fixed number of vertices or edges), the rest of the vertices will be flushed to the next frontier.  Note that in this implementation, a vertex might be visited multiple times, so this technique is inherently a work-parallelism trade-off.

Parallel Single-Source Shortest Paths (SSSP)

BFS can compute unweighted SSSP.  The general SSSP on weighted graphs is strictly harder.  Sequentially, the classic solutions include Dijkstra’s algorithm, Bellman-Ford, and more.  In most real-world instances, Dijkstra is usually the most efficient.  However, Dijkstra is a greedy algorithm, and it visits one vertex at a time, which is inherently sequential.  

There exist parallel SSSP algorithms, which are generally referred to as the stepping algorithms \[3\].  
is notoriously hard both in theory and in practice. In general, SSSP is harder to solve than BFS, since a BFS can be viewed as unweighted version of SSSP. We are also not aware of a work-efficient algorithm with sublinear span. 

#### Useful References:

\[1\] “Direction-Optimizing Breadth-First Search” by Scott Beamer, Krste Asanovic, David Patterson  
\[2\] “PASGAL: Parallel And Scalable Graph Algorithm Library” by Xiaojun Dong, Yan Gu, Yihan Sun, and Letong Wang  
\[3\] “Efficient Stepping Algorithms and Implementations for Parallel Shortest Paths” by Xiaojun Dong, Yan Gu, Yihan Sun, and Yunming Zhang

## Organizers and Sponsors

The Fastcode Challenge is mainly organized and sponsored by the Fastcode Community (initiated by the OpenCilk team), which is an open-source community dedicated to advancing software performance engineering. The OpenCilk team provides support through the speedcode.org platform with an interactive interface for participants to debug and test their code. 

The Fastcode community is supported by NSF funding.

## Organizing committee

Organizing Chair: Yihan Sun, UC Riverside

Technique Support 

- Tim Kaler, MIT  
- Xuhao Chen, MIT

Problem Setting Committee:

- (Chair) Brian Wheatman, University of Chicago  
- Xiaojun Dong, UC Riverside  
- Youzhe Liu, UC Riverside

Publicity Committee

- Bruce Hoppe, MIT  
- Yan Gu, UC Riverside

Paper Review and Publication Committee

- (Chair) Roberto Palmieri, Lehigh University  
- (Chair) Lewis Tseng, UMass Lowell  
- More members TBD

If you have any questions, you can send an email to **Yihan Sun ([yihans@cs.ucr.edu](mailto:yihans@cs.ucr.edu)).** 

## FAQs
