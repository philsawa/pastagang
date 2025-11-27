// "nudel 2025-04-17 11:06" @by pastagang

//pane 1
$: n("1 2 3 4")
.s("gm_voice_oohs")
.clip("1.25 [.8*3 .2]")
.mask("<1 [0 1]>")
.gain(1.5)
.room(.2)
.delay(".5")

$: s("bd <sd * 2 sd*[1 .5]> |bd [- bd] sd bd | [sd bd]*2 [bd sd]*2").pan("[.5 .6]").gain("1 <1*2 [1 .4 .7 .8]>").sometimes(ply(.25 | .75 |.5 | 1.5 | 2))
.bank("LinnDrum")

$: note("<e2!2 <d2 g2> f2 -!4 >* 4 ")
.add(note("<0!2 -2.5 -2 -1.5 -1>/2"))
.off(-1/2, x=>x.speed(-1))
.sound("gm_distortion_guitar")
.n(4)
.delay(".5")
.cut(1)
.scope({scale: 1, pos: .5})


//pane 2
src(o0)
.modulate(noise(3),() => fft() * .01)
.color(.995,.998,1)
.blend(shape(4),() => (1-fft()) * .01)
.hue(0.003)
.out()
//pane 3
// thanks tim follin
// omg yes tim follin hype
$: n("[0 2 4 7 9 11 14]*16".add("<0 1 2 1>"))
.gain(isaw.range(0.2,1).slow(1))
.scale("<G:dorian F:harmonic:minor>/4").postgain(.5).rel(.02).s("square")
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