---
sidebar_position: 4
---

# Rules

## General Rules
* **Open Source submissions:** To compete it is required that all technology (datasets, models) being leveraged comes from open source frameworks; as an example we have provided our baseline system trained and released in fairseq. Final submissions must contain details for reproducibility and are heavily encouraed to release code.
* **Data Usage:** All tracks must not use any human annotated or labeled data for the SLU task aside from the data specified in the STOP dataset. Usage of additional data will lead to disqualification. All datasets are required to be open source and participants need to share the details of the data they use so that results are reproducible. Additional ASR datasets are permitted as long as it does not have human annotated SLU annotations, and follow the same open source and reproducibility restrictions.
* **Model Tuning:** All model tuning must be done on the validation set, please keep the test set blind and leave for final evaluations.
Tie breaks: All ties will be resolved by the committee based on novelty of the methods.

## Quality Track
* Open source submissions must adhere to the open source rules listed above

## On-device Track
* Open source submissions are required
* Data usage and model tuning general rules apply
* Systems must report model size as the number of parameters used in the model 

## Low-resource Track
* **Data Usage:** Low-resource training may only use the low-resource in-domain dataset (reminder / weather 25 SPIS) as well as the full-resource sets from the 6  source domains: data alarm, event, messaging, music, navigation, timer.  
* **Multiple Models:** You may build a separate model for weather than the one for reminder, but the two must follow the same methodology
* **Model Tuning:** Model tuning must be done using the low-resource validation set for each respective domain.

## Winners
* Winners of our competition based on the criteria specified in the tracks above will be invited to submit a 2-page paper to be presented at ICASSP-2023. 
* Winners will also be invited to present their work at a session at ICASSP dedicated to the SLU challenge. Participants are responsible for all costs and expenses associated with attending and speaking at the conference, including, without limitation conference registration fees, transportation and accommodations.

## Intellectual Property
* The participants hold the copyright and intellectual property rights to their models. But the winning team must write a complete report with technology details after the competition that will be used in accordance with the ICASSP’s submission and evaluation process.
* Teams and individual contest participants must comply with all relevant intellectual property laws, rules and regulations, and shall not infringe on the intellectual property rights or other rights and interests of others. Without limiting the foregoing, all data, software, models or other material used in connection with challenge participation must be used pursuant to a valid license with rights sufficient for use in connection with this challenge, including any and all open source requirements. Upon request, participants agree to provide evidence of such consent to challenge organizers. The organizers, contractors, and co-organizers of this contest shall not be liable for any legal consequences.
* Teams and individual contest participants should ensure academic integrity. Once academic misconduct such as code plagiarism or technical plagiarism is discovered, they will be disqualified immediately.

## Additional Terms
* By participating in the creation of or submitting a submission, each participant grants Meta Platforms, Inc. the right to use their name in connection with Meta’s promotion of the challenge and/or workshop.
* To participation, you must, as of the date of participation, (i) be a legal resident of a jurisdiction within the Territory; (ii) be at least eighteen (18) years old and the age of majority in your jurisdiction of residence (e.g., country, province, state, territory, district, etc.); and (iii) not be the target of any trade sanctions administered or enforced by the U.S., EU, United Nations, or UK and are not acting on behalf of entities that are the target of such trade sanctions. “Territory” is any area, country, state, territory, or province where United States or local laws do not prohibit participating or in the challenge, and excludes any country or jurisdiction that is the target of U.S., EU, United Nations, or UK comprehensive trade sanctions (e.g., Crimea, Donetsk, and Luhansk regions of Ukraine, Cuba, North Korea, Iran, and Syria, as such list may be amended). 
* Participants must not be under any legal or contractual obligation that would prohibit their participation in this challenge. If participating in this challenge would result in a violation by the participant of any law applicable to it or any agreement to which they or it are a party, including local export control regulations and any agreement with an employer or educational institution, such participant is ineligible.
* Participants must at all times comply with these Rules and all other requirements set forth on this page and by challenge administrators, all terms and policies applicable to their use of the platform(s) used for participation and submission and the [dataset license](https://dl.fbaipublicfiles.com/stop/LICENSE.txt). 
* Participants are prohibited from performing any biometric processing on data in connection with the challenge (including the creation of models that perform biometric processing), including, without limitation, the creation of a retina or iris scan, fingerprint, voiceprint, scan of hand or facial geometry, or any other biometric identifier as defined under applicable law.
* LIMITATION OF LIABILITY & DISCLAIMER OF WARRANTIES: NOTHING IN HEREIN LIMITS, EXCLUDES, OR MODIFIES OR PURPORTS TO LIMIT, EXCLUDE, OR MODIFY ANY STATUTORY CONSUMER GUARANTEE OR ANY IMPLIED CONDITION OR WARRANTY, THE EXCLUSION OF WHICH FROM THESE TERMS WOULD CONTRAVENE ANY STATUTE OR CAUSE ANY PART OF THESE TERMS TO BE VOID (“NON-EXCLUDABLE GUARANTEES”). SUBJECT TO THE LIMITATIONS IN THE PRECEDING SENTENCE AND TO THE MAXIMUM EXTENT PERMITTED BY ANY MANDATORY PROVISIONS OF APPLICABLE LAW, META PLATFORMS, INC. AND THE CONFERENCE ORGANIZERS (COLLECTIVELY, “THE RELEASED PARTIES”) EXCLUDE FROM THESE TERMS ALL CONDITIONS, WARRANTIES, AND TERMS IMPLIED BY STATUTE, GENERAL LAW, OR CUSTOM, EXCEPT FOR LIABILITY IN RELATION TO A NON-EXCLUDABLE GUARANTEE. SUBJECT TO ANY NON-EXCLUDABLE GUARANTEES, EACH PARTICIPANT AGREES TO RELEASE, HOLD HARMLESS, AND INDEMNIFY (I.E., DEFEND AND/OR REIMBURSE) THE RELEASED PARTIES FROM ANY LIABILITY WHATSOEVER FOR INJURIES OR DAMAGES OF ANY KIND SUSTAINED WHILE PREPARING FOR, PARTICIPATING IN, AND/OR TRAVELING TO OR FROM ANY CHALLENGE- OR CONFERENCE-RELATED ACTIVITY, INCLUDING, WITHOUT LIMITATION, ANY INJURY, DAMAGE, DEATH, LOSS, OR ACCIDENT TO PERSON OR PROPERTY (HOWEVER (BUT ONLY IF REQUIRED BY LAW IN YOUR JURISDICTION), THIS RELEASE, HOLD HARMLESS, AND INDEMNIFICATION COMMITMENT DOES NOT APPLY TO CASES OF BODILY INJURY OR LOSS OF LIFE OR TO THE EXTENT THAT ANY DEATH OR PERSONAL INJURY IS CAUSED BY THE NEGLIGENCE OF RELEASED PARTIES OR OTHER THIRD PARTY, WHERE LIABILITY TO THE INJURED PARTY CANNOT BE EXCLUDED BY LAW). FURTHER, EACH PARTICIPANT AGREES THAT THE RELEASED PARTIES ARE NOT RESPONSIBLE IN ANY WAY FOR ANY ADDITIONAL EXPENSES, OMISSIONS, DELAYS, OR RE-ROUTING RESULTING FROM ANY ACTS OF ANY GOVERNMENT OR AUTHORITY. EACH WINNER AGREES THAT THE CHALLENGE IS PROVIDED AS-IS WITHOUT ANY WARRANTY, REPRESENTATION, OR GUARANTEE (EXPRESS OR IMPLIED, IN FACT OR IN LAW), WHETHER NOW KNOWN OR HEREINAFTER ENACTED, BEYOND ANY NON-EXCLUDABLE GUARANTEES.
