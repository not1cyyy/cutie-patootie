function panda() {
  var tl = new TimelineMax()
  tl.add('s')
  tl.to('#right-foot', 0.7, {
    transformOrigin: 'center center',
    rotation: 20,
    yoyo: true,
    repeat: -1,
    ease: Power0.easeNone
  }, 's')
    .to('#head', 0.7, {
      transformOrigin: 'center center',
      transform: "rotateZ(1deg) rotateY(0deg) rotateX(1deg)",
      force3D: true,
      yoyo: true,
      repeat: -1,
      ease: Power0.easeNone
    }, 's')
    .to('.noodle', 0.7, {
      transformOrigin: 'center center',
      y: 10,
      x: -4,
      yoyo: true,
      repeat: -1,
      ease: Power0.easeNone
    }, 's')
    .to('#noodle1', 0.5, {
      transformOrigin: 'center center',
      y: 2,
      yoyo: true,
      repeat: -1,
      ease: Power0.easeNone
    }, 's')
    .to('#noodle2', 0.6, {
      transformOrigin: 'center center',
      y: 3,
      yoyo: true,
      repeat: -1,
      ease: Power0.easeNone
    }, 's')
    .to('#noodle3', 0.8, {
      transformOrigin: 'center center',
      y: 3,
      yoyo: true,
      repeat: -1,
      ease: Power0.easeNone
    }, 's')
    .to('#munch', 0.5, {
      transformOrigin: 'center center',
      y: 2,
      x: 1,
      rotation: 20,
      yoyo: true,
      repeat: -1,
      ease: Power0.easeNone
    }, 's')
    .to('#chopstick-1', 0.8, {
      transformOrigin: 'right bottom',
      y: 2,
      x: 3,
      rotation: 40,
      yoyo: true,
      repeat: -1,
      ease: Power0.easeNone
    }, 's')
    .to('#chopstick-2', 0.8, {
      transformOrigin: 'right bottom',
      y: 2,
      x: 7,
      rotation: 50,
      yoyo: true,
      repeat: -1,
      ease: Power0.easeNone
    }, 's')
    .to('#left-hand', 0.8, {
      transformOrigin: 'right bottom',
      y: -2,
      x: 1,
      rotation: 5,
      yoyo: true,
      repeat: -1,
      ease: Power0.easeNone
    }, 's')
    .to('#right-arm', 0.7, {
      transformOrigin: 'right bottom',
      y: 2,
      x: 1,
      rotation: -1,
      yoyo: true,
      repeat: -1,
      ease: Power0.easeNone
    }, 's')
    .to('.move', 0.7, {
      transformOrigin: 'center center',
      y: 2,
      x: 1,
      yoyo: true,
      repeat: -1,
      ease: Power0.easeNone
    }, 's')

  return tl
}



var master = new TimelineMax()
master.timeScale(1.8)
  .add(panda())