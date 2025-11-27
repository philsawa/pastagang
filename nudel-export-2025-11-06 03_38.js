// "nudel 2025-11-06 03:38" @by pastagang

//pane 1

//pane 2
$: s("bd sd").sometimes(ply(6))
//pane 3
$: note("d3 bb3 eb3").s("piano").gain(.43).slow(4).lpf(sine.range(111,800)).room(1)

_$: note("<eb5 ~ ~ ~ ~ ~ ~ ~ eb5 c5 Bb5 eb5>").s("piano").gain(0.34).slow(2).lpf(cosine.range(211,1200)).room(1)

_$: note("67 68").s("sawtooth").room(1).gain(0.13).fast(3).lpf(sine.range(30,500)).pan(rand)
 
_$: note(36).s("pulse").gain(0.55).lpf(222).room(1)

_$: note(55).s("pulse").gain(0.6).lpf(300).room(1)

$: note("<36 36 36 41 36 36 36 29>").s("pulse").gain(0.55).lpf(250)

$: note("<48 48 48 53 48 48 48 41>").s("piano").gain(0.45).delay(1)

_$: note("63 65 67 50").gain(0.17).s("piano").hpf(200).lpf(sine.range(200,1200)).room(0.8_1).fast(2)

_$: note("72 ~ ~ ~ ~ 82 ~ ~ 84 ~ ~ ~ ~ ~ ~ 67").s("piano").room(1.5).delay(1).slow(6).gain(0.46).delaytime(2)

_$: note("75 ~ ~ ~ 78 ~ ~ ~ 79 ~ ~ ~ 80 ~ ~ ~ 82").s("piano").room(1.5).delay(1).slow(7).gain(0.46)
//pane 4
osc(1,1,0)
.color(0.2,0.3,()=>fft()*.9)
.rotate(0,.1)
.pixelate(6,6)
.modulate(
noise(.1,.1),5
)
.scale(.25)
.modulateScale(
noise(2,.1),.1
)
.posterize(24)
.out()
//pane 5
samples('https://raw.githubusercontent.com/tomandandy/go/main/strudel.json')

$:
s("violinGbm").gain(0.21).loopAt(12).room(0.94).lpf(sine.range(220,2444)).hpf(344)

_$: 
s("violinGbm").gain(0.08).loopAt(4).room(1).delay(0.47).delaytime(1)

_$:
s("synthArp").gain(0.12).loopAt(4).room(1).hpf(320).lpf(sine.range(420,1000))

_$:
s("revGuitar").gain(0.34).loopAt(8).room(1).hpf(300)





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
window.speechda=speechda;window.spagda=spagda;window.spag=spag;window.hubda=hubda;hubda('mot4i','garden');hubda('eddyflux','crate');hubda('yaxu','clean-breaks')