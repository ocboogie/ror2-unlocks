<template>
  <canvas ref="canvas" :width="width" :height="height" />
</template>
<script>
import debounce from 'debounce'
const particles = 100
const backgroundColor = '#242531'

const sizeMin = 1
const sizeMax = 5

const opacityMin = 0.5
const opacityMax = 0.9

const speedMin = 3
const speedMax = 10

const fadeIn = 5000

function randomMinMax(min, max) {
  return min + Math.random() * (max - min)
}

export default {
  data: () => ({
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight
  }),
  mounted() {
    window.addEventListener('resize', debounce(this.updateSize.bind(this), 10))

    this.setup()
    this.start()
  },
  methods: {
    updateSize() {
      const newWidth = document.documentElement.clientWidth
      const newHeight = document.documentElement.clientHeight

      const widthScalar = newWidth / this.width
      const heightScalar = newHeight / this.height

      // Move particles to new position
      this.particles = this.particles.map(particle => {
        particle.x *= widthScalar
        particle.y *= heightScalar

        return particle
      })

      this.width = newWidth
      this.height = newHeight
    },
    setup() {
      this.canvas = this.$refs.canvas
      this.ctx = this.canvas.getContext('2d')
      this.particles = []

      for (let i = 0; i < particles; i += 1) {
        this.addParticle()
      }
    },
    start() {
      this.lastUpdate = Date.now()

      this.mainLoop()
    },
    addParticle() {
      this.particles.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        size: randomMinMax(sizeMin, sizeMax),
        opacity: randomMinMax(opacityMin, opacityMax),
        direction: Math.random() * Math.PI * 2,
        speed: randomMinMax(speedMin, speedMax),
        awaken: Date.now()
      })
    },
    mainLoop() {
      const now = Date.now()
      const deltaTime = (now - this.lastUpdate) / 1000
      this.lastUpdate = now

      this.update(deltaTime)
      this.draw()

      window.requestAnimationFrame(this.mainLoop.bind(this))
    },
    draw() {
      this.ctx.fillStyle = backgroundColor
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)

      this.particles.forEach(particle => {
        this.ctx.beginPath()
        this.ctx.arc(
          particle.x,
          particle.y,
          particle.size,
          0,
          Math.PI * 2,
          true
        )
        this.ctx.closePath()

        const opacity = Math.min(
          particle.opacity,
          (Date.now() - particle.awaken) / fadeIn
        )

        this.ctx.fillStyle = `rgba(153, 85, 162, ${opacity})`
        this.ctx.fill()
      })
    },
    update(deltaTime) {
      this.particles = this.particles
        .filter(
          particle =>
            particle.x > -particle.size &&
            particle.x < this.width + particle.size &&
            particle.y > -particle.size &&
            particle.y < this.height + particle.size
        )
        .map(particle => {
          particle.x +=
            Math.sin(particle.direction) * particle.speed * deltaTime
          particle.y +=
            Math.cos(particle.direction) * particle.speed * deltaTime

          return particle
        })

      // Ensure there are 25 particles
      for (let i = 0; i < particles - this.particles.length; i += 1) {
        this.addParticle()
      }
    }
  }
}
</script>
