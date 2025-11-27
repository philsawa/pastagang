// "nudel 2025-03-21 22:33" @by pastagang

//pane 1
$: note("[7 - 6 7 7 6 5 7 - 7 6 7 7 6 5 -, <10 11 12 13 [14 15]>(5,16)]")
.scale("G2:minor:pentatonic")
.dec(.2)
.fm(1)
.lpdecay(0.1)
.lpf(100)
.lpenv(9)
.delay(0.3)
.room(0.5)
.size(8)
.scaleTranspose("<0 -2>/4")
//pane 2

hubda('mot4i/garden')

//pane 3
// the chill zone \\

speechda('noodel')
speechda('my_beloved')
speechda('on_the_internet')
speechda('on_my_computer')

$: s("bd <sd [sd - - bd] cb [cb - bd bd]>").speed(0.4)
.coarse(2)
.crush(8).bank("RolandTR707")

$: s("hh*4")
.coarse(2)
.crush(8)
.lpf(5000)

$: s("<noodel - my_beloved - on_the_internet - on_my_computer ->")
.hpf(sine.range(200, 2000))
//pane 4
shape(100,0.1,0).diff(shape(30,0.09,0.0))
.add(shape(100,0.05).scrollX(0.1).rotate(0.0,3))
.add(shape(100,0.03).scrollX([0.4,0.6].smooth()).rotate(0.0,1))
.add(shape(100,0.02).scrollX(0.65).rotate(0.0,0.5))
.add(shape(100,0.05).scrollX(0.7).rotate(0.0,0.2))
.scale(1,9/16)
.blend(src(o0),0.99)
.mult(solid(0.999,0.999,0.999))
.out(10)

src(10).thresh(0.16,0.0)
.diff(src(10))
.scale(0.05)
.scrollY(0.0,0.1)
.modulateScale(gradient().g().rotate(3.14/2).kaleid(4)
   .sub(gradient().g().scale(1).kaleid(3).scrollY(0.0,0.5))
    .sub(osc(10,0.3).brightness(-0.9)),()=>fft(1,4)*4+0.1)
.invert()
.color(0.6,0,0.3)
.invert()
.sub(src(o1).scale(1.002),0.5)
.hue(()=>time*0.2)
.out(0.1)

render(0.1)


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