// "nudel 2025-02-19 22:58" @by pastagang

//pane 1
$: n("[0@3 <1 4> -2@3 <-3 -1>]/4").scale("F1:major")
.s("gm_synth_bass_2")
.decay(6.0)
.distort("2.0:0.5")
.lpf("[4000 2000]")
.delay("1.0:0.25:0.7")
.room(0.5)
//pane 2
setcpm(120/4)
hubda('mot4i/garden eddyflux/crate')

$: s("bd(5,8,1)").bank("crate")
.end(0.1)
.vib("10:[10|20|30|40]")
.dist(2)
.hpf(1000)
.lpf(3000).room(3).size(0.7).orbit(10)
.postgain(0.3).pan(perlin)
//pane 3
speechda('cut_it_up_into_little_pieces_and_eat_them_yum_yum_yum let_it_grow,trace_the_rays,all_the_rays')

$: s("<trace_the_rays all_the_rays>/4").speed(.5xx)
.superimpose(x=>x.chop(16).jux(rev))
$: 
n("{1 [3 7] 1 3 0}%3")
.add("0,2")
.scale("<F3 C3>:major/2")
.s("gm_flute")
.press()
// .lpf(500)

$: n("[-12, 0, 3, 5, 8] [4 6 1]@3".slow(2)).s("piano")
.chord("<F^9 C9>/2").vib("1:0.05")
.off(0.125, add(n("<2 4 6>/2")))
.voicing()
.dec(1)
.room(0.8).size(3).orbit(6)
.hpf(250).lpf(700).lpenv(-20).lpattack(0.5)
.juxBy(0.8, press())
.clip(1)

//pane 4
s0.initImage(spag('noise'))
s1.initImage(spag('gang'))
s2.initCam()

bpm = 120/4

noise(10, .5).thresh()
.color(1,0.5,0).colorama(0.1)
.add(noise(2,.5)
//.brightness(.2)
.color(0,0,1))
.mask(shape(3))
//.modulateScale(noise(4))
.rotate(0,.01)
.scrollY(0,-.005)
.rotate(0,-.05)


.add(src(o1)
.scale(0.8)
.rotate(0,.2)
,.9)
.blend(src(o1).scale(1.01), 0.5)
// .add(src(s2))
.out(o1)

src(o1)
.add(src(s1)
.color(0,0,1)
,.4)
.scale(()=>fft(0,7)*2)
.mask(shape(2).rotate(0,.2)
.repeat(4)
.modulate(noise(3))
.rotate(0,.3)
.kaleid(4)
)
.out(o2)

render(o1)

//pane 5

speechda('hazlo', 'es-MX')
s("<hazlo>").slow(4).begin(0.05)


//pane 6
$: n("bd - sd bd bd sd bd").bank("RolandTR909")


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