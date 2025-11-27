// "nudel 2025-04-02 23:58" @by pastagang

//pane 1
setcpm(96/4)
$: n("{[0 2 5 7], - 12?, [0 .. <7 9>]/4}%<2 [2 3?] 2 [2 4]>").slow(2)
  .s("piano kawai piano").jux(rev)
  .clip(1)
  .scale("<C!2 F G>:pentatonic").vib("0|0|4|8")
  .scaleTranspose("<0 12>")

$: s("jazz*<1 2 4 [4 3]>").gain(.4)
$: s("[[bd bd bd] rim] [- [bd*6]] sd bd|cb*4|cb*8|cb*16").bank('RolandD70').gain(.5).vib("8")
//more cowbell? )
$: s("white(4,7,2)").clip(.3).gain(".3 .2 .1 .2").delay(.5).postgain(.5)

$: n("0").slow(1).scale("<C!2 F G>:minor").scaleTranspose("-12").s("gm_cello").lpf(200)
//pane 2
// just chillin <3 
// take care

shape(2,.3) //aurora
.repeat(1,6)
.mask(shape(2,.1,.6))
.modulate(noise(6,.3),.05)
.color(1,0,0)
.colorama(.03)
.hue(.9)
.scale(.1)
.modulateScale(gradient().g().invert(),12) //perspective
.blend(o0,.9) 
.modulateScrollY(noise(),.01)
.scrollY(.01)
.out(o0)

solid()
.add( //horizon light
shape(2,.01,.7).color(0.2,0.1,0).scrollY(.6).modulate(noise(3,0)).mult(shape(2,.4).scrollY(.9))
)
.add(voronoi(200,0,10).sub(noise(100,1),.06).luma()) //stars
.add(voronoi(100,0,2).sub(noise(50,1),.1).luma(.8)) //stars
.add(src(o0)) //add aurora
.mult( //mountain foreground
shape(2,.5)
.scrollY(.05)
.modulate(noise(3,0))
.invert()
.mask(shape(1,.3))
.invert()
)
.out(o1)

render(o1)


//pane 3

//pane 4
htedashytdnhmytdfjumj↓ylg,yfgkjhgjghnnkjmnbi7ukjhn


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