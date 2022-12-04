"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[469],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(a),m=r,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||s;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,i=new Array(s);i[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<s;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},4642:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const s={sidebar_position:2},i="Semantic Parsing and the STOP Dataset",o={unversionedId:"semantic_parsing",id:"semantic_parsing",title:"Semantic Parsing and the STOP Dataset",description:"What is semantic parsing and the annotation format?",source:"@site/docs/semantic_parsing.md",sourceDirName:".",slug:"/semantic_parsing",permalink:"/spoken_task_oriented_parsing/docs/semantic_parsing",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Call for Participation",permalink:"/spoken_task_oriented_parsing/docs/call_for_participation"},next:{title:"Challenge Tracks",permalink:"/spoken_task_oriented_parsing/docs/challenge_tracks"}},l={},p=[{value:"What is semantic parsing and the annotation format?",id:"what-is-semantic-parsing-and-the-annotation-format",level:2},{value:"Task Definition",id:"task-definition",level:2},{value:"Metrics",id:"metrics",level:2},{value:"STOP Dataset",id:"stop-dataset",level:2},{value:"Dataset Statistics",id:"dataset-statistics",level:3},{value:"Low Resource Splits",id:"low-resource-splits",level:3},{value:"LICENSE",id:"license",level:3},{value:"Citation",id:"citation",level:2}],c={toc:p};function d(e){let{components:t,...s}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"semantic-parsing-and-the-stop-dataset"},"Semantic Parsing and the STOP Dataset"),(0,r.kt)("h2",{id:"what-is-semantic-parsing-and-the-annotation-format"},"What is semantic parsing and the annotation format?"),(0,r.kt)("p",null,"Semantic parsing is the task of converting a user\u2019s request into a structured format for executing tasks. Examples are given in the table below from the STOP dataset. Each parse consists of 2 key components: Intent and Slot.  As an example consider ",(0,r.kt)("inlineCode",{parentName:"p"},"\u201cwhat is the weather in seattle\u201d")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Intent:")," Intention of a user based on predefined intent labels (",(0,r.kt)("inlineCode",{parentName:"p"},"intent = get weather"),")")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Slot:")," Slots correspond to relevant arguments for each intent (",(0,r.kt)("inlineCode",{parentName:"p"},"slot = {location: weather}"),")")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Compositionality:")," As queries continue to grow more complex, intent and slot filling as a flat structure no longer suffices. Consider \u201cDirections to the Eagles Game\u201d in order to parse this example, our meaning representation encompasses nested intents and slots. An example is depicted in the figure below where This query can be phrased with nested intents and slots to provide a granular definition of the users intent."))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Example Parse",src:a(8678).Z,width:"854",height:"562"})),(0,r.kt)("h2",{id:"task-definition"},"Task Definition"),(0,r.kt)("p",null,"Concretely in this task, you are asked to produce the semantic parse as a linearized tree structure (Output in the table below), given an audio sample (input in the table below). Our baseline system ","[1]"," proposes this as a sequence-to-sequence task leveraging HuBERT ","[4]"," and Wav2Vec 2.0 ","[5]"," as the underlying encoder representations with a transformer decoder. "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Input"),(0,r.kt)("th",{parentName:"tr",align:null},"Output"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Audio: Directions to the Eagles Game"),(0,r.kt)("td",{parentName:"tr",align:null},"[IN:GET_DIRECTIONS [SL:DESTINATION [IN:GET_EVENT ","[SL:NAME_EVENT Eagles ][SL:CAT_EVENT game ]"," ] ] ]")))),(0,r.kt)("h2",{id:"metrics"},"Metrics"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Exact Match"),": We compute the exact match of the predicted output and the annotated parse in the dataset comparing the intent/slot labels as well as leaf slot text. "),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Example Metric",src:a(8808).Z,width:"752",height:"378"})),(0,r.kt)("p",null,"In the examples above we show examples of correct and incorrect semantic parses for the utterance ``what is the weather in seattle at 6pm''. The first example is correct because the two parses match exactly in output. The second parse is incorrect because the slot text (seattle vs sf) is different. The third parse is incorrect because seattle was incorrectly labeled as a date time."),(0,r.kt)("h2",{id:"stop-dataset"},"STOP Dataset"),(0,r.kt)("h3",{id:"dataset-statistics"},"Dataset Statistics"),(0,r.kt)("p",null,"The STOP (spoken task oriented parsing) dataset is the largest most semantically complex end-to-end spoken language dataset. It contains over 200000 audio files from over 800 different speakers. The text utterances and semantic parses are taken from TOPv2 ","[2]"," which contains 125K unique utterance parse pairs, across 8 different domains, alarm, event, messaging, music, navigation, reminder, timer and weather. Crowd workers were requested to record themselves speaking each utterance through Amazon's Mechanical Turk. Two audio recordings were taken of every utterance in the validation and test set, and one for each utterance in the train set. The semantic parse may contain nested intents or in other words compositional queries."),(0,r.kt)("h3",{id:"low-resource-splits"},"Low Resource Splits"),(0,r.kt)("p",null,"Along with the overall dataset, the STOP dataset supplies additional dataset splits for low-resource learning. Specifically, the STOP dataset provides low-resource train and validation sets for the \u201creminder\u201d and \u201cweather\u201d domains, each with 25 Samples Per Intent-Slot (SPIS) ","[2]",". The construction of these low-resource sets ensures that each intent and slot type is present in the low-resource train set in at least 25 samples. The reminder and weather train sets have 480 and 162 samples, respectively, and their validation sets have 328 and 139 samples, respectively."),(0,r.kt)("h3",{id:"license"},"LICENSE"),(0,r.kt)("p",null,"The license for the dataset can be found here: ",(0,r.kt)("a",{parentName:"p",href:"https://dl.fbaipublicfiles.com/stop/LICENSE.txt"},"https://dl.fbaipublicfiles.com/stop/LICENSE.txt")," "),(0,r.kt)("h2",{id:"citation"},"Citation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"@inproceedings{stop2022,\n  author    = {Paden Tomasello and Akshat Shrivastava and Daniel Lazar and Po-Chun Hsu and Duc Le and Adithya Sagar and Ali Elkahky and Jade Copet and Wei-Ning Hsu and Yossef Mordechay and Robin Algayres and Tu Anh Nguyen and Emmanuel Dupoux and Luke Zettlemoyer and Abdelrahman Mohamed},\n  title     = {{STOP: A dataset for Spoken Task Oriented Semantic Parsing}},\n  booktitle   = {CoRR},\n  eprinttype = {arXiv},\n}\n")),(0,r.kt)("h1",{id:"references"},"References"),(0,r.kt)("p",null,"[1]"," Tomasello, P., A. Shrivastava, D. Lazar, P. chun Hsu, D. Le, A. Sagar, A. M. Elkahky, J. Copet, W.-N. Hsu, Y. Mordechay, R. Algayres, T. Nguyen, E. Dupoux, L. Zettlemoyer, and A. rahman Mohamed (2022). Stop: A dataset for spoken task oriented semantic parsing. ArXiv abs/2207.10643"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/2207.10643?context=cs"},"[2207.10643] STOP: A dataset for Spoken Task Oriented Semantic Parsing")),(0,r.kt)("p",null,"[2]"," Chen, X., A. Ghoshal, Y. Mehdad, L. Zettlemoyer, and S. Gupta (2020). Low-resource domain adaptation for compositional task-oriented semantic parsing. CoRR abs/2010.03546."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/2010.03546"},"[2010.03546] Low-Resource Domain Adaptation for Compositional Task-Oriented Semantic Parsing")),(0,r.kt)("p",null,"[3]"," Le, D., A. Shrivastava, P. Tomasello, S. Kim, A. Livshits, O. Kalinli, and M. L. Seltzer (2022). Deliberation model for on-device spoken language understanding. In INTERSPEECH."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/2204.01893"},"[2204.01893] Deliberation Model for On-Device Spoken Language Understanding")),(0,r.kt)("p",null,"[4]"," Hsu, W., B. Bolte, Y. H. Tsai, K. Lakhotia, R. Salakhutdinov, and A. Mohamed (2021). Hubert: Self-supervised speech representation learning by masked prediction of hidden units. CoRR abs/2106.07447."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/2106.07447"},"[2106.07447] HuBERT: Self-Supervised Speech Representation Learning by Masked Prediction of Hidden Units")),(0,r.kt)("p",null,"[5]"," Baevski, A., H. Zhou, A. Mohamed, and M. Auli (2020). wav2vec2.0: A framework for self-supervised learning of speech representations. CoRR abs/2006.11477."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/2006.11477"},"[2006.11477] wav2vec 2.0: A Framework for Self-Supervised Learning of Speech Representations")))}d.isMDXComponent=!0},8808:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/exact_match_example-9164af3fd122f68b2efdb1573e623fa0.png"},8678:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/example_parse_stop-f607a5a2e106e5b07544f484158f2459.png"}}]);