<template>
    <div class="arena" ref="arena" @mouseup="onMouseUp" @mousemove="onMouseMove" @mouseleave="onMouseUp">
      <img
        ref="puck"
        :src="imagePuck"
        class="puck"
        :style="{ top: y + 'px', left: x + 'px' }"
        draggable="false"
        @mousedown="onMouseDown" 
      />
</div>
</template>

<script setup>
  import { ref, onMounted, nextTick } from 'vue'

  const props = defineProps({
    imagePuck: String,
  })


  const arena = ref(null)
  const puck = ref(null)

  const x = ref(100)
  const y = ref(100)

  let lastX = 0
  let lastY = 0
  let velocityX = 0
  let velocityY = 0
  let isDragging = false

  let puckProportion = 1;
  let puckSizeW = 80;
  let puckSizeH = 80;



  onMounted(() => {
    const img = new Image()
    img.src = props.imagePuck
    img.onload = () => {
      puckProportion = img.naturalHeight / img.naturalWidth; 
      puckSizeH = puckSizeW * puckProportion; 
          
    }
  })



  function onMouseDown(e) {
    isDragging = true
    lastX = e.clientX
    lastY = e.clientY
  }

  function onMouseMove(e) {
    if (!isDragging) return

    const dx = e.clientX - lastX
    const dy = e.clientY - lastY

    x.value += dx
    y.value += dy

    velocityX = dx
    velocityY = dy

    lastX = e.clientX
    lastY = e.clientY

    keepInBounds()
  }

  function onMouseUp() {
    if (!isDragging) return
    isDragging = false
    animateMomentum()
  }

  function keepInBounds() {
    const bounds = arena.value.getBoundingClientRect()
    const maxX = bounds.width - puckSizeW
    const maxY = bounds.height - puckSizeH

    x.value = Math.max(0, Math.min(x.value, maxX))
    y.value = Math.max(0, Math.min(y.value, maxY))
  }

  function animateMomentum() {
    function step() {
      if (isDragging) return

      x.value += velocityX * 0.5
      y.value += velocityY * 0.5

      keepInBounds()

      // Bounce off walls
      const bounds = arena.value.getBoundingClientRect()
      if (x.value <= 0 || x.value >= bounds.width - puckSizeW) velocityX *= -1
      if (y.value <= 0 || y.value >= bounds.height - puckSizeH) velocityY *= -1

      // Friction
      velocityX *= 0.99
      velocityY *= 0.99

      // Stop if very slow
      if (Math.abs(velocityX) > 0.1 || Math.abs(velocityY) > 0.1) {
        requestAnimationFrame(step)
      }
    }

    requestAnimationFrame(step)
  }
</script>


<style scoped>

.arena {
  position: absolute;
  width: 100%;
  height: 90vh;
  overflow: hidden;
  background: transparent;
  user-select: none;
}

.puck {
  position: absolute;
  width: 80px;
  height:auto;
  cursor: grab;
  transition: box-shadow 0.2s;
}

.puck:hover {
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.2);
}

</style>