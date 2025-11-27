// "nudel 2025-11-22 04:36" @by pastagang

//pane 1


const progression = "<0 4 5 2 3 0 3 <4 [4 -1]>>*4"

const key = "c:major"

$bass: n(progression)
.slow(4)
.segment(1)
// .degradeBy(0.2)
// .rib(0, 8)
.scale(key)
.sound("supersaw")
.lpf(2000)
.transpose("-12")
.superimpose(x=>x.strans("- 2 4 6 7 5 3 1").seg(8)) 

const ambientLead = "<0 2 4 <<7 7 6 7> <8 8 7 8> 9 <10 10 10 11>>>*8"
_$ambient: n(ambientLead).scale(key)
.gain(0.2)
.sound("gm_pan_flute")
.delay(0.4)
.transpose("12,24")
.lpf(1800)
.room(1).roomsize(10).pan(sine.slow(3))

_$ambientHarmony: n(ambientLead.add(9)).scale(key)
.gain(0.5)
.sound("supersaw")
.lpf(500)
.delay(0.4)

$ambient2: arrange(
[8, "<4 6 7 11 12 11 9 8>"],
[8, "<9 6 7 11 12 11 12 13>"],
[8, "<11 8 7 6 7 8 9 <10 5>>"]).n().scale(key).transpose("24").gain(0.15)
.sound("gm_flute").room(1).roomsize(10).delay(0.5)
//pane 2
//ahhhhhhhhhhhhhhhhhhhh...hhh(hhhh)

$: s("<bd:4>*4").bank("garden").duck(1).orbit(2).duckdepth(0.4).gain(0.4).lp(200)

$: s("sd:1").segment(16).degradeBy(0.7).rib(0,4).bank("tr909").gain(0.1)
$: s("sd:1").struct("<0 0 0 0 1 0 0 1 0 1 0 0 1 0 0 0>*16").bank("tr909").gain(0.3)

$: s("white*16").dec(.1).gain(saw.range(.3,.1).fast(4)).mask("x(7,16,[0,2])")
//pane 3
setcpm(100/4)
//pane 4
s0.initVideo('https://upload.wikimedia.org/wikipedia/commons/c/c1/KSC-05-S-00106_%28ksc_051005_sssr%29.webm')
osc(800, .1, 1)
.rotate(Math.PI*0.5)
.add(noise(1000,5))
.brightness(-0.4)
.blend(src(s0).scale(0.6), 
[0.6,0.6,0.6,0.5,0.2,0.4,0.6,0.7,0.5, 0.5].ease("easeInOutCubic").fast(2))
.mask(shape(0, 0.7).mask(shape(4, 0.51)))
.modulateScale(shape(0, 0.6, 0.6), (()=>0.3+fft()*0.25))
.out()
//pane 5
$: s("bd [- bd] sd -").sometimes(ply(2)).bank("tr707").room(.25) // ABSOLUTE BANGER
// (literally banging on the drum kit hard as fuck)

// xDDD


// Maybe we don't need this anymore
// - We don't allow exporting to strudel anymore
// - We aren't really keeping compatibility with flok anymore either
function spag(name){return'https://spag.cc/'+name}
function listToArray(stringList){if(Array.isArray(stringList)){return stringList.map(listToArray).flat()}
return stringList.replaceAll(' ',',').split(',').map((v)=>v.trim()).filter((v)=>v)}
async function spagda(nameList){const names=listToArray(nameList);if(names.length===0){return}
const map={};for(const name of names){map[name]=spag(name)}
window.samples(map)}
async function speechda(wordList='',locale='en-GB',gender='f',){if(wordList.includes(':')){const[localeArg,wordsArg]=wordList.split(':');if(localeArg.includes('-')){locale=localeArg}else{gender=localeArg}
wordList=wordsArg}
const words=listToArray(wordList);if(words.length===0){return}
const samplesObject={}
for(const word of words){samplesObject[word]='/fuck_off_ay_eye_music.wav'}
window.samples(samplesObject)}
async function hubda(orgList,repoList='samples'){const orgs=listToArray(orgList);const orgRepos=[];const orgChoices=[];for(const org of orgs){if(org.includes('/')){const[orgName,repoName]=org.split('/');orgRepos.push({org:orgName,repo:repoName})}else{orgChoices.push(org)}}
const repoChoices=listToArray(repoList);for(const orgChoice of orgChoices){for(const repoChoice of repoChoices){orgRepos.push({org:orgChoice,repo:repoChoice})}}
const addresses=orgRepos.map(({org,repo})=>'github:'+org+'/'+repo);for(const address of addresses){window.samples(address)}}
if(!window.samples){window.samples=function(){}}
hubda('mot4i','garden')
hubda('eddyflux','crate')
hubda('yaxu','clean-breaks')
window.speechda=speechda;window.spagda=spagda;window.spag=spag;window.hubda=hubda