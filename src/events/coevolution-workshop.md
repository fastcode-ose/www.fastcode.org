---
title: Workshop on Co-evolution of Algorithms, Compilers, and Hardware for Performance
tagline: A Fastcode workshop at PPoPP-26
author: J. Nelson Amaral
event_date: Jan 31, 2026
#reg_deadline: January 10, 2025
image: /img/fib-code-multicore.png
eleventyComputed:
  eleventyNavigation:
    key: Co-evolution Workshop
    parent: Events
    order: 3
tags:
  - events
---

{% imgLeft "/img/fastcode-coevolution.png", "600px" %}

{% alert "note", "CACHP is 8:45am-12:45pm Saturday, Jan 31, at PPoPP-26 in Sydney, Australia." %}
Workshop Schedule:
* Session 1
  - 08:45-09:15 Talk #1
  - 09:15-09:45 Talk #2
  - 09:45-10:30 Invited Talk
* 10:30-11:00 Break
* Session 2
  - 11:00-11:40 Invited Talk
  - 11:40-12:05 Talk #3
  - 12:05-12:30 Talk #4
  - 12:30-12:45 Closing Discussion

Congratulations to the authors of the following [contributed talks](#contributed-talks), accepted for CACHP-26:
* Efficient Hardware Primitives for Immediate Memory Reclamation in Optimistic Data Structures (A. Singh, T. Brown, and M. Spear)
* Adaptive Loop Unrolling for Automatic Parallelism Management (S.V. Satish and S. Westrick)
* Synthesizing Dist-Memory Mappings for Tensor Computations with Domain and Hardware Knowledge (M. Kong)
* Co-Design for Performance and Energy-Efficiency in modern AI paradigms (G. Cong)

{% endalert %}

The central idea behind Fastcode is that performance and efficient use of resources must remain a core focus of computing. Achieving these goals requires advances not only in algorithm design, but also in programming models, software construction, compilers, and hardware. Progress in one of these areas often influences and reshapes the others.  

For example, a new code pattern may first appear as a hand-crafted optimization by an expert programmer, then evolve into a portable compiler transformation, and eventually inspire changes in hardware architecture or system design. Such cross-pollination drives innovation, yet opportunities for the communities to engage in joint discussion remain limited.  

The Fastcode workshop aims to bring together researchers and practitioners to explore this co-evolution of algorithms, compilers, and hardware. We will focus on sharing insights across domains, identifying open problems, and fostering collaborations that advance performance engineering as a discipline.  

The workshop will be organized as a half-day event (approximately four hours). It will feature a mix of invited and contributed talks, complemented by a panel discussion. Talks will highlight recent advances as well as challenges that could shape the next generation of research. Importantly, the workshop emphasizes idea exchange rather than publication, so it does not require proceedings.  

PPoPP provides the ideal venue for this workshop. Parallel programming—the heart of PPoPP—is a driving force behind modern compiler and hardware research. Moreover, the co-location with CGO and HPCA naturally connects all three dimensions of the ecosystem that Fastcode seeks to address. We believe the workshop will be of strong interest not only to the PPoPP community but also to participants of the co-located conferences.  

# Planned Activities

## Invited talks

### Optimizing for the Edge: From Neural Compilation to Instruction Fusion in RISC‑V Systems

(By [Alexandra Jimborean](https://webs.um.es/alexandra.jimborean/miwiki/doku.php), University of Murcia)
Bringing neural networks and Transformers to RISC‑V edge devices demands both smarter compilers and architecture‑aware optimizations. This talk traces a path from high‑level graph compilation to low‑level instruction reordering, showing how a unified compiler stack can unlock efficiency across the computing stack. 
We begin with OML (ONNX‑MLIR‑LLVM), a portable compilation flow that automatically vectorizes deep learning operators through reduction detection and layout transformations—yielding performance gains on RISC‑V that match the ONNX-Runtime (ORT) manually tuned libraries. We then dive into CAIF (Compiler‑Assisted Instruction Fusion), a layout‑aware scheduler that reorders fusible operations to expose new hardware fusion opportunities, achieving close to 20% speed-up.
Together, these advances reveal how compiler–architecture co‑design—from graph to instruction stream—can make RISC‑V a competitive target for both neural and general‑purpose workloads.

### Dynamic HLS and Compiler IR

(By [Magnus Själander](https://www.ntnu.edu/employees/magnus.sjalander), Norwegian University of Science and Technology)
Details TBA.

## Contributed talks
We solicited proposals from the broader community and accepted the following four talks for presentation at CACHP-26:
    
### Efficient Hardware Primitives for Immediate Memory Reclamation in Optimistic Data Structures 
(By A. Singh, T. Brown, and M. Spear) Safe memory reclamation (SMR) algorithms are crucial for preventing use-after-free errors in optimistic
data structures. SMR algorithms typically delay reclamation for safety and reclaim objects in batches for efficiency. It is difficult to strike a balance between performance and space efficiency. Small batch sizes and frequent reclamation attempts lead to high overhead, while freeing large batches can lead to long program interruptions and high memory footprints. An ideal SMR algorithm would forgo batching, and reclaim memory immediately, without suffering high reclamation overheads. 
To this end, we propose Conditional Access: a set of hardware instructions that offer immediate
reclamation and low overhead in optimistic data structures. Conditional Access harnesses cache coherence
to enable threads to efficiently detect potential use-after-free errors without explicit shared memory
communication, and without introducing additional coherence traffic.
We implement and evaluate Conditional Access in Graphite, a multicore simulator. Our experiments show
that Conditional Access can rival the performance of highly optimized and carefully tuned SMR algorithms
while simultaneously allowing immediate reclamation. This results in concurrent data structures with
similar memory footprints to their sequential counterparts

### Adaptive Loop Unrolling for Automatic Parallelism Management 
(By S.V. Satish and S. Westrick) Recent work on automatic parallelism management in the MaPLe compiler has been developing efficient parallel fork-join primitives that eliminate the need for programmer-directed granularity control. Ongoing work specifically focuses on parallel loops, but incurs modest overhead for tight loops. We propose an adaptive loop unrolling technique to mitigate this overhead while preserving all potential parallelism. We compare performance against fast baselines in ParlayLib, and evaluate closing the gap in performance
while maintaining MaPLe’s expressivity and safety

### Synthesizing Dist-Memory Mappings for Tensor Computations with Domain and Hardware Knowledge 
(By M. Kong) Large-scale scientific applications based on tensor computations constitute a critical class of applications that include
domains such as computational chemistry, Density Functional Theory, material sciences, quantum mechanics and
machine learning. Tensor computations have become a mainstay in numerical fields and in data science. Their use in
distributed-memory, high-performance computing clusters with multi-node GPUs impose fundamental scientific and
engineering challenges that require rethinking, redesigning and jointly optimizing tensor operators.

### Co-Design for Performance and Energy-Efficiency in modern AI paradigms 
(By G. Cong) The building of 100 billion dollar scale AI data centers makes energy-efficient AI a pressing theme
in computing. On current platforms, fast code normally yields energy efficient implementations. Yet energy
consumption and environmental impact (e.g., clean water usage in cooling) demand drastically new paradigms.
We explore emerging devices for aggressive energy reduction, and in this context, brand-new research problems
and directions emerge for co-optimizing algorithm, software, architecture, and circuit design. In this talk we
will present our results, vision, and encountered challenges in energy efficient AI from projects within the De-
partment of Energy (DOE) Advanced Scientific Computing Research (ASCR) programs and Oak Ridge National
Laboratory Director’s Research Directive programs.

## Panel discussion:
To conclude the workshop, we will hold a panel session where speakers and participants can discuss open challenges, research directions, and opportunities for collaboration.


# Important Dates

-   Dec. 15th, 2025 (End of Day, Anywhere on Earth): Talk submission deadline
-   Jan. 10th, 2026: Accepted talk notification
-   Jan. 31st, 2026: Morning workshop at PPoPP (8:45am-12:45pm)

# Organizing Team

-   J Nelson Amaral (University of Alberta),
    [jamaral@ualberta.ca](jamaral@ualberta.ca)
-   Bruce Hoppe (MIT), [behoppe@mit.edu](behoppe@mit.edu)
-   Yihan Sun (University of California, Riverside),
    [yihans@cs.ucr.edu](yihans@cs.ucr.edu)

# Program Committee

Submitted talk abstracts will be reviewed by the workshop's program committee.

-   [J Nelson Amaral](https://webdocs.cs.ualberta.ca/~amaral/) (University of Alberta)
-   [Maryam Mehri Dehnavi](https://www.cs.toronto.edu/~mmehride/) (University of Toronto)
-   [Fredrik Kjolstad](https://fredrikbk.com/) (Stanford University)
-   [I-Ting Angelina Lee](https://www.cse.wustl.edu/~angelee/home_page/) (Washington University in St. Louis)
-   [Charles Leiserson](https://people.csail.mit.edu/cel/) (MIT)
-   [John Regehr](https://users.cs.utah.edu/~regehr/) (University of Utah)
-   [Yihan Sun](https://www.cs.ucr.edu/~yihans/) (University of California, Riverside)
