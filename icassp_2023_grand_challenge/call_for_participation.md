| [Call For Participation](call_for_participation.md) | [SLU & STOP Dataset](semantic_parsing.md) | [Challenge Tracks](challenge_tracks.md) | [Rules](rules.md) | [Getting Started](getting_started.md) | [Contact Us](contact_us.md)|
|------------------------|--------------------|------------------|-------|-----------------|------------|

# Call for Participation

We are excited to announce the Spoken Language Understanding Grand Challenge @ ICASSP 2023!

Task oriented conversational assistants are becoming increasingly popular over the past several years. Such Assistants typically allow voice based interactions to complete a variety of tasks around sending messages, getting weather details, and controlling devices, and so forth. Critically, task oriented systems convert a user's utterance into a semantic parse to allow the execution of tasks from natural language input termed as Spoken Language Understanding (SLU). 

SLU systems typically consist of first Automatic Speech Recognition (ASR) to convert speech to text and then Natural Language Understanding (NLU) to convert text to a semantic parse. Today many advances in this system consist of independent improvements to ASR and NLU components. However recently there has become an increased interest in End-to-End SLU systems with the promise to improve the performance by leveraging acoustic information lost in the intermediate textual representation and preventing cascading errors from ASR. Further, having one unified model has efficiency advantages when deploying assistant systems on-device for low power / mobile devices. In order to facilitate further progression in the SLU community we release the Spoken Task Oriented Parsing (STOP) dataset [1]. STOP is the largest and most complex publicly available SLU dataset to date. 

In this challenge participants are tasked with exploring the SLU space on 3 tracks. (1) Overall quality improvements (2) On-device modeling improvements and (3) Low-resource/Domain Adaptation improvements. We restrict all submissions to open sources models and data to increase accessibility of results. Our dataset and open source baselines are released here: https://github.com/facebookresearch/fairseq/tree/main/examples/audio_nlp/nlu.

We will invite the top-5 teams across all tracks to submit a 2-page paper and present it at ICASSP-2023. Accepted papers will be in the ICASSP proceedings, the review process is coordinated by the challenge organizers and the SPGC chairs. There will be 2 winners in the quality track, 2 in the on-device, and 1 in the low-resource. Selection criteria is described in each respective track.

## Timeline
* November 28th → Challenge begins
* December 21st → Submissions Open
* January 24th → Submission Deadline
* January 24th to February 3rd → Review Period
* February 4th → Notification of winners
* February 10th → Grand Challenge paper acceptance notification
* February 17th → Camera-ready Grand challenge papers

## Contact Us
For any questions please post on our github issues: https://github.com/facebookresearch/spoken_task_oriented_parsing/issues 

## Organizers
* [Akshat Shrivastava](https://akshatsh.github.io/) (Meta) 
* Paden Tomasello (Meta)
* Suyoun Kim (Meta)
* Ali Elkahky (Meta)
* Daniel Lazar (Meta)
* Trang Le (Meta)
* Shan Jiang (Meta)
* Duc Le (Meta)
* Aleksandr Livshits (Meta)
* Ahmed Aly (Meta)

# References

[1] Tomasello, P., A. Shrivastava, D. Lazar, P. chun Hsu, D. Le, A. Sagar, A. M. Elkahky, J. Copet, W.-N. Hsu, Y. Mordechay, R. Algayres, T. Nguyen, E. Dupoux, L. Zettlemoyer, and A. rahman Mohamed (2022). Stop: A dataset for spoken task oriented semantic parsing. ArXiv abs/2207.10643

[[2207.10643] STOP: A dataset for Spoken Task Oriented Semantic Parsing](https://arxiv.org/abs/2207.10643?context=cs)