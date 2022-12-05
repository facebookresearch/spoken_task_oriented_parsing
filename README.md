# STOP Dataset

End-to-end spoken language understanding (SLU) predicts intent directly from audio using a single model. It promises to improve the performance of assistant systems by leveraging acoustic information lost in the intermediate textual representation and preventing cascading errors from Automatic Speech Recognition (ASR). Further, having one unified model has efficiency advantages when deploying assistant systems on-device. However, the limited number of public audio datasets with semantic parse labels hinders the research progress in this area. In this paper, we release the Spoken Task-Oriented semantic Parsing (STOP) dataset, the largest and most complex SLU dataset to be publicly available. Additionally, we define low-resource splits to establish a benchmark for improving SLU when limited labeled data is available. Furthermore, in addition to the human-recorded audio, we are releasing a TTS-generated version to benchmark the performance for low-resource domain adaptation of end-to-end SLU systems. Initial experimentation show end-to-end SLU models performing slightly worse than their cascaded counterparts, which we hope encourages future work in this direction.

## Updates
* Please go here to learn more about the [Spoken Language Understanding Grand Challenge @ ICASSP 2023](https://facebookresearch.github.io/spoken_task_oriented_parsing/)! 

## Questions
* Please post on our github issues, and we will get back to you!

## Citation

Please use the following citation:

```
@inproceedings{stop2022,
  author    = {Paden Tomasello and Akshat Shrivastava and Daniel Lazar and Po-Chun Hsu and Duc Le and Adithya Sagar and Ali Elkahky and Jade Copet and Wei-Ning Hsu and Yossef Mordechay and Robin Algayres and Tu Anh Nguyen and Emmanuel Dupoux and Luke Zettlemoyer and Abdelrahman Mohamed},
  title     = {{STOP: A dataset for Spoken Task Oriented Semantic Parsing}},
  booktitle   = {CoRR},
  eprinttype = {arXiv},
}
```

[LICENSE](https://github.com/facebookresearch/spoken_task_oriented_parsing/blob/main/LICENSE)
