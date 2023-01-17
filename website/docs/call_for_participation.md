---
sidebar_position: 1
---

# Call for Participation

We are excited to announce the Spoken Language Understanding Grand Challenge @ ICASSP 2023!

Task oriented conversational assistants are becoming increasingly popular over the past several years. Such Assistants typically allow voice based interactions to complete a variety of tasks around sending messages, getting weather details, and controlling devices, and so forth. Critically, task oriented systems convert a user's utterance into a semantic parse to allow the execution of tasks from natural language input termed as Spoken Language Understanding (SLU). 

SLU systems typically consist of first Automatic Speech Recognition (ASR) to convert speech to text and then Natural Language Understanding (NLU) to convert text to a semantic parse. Today many advances in this system consist of independent improvements to ASR and NLU components. However recently there has become an increased interest in End-to-End SLU systems with the promise to improve the performance by leveraging acoustic information lost in the intermediate textual representation and preventing cascading errors from ASR. Further, having one unified model has efficiency advantages when deploying assistant systems on-device for low power / mobile devices. In order to facilitate further progression in the SLU community we release the Spoken Task Oriented Parsing (STOP) dataset [1]. STOP is the largest and most complex publicly available SLU dataset to date. 

In this challenge participants are tasked with exploring the SLU space on 3 tracks. (1) Overall quality improvements (2) On-device modeling improvements and (3) Low-resource/Domain Adaptation improvements. We restrict all submissions to open sources models and data to increase accessibility of results. Our dataset and open source baselines are released here: https://github.com/facebookresearch/fairseq/tree/main/examples/audio_nlp/nlu.

We will invite the top-5 teams across all tracks to submit a 2-page paper and present it at ICASSP-2023. Accepted papers will be in the ICASSP proceedings, the review process is coordinated by the challenge organizers and the SPGC chairs. There will be 2 winners in the quality track, 2 in the on-device, and 1 in the low-resource. Selection criteria is described in each respective track.

## Timeline
All deadlines are Anywhere On Earth (AOE).

* November 28th, 2022 → Challenge begins
* December 21st, 2022 → Submissions Open
* ~~January 24th, 2023 → Submission Deadline~~
* ~~January 24th, 2023 to February 3rd, 2023 → Review Period~~
* ~~February 4th, 2023 → Notification of winners~~
* ~~February 10th, 2023 → Grand Challenge paper acceptance notification~~
* ~~February 17th, 2023 → Camera-ready Grand challenge papers~~
* February 13th, 2023 → Submission Deadline
* February 18th, 2023 → Notification of winners and paper acceptance
* February 20th, 2023 → Winners submit their camera ready papers to ICASSP

## Contact Us
For any questions please post on our github issues: https://github.com/facebookresearch/spoken_task_oriented_parsing/issues 

## Organizers
* [Akshat Shrivastava](https://akshatsh.github.io/) (Meta) 
* Paden Tomasello (Meta)
* [Suyoun Kim](http://suyoun.kim) (Meta)
* Ali Elkahky (Meta)
* Daniel Lazar (Meta)
* [Trang Le](https://www.linkedin.com/in/trang-le-minh-b888b115b/) (Meta)
* [Shan Jiang](https://shanjiang.me/) (Meta)
* Duc Le (Meta)
* [Aleksandr Livshits](https://www.linkedin.com/in/alivshits/) (Meta)
* [Ahmed Aly](https://www.linkedin.com/in/ahmed-aly-1a408514/) (Meta)

# References

[1] Tomasello, P., A. Shrivastava, D. Lazar, P. chun Hsu, D. Le, A. Sagar, A. M. Elkahky, J. Copet, W.-N. Hsu, Y. Mordechay, R. Algayres, T. Nguyen, E. Dupoux, L. Zettlemoyer, and A. rahman Mohamed (2022). Stop: A dataset for spoken task oriented semantic parsing. ArXiv abs/2207.10643

[[2207.10643] STOP: A dataset for Spoken Task Oriented Semantic Parsing](https://arxiv.org/abs/2207.10643?context=cs)

## Citation
```
@inproceedings{stop2022,
  author    = {Paden Tomasello and Akshat Shrivastava and Daniel Lazar and Po-Chun Hsu and Duc Le and Adithya Sagar and Ali Elkahky and Jade Copet and Wei-Ning Hsu and Yossef Mordechay and Robin Algayres and Tu Anh Nguyen and Emmanuel Dupoux and Luke Zettlemoyer and Abdelrahman Mohamed},
  title     = {{STOP: A dataset for Spoken Task Oriented Semantic Parsing}},
  booktitle   = {CoRR},
  eprinttype = {arXiv},
}
```
