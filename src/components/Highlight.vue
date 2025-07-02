<template>
  <div ref="wrapper" class="highlight-wrapper">
    <canvas ref="canvas" class="highlight-canvas"></canvas>
    <span class="highlight-text" :style="{ fontSize: fontSize + 'px' }">{{ text }}</span>
  </div>
</template>

<script setup>
import { onMounted, ref, watch, nextTick } from 'vue'
import rough from 'roughjs/bundled/rough.esm.js'

const props = defineProps({
  text: { type: String, required: true },
  fontSize: { type: Number, default: 60 },
  padding: { type: Number, default: 20 },
  fillColor: { type: String, default: 'black' },
  fillStyle: { type: String, default: 'hachure' }
})

const canvas = ref(null)
const wrapper = ref(null)
onMounted(async () => {
  // Wait for fonts to load (especially PatrickHand)
  if (document.fonts && document.fonts.ready) {
    await document.fonts.ready
  }

  await nextTick()
  drawHighlight()
})

const drawHighlight = () => {
  const el = wrapper.value
  const ctx = canvas.value.getContext('2d')
  const rc = rough.canvas(canvas.value)

  const { width, height } = el.getBoundingClientRect()
  canvas.value.width = width
  canvas.value.height = height

  ctx.clearRect(0, 0, width, height)

  rc.rectangle(
    props.padding / 2 -3,
    props.padding / 2 -2,
    width + 6 - props.padding,
    height + 4 - props.padding,
    {
      fill: props.fillColor,
      fillStyle: props.fillStyle,
      hachureGap: 4,
      hachureAngle: -45,
      roughness: 1.0,
      stroke: 'none',
      strokeWidth: 7.0,
    }
  )
}

watch(() => [props.text, props.fontSize], async () => {
  await nextTick()
  drawHighlight()
})

onMounted(() => {
  drawHighlight()
})
</script>

<style scoped>
.highlight-wrapper {
  position: relative;
  display: inline-block;
  padding: 0.2em 0.4em;
}

.highlight-canvas {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  pointer-events: none;
}

.highlight-text {
  position: relative;
  z-index: 1;
  color: white;
  font-family: 'PatrickHand', sans-serif;
  white-space: nowrap;
}
</style>