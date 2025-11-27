// "nudel 2025-03-06 19:32" @by pastagang

//pane 1

$: n("<[0 2 <4 6> 5]!2 [1, 4, 7]>")
.scale("D4:dorian")
.s("sawtooth").lpf("<500 1000 1500 2000>*4").decay(.1).gain(3)




//pane 2
useStrudelCanvas(s0)

shape([2,4,5].smooth(.5))
//.blend(shape(1),.3).colorama(.02)
.color([.2, 3, 1,.7].smooth(6),.5,.9)
.thresh(.25)
.add(src(s0).color(1,0,.1))
.modulateScale(osc(1,()=>fft(1,1.2)).modulateKaleid(voronoi(0.1)))
.out(o2)

render(o2
 )

// hey we're at a meetup right now :)
// how can me make the visuals smoother?

//pane 3
$: s("- bd [sd sd] [bd, <hh hh ->] - rim - <bd sd>")
.bank("ViscoSpaceDrum")
.off("<.115!3 .75>", x=>x.gain(.15))

$: note("e1*4").s("sine").pcurve(1).penv(-48).decay(.8).lpf("1200:4").gain(2.5)
//pane 4

//pane 5
$: s("bd [rm(6, 7) sn*3]")
//pane 6
$: s("bd sd(5,8)").bank('RolandTR707').off("<1.75 0.15>", x=>x.gain(.125))


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