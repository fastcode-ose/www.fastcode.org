---
layout: layouts/page.njk
sidebar: toc
title: Join the SPE instructors community
tagline: Share ideas and resources for teaching SPE to your students.
eleventyComputed:
  eleventyNavigation:
    parent: Get involved
    key: Instructors community
    order: 3
tags:
  get_involved
---

# Welcome

{% img "/img/cel-learn-spe.png", "500px" %}

Whether you're curious about teaching your first-ever performance-engineering module or wanting to share the success of an existing SPE class, you are welcome to join Fastcode's SPE instructors community.

# Helpful resources

### For starters

Take a look at this post by John Owens, "[My experience teaching software performance engineering](https://fastcode.substack.com/p/my-experience-teaching-software-performance)," about adapting [MIT 6.106](#mit) to create his own [SPE class at UC Davis](#uc-davis). John also coauthored this paper, "[Helping faculty teach software performance engineering](https://escholarship.org/uc/item/2fj7x89s)," published at [EduPar-24](https://tcpp.cs.gsu.edu/curriculum/?q=edupar24). EduPar and its sibling workshop EduHPC (held annualy at IPDPS and SC, respectively) are organized through [CDER](https://tcpp.cs.gsu.edu/curriculum/?q=node/21183), which develops and curates many useful resources for teaching parallel and distributed computing. 

{% alert "note", "Check it out!" %}
The [Get started with SPE](/about/get-started-spe) page includes lots of resources to help you learn, do, and teach SPE.
{% endalert %}

To help you develop your own course or module on SPE, below is an incomplete list of relevant classes and workshops. Each listing includes links to lecture PDFs and sometimes videos.

Do you have your own class or module to add to our list? Please [let us know](/get-involved/contact/).

### For community members

When you join the Fastcode instructors community, you get access to editable slide decks and LaTeX documents, and you are welcome to join SPE-instructor discussions to share ideas and questions with like-minded faculty.

{% alert "note", "To join the Fastcode instructors community" %}
[Sign up here](/get-involved/instructors/join/)!
{% endalert %}

# List of classes and workshops

## UC Berkeley

#### [CS267](https://sites.google.com/lbl.gov/cs267-spr2024): Applications of Parallel Computers

CS267 was originally designed to teach students how to program parallel computers to efficiently solve challenging problems in science and engineering, where very fast computers are required either to perform complex simulations or to analyze enormous datasets.... While this general outline remains, a large change in the computing world started in the mid 2000's: not only are the fastest computers parallel, but nearly all computers are becoming parallel.... Students in CS267 will get an overview of the parallel architecture space, gain experience using some of the most popular parallel programming tools, and be exposed to a number of open research questions.

## Cornell

#### [CS 5220](https://www.cs.cornell.edu/courses/cs5220/2024fa/schedule.html): Applications of Parallel Computers

CS 5220 is an introduction to performance tuning and parallelization, particularly for scientific codes. Topics include:
* Single-processor architecture, caches, and serial performance tuning
* Basics of parallel machine organization
* Distributed memory programming with MPI
* Shared memory programming with OpenMP
* Parallel patterns: data partitioning, synchronization, and load balancing
* Examples of parallel numerical algorithms
* Applications from science and engineering

## CMU

#### [15-418/15-618](https://www.cs.cmu.edu/~15418/schedule.html): Parallel Computer Architecture and Programming

 From smart phones, to multi-core CPUs and GPUs, to the world's largest supercomputers, parallel processing is ubiquitous in modern computing. The goal of this course is to provide a deep understanding of the fundamental principles and engineering trade-offs involved in designing modern parallel computing systems as well as to teach parallel programming techniques necessary to effectively utilize these machines. Because writing good parallel programs requires an understanding of key machine performance characteristics, this course will cover hardware design and how that affects software design.


## UC Davis 

#### EEC 289Q: Performance Engineering of Software Systems
Hands-on, project-based introduction to building scalable and high-performance software systems.
Topics include performance analysis, algorithmic techniques for high performance, instruction-level
optimizations, caching optimizations, parallel programming, and building scalable systems. The course
programming language is C. Links to lecture slides are below.

1. Intro and Matrix Multiplication ([PDF](https://ucdavis.box.com/s/lqbbzplf7cjo1dnxi8hon2pkjigest7n))
2. Bentley Rules for Optimizing Work ([PDF](https://ucdavis.box.com/s/7asxi08fobekk6e1pkoo5r7zuyjrktrw))
3. Bit Hacks ([PDF](https://ucdavis.box.com/s/xd10fgi2aslmjiv67q9uajuvh0srfvo8))
4. Computer Architecture ([PDF](https://ucdavis.box.com/s/itjn1m2cu5czh4qhz5doin4bpbx0f515))
5. C to Assembly ([PDF](https://ucdavis.box.com/s/n6nvroi4gyk2j0lswcn35eqp81g95bny))
6. What Compilers Can and Cannot Do ([PDF](https://ucdavis.box.com/s/l9bq9sfkvl6oah88tpzio4hxsvqkmwp7))
7. Multicore Programming ([PDF](https://ucdavis.box.com/s/hmc5zjo8bnojke8svj5gedyxgveuzh6r))
8. Races and Parallelism ([PDF](https://ucdavis.box.com/s/h8z91f2t23qhpa976hbt4bnaf972avir))
9. Analysis of Parallel Algorithms I ([PDF](https://ucdavis.box.com/s/o45xbyoaenzvcww8o0eb4v2o3dg3e9as))
10. Analysis of Parallel Algorithms II ([PDF](https://ucdavis.box.com/s/etxfwg2l50gqxd40ydk0p8nnpxs9e6z4))
11. Measurement and Timing ([PDF](https://ucdavis.box.com/s/aplokuj304hzc2qmdbp4w9auo7kb8uct))
12. Cheetah -- Cilk Runtime ([PDF](https://ucdavis.box.com/s/6eb956s19hair2awfborukl1uk3rsvsz))
13. Storage Allocation ([PDF](https://ucdavis.box.com/s/eb05vbh9ldem2txtmvbm7ov5r1xpxowz))
14. Parallel Storage Allocation ([PDF](https://ucdavis.box.com/s/vbpz9zgc3qbbd34808wpjc88y77j9bo5))
15. Cache-Efficient Algorithms ([PDF](https://ucdavis.box.com/s/11ojllbna5yfdvscm386vg4ne1nr2w17))
16. Cache-Oblivious Algorithms ([PDF](https://ucdavis.box.com/s/2g6m7ztsj71w34j7m1u4x8dlm29h8x0e))
17. Nondeterministic Parallel Programming ([PDF](https://ucdavis.box.com/s/8abgpbd67b35d8i2a2piflav2crndszs))
18. Synchronization without Locks ([PDF](https://ucdavis.box.com/s/dohev283rm0p7iwtlclu849iigdhrrkj))
19. Potpourri ([PDF](https://ucdavis.box.com/s/a98i1k7c70jg3tw9wdw9kj7xsexbgifx))
20. Speculative Parallelism ([PDF](https://ucdavis.box.com/s/7px55i4u01kgem0xtq384aenmjm6u23y))

## IIT Dharwad
#### [CS601](https://hegden.github.io/cs601/) Software Development for Scientific Computing
This course focuses on software development skills in the context of dominant algorithmic patterns found in scientific computing. Topics include:
* Exploring tools that cross most disciplines (build tools, version control tools, compilers, debugging tools, profiling tools etc.)
* Exploring dominant algorithmic patterns found in dense and sparse linear algebra, structured and unstructured grid methods, tree-based codes, particle methods, FFTs, and PDEs
* Selected topics in C++ programming, asymptotic analysis, perfomance tuning


## GaTech
#### [CSE 6220/CX 4220](https://sites.gatech.edu/cse6220fall24/) Introduction to High Performance Computing
This course will provide a comprehensive introduction to parallel algorithms and parallel programming, with strong emphasis on the design of parallel algorithms and their rigorous analysis. Exposure to parallel programming is provided through programming assignments using MPI. Throughout the course, the design of algorithms is interlaced with the programming techniques useful in coding them.

#### [CSE 6230](https://sites.gatech.edu/cse6230spring24/) HPC Tools and Applications
This course teaches hands-on practical performance engineering on high-performance computer systems, starting with single-processor multicore platforms up to large-scale distributed systems. Topics include cache-friendly algorithm analysis and implementation, parallel programming, concurrent data structures, tools for effective performance engineering, and modern high-performance computing (HPC) applications.

## Johns Hopkins
#### [EN 601.420/620](http://parallel.cs.jhu.edu/schedule2024.html) Parallel Computing for Data Science
This course studies parallelism in data science, drawing examples from data analytics, statistical programming, and machine learning. It focuses mostly on the Python programming ecosystem, but we will use C/C++ to accelerate Python and Java to explore shared-memory threading. It explores parallelism at all levels, including instruction level parallelism (pipelining and vectorization), shared-memory multicore, and distributed computing. Concepts from computer architecture and operating systems will be developed in support of parallelism, including Moore’s law, the memory hierarchy, caching, processes/threads, and concurrency control. The course will cover modern data-parallel programming frameworks, including Dask, Spark, Hadoop!, and Ray. The course will not cover GPU deep-learning frameworks nor CUDA. The course is suitable for second-year undergraduate CS majors and graduate students from other science and engineering disciplines that have prior programming experience.

## Michigan State
#### [CSE 491](https://software-performance-engineering.github.io/spring25/) Software Performance Engineering
This course provides a hands-on, project-based introduction to building scalable and high-performance software systems. We aim to convey both:
* First-principles understanding: why do modern computer architectures look the way they do?
* Hands-on experience: how do we write fast code for these platforms in practice?

## MIT 
#### [6.106](https://ocw.mit.edu/courses/6-172-performance-engineering-of-software-systems-fall-2018/) Performance Engineering of Software Systems
6.106 (formerly 6.172) is an 18-unit class that provides a hands-on, project-based introduction to building scalable and high-performance software systems. Topics include performance analysis, algorithmic techniques for high performance, instruction-level optimizations, caching optimizations, parallel programming, and building scalable systems. The course programming language is C. Links to lectures are below.

{% alert "note" %}
See [Modern Algorithms Workshop](#modern-algorithms-workshop:-parallel-algorithms) for a one-day workshop by the some of the key people behind MIT 6.106.
{% endalert %}

1. Introduction & Matrix Multiplication ([PDF](https://ocw.mit.edu/courses/6-172-performance-engineering-of-software-systems-fall-2018/resources/mit6_172f18_lec1/), [video](https://ocw.mit.edu/courses/6-172-performance-engineering-of-software-systems-fall-2018/resources/lecture-1-intro-and-matrix-multiplication/))
1. Bentley Rules for Optimizing Work ([PDF](https://ocw.mit.edu/courses/6-172-performance-engineering-of-software-systems-fall-2018/resources/mit6_172f18_lec2/), [video](https://ocw.mit.edu/courses/6-172-performance-engineering-of-software-systems-fall-2018/resources/lecture-2-bentley-rules-for-optimizing-work/))
1. Bit Hacks ([PDF](https://ocw.mit.edu/courses/6-172-performance-engineering-of-software-systems-fall-2018/resources/mit6_172f18_lec3/), [video](https://ocw.mit.edu/courses/6-172-performance-engineering-of-software-systems-fall-2018/resources/lecture-3-bit-hacks/))
1. Assembly Language and Computer Architecture ([PDF](https://ocw.mit.edu/courses/6-172-performance-engineering-of-software-systems-fall-2018/resources/mit6_172f18_lec4/), [video](https://ocw.mit.edu/courses/6-172-performance-engineering-of-software-systems-fall-2018/resources/lecture-4-assembly-language-computer-architecture/))
1. C to Assembly ([PDF](https://ocw.mit.edu/courses/6-172-performance-engineering-of-software-systems-fall-2018/resources/mit6_172f18_lec5/), [video](https://ocw.mit.edu/courses/6-172-performance-engineering-of-software-systems-fall-2018/resources/lecture-5-c-to-assembly/))
1. Multicore Programming ([PDF](https://ocw.mit.edu/courses/6-172-performance-engineering-of-software-systems-fall-2018/resources/mit6_172f18_lec6/), [video](https://ocw.mit.edu/courses/6-172-performance-engineering-of-software-systems-fall-2018/resources/lecture-6-multicore-programming/))
1. Races and Parallelism ([PDF](https://ocw.mit.edu/courses/6-172-performance-engineering-of-software-systems-fall-2018/resources/mit6_172f18_lec7/), [video](https://ocw.mit.edu/courses/6-172-performance-engineering-of-software-systems-fall-2018/resources/lecture-7-races-and-parallelism/))
1. Analysis of Multithreaded Algorithms ([PDF](https://ocw.mit.edu/courses/6-172-performance-engineering-of-software-systems-fall-2018/resources/mit6_172f18_lec8/), [video](https://ocw.mit.edu/courses/6-172-performance-engineering-of-software-systems-fall-2018/resources/lecture-8-analysis-of-multithreaded-algorithms/))
1. What Compilers Can and Cannot Do ([PDF](https://ocw.mit.edu/courses/6-172-performance-engineering-of-software-systems-fall-2018/resources/mit6_172f18_lec9/), [video](https://ocw.mit.edu/courses/6-172-performance-engineering-of-software-systems-fall-2018/resources/lecture-9-what-compilers-can-and-cannot-do/))
1. Measurement and Timing ([PDF](https://ocw.mit.edu/courses/6-172-performance-engineering-of-software-systems-fall-2018/resources/mit6_172f18_lec10/), [video](https://ocw.mit.edu/courses/6-172-performance-engineering-of-software-systems-fall-2018/resources/lecture-10-measurement-and-timing/))
1. Storage Allocation ([PDF](https://ocw.mit.edu/courses/6-172-performance-engineering-of-software-systems-fall-2018/resources/mit6_172f18_lec11/), [video](https://ocw.mit.edu/courses/6-172-performance-engineering-of-software-systems-fall-2018/resources/lecture-11-storage-allocation/))
1. Parallel Storage Allocation ([PDF](https://ocw.mit.edu/courses/6-172-performance-engineering-of-software-systems-fall-2018/resources/mit6_172f18_lec12/), [video](https://ocw.mit.edu/courses/6-172-performance-engineering-of-software-systems-fall-2018/resources/lecture-12-parallel-storage-allocation/))
1. The Cilk Runtime System ([PDF](https://ocw.mit.edu/courses/6-172-performance-engineering-of-software-systems-fall-2018/resources/mit6_172f18_lec13/), [video](https://ocw.mit.edu/courses/6-172-performance-engineering-of-software-systems-fall-2018/resources/lecture-13-the-cilk-runtime-system/))
1. Caching and Cache-Efficient Algorithms ([PDF](https://ocw.mit.edu/courses/6-172-performance-engineering-of-software-systems-fall-2018/resources/mit6_172f18_lec14/), [video](https://ocw.mit.edu/courses/6-172-performance-engineering-of-software-systems-fall-2018/resources/lecture-14-caching-and-cache-efficient-algorithms/))
1. Cache-Oblivious Algorithms ([PDF](https://ocw.mit.edu/courses/6-172-performance-engineering-of-software-systems-fall-2018/resources/mit6_172f18_lec15/), [video](https://ocw.mit.edu/courses/6-172-performance-engineering-of-software-systems-fall-2018/resources/lecture-15-cache-oblivious-algorithms/))
1. Nondeterministic Parallel Programming ([PDF](https://ocw.mit.edu/courses/6-172-performance-engineering-of-software-systems-fall-2018/resources/mit6_172f18_lec16/), [video](https://ocw.mit.edu/courses/6-172-performance-engineering-of-software-systems-fall-2018/resources/lecture-16-nondeterministic-parallel-programming/))
1. Synchronization Without Locks ([PDF](https://ocw.mit.edu/courses/6-172-performance-engineering-of-software-systems-fall-2018/resources/mit6_172f18_lec17/), [video](https://ocw.mit.edu/courses/6-172-performance-engineering-of-software-systems-fall-2018/resources/lecture-17-synchronization-without-locks/))
1. Domain Specific Languages and Autotuning ([PDF](https://ocw.mit.edu/courses/6-172-performance-engineering-of-software-systems-fall-2018/resources/mit6_172f18_lec18/), [video](https://ocw.mit.edu/courses/6-172-performance-engineering-of-software-systems-fall-2018/resources/lecture-18-domain-specific-languages-and-autotuning/))
1. Leiserchess Codewalk ([PDF](https://ocw.mit.edu/courses/6-172-performance-engineering-of-software-systems-fall-2018/resources/mit6_172f18_lec19/), [video](https://ocw.mit.edu/courses/6-172-performance-engineering-of-software-systems-fall-2018/resources/lecture-19-leiserchess-codewalk/))
1. Speculative Parallelism & Leiserchess ([PDF](https://ocw.mit.edu/courses/6-172-performance-engineering-of-software-systems-fall-2018/resources/mit6_172f18_lec20/), [video](https://ocw.mit.edu/courses/6-172-performance-engineering-of-software-systems-fall-2018/resources/lecture-20-speculative-parallelism-leiserchess/))
1. Tuning a TSP Algorithm ([PDF](https://ocw.mit.edu/courses/6-172-performance-engineering-of-software-systems-fall-2018/resources/mit6_172f18_lec21/), [video](https://ocw.mit.edu/courses/6-172-performance-engineering-of-software-systems-fall-2018/resources/lecture-21-tuning-a-tsp-algorithm/))
1. Graph Optimization ([PDF](https://ocw.mit.edu/courses/6-172-performance-engineering-of-software-systems-fall-2018/resources/mit6_172f18_lec22/), [video](https://ocw.mit.edu/courses/6-172-performance-engineering-of-software-systems-fall-2018/resources/lecture-22-graph-optimization/))
1. High Performance in Dynamic Languages ([PDF](https://ocw.mit.edu/courses/6-172-performance-engineering-of-software-systems-fall-2018/resources/mit6_172f18_lec23/), [video](https://ocw.mit.edu/courses/6-172-performance-engineering-of-software-systems-fall-2018/resources/lecture-23-high-performance-in-dynamic-languages/))

#### Modern Algorithms Workshop: Parallel Algorithms
Originally created in 2018 as a single full-day class, this workshop includes an introduction and 8 separate modules listed below.

- Introduction ([PDF](https://ucdavis.box.com/s/8fhamacjnflkrlf8zfpkd2w6k8y9nh1n))
- Cilk model ([PDF](https://ucdavis.box.com/s/dpth16i82wfj1hos846id9jlrlyghiks))
- Detecting nondeterminism ([PDF](https://ucdavis.box.com/s/wp28q6ixdg9awsm5ffk7aee7py6zzl1d))
- What Is parallelism? ([PDF](https://ucdavis.box.com/s/zjq7henchsbtxss1piz48qa22p0cvtkr))
- Scheduling theory primer ([PDF](https://ucdavis.box.com/s/29jdmgjamnl1oa1umswvitx2i11gxn0p))
- Analysis of parallel loops ([PDF](https://ucdavis.box.com/s/zja591gt7riw8fj3rv367jzx8odbxeag))
- Case study: matrix multiplication ([PDF](https://ucdavis.box.com/s/v6iydl9hgk8evewihjngyd6i8fkvq95i))
- Case study: Jaccard similarity ([PDF](https://ucdavis.box.com/s/1dtmh0m6w080f4tcnial1qdfgla73udg))
- Post-Moore software ([PDF](https://ucdavis.box.com/s/35umq7ysmjjl1pq4u39zf7nhrlpsb43x))

## WashU
#### [CSE 539](https://www.cse.wustl.edu/~angelee/cse539/index.html) Concepts in Multicore Computing
Nowadays, the vast majority of computer systems are built using multicore processor chips. This fundamental shift in hardware design impacts all areas of computer science -- one must write parallel programs in order to unlock the computational power provided by modern hardware. The goal of this course is to study concepts in multicore computing. We will examine the implications of the multicore hardware design, discuss challenges in writing high performance software, and study emerging technologies relevant to developing software for multicore systems. Topics include memory hierarchy, cache coherence protocol, memory models, scheduling, high-level parallel language models, concurrent programming (synchronization and concurrent data structures), algorithms for debugging parallel software, and performance analysis.

[Join the Fastcode instructors community](/get-involved/instructors/join/) for access to editable slide decks.