// "nudel 2025-08-28 21:32" @by pastagang

//pane 1
voronoi(2,0.5).add(gradient())
.add(osc(1,0,0.2)).kaleid(((15)))
.scale(0.55,2.5,3).colorama(.5)

.modulateScale(noise(.1,.1)).rotate(()=>-3*fft(0,8)).blend(o0,.7).scale(.99)
.out(o0)

//pane 2
setcpm(140/4)
$: s("bd*<4!3 [4 8]>, [- mt - lt  - - - ht]").bank("[tr909 | dr550]/2")
$: note("[c2 <-!3 c4>] <c3*2 eb3*3>")
.sound("supersaw").gain(0.5)
speechda('HackGyver two_point_oh')//:)
$: s("HackGyver,<-!7 two_point_oh>").chop(2).jux(rev).gain(.6).rev()

// hello! it's pasta thursday i guess
// we all were here last thursday
// hi
//pane 3
$: n("[0@3 <3 6>] <2 5>").s("crate_bongo").dist(".7:.4")
// $: n("[0 0 0 0 0 2 0 0 3 0 0 0 2 4 2 3]").scale("a:minor").s("square").lpf(400).lpe(2).dec(.6).lpq(16).dist(.5).degrade()
$: chord("[- <C Am>/[<1 4>/4]]*4").voicing().gain(.3)
.s("sawtooth").lpf(300).lpe(5).dist(1).fm(2)
.room(.5)

$: s("bd*16, - sd - sd, rd*4")
.bank("dr550")
.n(1)
.decay(0.2)
.gain(saw.range(1.0,0.5).fast(4))
//pane 4
$: s("[- hh*2]!3 [- hh <hh [hh|oh]>@2]").bank("tr909")
.gain(.5).clip(1).speed(1.2)



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