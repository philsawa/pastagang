// "nudel 2025-04-12 21:25" @by pastagang

//pane 1


setcps(0.42)

$:
 n("[0 1 2 3]*16, [7 5 3 7 0 12 10 9 8](19,20)".mul("<1 1.2 1.4 1.5 1.8!2 1.9!2 2!2>"))
.scale("E2:minor")
.s("supersaw")
.n(0.2)
.lpf(1000)
.lpq(8)
.lpe(sine.range(1,6).slow(4))
.lpdecay(0.1)
.postgain(saw.range(0.0,0.8).fast(4).pow(2.0))
.transpose("<0 -4 -6>/4")
.delay(0.05)
.room(0.3)
.size(4)
.orbit(2)

$: s("bd*4,  [- - [oh hh] cr]")
.bank("LinnDrum")
.n(0)
.room(0.4)
.size(1.0)
.orbit(1)
.coarse(2)
.lpf(900)
.crush(8)
.gain(.6)
.clip(.65)
.attack(.17)
.rarely(jux(press))
//pane 2
voronoi(2)
.mult(osc(0.5,0.5,5))
.modulateRotate(o0)
.mask(shape(8).repeat(2,1).modulateScale(voronoi(2)))
.modulateScrollX(o0)
.invert() //i regret that

.out(o0)

render(o0)
//pane 3
$: s("bd sd [bd [bd bd] ]sd |[[bd sd][bd bd]] rim og cb").bank("RolandTR707").lpf(750)
//pane 4



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