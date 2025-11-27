// "nudel 2025-04-16 20:40" @by pastagang

//pane 1



// I want shapes draw

// where are u?????

$: s("-")
//pane 2


shape(4)
.scale(() => fft() + 1)
.modulate(voronoi().modulate(noise(2)))
.modulateRotate(o1)
.scale(() => fft() / 2 + 1)
.colorama(1.01)
.scale(0.5 * (Math.sin(time) + 1)  * 0.3 + 1.)
.mask(src(o1).scale(3))
.diff(src(o0).scale(.9))
.luma(.1)
.out(o0)

src(o0)
.modulate(osc(() => fft() / 20 + 2))
.mask(
    shape([3, 50])
    .modulate(voronoi().mult(shape([50, 3])))
    .scale(() => fft() / 2 + 2)
    .scrollX(() => Math.sin(time) / 30)
    .scrollY(() => Math.cos(time) / 30)
)
.colorama([.3, .7, 1, 1.01])
.diff(o3)
.out(o2)

osc(20,0.1)
.modulateScale(
    shape(3)
    .modulate(noise(1))
    .repeat(() => fft() + 4, () => fft() + 4)
)
.out(o1)

render(o2)


shape(50)
.scale(1, .5, 2)
.modulate(noise(1.7))
.scrollY(() => Math.sin(time) / 10)
.diff(
    shape(50)
    .scale(1, .5, 2)
    .scrollY(.05)
    .modulate(noise(1.71))
    .scrollY(() => Math.sin(time) / 10)
)
.add(
    shape(50)
    .scale(.2, .5, 2)
    .modulate(noise(1.3))
    .scrollY(-.2)
)
// hello!
// aub is learning hydra
.layer(shape(2,[.15,.5])
.rotate(.15,.10)
.repeat(3,[2,4,8,16])
.scale([.2,.4,.8,1.6],[1,2])
.scrollX(2, [.1,.6])
.scrollY(4, [.02, .04])
)
// .rotate(.2,.8)
// cool!! like the stripes - very cool when they're big
// Hi Laura!

// .layer(shape(4,.4))



.out(o3)
//pane 3
speechda('what_does_that_mean i_dont_know other_default_birds_when')
spagda('birds birds2')
$: s("birds")
.hpf(800)
.clip(1)
.fast(1)
// .slow(2)
// .chop()
$: s("<what_does_that_mean i_dont_know other_default_birds_when>")
.juxBy("<1 -1>", x=>x.speed(1.02))
.slow(3)
.hpf(400)
.lpf(3000)
// .speed("")
.coarse(1)
// hi yoshi
// .lpf(8000)
.delay(.9)
.dt(1)


$: chord("<G^9 Dm C>")
.voicing()
.slow(4)
.dec(8)
.transpose("-7,7")
.dist(.2)
.fm(2)
.penv(10)
// .vib("1:8")
.pattack(.5)
.s("gm_cello")
.room(1)
.gain(.5)
// .vib("2:8")
// .ph(3)
//pane 4
$: s("crow:<1 2 3> - -").delay(0.9).lpf(2200).striate("<1*2 8*2 16!2>")

// HELL YEAH
//CAW CAW CAW 

// striate 16 on crow sounds a bit like a magpie's alarum

$: n("{1 .. 13}%4").scale("Db4:minor").sound("sine, triangle").mask(choose(0, 1, 1)).lpf(1500).sl





//pane 5
$: s("bd - sd - | bd bd sd - | [bd sd] [bd bd] sd -| [sd bd]*2 sd -").bank("LinnDrum").rarely(ply(3))
//pane 6



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