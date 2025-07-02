<script setup>
  import WoodlandImage from '@/assets/img/Woodland Title.webp'
  import LivingSpaceImage from '@/assets/img/LivingSpace Title.webp'
  import HelpingHandsImage from '@/assets/img/HelpingHands Title.webp'
  import CarGameImage from '@/assets/img/CarGame Title.jpg'
  import ExpiredFilmImage from '@/assets/img/ExpiredFilm Shader.webp'
  import FantaDraftImage from '@/assets/img/FD-Admin.webp'
  import SketchCard from '@/components/SketchCard.vue'
</script>

<template>
  <TopBar title = "Projects"></TopBar>

  <Band tag = "Unity, C#, Videogame " title = "Woodland Mystery" :description="'Woodland Mystery is an investigation game with a thrilling and interesting story filled by fun minigames.<br>The game won the Single Player category at the New Game Designer 2024 competition.'" :image = WoodlandImage link="/WoodlandMystery" ></Band>

  <Band tag ="Unity, Interaction, HRI, VR" title = "Living Space" :description = "'Living Space is the title of my thesis which aims at studying the perception of aliveness and intelligence in non-anthropomorphic body, their embodiment and the communication between this and an anthropomorphic body.</br>The installation was also presented at Interdependence during the design week of 2025.'" :image = LivingSpaceImage link="/LivingSpace"> </Band>

  <Band tag ="Vue.js, Website, chatbot" title = "Helping Hands" description = "Website for a non-profit organization that helps women victim of violence" :image = HelpingHandsImage link="/HelpingHands"></Band>

  <Band tag = "Computer Graphics, Shader, C++" title = "Car Game" description = "The project is a small videogame developed using Vulkan in C++. The game involves a car driving in a city and collecting coins, while avoiding obstacles."
  :image = CarGameImage link="/CarGame"></Band>

  <div class ="extra-body">
    <h1 class = "title">Extra Projects</h1>
    <div class = "body">
      <SketchCard :image = "ExpiredFilmImage" tags = "Shaders, C++" title="Expired Film Shader" description ="Personal project which aims at reproducing the effect of an expired film using a shader. The project is now developed on Unity as a post processing effect."></SketchCard>
      <SketchCard :image = "FantaDraftImage" tags = "p5.js, web-app" title="FantaDraft" description ="A web-app that people can use to draft a fantasy football league, the web-app is responsive and available also for mobile. The app was designed to work with Fantacalcio.it"></SketchCard>
    </div>
  </div>

</template>

<style scoped>
  .title{
    font-size: 50px;
    font-family: 'SketchBlock';
  }
  .extra-body{
    margin-left: 4rem;
    margin-right: 4rem;
    margin-top: 1rem;
    margin-bottom:3rem;
  }
  .body{
    display: flex;
    gap: 2rem;
  }
</style>
