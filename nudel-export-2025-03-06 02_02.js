// "nudel 2025-03-06 02:02" @by pastagang

//pane 1

_$: note("<g3!2 c3 bb3>")
.s("sawtooth")
// .lpf(400)
// .lpa(.6).lpenv(8)
.pdecay(.5).penv(5)
.fm(1)
.fmh(3)
.ply(4)
.echo(2,1/8,.7)
.lpf(9000)
.clip(.5)


speechda("roflcoper", "en-UK")

_$: s("roflcopter")
//pane 2


// sad
// xD
// ok gtg
// same 
// goodnight world
shape({}) // <- forbidden tech
// .diff(o0)
.scale(() => fft(0,1) * 4 + 1)
.scale(0.6)
.out(o0)

src(o0)
.rotate(0,.2)
.out(o1)


// byyyeee agaaaaaain

// byeee it was a blast!

// off to bed now!

// have a nice rest of the night =D
render(o1)


//pane 3
$: s("bd:[0|1|2]")
.room(perlin.range(.1,.6))
.crush(4)
.delay(.8)
.delaytime("<.125 .25 .5 .25>")

$: s("~ crow:1")
.speed("-1|1".mul("<.25 .5 .75 1>"))
.brak()
.delay(.95)
.delaytime(0.1)
.jux(rev)

speechda('this is the end', 'en-US')
$: s("this is the end")
.chop("<2 4 8>")
.striate("<2 4>".slow(2))

$: note("[eb1|eb2](3,8)")
.s("square")
.brak()
.lpf(500)
.gain(1.3)

$: s("hh:2*<8 16>")
.gain(rand)
.hpf(3000)
.crush("<4 6 8 6>/2")
.room(.2)
.pan(perlin)

// ~ love, ani

//pane 4
$: s("bd - - - bd - bd rim ").bank("RolandTR909")
//pane 5



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