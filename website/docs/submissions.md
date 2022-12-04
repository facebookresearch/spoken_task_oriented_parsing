---
sidebar_position: 6
---

# Submissions

**Submisison will be due 11:59:59 pm AOE January 24th.**

A submission platform will be shared by 11:59:59 pm AOE on December 20th, 2022.

Below we describe the submission format.

All tracks are required to submit a 2-page paper describing the method used to achieve the results following the [ICASSP Paper Guidelines.](https://2023.ieeeicassp.org/paper-submission-guidelines/)

To make a final submission please share a single `.zip` file containing model summary and predictions on the test set, descriptions for each track are listed below.

Quality Track: 
* `quality_model_summary.txt`: Use Model Summary Format
* `quality_model_predictions.txt`: All model predictions on overall test set, use Model Predictions Format

On-device Track: 
* `ondevice_model_summary.txt`: Use Model Summary Format
* `ondevice_model_predictions.txt`: All model predictions on overall test set, use Model Predictions Format

Low Resource Track: 
* `lr_weather_model_summary.txt`: Model summary of the model used for the weather domain, Use Model Summary Format
* `lr_reminder_model_summary.txt`: Model summary of the model used for the reminder domain, Use Model Summary Format
* `lr_weather_predictions.txt`: All model predictions on weather test set, use Model Predictions Format
* `lr_reminder_predictions.txt`: All model predictions on reminder test set, use Model Predictions Format

**Model Summary Format:** Reported EM and File Size as a text file, an indication whether the techniques used are open source.
**Model Predictions Format:** A TSV file containing, file_id, and model prediction as a string