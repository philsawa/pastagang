// "nudel 2025-05-02 23:27" @by pastagang

//pane 1

//bass
$: n(`0 7 - 0
- - 0 7 
- - 0 1
- - 0 4
`).s("square").scale("<A1!8 E2!8>:minor")
.shape(.75)
.lpf(sine.range(200, 667).slow(7))
.lpq(sine.range(4, 8).slow(9))
.lpenv(sine.range(.1, 1).slow(3)).fm(.15)
.when("<0!8 1!8>", x=>x.off(.125, x=>x.add(note(7))))
.when("<0!4 1!2>", x=>x.ply(2).clip(.6))


all(x=>x.when("<0!4 1!2>", x=>x.euclidLegato(12,16)))

//pane 2


noise(1,1)
  .color(.3,0,.4)
  .diff(voronoi(20).color(.5, .3, .4))
.diff(osc(5,-.5, 3).rotate(() => fft() * 3,.1))
  .mask(shape([3, 10 , 2].fast(1/4),() => fft() *.3 + .5).rotate(0,-.5))
  .hue(() => fft() / 3 + time / 7)
  .modulateRotate(osc(10, .8), () => fft() * 2)
  .posterize(8)
  .rotate(0,.1)
  .scrollX(() => fft() * .23,-.3)
  .scrollY(() => fft() * .5)
.out(o0)

render(o0)
//pane 3
samples('github:mot4i/garden')
// aww i missed it
//s("0 1 1 2 1 0") //more power
// :) :D
$: s("[bd, hh] hh sd:3 <hh*<1 1 1 2> [[bd, oh] -]>").fast(2)
.bank("bossdr110, garden").gain(1.75)
.sometimesBy(.05, x=>x.ply("<2!4 4>"))
.when("<0!8 1!8>", x=>x.iter(4))
.when("<0!8 1!4>",x=>x.striate(2))

$: s("sd:1(3,8)*2").bank("tr909").gain(1.5).speed(.8)
.mask("<0!12 1!4>").shape(.35).crush(7)

$: sound("bd:4*4").bank("garden").gain(2)
//pane 4
$: n("<<[0 7] 0!3> 3 2 [1 2]>*<4!7 6>")
.scale("<A1!8 E1!8 >:<minor!8 minor:pentatonic!4>")// :)
.sound("gm_electric_bass_finger")
.gain(1.2).lpf("250:4").shape(.35)





// Thanks everyone!
//pane 5
setcps(122/60/4) // haha :)
$: n("<0 2 12 <7 4>>*<4 [2 1]>")
.sound("<gm_sitar>/4")
.scale("<A2!8 E2!8>:indian")// :)
//.fm(10).lpa(3)
//.fmenv(.5).fmattack(.6).fmh(1)
//.lpenv(.1)
.hpf(200)
.off(1, x=>x.transpose("<5!4 7!4>"))
.someCyclesBy(.6, x=>x.ply("<2 4!2 1>*2").clip(.5))
.room(.7)
.gain(1.65).mask("<0!8 1!8>")

$:note("A2").sound("st").gain(.3)
.transpose("<0!8 -5!8>")
.off(0,x=>x.patt(.2))
.cut(1)
.gain(.8)
// haha viel spaß :) // :) Gute Nacht :) 
//// nop i'm finished



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