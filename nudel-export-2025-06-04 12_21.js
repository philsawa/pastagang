// "nudel 2025-06-04 12:21" @by pastagang

//pane 1
await loadScript("https://cdn.jsdelivr.net/gh/geikha/hyper-hydra/hydra-text.js")
// in 5 days these links will not work anymore :/ 👆
// glitch.me is shut down :/
// you can use jsdelivr instead

// gn for real this time (-　-)。゜zｚＺ
// matrix rain but it's just berds
// berds bopping!
// 𓅨𓅨𓅨𓅨𓅨𓅨𓅨𓅨
hydraText.font = "Papyrus"
// mirrorX, mirrorY, mirrorX2, mirrorY2, mirrorWrap, inversion
// here, have a berd
// sweet!

berd = "🐦‍⬛"
// maybe change scale and hue of background noise with this
snd = () => fft()
voronoi()
.blend(noise(3), 0.4)
// .modulate(noise())
// .layer(text("🐦‍⬛").hue(() => time / 40).scale(1.25, 2).repeat([1, 4].smooth(),[1, 4].smooth()))
.rotate(1, 0.2)
.out(o0)
src(o1)
//.scale(1.01).blend(o0,.01).colorama(.005).modulate(o1,.01)
.mask(text(berd).scale(()=>fft(0,1)+.1*4).repeat(2,2).rotate(0,-.8))
.scale(0.8)
.blend(voronoi().colorama().modulate(noise(3), snd), 0.2)
.out(o2)
render(o2)
//pane 2
$: s("crow").fast("1,1.1,1.2,1.3,1.4,1.5,2")
.hpf(4000)

// 𓅪𓅪berd gets high!!𓅪𓅪

// sounds niiiceee
// cheeerz
$: s("crow(<3 5>,9, 1)/9*16") // thanks froos
  .speed(saw.slow(4).range(0.6,1.1))
  .legato(0.5)
  .lpf(2500).lpq(12).lpenv(0.5)
  .pan(perlin)
  .jux(rev)
  .gain(0.15)


//pane 3
samples('bubo:fox')
$: s("<[jazz crow], [hh, crow, crow:3]>")
.chop(16)
.sometimes(x => x.speed(0.5))
.room("<[1 | 0 | .5]>/5")
.when("<0!13 1!5>",x => x.lpf(sine.range(200,400).slow(8)))
.when("<0!11 1!3>",x => x.hpf(sine.range(1000,15000).slow(8.2)))
  
.delay(.8)
.jux(rev)
$: s("triangle, sine").chop("<4!7 2>").jux(rev).clip(.9).distort(3).n("<[0 4 3 <6 7>]!3 [0 3 4 5]>")
  .scale("<A3:minor G3:minor>/8")
  .sometimesBy(0.3, x=>x.ply("[2 | 3 | 4 | 5]"))
  .speed("<0.5 1 -1>")
  .gain(sine.range(0.05, 0.4).slow(4))
  .hpf(sine.range(200, 1000).fast(4))
.when("<0!16 1!5>",x => x.lpf(sine.range(200,500).slow(7)))
  // .delay("0.4:0.25:0.4")
$: s("bytebeat").n("-12").distort("4").lpf(500).legato(0.3).struct("x(3,8,<0 1 2>)").fast("<1 2>")
// sick <3
// oh no

$_: s("crow crow*3")
.striate("<2,6>")
.speed("<0.1 0.4 0.1 0.5 0.2>")

// TODO
// - Fix comments in css not working with "//"
// (or make shortcut to "/**/")
//  its easy - we gotta change `javascript` to `css` in the editor
//   the thing is it needs to be conditional based on the editor type
//     and like maybe reload the editor or something
//         this comment will now die
// - make fft work with css
//    - maybe: css  variable --fft, that ges updated by js?


//pane 4
/*if you want to change error messages,
the class is error and the id is error-n,
where n is between 1 and 4 inclusive*/
/*
// https://post.lurk.org/@toplap_bcn@toplap.org/114619897339057119

*/
:root {
 animation: 180s linear infinite rainbow;
}
/* Yesss! */
.error::after {
  content: "🐦‍⬛" 
}
/* Working corner
 +--------+
 |  🪑 📺  |
 |  🪑 🍄‍🟫  |
 |  🪑 🍄‍🟫  |
 | 
 |        |
 |  🪑 📺  |
 +--------+
*/


/*it is very polite how if you click on the end of a line the bird moves down */


/* Also also "//" is the wwrong comment for css xD */
/* Itt breake it sadly 
//lmaos is amazing!
// This ou 
//so cool 

// I am in awe ? however you write that lol
// oh the colorr of the users also rotate xD
// next up is to somehew get fft working in css
// but that probably needs some JS springlet into tthe
// pipeline, i would guess
// oorrrr just expose css variables --fft-amount
//                       ^- This is  on my todo list now xD
// unsure how performance it would be lol
// and  we can just set that with js every so often

/// yesssss
// i've just recorded this piece of art
// [BEAKS SCRATCHING]

// [CROW NOISES INTENSIFY]
*/
