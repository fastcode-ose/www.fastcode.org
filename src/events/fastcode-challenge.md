---
title: Fastcode Programming Challenge 2025
tagline: Congratulations to all participants in our inaugural programming competition at PPoPP
author: Yihan Sun
event_date: March 1, 2025
#reg_deadline: January 10, 2025
image: /img/random-work-steal.png
eleventyComputed:
  eleventyNavigation:
    key: Fastcode Challenge
    parent: Events
    order: 3
tags:
  - competition
---

{% alert "note", "Congratulations, competitors!" %}
The inaugural Fastcode Programming Challenge (FCPC) was a grand success. Results are [here](./fcpc25-results). Congratulations to the participating teams, and heartfelt thanks to the volunteers who helped organize the event. We will organize more programming competitions soon! Sign up [here](/get-involved/join-us/) to stay informed.
{% endalert %}

### Quick Links: 

**Track 1 (SPE4IC):** [[Description]](./spe4ic/) [[Registration]](./#registration) [[Link to the SSSP Problem]](https://speedcode.org/SPE4IC_SSSP) [[Link to the BFS Problem]](https://speedcode.org/SPE4IC_BFS) 

**Track 2 (LLM4PP):** [[Description]](./llm4pp/) [[Registration]](./#registration) [[Link to the GitHub Page]](https://github.com/SpeedCodeOrg/LLM4PP/)

[[Speedcode Instruction]](https://speedcode.org/pages/SPE4IC25.html)

**[[Workshop Program]](./workshop-program)**

**[[FCPC25 Results]](./fcpc25-results)**

## Introduction

We are excited to announce the first **FastCode Programming Challenge (FCPC)** at [PPoPP’25](https://ppopp25.sigplan.org/), organized and sponsored by the *Fastcode Community*. Fastcode Challenge is a student programming competition, and a subsequent workshop at PPoPP, where outstanding submissions are invited to submit papers and give invited talks. 

The goal of the competition is to engage more students in learning parallel algorithms and programming, offering them resources and support to enhance their skills, and cultivating students' interests in writing fast code. We hope these efforts will inspire more students to study parallel programming and parallel computing research, thereby making a positive impact on their future careers. We encourage students from all levels to participate. 


The competition has two tracks.

### [Track 1: Software Performance Engineering for Irregular Computation (SPE4IC)](./spe4ic/)

Track 1 (the *human track*) selects two highly challenging problems for parallel programming for human programmers: single-source shortest paths (SSSP) and breadth-first search (BFS). While both of them are fundamental and easy tasks sequentially, they become much more challenging in the parallel context. Achieving effective parallelism is particularly challenging due to the irregular nature of the computations, such as irregular structures of graphs (e.g., sparse, large-diameter graphs), and irregular distribution of edge weights (e.g., non-uniform weights or large weight ranges). Every year, numerous papers are published at top conferences focusing on improving their performance or related problems, yet achieving significant speedup over sequential algorithms still remains an open challenge. Therefore, there are various open directions to explore. In this track, we are interested in **efficient implementations to address these challenges in irregular computation using effective software performance engineering**. 

### [Track 2: Large Language Model for Parallel Programming (LLM4PP)](./llm4pp/)

Track 2 (the *AI track*) focuses on leveraging AI models to write fast parallel code. As Moore’s Law diminishes, software performance engineering (SPE) becomes a key technology for programmers to continue scaling computer system performance. However, SPE, especially parallel programming, has been notoriously difficult for average programmers. Meanwhile, recent advancements in Large Language Models (LLMs) have shown great potential in AI-based code generation/completion. In this contest, we explore the opportunities to leverage LLMs for parallel programming. We ask participants to teach and utilize LLMs to solve parallel programming problems, via prompting and model fine-tuning. We also encourage participants to gather training data samples to enhance code models for parallel programming.


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

### [[Track 1 Registration (closed)]](./#registration)  
### [[Track 2 Registration (closed)]](./#registration)

**You can join as a team with at most two members. There can be more authors for the workshop paper (e.g., a faculty mentor or someone helping with writing the paper).** 

## Important Dates

- Nov. 20, 2024: Registration and competition starts
- Jan. 20, 2025: Scoreboard freezes 
- Jan. 26, 2025: Competition ends (AoE)  
- Feb. 3, 2025: paper submission due (AoE)  
- Feb. 21, 2025: Competition results and paper notification
- Mar. 2, 2025: Workshop

We understand that there is a short time between the final notification and the workshop date. If there is unexpected issues such that authors cannot participate in person (e.g., visa delay), we allow the authors to give talks online. 

## Awards and Prizes <a id='awards'></a>


There will be a best paper and best presentation award for the entire workshop, which will be evaluated based on the quality of the paper and presentation. 

**We have a total of $2000 prize pool for all tracks and problems.** The prize will be allocated among the prize winners based on their relative performance and the quality of paper submissions. 

For Track 1, a contestant may choose to participate in one or two problems (SSSP and BFS). Top three winners with the best performance for each problem will get First, Second and Third Prizes. The prize money will also be allocated accordingly based on the quality of the papers and the relative performance to other submissions. 

For Track 2, we have prizes for the Best Workflow, Best Model Award, and Best Overall Solution. You can find more information [here](./llm4pp/#tentative-awards). 

### Honorable Mentions

- Best Undergraduate Submission (if applicable; all team members must be undergraduate students or younger, one team for each track)
- Track 1: Best team for each problem or each test set (sparse/dense test set), if different from the final prize winners. 
- Track 2: Top three teams in each problem, if different from the prize winners.

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

#### Technical Design Chair

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
- Nairen Cao, New York University
- Ahmed Hassan, Lehigh University
- Shang-En Huang, National Taiwan University
- Depaul Miller, Lehigh University
- Kamesh Madduri, The Pennsylvania State University
- Ajay Singh, Indian Institute of Technology Hyderabad
- Helen Xu, Georgia Tech
- Amir Yazdanbakhsh, University of Tehran


If you have any questions about the problems, please contact [fastcode.programming.challenge@gmail.com](mailto:fastcode.programming.challenge@gmail.com).

For any general questions about the competition, please contact Yihan Sun ([yihans@cs.ucr.edu](mailto:yihans@cs.ucr.edu)). 
