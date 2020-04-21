function setup() {
  createCanvas(windowWidth, windowHeight)
  frameRate(16)

  iteration = 120
  ancho = windowWidth / 512
}

function draw() {
  background(25)
  noStroke()

  for (let i = 0; i < iteration; i++) {
    let pos = random(0, windowWidth - ancho)
    let alto = windowHeight - random(windowHeight - 100)
    let ext1 = random(0, 100)
    let ext2 = random(0, 100)

    fill(255, 207, 207, random(60, 255))
    quad(pos, alto - ext1, pos + ancho, alto - ext2, pos + ancho, windowHeight, pos, windowHeight)
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight)
}

function mousePressed() {
  noLoop()
}

function mouseReleased() {
  loop()
}