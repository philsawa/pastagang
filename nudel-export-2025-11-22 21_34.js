// "nudel 2025-11-22 21:34" @by pastagang

//pane 1
samda('let_people_liv let_code_die', {
sing:true,

question:true,
})

//$: s("hello_world_are_we_live/2").room(1).gain(.3)
$: s("<let_people_liv let_code_die>/2") // there it is
.room(1).gain(1).hpf(200).delay(.5)


setcpm(122/4)


$: 
n("<3!5 8!2 9!4>*8").rel(.1).clip(.75)
.scale("[c1]:dorian")
//.off(1/4,trans("12"))
.dist(1.3).lpf(120).lpe(4).lpa(.2)
//.add(note(0)).room(.5)
.s("saw,sine").rel(.1)//.vib("3:.3")
.postgain(1)
//pane 2
s0.initImage("https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Flag_of_Palestine.svg/1280px-Flag_of_Palestine.svg.png")

noise(1)

.modulate(noise(1), ()=>fft())
.hue(()=>(time/10)%100)
.modulateRotate(osc(P("2 2.5")).blend(o0,.5).scale(0.75))
.pixelate(100,100)
.modulateRotate(noise(100),1)
.mask(noise(20).kaleid(10))
.diff(o0,P(".5 .5 .5 .98"))
.diff(noise(P("6 8 10 12"), 1.8).blend(o0,P(".8 .9 .95 .8 .999 .5 .8 .9")).modulateScale(o0, 1.1))
.blend(src(s0), .3)
.scale(0.33).mask(shape(4))
.repeat(P("1 4 8 12 16"),P("1 3 6 9 12"))
.out()



//pane 3

//I feat thr that this is extremely doffifoffoifficult to add toel
// yes :)
$: s("<white*3 white*8>").dec(.1).pan("<-.7 .7>*2").dist(1.5)



//$: s("[- <- pink>]*2").dec(.3).dist(3).room(.5)




//pane 4
$: n("9 8 7 4 3 2 1 0").a
.scale("C5:dorian")
.fm(1)
.fmh(2.01)
// .dist(1)

//pane 5

//pane 6
$: s("- cp*<1 1 1 2> - cp").speed(".9,1,.8").room(1).dist(1.2).off(-1/16, x=>x.velocity(.2))





// Maybe we don't need this anymore
// - We don't allow exporting to strudel anymore
// - We aren't really keeping compatibility with flok anymore either
function spag(name){return'https://spag.cc/'+name}
function listToArray(stringList){if(Array.isArray(stringList)){return stringList.map(listToArray).flat()}
return stringList.replaceAll(' ',',').split(',').map((v)=>v.trim()).filter((v)=>v)}
async function spagda(nameList){const names=listToArray(nameList);if(names.length===0){return}
const map={};for(const name of names){map[name]=spag(name)}
window.samples(map)}
async function speechda(wordList='',locale='en-GB',gender='f',){if(wordList.includes(':')){const[localeArg,wordsArg]=wordList.split(':');if(localeArg.includes('-')){locale=localeArg}else{gender=localeArg}
wordList=wordsArg}
const words=listToArray(wordList);if(words.length===0){return}
const samplesObject={}
for(const word of words){samplesObject[word]='/fuck_off_ay_eye_music.wav'}
window.samples(samplesObject)}
async function hubda(orgList,repoList='samples'){const orgs=listToArray(orgList);const orgRepos=[];const orgChoices=[];for(const org of orgs){if(org.includes('/')){const[orgName,repoName]=org.split('/');orgRepos.push({org:orgName,repo:repoName})}else{orgChoices.push(org)}}
const repoChoices=listToArray(repoList);for(const orgChoice of orgChoices){for(const repoChoice of repoChoices){orgRepos.push({org:orgChoice,repo:repoChoice})}}
const addresses=orgRepos.map(({org,repo})=>'github:'+org+'/'+repo);for(const address of addresses){window.samples(address)}}
if(!window.samples){window.samples=function(){}}
hubda('mot4i','garden')
hubda('eddyflux','crate')
hubda('yaxu','clean-breaks')
window.speechda=speechda;window.spagda=spagda;window.spag=spag;window.hubda=hubda