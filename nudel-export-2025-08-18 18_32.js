// "nudel 2025-08-18 18:32" @by pastagang

//pane 1
setcps(0.45)

$: s("apache/2")
.fit()
.slice(32,run(32).slow(2))
.cut(1)

$: s("- sd - sd").bank("dr550").gain(.8)

// aaaaaaaaah inverted colors!
//pane 2
shape(2,0.02,0.0)
.color(1,0,0)
.modulateScrollY(noise(5).pixelate(2,1).blend(noise(10,3.0).pixelate(32,1).scrollX(0.0,0.2),0.2))
.diff(src(o0).scale(1.01).brightness(-0.005).hue(0.005))
.out(o0)

src(o0)
.diff(src(o1).rotate(0.005).scrollX(0.001,0.0))
.out(o1)

render(o1)
//pane 3
$: n("- 4 [6 5] 7").scale("G4:phrygian")
.s("sawtooth")
.dec(.2).lpf(100).lpe(6).lpq(12)
.fm(2)
.sometimes(x=>x.off(1/16,x=>x.transpose("12 | -12")))
.sometimesBy(.3, x=>x.ply("2 | 3"))
.coarse(8)
.sometimesBy(.1,x=>x.room(".5"))

//pane 4
$: s("bd:8*2")
.bank("garden")
.sometimes(ply("2 1 1 4"))

$: note("g2(5,8)")
.s("supersaw")
.dist(1)
.clip(.5)












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