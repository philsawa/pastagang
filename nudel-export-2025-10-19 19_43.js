// "nudel 2025-10-19 19:43" @by pastagang

//pane 1

//pane 2
osc(99,0,0)
.scale(.5)
.thresh(.98)
.mult(
  osc(5,.1,.5)
  ,1
)
.rotate(0,.25)
.kaleid(16)
.scrollX(.5)
.scrollY(.5)
.rotate(0,.1)
.modulatePixelate(
  osc(1,1,0)
  ,999
)
.out()
//pane 3
$:s("cp*2 oh")
$: n("[7 .. 1] 3 .. 1")
.transpose("-12 0 7")
.s("piano")
.scale("c3:mixolydian")
$: n("[7,3,1] [5,7,2] [1,3,5,<75]")
.transpose("12, 0")
.room(.8)
.delay(".2 .7")
.gain(1.2)
.s("piano")
.scale("c3:mixolydian b