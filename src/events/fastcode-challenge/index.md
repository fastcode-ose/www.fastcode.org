---
title: Fastcode Challenge
tagline: A new programming competition at PPoPP 2025
featuredEvent: true
author: Yihan Sun
event_date: March 1, 2025
reg_deadline: January 10, 2025
image: /img/random-work-steal.png
eleventyComputed:
  eleventyNavigation:
    key: Fastcode Challenge
    parent: Events
    order: 1
tags:
  - events
  - competition
---

### Quick Links: 

**Track 1 (SPE4IC):** [[Description]](./spe4ic/) [[Link to the SSSP Problem]](https://speedcode.org/ide/contest.html?ppopp_test_sssp_v1) [[Link to the BFS Problem]](https://speedcode.org/ide/contest.html?ppopp_test_bfs_v1)

**Track 2 (LLM4PP):** [[Description]](./llm4pp/) [[Link to the GitHub Page]](https://github.com/SpeedCodeOrg/LLM4PP/)

[[Speedcode Instruction]](https://speedcode.org/fcpc25) 

## Introduction

We are excited to announce the first **FastCode Programming Challenge (FCPC)** at [PPoPP’25](https://ppopp25.sigplan.org/), organized and sponsored by the *Fastcode Community*. Fastcode Challenge is a student programming competition, and a subsequent workshop at PPoPP, where outstanding submissions are invited to submit papers and give invited talks. There will also be talks from invited keynote speakers. 

The goal of the competition is to engage more students in learning parallel algorithms and programming, offering them resources and support to enhance their skills, and cultivating students' interests in writing fast code. We hope these efforts will inspire more students to study parallel programming and parallel computing research, thereby making a positive impact on their future careers. We encourage students from all levels to participate, including K-12 students, undergraduate students, Master's students, and Ph.D. students. 

The competition has two tracks.

### [Track 1: Software Performance Engineering for Irregular Computation (SPE4IC)](./spe4ic/)

Track 1 (the *human track*) selects two highly challenging problems for parallel programming for human programmers: single-source shortest paths (SSSP) and breadth-first search (BFS). While both of them are fundamental and easy tasks sequentially, they become much more challenging in the parallel context. Achieving effective parallelism is particularly challenging due to the irregular nature of the computations, such as irregular structures of graphs (e.g., sparse, large-diameter graphs), and irregular distribution of edge weights (e.g., non-uniform weights or large weight ranges). Every year, numerous papers are published at top conferences focusing on improving their performance or related problems, yet achieving significant speedup over sequential algorithms still remains an open challenge. Therefore, there are various open directions to explore. In this track, we are interested in **efficient implementations to address these challenges in irregular computation using effective software performance engineering**. 

### [Track 2: Large Language Model for Parallel Programming (LLM4PP)](./llm4pp/)

Track 2 (the *AI track*) focuses on leveraging AI models to write fast parallel code. Recent advancements in Large Language Models (LLMs) have shown great potential in AI-based code generation/completion. However, writing fast, parallel code remains a big challenge for these LLMs. Specifically, the lack of adequate parallel code datasets prevents effective training of LLMs, which thus significantly impedes progress in LLM-based parallel code generation. This AI track contest aims to harness community efforts to **develop an open-source, large-scale, and high-quality dataset for parallel code generation**, igniting an ImageNet-like revolution in LLM-based parallel code generation.


## Problem Descriptions

### [Track 1: Software Performance Engineering for Irregular Computation (SPE4IC)](./spe4ic/)

### [Track 2: Large Language Model for Parallel Programming (LLM4PP)](./llm4pp/)

## Time & Location

* Competition: Nov. 2024 \- Feb. 2025\. Online at [speedcode.org](http://speedcode.org) 

* Workshop: March 2nd, 2025\. The Westin Las Vegas Hotel & Spa, Las Vegas, NV, USA (affiliated with [PPoPP’25](https://ppopp25.sigplan.org/venue/PPoPP-2025-venue)).

## Highlights

- [**Multiple awards**](#awards) and prize money are available\! US-based students can apply for a dedicated travel grant to cover travel expenses to attend the workshop at PPoPP in Las Vegas, NV.    
- The competition is fully supported by speedcode.org, which allows you to **debug and test your parallel code online**, and provides performance analysis tools. You will get immediate results every time you submit the code online, without requiring access to a multicore server.  
- All participants will submit their methodology as a short paper, which will be peer-reviewed. Accepted papers will be **published as FCPC workshop papers along with PPoPP proceedings**.   
- Award-winning submissions and authors of accepted papers will be invited to **present their work** at the workshop (happening at PPoPP). More submissions will be invited to present posters. 

## Registration

You can register at [https://forms.gle/DUJUwocnFDgRmMa26](https://forms.gle/DUJUwocnFDgRmMa26) 

You can join as a team with at most two members. 

## Important Dates

- Nov. 20, 2024: Registration and competition starts  
- Dec. 20: Scoreboard available. The first round of large-scale testing results become available.  
- Jan. 17, 2025: Scoreboard freezes. The second round of large-scale testing results become available.  
- Jan. 24, 2025: Competition ends (AoE)  
- Feb. 1, 2025: paper submission due (AoE)  
- Feb. 5, 2025: Competition results notification  
- Feb. 15, 2025: paper final notification  
- Mar. 2, 2025: Workshop

We understand that there is a short time between the final notification and the workshop date. If there is unexpected issues such that authors cannot participate in person (e.g., visa delay), we allow the authors to give talks online. 

## Awards and Prizes <a id='awards'></a>


There will be a best paper and best presentation award for the entire workshop, which will be evaluated based on the quality of the paper and presentation.

For Track 2 and each problem in Track 1, the top three teams will be awarded prizes (First, Second and Third Prizes). 

**Each track has a total of $1000 in the prize pool.** We are seeking more sponsors with prize money added to the pools. The rank will be determined purely based on the performance of the submitted code. The prize will be allocated among the prize winners based on their relative performance and the quality of paper submissions. 

For Track 1, a contestant may choose to participate in one or two problems (SSSP and BFS). The winners of the two problems can be different teams, and the prize money will also be allocated accordingly based on the quality of the papers and the relative performance to other submissions. 

### Honorable Mentions

- Best Undergraduate Submission (if applicable; all team members must be undergraduate students or younger, one team for each track)
- Track 1: Best team for each problem or each test set (sparse/dense test set), if different from the final prize winners. 
- Track 2: Top three teams in each phase, if different from the final prize winners

The prizes and honorable mentions will be based on the performance of the submissions. 

All US-based students can apply for student travel grants sponsored by NSF. 

## Workshop Papers and Talks

**All submissions have to submit a workshop paper to be considered for prizes and awards.** The papers will be peer-reviewed separately from the code submissions. Accepted papers will be included as FCPC'25 workshop papers, published along with the PPoPP proceedings at ACM Digital Library. 

The paper will be reviewed independently as short workshop papers. The performance of the code will be considered, but a lot more criteria about paper writing will be considered, including clarity, novelty, formalization, simplicity/elegance/generality of methodology, etc. Even though the performance may not be at the top among all participants, a paper may still be accepted if it is a solid paper with significant technical and scientific contributions. Some examples include but are not limited to

- The paper provides an interesting/novel technique that improves performance on a certain type of graphs;   
- The paper presents a nice framework/general methodology for this problem  
- The paper includes a detailed and in-depth experimental study

All first, second and third prize winners will be invited to give talks, regardless of paper acceptance. Rejected papers may be considered as posters. 

## Paper Submission Guideline

Papers must be submitted in the form of a 4-page (maximum) short paper, excluding bibliography. The review process is single-blind. The authors need to specify their names, affiliations, as well as the account used to participate in the competition.

All papers must be prepared in ACM Conference Format using the 2-column [acmart](http://www.sigplan.org/Resources/Author/) format (the same as PPoPP conference papers). You should use the SIGPLAN proceedings template [acmart-sigplanproc-template.tex](http://www.sigplan.org/sites/default/files/acmart/current/acmart-sigplanproc-template.tex) for LaTeX, and [interim-layout.docx](https://www.acm.org/binaries/content/assets/publications/word_style/interim-template-style/interim-layout.docx) for Word. Submissions must be in PDF format. *Important note*: The Word template (interim-layout.docx) on the ACM website uses 9pt font; you need to increase it to 10pt.

An accepted paper will be invited to an oral presentation at the workshop. More papers may be accepted as posters. 

**Paper submission site**: [https://easychair.org/my/conference?conf=fcpc25](https://easychair.org/my/conference?conf=fcpc25) 

## Organizers and Sponsors

The Fastcode Challenge is mainly organized and sponsored by the Fastcode Community (initiated by the OpenCilk team), which is an open-source community dedicated to advancing software performance engineering. The OpenCilk team provides support through the speedcode.org platform with an interactive interface for participants to debug and test their code. 

The student travel grants are supported by NSF.

### Organizing Committee

#### Organizing Chair

- Yihan Sun, UC Riverside

#### Technique Support

- Tim Kaler, MIT

#### Problem Setting

**Track 1**

- Brian Wheatman (Chair), University of Chicago

- Xiaojun Dong, UC Riverside

- Youzhe Liu, UC Riverside


**Track 2**

- Xuhao Chen (Chair), MIT

- Ryan Deng, MIT

- Tim Kaler, MIT

#### Publicity and Website

- Bruce Hoppe, MIT

- Yan Gu, UC Riverside

#### Paper Review and Publication

- Roberto Palmieri (Chair), Lehigh University

- Lewis Tseng (Chair), UMass Lowell

More members TBD


If you have any questions about the problems, please contact [fastcode.programming.challenge@gmail.com](mailto:fastcode.programming.challenge@gmail.com).

For any general questions about the competition, please contact Yihan Sun ([yihans@cs.ucr.edu](mailto:yihans@cs.ucr.edu)). 
