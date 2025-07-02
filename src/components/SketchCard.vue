<template>
  <div class="sketch-wrapper" :style="{ width: width + 'px', height: height + 'px' }" @click="$emit('click')">
    <canvas ref="canvasRef" :width="width +10" :height="height +10"></canvas>
    <div class ="general">
        <div class="content">
            <div class = "body">
                <h2 class = "title">
                    {{title}}
                </h2>
                <ImageDraw :image="image" isPopUp="0"></ImageDraw>
                <p class = "text-body">
                    {{ description }}
                </p>
            </div>
            <div class="tag-body">
                    <Highlight :text="tags" :fontSize="20"></Highlight> 
            </div>   
        </div>
    </div>
    


    
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import rough from 'roughjs/bundled/rough.esm.js'

const props = defineProps({
  title: String,
  description: String,
  image: String,
  tags: String,
  width: {
    type: Number,
    default: 430,
  },
  height: {
    type: Number,
    default: 600,
  },
  fill: {
    type: String,
    default: 'darkred',
  },
  stroke: {
    type: String,
    default: 'none',
  },
  strokeWidth: {
    type: Number,
    default: 8,
  },
  roughness: {
    type: Number,
    default: 2.5,
  },
})

const canvasRef = ref(null)

function draw() {
  const canvas = canvasRef.value
  if (!canvas) return
  const ctx = canvas.getContext('2d')
  ctx.clearRect(0, 0, props.width, props.height)

  const rc = rough.canvas(canvas)
  rc.rectangle(5, 5, props.width, props.height, {
    fill: props.fill,
    stroke: props.stroke,
    strokeWidth: props.strokeWidth,
    hachureGap: 3,
    roughness: props.roughness,
  })
}

onMounted(draw)
watch([() => props.width, () => props.height, () => props.fill, () => props.stroke], draw)
</script>

<style scoped>
.sketch-wrapper {
  position: relative;
  display: inline-block;
  user-select: none;
}

canvas {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none; /* let clicks go through */
  z-index: 0;
}
.general{
    padding-top: 5px;
    padding-left:5px;
}
.content {
  position: relative;
  z-index: 1;
  
  
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  overflow: auto;
  margin: 0;
}

.title{
    font-family: 'SketchBlock';
    font-size: 30px;
}
.text-body{
    margin-left:30px;
    margin-right: 30px;
    font-family:'PatrickHand';
    font-size: 25px;
}
.body{
    color:white;
    display: flex;       
    align-items: center;
    flex-direction: column;
}
.tag-body{
    display: flex;
    align-items: flex-start;
    margin-left:25px;
}

</style>
