// "nudel 2025-11-27 17:10" @by pastagang

//pane 1
setcpm(180/5)
// siiiiiick
// yeah i agree
// i wonder how this all works

// LMFAO
// Whoever came up with this, good job omg
// we should make a rave with just animal noises
$: s("crow") //it crew
.room(1).dec(.4).postgain(.2).delay(1)
.rarely(ply("16 0"))
.mul(speed(sine.range(.5,2).slow(8)))

$: n("0 -1 <[2 3] [3 2]>@2")
//.off(1/8, x=>x.add(n(4)).clip(.2))
.add("0 <[1,3] [2,4] [3,5]>".n())
.scale("<e:dorian [e:dorian, a:dorian]@.5>")
.room(1).fm(sine.range(1,3).slow(13)).delay(.4)
.dec(.4)
.clip(2).vib("4:.4")
.add(note(12))
.hpf(sine.rangex(100,8000).slow(16))
.hpq(12)
.fast(1.5)
.mask("<1@8 0@8>/2")

// This gets a little old and im not sure how to fix it
$: chord("<Em9!3 [Eb9@2 B7