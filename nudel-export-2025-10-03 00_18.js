// "nudel 2025-10-03 00:18" @by pastagang

//pane 1
osc().color([4,8].smooth(),4,3).scale(()=>fft(0,2)).kaleid(3).invert().blend(o2,0.7).out()
src(o0).scroll(()=>time/2).out(o1)
src(o1).diff(o0).out(o2)
//pane 2
$: s("white*8")
.dec(.06).rarely(ply(2))
.hpf(5000).hpq(8)


$: chord("<[G C] [D B]>")
.voicing()
// .vib(8)
.struct("x")
.ply("<[7 2] [9 5]>")
.clip(.8)
.fm(1)
.s("triangle,sawtooth")
.fmh(2.0)
.room(.4)
// .ph(.2)
.lpf(3000)
// .hpf(900)
.postgain(1)
// .coarse(4)
.trans("-7,0")

$: s("- hh")
.fast(2)

$: s("[bd:8]*4")
.bank("garden")
// .hpf(300)
.dist(1)
.orbit(2)
.duck(1)
.duckattack(.2)
.lpf(2000)

//pane 3

//pane 4
$: s("[- - - sd] - - [- - sd -]").sometimes(ply("<[3 6] [9 12]>"))



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