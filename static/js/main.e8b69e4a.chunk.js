(this["webpackJsonpml5-creative-examples"]=this["webpackJsonpml5-creative-examples"]||[]).push([[0],{109:function(e,t,a){var o={"./coco-ssd-advanced.png":110,"./ml5_logo.png":25,"./placeholder-image.png":28,"./word2vec-advanced.png":111};function r(e){var t=s(e);return a(t)}function s(e){if(!a.o(o,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return o[e]}r.keys=function(){return Object.keys(o)},r.resolve=s,e.exports=r,r.id=109},110:function(e,t,a){e.exports=a.p+"static/media/coco-ssd-advanced.f30725d2.png"},111:function(e,t,a){e.exports=a.p+"static/media/word2vec-advanced.45d82ced.png"},116:function(e,t,a){"use strict";a.r(t);var o=a(0),r=a.n(o),s=a(7),c=a.n(s),n=(a(54),a(55),a(121)),i=a(11),d=(a(56),a(118)),l=a(3),m=a(120),p=a(126),g=a(125),u=a(124),h=a(123),f=a(122),v=a(28),y={FaceAPI:"magenta",FeatureExtractor:"orange",ImageClassifier:"green",KNNClassifier:"gold",NeuralNetwork:"cyan",PitchDetection:"volcano",PoseNet:"blue",TeachableMachine:"geekblue",SoundClassifier:"purple",UNet:"red",BodyPix:"success",Word2Vec:"warning",objectDetector:"processing"},k=function(e){var t=e.example,o=t.name,s=t.description,c=t.image,n=t.url,k=t.category,A=t.model,j=d.a.Meta;return r.a.createElement(l.a,{xs:{span:24,offset:1},md:{span:12,offset:2},lg:{span:8,offset:2},xl:{span:6,offset:1},onClick:function(){return w(n)}},r.a.createElement(d.a,{hoverable:!0,style:{width:360},cover:r.a.createElement("img",{src:c.length>0?a(109)("./".concat(c)):v,alt:o,width:360,height:216}),actions:[r.a.createElement(i.a,{justify:"center",align:"middle"},r.a.createElement("div",{className:"Action-text"},"Live Demo with Code"),r.a.createElement(f.a,{key:"play",className:"Play-icon"}))]},r.a.createElement(j,{title:r.a.createElement("div",{className:"Name"},function(e){switch(e){case"image":return r.a.createElement(p.a,{style:{color:"#a15ffb"}});case"video":return r.a.createElement(g.a,{style:{color:"#a15ffb"}});case"text":return r.a.createElement(u.a,{style:{color:"#a15ffb"}});case"sound":return r.a.createElement(h.a,{style:{color:"#a15ffb"}});default:return}}(k)," ",o),description:r.a.createElement("div",{className:"Description"},s)}),r.a.createElement(m.a,{color:y[A]},A)))},A=a(26),j=a(25),N=a.n(j);var w=function(){var e=n.a.Header,t=n.a.Content;return console.log("examples: ",A),r.a.createElement(n.a,null,r.a.createElement(e,{className:"App-header"},r.a.createElement("h1",{className:"App-title",onClick:function(){return function(e){var t=document.createElement("a");t.href=e,t.target="_blank",document.body.appendChild(t),t.click(),document.body.removeChild(t),t.remove()}("https://ml5js.org/")}},r.a.createElement("img",{src:N.a,className:"App-logo",alt:"logo"}))),r.a.createElement(t,{className:"App-content"},r.a.createElement("div",{className:"Project-text"},r.a.createElement("h1",null,"ml5 examples"),r.a.createElement("p",null,"Project description Project description Project description Project description ",r.a.createElement("br",null)," Project descriptionProject descriptionProject descriptionProject description")),r.a.createElement(i.a,{className:"Examples-Container",gutter:[16,16]},A.map((function(e,t){return r.a.createElement(k,{key:"card-".concat(t),example:e})})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},25:function(e,t,a){e.exports=a.p+"static/media/ml5_logo.88e082b8.png"},26:function(e){e.exports=JSON.parse('[{"name":"FaceAPI Basic","model":"FaceAPI","category":"image","description":"Switch the eyes / other parts","url":"https://editor.p5js.org/AndreasRef/sketches/j5lMW-XS","image":"coco-ssd-advanced.png"},{"name":"FaceAPI Advanced","model":"FaceAPI","category":"image","description":"Collage of eyes noses and faces as a blend","url":"https://editor.p5js.org/AndreasRef/sketches/3dDj1e28Z","image":"word2vec-advanced.png"},{"name":"FeatureExtractor Classification Basic","model":"FeatureExtractor","category":"sound","description":"2 classes with sound output","url":"https://editor.p5js.org/AndreasRef/sketches/ryLlIOJpX","image":"coco-ssd-advanced.png"},{"name":"FeatureExtractor Classification Advanced","model":"FeatureExtractor","category":"video","description":"Trainable Camera","url":"https://editor.p5js.org/AndreasRef/sketches/BynhuHsqX","image":""},{"name":"FeatureExtractor Regression Basic","model":"FeatureExtractor","category":"sound","description":"Playback rate sound","url":"https://editor.p5js.org/AndreasRef/sketches/HyEDToYnQ","image":"word2vec-advanced.png"},{"name":"FeatureExtractor Regression Advanced","model":"FeatureExtractor","category":"image","description":"Control animation (mr Bean)","url":"https://editor.p5js.org/AndreasRef/sketches/4K_YGuMik","image":"coco-ssd-advanced.png"},{"name":"ImageClassification (MobileNet) Basic","model":"ImageClassifier","category":"sound","description":"Speak sketches out loud","url":"https://editor.p5js.org/AndreasRef/sketches/Sk8M6mqh7","image":""},{"name":"ImageClassification (MobileNet) Advanced","model":"ImageClassifier","category":"sound","description":"Random Rhymes with Rita.js","url":"https://editor.p5js.org/AndreasRef/sketches/Sanvu3ddC","image":"coco-ssd-advanced.png"},{"name":"KNN Classification Basic","model":"KNNClassifier","category":"video","description":"finger tracking + knn","url":"https://editor.p5js.org/AndreasRef/sketches/vyiGyVon9","image":"word2vec-advanced.png"},{"name":"KNN Classification Advanced","model":"KNNClassifier","category":"video","description":"poseNet Touching face","url":"https://editor.p5js.org/AndreasRef/sketches/iIDeY-mKi","image":""},{"name":"Neural Network Basic","model":"NeuralNetwork","category":"image","description":"Basic 100 pix to Sound/Graphics stuff","url":"https://editor.p5js.org/AndreasRef/sketches/BsHF8xevQ","image":""},{"name":"Neural Network Advanced","model":"NeuralNetwork","category":"image","description":"poseNet control graphics (chair)","url":"https://editor.p5js.org/AndreasRef/sketches/0txn4mV9A","image":""},{"name":"Pitch Detection Basic","model":"PitchDetection","category":"sound","description":"Paint while you sing","url":"https://editor.p5js.org/AndreasRef/sketches/XJKg1XLI","image":"word2vec-advanced.png"},{"name":"Pitch Detection Advanced","model":"PitchDetection","category":"sound","description":"Nervours graphs","url":"https://editor.p5js.org/AndreasRef/sketches/tRlMRb4x8","image":""},{"name":"PoseNet Basic","model":"PoseNet","category":"video","description":"Blair Witch Flashlight","url":"https://editor.p5js.org/AndreasRef/sketches/LMneBrcD","image":""},{"name":"PoseNet Advanced","model":"PoseNet","category":"video","description":"Face closeness font","url":"https://editor.p5js.org/AndreasRef/sketches/69CvXL1-C","image":"word2vec-advanced.png"},{"name":"Teachable Machine Image Basic","model":"TeachableMachine","category":"image","description":"Art or Trash with template stickers","url":"https://editor.p5js.org/AndreasRef/sketches/yiBBbzPTr","image":""},{"name":"Teachable Machine Image Advanced","model":"TeachableMachine","category":"image","description":"TM + Snake","url":"https://editor.p5js.org/AndreasRef/sketches/a2pofB1eQ","image":""},{"name":"SoundClassification Basic","model":"SoundClassifier","category":"sound","description":"A game with pretrained model from SoundClassification","url":"https://editor.p5js.org/AndreasRef/sketches/TV0_sCoaa","image":""},{"name":"SoundClassification Advanced","model":"SoundClassifier","category":"sound","description":"Control a system of little objects that can move, rotate, and control how many you want to display.","url":"https://editor.p5js.org/AndreasRef/sketches/Xme4ymb13","image":""},{"name":"UNet Basic","model":"UNet","category":"video","description":"Lo-fi greenscreen with video background","url":"https://editor.p5js.org/AndreasRef/sketches/6NAlS5SH","image":"word2vec-advanced.png"},{"name":"BodyPix Advanced","model":"BodyPix","category":"video","description":"Use BodyPix output as texture in WebGL ","url":"https://editor.p5js.org/AndreasRef/sketches/F--vDBcM","image":""},{"name":"Word2Vec Basic","model":"Word2Vec","category":"text","description":"Word2Vec suggestion tool","url":"https://editor.p5js.org/AndreasRef/sketches/4dlayBySz","image":""},{"name":"Word2Vec Advanced","model":"Word2Vec","category":"text","description":"Shout a word and get close words to float around in space - cat with fish / dog with fishes","url":"https://editor.p5js.org/AndreasRef/sketches/ylEz8k3V","image":"word2vec-advanced.png"},{"name":"COCO-SSD Basic v1","model":"objectDetector","category":"image","description":"Only draw detected stuff","url":"https://editor.p5js.org/AndreasRef/sketches/Q6Ys_Dn4a","image":""},{"name":"COCO-SSD Basic v2","model":"objectDetector","category":"image","description":"Detect animals in images, click them to play back sound!","url":"https://editor.p5js.org/AndreasRef/sketches/oUBuEJHMO","image":"coco-ssd-advanced.png"},{"name":"COCO-SSD Advanced","model":"objectDetector","category":"video","description":"Detect objects from the webcam video and replace objects with emojis","url":"https://editor.p5js.org/AndreasRef/sketches/RDjEGqJjl","image":"coco-ssd-advanced.png"}]')},28:function(e,t,a){e.exports=a.p+"static/media/placeholder-image.d96eca35.png"},49:function(e,t,a){e.exports=a(116)},54:function(e,t,a){},55:function(e,t,a){},56:function(e,t,a){}},[[49,1,2]]]);
//# sourceMappingURL=main.e8b69e4a.chunk.js.map