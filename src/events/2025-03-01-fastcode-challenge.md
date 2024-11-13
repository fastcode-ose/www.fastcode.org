---
title: Fastcode Challenge
tagline: A new programming competition at PPoPP 2025
featuredEvent: true
author: Bruce Hoppe
event_date: March 1, 2025
reg_deadline: January 10, 2025
image: /img/random-work-steal.png
tags: competition
---

## Introduction

We are excited to announce the first **FastCode Programming Challenge (FCPC)** at [PPoPP 2025](https://ppopp25.sigplan.org/), organized and sponsored by the *Fastcode Community*. Fastcode Challenge is a student programming competition, and a subsequent workshop at PPoPP, where outstanding submissions are invited to submit papers and give invited talks. There will also be talks from invited keynote speakers. 

The goal of the competition is to engage more students in learning parallel algorithms and programming, offering them resources and support to enhance their skills, and cultivating students' interests in writing fast code. We hope these efforts will inspire more students to study parallel programming and parallel computing research, thereby making a positive impact on their future careers. We encourage students from all levels to participate, including K-12 students, undergraduate students, Master's students, and Ph.D. students. 

Our topic of the first Fastcode Challenge focuses on classic graph processing problems: single-source shortest paths (SSSP) and Breadth-First Search (BFS). BFS and SSSP are both fundamental graph problems covered in most (if not all) undergraduate (sequential) algorithm classes, such that all CS students are familiar with them. However, it becomes much more challenging in parallel computing research. In fact, there are tens of papers published in top conferences every year focusing on improving their performance or related problems, and there are still open challenges in achieving significant speedup over sequential algorithms (see more details in *Problem Statement* below). Therefore, there are various open directions to explore for performance engineering. 

## Time & Location

Competition: Nov. 2024 \- Feb. 2025\. Online at [speedcode.org](http://speedcode.org) 

Workshop: March 2nd, 2025\. The Westin Las Vegas Hotel & Spa, Las Vegas, NV, USA.  
The workshop is affiliated with [PPoPP’25](https://ppopp25.sigplan.org/venue/PPoPP-2025-venue).

## Highlights

- **Multiple awards** \[a link to awards\] and prize money are available\! US-based students can apply for a dedicated travel grant to cover travel expenses and registration fees to the workshop at Las Vegas, NV.    
- The competition is fully supported by speedcode.org, which allows you to **debug and test your parallel code online**, and provides performance analysis tools. You will get immediate results every time you submit the code online, without requiring access to a multicore server.  
- All participants will submit their methodology as a short paper, which will be peer-reviewed. Accepted papers will be **published as FCPC workshop papers along with PPoPP proceedings**.   
- Award-winning submissions and authors of accepted papers will be invited to **present their work** at the workshop (Day 0 at PPoPP). 

## Registration

You can register at [https://forms.gle/DUJUwocnFDgRmMa26](https://forms.gle/DUJUwocnFDgRmMa26) 

## Important Dates

- Nov. 17, 2024: Registration and competition starts  
- December. 17: Scoreboard available. The first round of large-scale testing results become available.  
- Jan. 10, 2025: Scoreboard freezes. The second round of large-scale testing results become available.  
- Jan. 17, 2025: Competition ends  
- Jan. 24, 2025: Participants will receive notifications about competition results  
- Feb. 1, 2025: paper submission due  
- Feb. 10, 2025: paper final notification  
- Mar. 1, 2025: Workshop

We understand that there is a short time between the final notification and the workshop date. If there is unexpected issues such that authors cannot participate in person (e.g., visa delay), we allow the authors to give talks online.

## Awards and Prizes

There will be a best paper and best presentation award for the entire workshop, which will be evaluated based on the quality of the paper and presentation.

There are two (or three, if the AI one will be available) tracks, each of them includes:  
Prizes:

- 1 First Prize ($???)  
- 1 Second Prize ($???)  
- 1 Third Prize ($???)

Special awards:

- Best Undergraduate Submission (if applicable; all team members must be undergraduate students or younger)  
- Best Pre-college submission (if applicable; all team members must be pre-college)  
- Best submission for each of the two test sets  
- Large-scale challenge award (See more details below)

The prizes and special awards will be based on the performance of the submissions. 

All US-based students can apply for student travel grants sponsored by NSF. 

## Competition Details

### Problem Overview

Single-Source Shortest Paths (SSSP) and Breadth-First Search are among the most fundamental graph processing problems. Sequentially, very simple textbook algorithms can solve them efficiently, and they are covered in almost all undergraduate algorithm classes. However, both problems are challenging in parallel. 

In theory, unlike the sequential setting that  we are not aware of work-efficient parallel algorithms that can achieve polylog (or even sublinear? Need to check) span. Most of the practical algorithms also have unsatisfactory performance on sparse, large-diameter graphs. In a [brief announcement at SPAA’24](https://dl.acm.org/doi/10.1145/3626183.3660258), running parallel BFS, even with the state-of-the-art parallel graph processing libraries, can struggle to outperform sequential algorithms on certain instances. Similar challenges exist in parallel SSSP. 

Here we will review some existing algorithms and techniques in existing research results. You can use these ideas as starting points for the competition. Certainly you can also design a brand-new algorithm that beats all existing ideas (we look forward to that\!).

### Parallel Breadth-First Search

#### Background

Most of the state-of-the-art parallel BFS implementations are under a frontier-based framework. Starting from a source $s$, the algorithm will visit all the 1-hop neighbors of $s$ in parallel, storing them in the first *frontier* $F\_1$. In the subsequent rounds, we will always visit all vertices in the current frontier $F\_i$, and generate the next frontier $F\_{i+1}$ by finding all unvisited neighbors for all vertices in the current frontier $F\_{i}$. This process is repeated until all vertices have been visited. A simple pseudocode is shown below:

{% img "/img/PBFS_alg.png", "800px" %}

In this algorithm, all the $i$-hop neighbors of $s$ will be visited in parallel in round $i$. The rounds are performed one after the other. To update the *visited* array while avoiding duplicates, an atomic operation *compare\_and\_swap* is usually used.

#### Challenges

One inherent challenge in parallel BFS is to achieve parallelism on large-diameter graphs. The frontier-based framework will proceed in $D$ rounds, where $D$ is the farthest hop distance from any vertex to the source (or roughly, the diameter of the graph). On large-diameter graphs, the potential parallelism is limited. 

More importantly, on very sparse graphs with large diameters, the number of rounds can be large, and between them, a global synchronization for all threads is needed. Such synchronization can cause a large overhead. Due to this overhead, even a work-efficient parallel algorithm can become slower than a sequential algorithm. 

Some theoretical results focus on using shortcuts or hop sets to achieve provable low span, but they usually increase work, and it remains unknown whether they can be practical. 

#### Existing Optimizations

A common optimization for parallel BFS is called directional optimization \[?\]. When the frontier size is large, instead of generating the next frontier from the current frontier, one can simply process all vertices in parallel, and determine if one of their in-neighbors is in the current frontier. If so, they are added to the next frontier, and all the rest of the neighbors can be skipped. Such a “pull” version of frontier generation may allow for better cache locality, as well as a simpler frontier representation using just bit-flags. On dense graphs such as social networks, existing results show that this optimization is very effective in improving performance by saving work \- the running time of the parallel algorithm on one core can be faster than the standard queue-based sequential solution. 

To alleviate the issue of low parallelism on large-diameter graphs, a solution was proposed in 2021 \[?\] on SSSP (later formalized in 2023\) called vertical granularity control. In general, the idea is to explore a larger neighborhood (with at least $t$ vertices within multiple hops) when processing a vertex, instead of only the direct neighbors. In this case, whenever a thread is created to process a vertex, the work is at least to process about $t$ vertices. This works similarly to a “granularity control”, which aims to hide the scheduling overhead to create threads. For sparse graphs, this means exploring multiple hops in one round, and reduces the number of rounds effectively. With a smaller number of rounds (and thus global synchronizations), one can achieve improved performance due to better parallelism. Some other implementations explore similar ideas, such that multiple hops of neighbors from a vertex are processed by a thread \[??\]. 

### Parallel Single-Source Shortest Paths

Parallel SSSP is notoriously hard both in theory and in practice. In general, SSSP is harder to solve than BFS, since a BFS can be viewed as unweighted version of SSSP. We are also not aware of a work-efficient algorithm with sublinear span. 

In practice, many algorithms 

### Useful References

Links to Some State-of-the-art Papers and Implementations

### Participation Rules

(TBW. Brian will put in more details)

- To be considered as an award winner, the participant(s) are required to submit a workshop short paper and open-source their code.   
- Participants can compete in teams of at most two people. There can be more authors in the workshop paper (e.g., including faculty members who help with paper writing).   
- The competition will be tested on speedcode.org. You can find the problem specification and description here: (link).  A full test on all graphs may take a long time (at most 30 minutes before timeout). Therefore, there is a “small-scale” version set up here: (link), which only includes the two smallest graphs in the dataset. Participants can use the latter link to test the correctness of their code. These two graphs will also be released (see “Datasets”).  
- The participants only need to submit their code on speedcode. Based on the registration form, for each registered team, their last submission to speedcode will be considered as their final submission.   
- …..

### Scoring

### Datasets

(TBW. Brian will put in more details)  
Our dataset will contain two test sets, covering the relatively “easy” (small-diameter graphs) and “hard” (large-diameter graphs) instances for BFS and SSSP. 

- Xxx  
- 

### Platform

The main platform for the competition is speedcode.org, …… \[Tim or Xuhao can write a short paragraph to introduce speedcode\]

\[TBW\]

## Workshop Papers and Talks

**All submissions have to submit a workshop paper to be considered for prizes and awards.** The papers will be peer-reviewed separately from the code submissions. Accepted papers will be included as FCPC’25 workshop papers, published along with the PPoPP proceedings at ACM Digital Library. 

The paper will be reviewed independently as short workshop papers. The performance of the code will be considered, but a lot more criteria about paper writing will be considered, including clarity, novelty, formalization, simplicity/elegance/generality of methodology, etc. Even though the performance may not be at the top among all participants, a paper may still be accepted if it is a solid paper with significant technical and scientific contributions. Some examples include but are not limited to

- The paper provides an interesting/novel technique that improves performance on a certain type of graphs;   
- The paper presents a nice framework/general methodology for this problem  
- The paper includes a detailed and in-depth experimental study

All first, second and third prize winners will be invited to give talks, regardless of paper acceptance. Rejected papers may be considered as posters. 

There will be invited keynote talks at the workshop. The list of speakers will be available soon. 

## Paper Submission Guideline

Papers must be submitted in the form of a 4-page (maximum) short paper, excluding bibliography. The review process is single-blind. The authors need to specify their names, affiliations, as well as the account used to participate in the competition.

All papers must be prepared in ACM Conference Format using the 2-column [acmart](http://www.sigplan.org/Resources/Author/) format (the same as PPoPP conference papers). You should use the SIGPLAN proceedings template [acmart-sigplanproc-template.tex](http://www.sigplan.org/sites/default/files/acmart/current/acmart-sigplanproc-template.tex) for LaTeX, and [interim-layout.docx](https://www.acm.org/binaries/content/assets/publications/word_style/interim-template-style/interim-layout.docx) for Word. Submissions must be in PDF format. *Important note*: The Word template (interim-layout.docx) on the ACM website uses 9pt font; you need to increase it to 10pt.

An accepted paper will be invited to an oral presentation at the workshop. More papers may be accepted as posters. 

**Paper submission site**: [https://easychair.org/my/conference?conf=fcpc25](https://easychair.org/my/conference?conf=fcpc25) 

## Organizers and Sponsors

The Fastcode Challenge is mainly organized and sponsored by the Fastcode Community (initiated by the OpenCilk team), which is an open-source community dedicated to advancing software performance engineering. The OpenCilk team provides support through the speedcode.org platform with an interactive interface for participants to debug and test their code. 

The student travel grants are supported by NSF.

### Organizing committee

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

Paper Review and Publication Committee:

- (Chair) Roberto Palmieri, Lehigh University  
- (Chair) Lewis Tseng, UMass Lowell  
- More members TBD

If you have any questions, you can send an email to Yihan Sun ([yihans@cs.ucr.edu](mailto:yihans@cs.ucr.edu)).   
