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

## Introduction

We are excited to announce the first **FastCode Programming Challenge (FCPC)** at PPoPP 2025 \[link\], organized and sponsored by the *Fastcode Community*. Fastcode Challenge is a student programming competition, and a subsequent workshop at PPoPP, where outstanding submissions are invited to submit papers and give invited talks. There will also be talks from invited keynote speakers. 

The goal of the competition is to engage more students in learning parallel algorithms and programming, offering them resources and support to enhance their skills, and cultivating students' interests in writing fast code. We hope these efforts will inspire more students to study parallel programming and parallel computing research, thereby making a positive impact on their future careers. We encourage students from all levels to participate, including K-12 students, undergraduate students, Master's students, and Ph.D. students. 

The competition has two tracks: a problem-solving track and an AI track. The **problem-solving track** focuses on writing fast code for two specific problems: single-source shortest paths (SSSP) and breadth-first search (BFS). BFS and SSSP are both fundamental graph problems, but are much more challenging in the parallel context. In fact, there are tens of papers published in top conferences every year focusing on improving their performance or related problems, and there are still open challenges in achieving significant speedup over sequential algorithms (see more details in the link below). Therefore, there are various open directions to explore for performance engineering. The **AI track** focuses on leveraging AI models to write fast parallel code. Recent advancement in Large Language Models (LLMs) has shown great potential in AI-based code generation/completion. However, writing *fast*, *parallel* code remains a big challenge for these LLMs. Specifically, the lack of adequate parallel code datasets prevents effective training of LLMs, which thus significantly impedes progress in LLM-based parallel code generation. This AI track contest aims to harness community efforts to **develop an open-source, large-scale, and high-quality dataset for parallel code generation**, igniting an ImageNet-like revolution in LLM-based parallel code generation.

## Problem Description

* [The problem-solving track](./traditional/)
* [The AI track](./ai)

## Time & Location

Competition: Nov. 2024 \- Feb. 2025\. Online at [speedcode.org](http://speedcode.org) 

Workshop: March 2nd, 2025\. The Westin Las Vegas Hotel & Spa, Las Vegas, NV, USA (affiliated with [PPoPP’25](https://ppopp25.sigplan.org/venue/PPoPP-2025-venue)).

## Highlights

- **Multiple awards** \[a link to awards\] and prize money are available\! US-based students can apply for a dedicated travel grant to cover travel expenses and registration fees to the workshop in Las Vegas, NV.    
- The competition is fully supported by speedcode.org, which allows you to **debug and test your parallel code online**, and provides performance analysis tools. You will get immediate results every time you submit the code online, without requiring access to a multicore server.  
- All participants will submit their methodology as a short paper, which will be peer-reviewed. Accepted papers will be **published as FCPC workshop papers along with PPoPP proceedings**.   
- Award-winning submissions and authors of accepted papers will be invited to **present their work** at the workshop (Day 0 at PPoPP). More submissions will be invited to present posters. 

## Registration

You can register at [https://forms.gle/DUJUwocnFDgRmMa26](https://forms.gle/DUJUwocnFDgRmMa26) 

## Important Dates

- Nov. 17, 2024: Registration and competition starts  
- December. 17: Scoreboard available. The first round of large-scale testing results become available.  
- Jan. 10, 2025: Scoreboard freezes. The second round of large-scale testing results become available.  
- Jan. 17, 2025: Competition ends (AoE)  
- Jan. 24, 2025: Participants will receive notifications about competition results  
- Feb. 1, 2025: paper submission due (AoE)  
- Feb. 15, 2025: paper final notification  
- Mar. 2, 2025: Workshop

We understand that there is a short time between the final notification and the workshop date. If there is unexpected issues such that authors cannot participate in person (e.g., visa delay), we allow the authors to give talks online. 

\[Xuhao, can you add the timeline for the AI track here? You can either add it to the current timeline, or have a separate one for the AI track\]

## Awards and Prizes

There will be a best paper and best presentation award for the entire workshop, which will be evaluated based on the quality of the paper and presentation.

There are two tracks. The problem-solving track also contains two problems. For each problem in the problem-solving track, and the AI track, we have the following prizes and awards:

**Prizes**

- 1 First Prize ($???)  
- 1 Second Prize ($???)  
- 1 Third Prize ($???)

**Honorable Mentions**

- Best Undergraduate Submission (if applicable; all team members must be undergraduate students or younger)  
- Best Pre-college submission (if applicable; all team members must be pre-college)  
- Best submission for each of the two test sets  
- Large-scale challenge award (see more details in the problem description for the problem-solving page)  
- Top three teams in each phase of the AI-track, if different from the final prize winners

The prizes and honorable mentions will be based on the performance of the submissions. 

All US-based students can apply for student travel grants sponsored by NSF. 

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

## Organizing committee

Organizing Chair: Yihan Sun, UC Riverside

Technique Support: Tim Kaler, MIT

Problem Setting Committee:  
Track 1:

- (Chair) Brian Wheatman, University of Chicago  
- Xiaojun Dong, UC Riverside  
- Youzhe Liu, UC Riverside

Track 2:

- (Chair) Xuhao Chen, MIT  
- Ryan Deng, MIT

Publicity Committee

- Bruce Hoppe, MIT  
- Yan Gu, UC Riverside

Paper Review and Publication Committee:

- (Chair) Roberto Palmieri, Lehigh University  
- (Chair) Lewis Tseng, UMass Lowell  
- More members TBD

If you have any questions, you can send an email to Yihan Sun ([yihans@cs.ucr.edu](mailto:yihans@cs.ucr.edu)). 