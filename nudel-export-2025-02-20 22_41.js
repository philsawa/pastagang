// "nudel 2025-02-20 22:41" @by pastagang

//pane 1
$: s("gm_synth_bass_2").chord("<F5 C5>/2").anchor("F2").voicing().arp("<[0 .. <16!2 32>] [0,3 2 8]>")
$: s("kawai").clip(1)
.chord("<F11 C11>/2").anchor("F3")
.voicing()
.arp("[0, 2, <3 4>/2]@2 <1 [0,2,3]*3> [2 3 <[1 2] [4 6]>]".slow(2))
.legato(2)
.room(1).size("<1 1 3 6 6>").orbit(10)
.postgain(0.8).sometimes(x=>x.transpose("0,7"))

//pane 2
$: s("hh hh [oh hh] sd oh sd").bank("RolandTR909")
.speed(sine.range(0.1, 0.5).slow(2)).legato(1)
.coarse(3)
.vib("[1|2|5|10|15|20]:[10|20]")
.hpf(300)
.lpf(1250)
.room(0.7).size(2).orbit(8)
.juxBy(0.8, rev)
.postgain(0.15)
// bye
// gotta go now! was fun jamming :)
//pane 3
$: note("<c5!3 c5 <f4 [<f5 c6>, a4, d4]>>*4").s("gm_kalimba")
.hpf(100)
.room(0.3).orbit(14).jux(rev)
//pane 4
noise(10, .5).thresh()
.color(1,0,0.5).colorama(0.1)
.add(noise(2,0.3)
.color(0,1,.1))
.mask(shape(4))
.modulateScale(noise(2, 0.2))
.rotate(0,.01)
//.scrollY(0,-.005)
.rotate(0,-.05)
.add(src(o1)
.scale(()=>fft(0, 1)*0.7-0.8)
.rotate(0,.2)
,.9)
.blend(src(o1).scale(1.001).modulate(src(o1).scale(.5), 0.4), 0.4)
.out(o1)

render(o1)
//pane 5

speechda('hazlo', 'es-MX')
s("<hazlo>").slow(4).begin(0.05)


//pane 6
$: s("[bd - sd bd bd sd bd - bd - sd bd bd - bd sd ]/2").bank("RolandTR707")


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