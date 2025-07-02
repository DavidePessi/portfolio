<template>
  <div class="foto" :style="{ cursor: isPopUp == '0' ? 'default' : 'pointer' }">
    <canvas ref="canvasRef" @click="openPopup"></canvas>

    <div v-if="showPopup" class="modal-overlay" @click="closePopup">
      <div class="modal-content" @click.stop>
        <img
          :src="props.image"
          alt="Zoomed Image"
          :style="{
            maxWidth: props.popupMaxWidth + 'px',
            maxHeight: props.popupMaxHeight + 'px',
            width: 'auto',
            height: 'auto',
          }"
        />
        <button class="close-btn" @click="closePopup">✕</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'
import rough from 'roughjs/bundled/rough.esm.js'

const props = defineProps({
  image: String,
  maxWidth: {
    type: Number,
    default: 416,
  },
  maxHeight: {
    type: Number,
    default: 229,
  },
  popupMaxWidth: {
    type: Number,
    default: 1000,
  },
  popupMaxHeight: {
    type: Number,
    default: 800,
  },
  isPopUp:{
    type: String,
    default: '1',
  }
})

const canvasRef = ref(null)
const showPopup = ref(false)
const padding = 10

function openPopup() {
  if(props.isPopUp == '1'){
    showPopup.value = true
  }
}

function closePopup() {
  showPopup.value = false
}

onMounted(async () => {
  await nextTick()

  const canvas = canvasRef.value
  const ctx = canvas.getContext('2d')
  const rc = rough.canvas(canvas)

  const img = new Image()
  img.src = props.image

  img.onload = () => {
    const imgW = img.naturalWidth
    const imgH = img.naturalHeight

    const availableW = props.maxWidth - padding * 2
    const availableH = props.maxHeight - padding * 2

    const widthRatio = availableW / imgW
    const heightRatio = availableH / imgH
    const scale = Math.min(widthRatio, heightRatio)

    const drawWidth = imgW * scale
    const drawHeight = imgH * scale

    const canvasWidth = drawWidth + padding * 2
    const canvasHeight = drawHeight + padding * 2

    canvas.width = canvasWidth
    canvas.height = canvasHeight
    canvas.style.width = `${canvasWidth}px`
    canvas.style.height = `${canvasHeight}px`

    ctx.drawImage(img, padding, padding, drawWidth, drawHeight)

    rc.rectangle(padding, padding, drawWidth, drawHeight, {
      stroke: 'black',
      strokeWidth: 4,
      roughness: 3,
    })
  }
})
</script>

<style scoped>
.foto {
  display: inline-block;
  position: relative;
}

canvas {
  display: block;
}

/* Popup Modal Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content img {
  border-radius: 8px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.5);
}

.close-btn {
  position: absolute;
  top: -10px;
  right: -10px;
  background: white;
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  font-size: 18px;
  cursor: pointer;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.3);
}
</style>