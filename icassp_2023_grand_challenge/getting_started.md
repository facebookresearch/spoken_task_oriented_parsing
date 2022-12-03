| [Call For Participation](call_for_participation.md) | [SLU & STOP Dataset](semantic_parsing.md) | [Challenge Tracks](challenge_tracks.md) | [Rules](rules.md) | [Getting Started](getting_started.md) | [Contact Us](contact_us.md)|
|------------------------|--------------------|------------------|-------|-----------------|------------|

# Getting Started
## Dataset
To download the dataset please proceed to https://github.com/facebookresearch/fairseq/tree/main/examples/audio_nlp/nlu to find the download link.

The low resource splits can be downloaded from this link: http://dl.fbaipublicfiles.com/stop/low_resource_splits.tar.gz 

The downloaded data contains both natural speech (`stop`) and tts (`stop_tts`). Each contains full resource and low-resource train and validation splits, as well as test splits. Each utterance in the validation and test sets have two recordings, with different speakers (`eval_0` and `eval_1`, `test_0` and `test_1`). The manifests reference audio files across these directories for each dataset split. Each manifest is composed of three files: a `.tsv` file referencing the audio files, a `.ltr` file with utterance text, and a `.parse` file with the corresponding semantic parses for the utterances (labels).

In addition to the manifests, to use fairseq you will need to generate dictionaries for both the source and target text. Do so by running the following command from a fairseq repo:

```
./examples/audio_nlp/nlu/create_dict_stop.sh $FAIRSEQ_DATASET_OUTPUT
```

Here `$FAIRSEQ_DATASET_OUTPUT` should point to the location of the `.ltr` and `.parse` files.

## Baselines
At our [github](https://github.com/facebookresearch/fairseq/blob/main/examples/audio_nlp/nlu/) we provide references to several pretrained models as well as their result performance on the test set as a starting point for evaluation.

## Running Experiments
In order to run experiments, we provide an example fine-tuning configuration: https://github.com/facebookresearch/fairseq/blob/main/examples/audio_nlp/nlu/configs/nlu_finetuning.yaml to reproduce our results. 

Example command: 

```
python fairseq_cli/hydra-train  --config-dir examples/audio_nlp/nlu/configs/  --config-name nlu_finetuning task.data=$FAIRSEQ_DATA_OUTPUT model.w2v_path=$PRETRAINED_MODEL_PATH
```
