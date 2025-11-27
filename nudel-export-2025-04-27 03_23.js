// "nudel 2025-04-27 03:23" @by pastagang

//pane 1
// $: s("hh*8")
// // .someCycles(x=> x.fast(2))
// // .rarely(x => x.fast(2))
// .bank("RolandTR909")
// .n(0)

// $: n("8 <5 1> 0 <0 3> 7 0 2 0".fast(2))
// // .rarely(x=>n("-"))
// .someCycles(x => x.rarely(y=>n("-")))
// // .someCycles(x=>n("[0 7]*2 - 0 7 11"))
// .scale("C2:phrygian")
// .s("square")
// .lpf(500)
// .lpdecay(0.9)
// .lpenv(sine.range(1,4).slow(1))
// .lpq(15)

$:n("0 2 4 5 7 9 <11 5> <12 3>")
.scale("C3:locrian")
.s("square")
.lpf(sine.range(100,200)).lpdecay(0.9)
//pane 2
 await loadScript("https://hyper-hydra.glitch.me/hydra-text.js")

//pharmacy visuals
 shape(2,.001,.2)
.mult(noise(10,.5).brightness(.3))
 .scrollY(-.2)
.out(o0)

.voronoi(20,.04,10)
.layer(shape(100,.2).scale(1,1,1.6).scroll(-.25,.25).luma(.5,.1))
.layer(
shape(2).scrollY(-.35).luma(.5,.1).mult(solid(0,.3,.8))
.modulateScrollY(o0,.1)
 )
.rotate(0.0,0.2)
 .pixelate(100,100)
 .scale(1,9/16)
.brightness(0.4)
 .color(0.0,1.0,0.0)
 .out(o1)



// //outputs
 .shape(2,0.25,0)
.add(shape(2,0.25,0).rotate(3.14/2))
.thresh(0.5)
.sub(shape(4,0.9,0).invert())
.scale(1.0,9/16)

// .add(src(o2).rotate(0.0).scale(()=>Math.cos(time*0.3)*0.4),0.999)
// // .out(o2)

.solid(0).add(src(o1).mult(src(o2)))
.add(src(o2).scale(1.03).sub(src(o2)))
.diff(text("farmacia").scale(()=>fft(1,4)*0.3+0.4).pixelate(100,100))
 .color(0,1,0)
// // .out(o3)
// // 
// // render(o3)
//pane 3
$: n("9 2 <4 0> 1 <2 2> 1")
// .someCycles(x => x.fast(2))
.scale("C3:locrian")
// .s("sine")
.s("square").lpf(400)
.room(0.9)

$: s("lt mt ht")
   .someCycles(x => x.slow(2))
   .rarely(x => x.fast(3))
   .bank("RolandTR909")
   .n(0)

//pane 4
$: s("bd ft <lt mt> ht sd <rim cb>").bank("LinnDrum").lpf(700).sometimes(ply(2))
// $: s("[bd <sd [- [bd bd]] sd>]*4").bank("RolandTR505").hpf(100).attack(0.15).decay(.25).lpf(400).gain(6)
// hello :)


function spag(name){return'https://spag.cc/'+name}
function listToArray(stringList){if(Array.isArray(stringList)){return stringList.map(listToArray).flat()}
return stringList.replaceAll(' ',',').split(',').map((v)=>v.trim()).filter((v)=>v)}
async function spagda(nameList){const names=listToArray(nameList);if(names.length===0){return}
const map={};for(const name of names){map[name]=spag(name)}
samples(map)}
async function speechda(wordList='',locale='en-GB',gender='f',){if(wordList.includes(':')){const[localeArg,wordsArg]=wordList.split(':');if(localeArg.includes('-')){locale=localeArg}else{gender=localeArg}
wordList=wordsArg}
if(locale.includes('/')){const[localeArg,genderArg]=locale.split('/');locale=localeArg;gender=genderArg}
const words=listToArray(wordList);if(words.length===0){return}
samples('shabda/speech/'+locale+'/'+gender+':'+words.join(','))}
async function hubda(orgList,repoList=''){const orgs=listToArray(orgList);const orgRepos=[];const orgChoices=[];for(const org of orgs){if(org.includes('/')){const[orgName,repoName]=org.split('/');orgRepos.push({org:orgName,repo:repoName})}else{orgChoices.push(org)}}
const repoChoices=listToArray(repoList);for(const orgChoice of orgChoices){for(const repoChoice of repoChoices){orgRepos.push({org:orgChoice,repo:repoChoice})}}
const addresses=orgRepos.map(({org,repo})=>'github:'+org+'/'+repo);for(const address of addresses){samples(address)}}
window.speechda=speechda;window.spagda=spagda;window.spag=spag;window.hubda=hubda