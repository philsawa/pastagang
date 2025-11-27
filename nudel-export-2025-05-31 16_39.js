// "nudel 2025-05-31 16:39" @by pastagang

//pane 1
$: s("bd:3*4, [- sd*[1 2 4 8 16 <3 32>]]/4*2").bank("garden")
.clip(0.9)
.gain(0.6)
// .hpf(1000)

$: s("hh*<8 8 [8 8 8 16] >")
.clip(0.7)
.gain(1.1).delay(0.2).dec(.02)
// .speed(.8).gain(rand)

$: s("clap(5,8)")
.clip(.5)
.room(.4)


//pane 2

src(s0)
.modulate(noise([1,2,3,4]))
.scale([1,2].smooth())
// .kaleid(1)
.out()
//pane 3

$: s("crow h").delay(.6).room(.5)

$: n("<0 1 [2 3] 4 5>*8")
.s("crate_bongo")
.jux(rev) // thanks yaxu
.rarely(ply("2"))
.dec(.05)
.gain(0.5)
//pane 4
$: note("<g2*2 f2*2>").lpf(200)
.s("supersaw")
.dec(.2).lpe(1).lpd(.2)
.delay(.8)
//pane 5
$: s ("hh*5 hh*2 hh*3 hh*6 hh*1 hh*3 hh bd")
.hpf (sine.slow(9).range(20,9000))
.delay(.5)
.gain(0.1).dec(.1)
.room(1)

//pane 6
$: chord("<Dm9(3,9)*8/9>").dec(.2)
.voicing().gain(.5).delay(.5).room(.5)
.fm(1.5)



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