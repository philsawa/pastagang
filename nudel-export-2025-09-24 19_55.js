// "nudel 2025-09-24 19:55" @by pastagang

//pane 1
$: s("bd sd [bd bd] -").sometimes(ply(3))
//pane 2

$: n("2(2,8) 1(3,8) 0(4,8)")
.almostNever(x=>x.fast(2))
.scale("[C3|C2|C5?]:minor")
.delay(0.3)
.lpf(8000)
.speed(0.1)
//.lpf(20)
.chop(20)
//.striate(1,10)
.hpf(1400)
.room(2)
.sz(1)
.dec(0.9)

//pane 3
s0.initNudelStream()
useStrudelCanvas(s1)


solid()
// ring
.add(
  shape(3,.65)
  .sub(shape(3,.64))
  .modulateScale(noise(1,2),.007)
)
.add(
  shape(3,.65)
  .sub(shape(3,.64))
  .modulateScale(noise(8,4),.09)
)
.scale(3,12/16)
.diff(
  src(o0)
  .scale(0.99)
)
.diff(
  src(o0)
  .scale(0.99)
)
.out(o0)


src(o3)
.contrast(5)
.repeat(8,8)
.luma()
.scrollY(()=>time*0.3)
//.layer(shape(4,0.2,0.0).color(1,0.6,0.5).hue(()=>time*0.2).rotate(0.0,3).scale(()=>fft(1,4)*4.0).luma(0.1).repeat(16,16))
.modulateScale(osc(1,1).g(),6.0)
.add(src(o2).scale(.95).hue(1.01), .7)
.rotate(.1)
.scale(() => fft(1, 4))
.out(o2)

src(o2)
.diff(
 src(o0)
.modulateScale(noise(10),() => fft(0, 4) * .5 + .05)
 )
.modulateScale(s1, () => fft() * 3 + 4)
.add(s1,.2)
.out(o1)

render(o1)

src(s0)
.mask(shape(4))
.scale(1.5)
.scrollX(-.3)
.scrollY(.2)
.out(o3)




//pane 4

$: n("1 <2!2 -> <- 6!2> <8!2 -> 1 1 [1 1] [1 1]")
.degradeBy(.1)
.sometimesBy(.2, ply(2))
.gain(.5)
.room(.6)

$: n("1*1[<1 1 8>,1](1,1)")
.fm(5).fmh(5.1)
.clip(.3).pan("[.4 .6]*4")
.hpf(2500)
.hpq(12)
.shape(.74)
.penv(100)
.room("[.3 2]")
.gain("[1 .31")
.coarse("[0|4|8|16]*64")

$: n("1 - 5 - ")
.fm(5)
.room(.2)
.hpf(250)
.hpq(2)
.shape(.64)
.penv(20)
.attack(.02)


$: n("-!7 oh")
.bpq(15)
.release(2)
.crush(8)
.room(.4)
.bpf(300)
.distort(2)

$: n("1 * 16")
.struct("x(3,8)*2")
.bpq("0 20")
.slice(3, "<0 2 1>*4")
.jux(rev)
.crush(7)
.room("<.6 1 0>")
.bpf("200 400 500 300")
.distort("<3 0 3>/2")

$: n("0 2 1 3")
.room(3)
.ply(2)
.fm(2)
.dec(.2)
.bpq("1 2")
.lpf("600 900")

all(x => x.pianoroll({color:`white`}))
//pane 6

//pane 7




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