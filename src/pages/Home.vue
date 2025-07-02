<script setup>
  import githubLogo from '@/assets/img/github-mark.png';
  import itchLogo from '@/assets/img/itch-mark.svg';
  import linkedinLogo from '@/assets/img/ln-mark.png';

  import 'wired-elements/lib/wired-fab.js';
</script>

<template>
  <TopBar title = "Home"></TopBar>
  <p class="name"> Davide Pessi</p>
  <div class="social-row">
    <IconLink :logo="githubLogo" link="https://github.com/DavidePessi" />
    <IconLink :logo="itchLogo" link="https://natsudavi.itch.io" />
    <IconLink :logo="linkedinLogo" link="https://linkedin.com/in/davide-pessi-9447b1224" />
   
  </div>

</template>


<style scoped>
  .name{
    font-family: 'SketchBlock';
    font-size: 150px;
    display: flex;
    justify-content: center;
  }

  .social-row {
    display: flex;
    justify-content: center;
    gap: 50px;
    margin-top: 30px;
  }

  wired-fab {
      font-size: 1.1rem;
      font-weight: bold;
      width: 64px;
      height: 64px;
      line-height: 64px;
      text-align: center;
    }
</style>