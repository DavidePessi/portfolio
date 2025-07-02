

<template>
  <canvas ref="canvasRef" :width="canvasWidth" :height="canvasHeight"></canvas>
</template>


<script setup>
import { ref, onMounted, nextTick } from 'vue';
import { useRouter } from 'vue-router';
import rough from 'roughjs/bin/rough';

const router = useRouter();

const props = defineProps({
  nameButton: String,
  link: String,
  ariaLabel: String,
})

const canvasRef = ref(null);
const canvasWidth = ref(0);
const canvasHeight = ref(0);

onMounted(async () => {

  const canvas = canvasRef.value;
  const ctx = canvas.getContext('2d');

  // Measuring width and height of the text
  ctx.font = '30px PatrickHand';
  const metrics = ctx.measureText(props.nameButton);
  const textWidth = metrics.width + 20;
  const textHeight = 30;

  canvasWidth.value = textWidth + 10 ;
  canvasHeight.value = textHeight + 15;

  // Wait for Vue to update the canvas size in the DOM
  await nextTick();

  // Draw the rectangle on the canvas
  const rc = rough.canvas(canvas);
  rc.rectangle(5, 5, canvas.width -10, canvas.height -10, {roughness : 2});
 
  // Properites of the text
  ctx.fillStyle = 'black';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  await document.fonts.load('30px PatrickHand');
  ctx.font = '30px PatrickHand';
  ctx.fillText(props.nameButton, canvas.width / 2, canvas.height / 2);

  // Allow the canvas to be click and get the link
  canvas.addEventListener('click', () => {
    router.push(props.link);
  });

  // Hover effect on enter
  canvas.addEventListener('mousemove', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const rc = rough.canvas(canvas);
    rc.rectangle(5, 5, canvas.width -10, canvas.height -10, { roughness: 1.0, fill: 'black', strokeWidth: 0.5});
    
    ctx.fillStyle = 'white';
    ctx.fillText(props.nameButton, canvas.width / 2, canvas.height / 2);
    
  }); 

  // Hover effect on exit
  canvas.addEventListener('mouseout', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const rc = rough.canvas(canvas);
    rc.rectangle(5, 5, canvas.width -10, canvas.height -10, {roughness : 2});

    ctx.fillStyle = 'black';
    ctx.fillText(props.nameButton, canvas.width / 2, canvas.height / 2);
  });

})
</script>