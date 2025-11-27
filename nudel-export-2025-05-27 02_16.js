// "nudel 2025-05-27 02:16" @by pastagang

//pane 1
s0.initImage("https://spag.cc/cw")

src(s0)
.modulate(osc(),.01)
.color(0)
.scrollX(()=>Math.cos(time*4.0)*0.1)
.scrollY(()=>Math.sin(time*4.0)*0.1)
.scale(()=>Math.cos(time*5)*0.2 + 1.0)
.scale(()=>fft(1,4)+.5)
.posterize().brightness(.2).contrast(16).rotate(.1)
.rotate(Math.PI,[-.0001,.0001].ease('easeInOutQuint'))
.hue(()=>time/10).contrast(16)
.kaleid(3).kaleid(6)
// MELTTTT
.colorama(.9) //
.out(o0)

src(o0)
// .diff(src(o0).repeat([1,12,4,32],[1,12,4,32]).blend(o0,.0).scale(1.01),0)
.blend(o1,[.995,.5].fast(.2))
.scrollY(1.001)
.modulateScale(o1,.01)
.out(o1)

src(o1)
.scale(0.25)
.modulateScale(gradient().g().rotate(0.0,0.2).kaleid(2),5)
.invert().scale(()=>fft(0,1)*4).blend(src(s0).scale(1).repeat(P("<-1 1>*5"),P("<-1 1>*10")).rotate(()=>fft(0,8)-.5*2),.5)
.out(o2)

render(o2)

// brb
//pane 2
_$: s("[bd <- - sd ->] - sd - rim").bank('crate')
.off(1/8,mul(speed(2)))


_$: chord("<[- Am] ->").voicing().patt(.4).room(.7).hpf(1000)
.fm(1).fmh(5.1).lpf(3000).gain(.3)


_$: s("white*8").dec(.07).room(.5).rarely(ply(2)).lpq(5)

_$: note("<a1(3,8) ->").lpe(3).lpf(200).lpd(.2).lpq(8)
.ftype('24db').dist(1)
//pane 3
console.log('hello')
//pane 4


function shuffle(array) {
  let currentIndex = array.length;
  while (currentIndex != 0) {
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
  return array;
}


poly(...shuffle([100, 200.01, 300, 400, 500, 900])).mul(1)
.mul(noise().rangex(1,2))

.add( x=>x.delay(.5).mul(.7) )
.saw()
.mix(2)
.mul(pulse([200, 300], poly(3,8).mul(.1).sine().range(0.2, 0.9)))
.lpf(sine(0.2).range(.3,.7), 0.001)
.mul(poly(3, 8).mul(0.25).pulse(0.1))
.out()

//.sine().out()
//pane 5
$: s("[bd*4][sd -][bd*2] [sd*2]").bank("LinnDrum")



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