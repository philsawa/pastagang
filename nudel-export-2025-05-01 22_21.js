// "nudel 2025-05-01 22:21" @by pastagang

//pane 1

setcpm(108/4)

$: s("bd [- bd] rim -*<1 [4 0]>").bank('tr707')
.delay(".5:.133:0.3").room(.1).speed(.6).sometimes(ply(3))

$: n("<0 1 4 2 6>*8")
.scale("<F1 C1>/2:minor").dec(.4)
.s("pulse").dist(.5).sometimes(ply(2))

$: chord("<<Fm9 Cm9>/2 ->")
.voicing().s("pulse").vib("4:.2")
.att(.5).postgain(.5).room(.5)
//pane 2
//hellow

// coooooool :o

// I dont even know what I'm doing lmao
// that's the goal XD

//gonna head out, have a good day! 
// <:3
voronoi(()=>fft(0),1,1)
.color(1,0,3)
.kaleid([1,3,5].ease())
.add(
     osc(10,.2,1)
     .modulateRotate(noise())
    )
.modulate(o0, () => fft(0) * .03)
.layer(
       osc(10,.04,1)
       .mask( shape([4,5,6,7,8,9].smooth(),.2,1)
       .colorama())
      )
.saturate(0.2)
.brightness(-0.1)
.invert()
.mult(shape(2,0.3,0.0).diff(shape(2,0.3,0.0).rotate(3.14/2,0.1)).repeat(4,4))
.modulateScale(noise(4).pixelate(32,32))
.modulateScrollX(noise(3,1).pixelate(1,32).posterize(7))
.color(0.1,1,0.5)
.posterize(3)
.luma(0.2)
.out(o0)

noise(2)
.pixelate(16,16)
.posterize(5)
.color(0,1,0)
.layer(src(o0))
.out(o1)

render(o1)
//pane 3
silence


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