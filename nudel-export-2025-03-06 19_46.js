// "nudel 2025-03-06 19:46" @by pastagang

//pane 1




saw(700).mul(impulse(4).ad()).mul(.6).out()

//pane 2
useStrudelCanvas(s0)
s1.initImage("https://upload.wikimedia.org/wikipedia/en/8/87/Keyboard_cat.jpg")

shape(4)
.mult(src(s1).scale(0.3))
.modulate(o2, 0.7)
.color([.2, 3, 1,.7].smooth(6),.5,.9)
.blend(
   src(s0)
)
.modulateScale(
    osc(.5,()=>fft(1,1.2) / 10)
    .modulateKaleid(voronoi(0.1))
)
.scale(1.5)
.out(o2)

render(o2)

// hey we're at a meetup right now :)
// am I disturbing? no
// nooo we're just doing a crash course in strudel

// okok you tell me, it's ok if I edit hydra a bit?
// sure
// <3

// hellooo
// hanging out here for a while
//pane 3
samples('github:yaxu/clean-breaks')



$: s("- bd [hh rim sd] [bd, <hh hh ->] - rim - <bd sd hh hh>")
.bank("ViscoSpaceDrum")
.off("<.115!3 .75>", x=>x.gain(.15)).room(.25).slow(.25)



$: note("e1*4").s("sine").pcurve(1).penv(-48).decay(.8).lpf("1200:4").gain(2.5)
//pane 4
$: n("<-12 2 [3, 6, 9]>").s("saxello_vib")
.scale("F2:minor C4:chromatic").decay(.3).gain(5)

spagda('gutso')

$: s("gutso")
.fit()
.chop(2).dec(.2)
.room(.5).gain(2.5).penv(12).ply(1)
//pane 5
$: s("bd*4,bd [rm(6, 7) sn*3]")
.bank("RolandTR909")
//pane 6
$: 
n("0 .. 7").jux(rev)
.chord("<Fm Fm9 Fm7 Fm11>").voicing()
.dec(.4).s("sine").fm(4)
.delay(.5)
.room(.5)


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