| [Call For Participation](call_for_participation.md) | [SLU & STOP Dataset](semantic_parsing.md) | [Challenge Tracks](challenge_tracks.md) | [Rules](rules.md) | [Getting Started](getting_started.md) | [Contact Us](contact_us.md)|
|------------------------|--------------------|------------------|-------|-----------------|------------|

# Challenge Tracks
## Track 1: Quality
The task here is to improve upon the STOP test set. Quality improvements are measured through the Exact Match metric defined in (metrics). 

Selection Criteria: We will select 3 winners for this challenge
1. Highest EM on the test set using open source methods
2. Second highest EM on the test set using open source methods

**Baselines:** We present baselines for this challenge in the table below. the results are from the STOP paper [1] with 3 baseline open source systems (1) HuBERT based Seq2Seq model, (2) Wav2Vec 2.0 based Seq2Seq model, (3) cascaded system with a Wav2Vec 2.0 ASR model and BART-based semantic parser.

| Model               | Exact Match |
|---------------------|-------------|
| Wav2Vec 2.0 [1]     | 68.70       |
| HuBERT [1]          | 69.23       |
| Cascaded System [1] | 72.36       |

## Track 2: On-device
A critical use case for end-to-end spoken language understanding is on-device modeling, allowing us to build compressed systems. The goal of this track is to build the highest quality model **with a limit of 15 million parameters.**

Selection Criteria: 
1. Highest EM within 15 million parameters. Exclusively open source models and data.
2. Second highest EM within 15 million parameters. Exclusively open source models and data.

**Baselines:** None provided at this parameter count

| Model | # Parameters | EM |
|-------|--------------|----|
| N/A   |              |    |

## Track 3: Low-resource Domain Adaptation

Due to the multi-domain nature of the STOP dataset and the relevance of domain scaling in language understanding [2], our third track consists of low-resource domain transfer. Each trained model targets one of the held out domains (weather and reminder).

Given access to the full resource datasets from 6 held-in domains (alarm, event, messaging, music, navigation, timer), as well as a low resource train set from a held out domain (either weather or reminder), train a domain-specific model which achieves the highest EM on the held-out test set (weather or reminder). The low-resource train sets give access to a dataset with 25 samples per intent/slot for training.


**Samples Per Intent/Slot (SPIS):** Samples per intent slot is a data sampling strategy to uniformly sample X samples for each intent and slot. We leverage this measure to create predefined dataset splits for low-resource training that are released alongside the STOP dataset.

**Selection Criteria:** We will select the best model with the highest average EM when trained on the reminder and weather 25 SPIS split. Exclusively open source models and data.

**Baselines:**  We present baselines for this challenge in the table below from the STOP dataset [1]. The reported HuBERT [4] model consists of 3 stages. First the HuBERT model is pre-trained with the ASR task on the held-in STOP dataset, second the HuBERT model is further trained on the SLU task on the held-in data, and third the model is adapted to each of the held-out domain (weather 25 SPIS and reminder 25 SPIS)

| Model      | Reminder 25 SPIS EM | Weather 25 SPIS EM | Average EM |
|------------|---------------------|--------------------|------------|
| HuBERT [1] | 15.38               | 46.77              | 31.08      |

# References

[1] Tomasello, P., A. Shrivastava, D. Lazar, P. chun Hsu, D. Le, A. Sagar, A. M. Elkahky, J. Copet, W.-N. Hsu, Y. Mordechay, R. Algayres, T. Nguyen, E. Dupoux, L. Zettlemoyer, and A. rahman Mohamed (2022). Stop: A dataset for spoken task oriented semantic parsing. ArXiv abs/2207.10643

[[2207.10643] STOP: A dataset for Spoken Task Oriented Semantic Parsing](https://arxiv.org/abs/2207.10643?context=cs)

[2] Chen, X., A. Ghoshal, Y. Mehdad, L. Zettlemoyer, and S. Gupta (2020). Low-resource domain adaptation for compositional task-oriented semantic parsing. CoRR abs/2010.03546.

[[2010.03546] Low-Resource Domain Adaptation for Compositional Task-Oriented Semantic Parsing](https://arxiv.org/abs/2010.03546)

[3] Le, D., A. Shrivastava, P. Tomasello, S. Kim, A. Livshits, O. Kalinli, and M. L. Seltzer (2022). Deliberation model for on-device spoken language understanding. In INTERSPEECH.

[[2204.01893] Deliberation Model for On-Device Spoken Language Understanding](https://arxiv.org/abs/2204.01893)

[4] Hsu, W., B. Bolte, Y. H. Tsai, K. Lakhotia, R. Salakhutdinov, and A. Mohamed (2021). Hubert: Self-supervised speech representation learning by masked prediction of hidden units. CoRR abs/2106.07447.

[[2106.07447] HuBERT: Self-Supervised Speech Representation Learning by Masked Prediction of Hidden Units](https://arxiv.org/abs/2106.07447)

[5] Baevski, A., H. Zhou, A. Mohamed, and M. Auli (2020). wav2vec2.0: A framework for self-supervised learning of speech representations. CoRR abs/2006.11477.

[[2006.11477] wav2vec 2.0: A Framework for Self-Supervised Learning of Speech Representations](https://arxiv.org/abs/2006.11477)