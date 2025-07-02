<script setup>
  import MeStesso from '@/assets/img/me stesso.jpg'
  import githubLogo from '@/assets/img/github-mark.png'
  import itchLogo from '@/assets/img/itch-mark.svg'
  import linkedinLogo from '@/assets/img/ln-mark.png'
</script>


<template>
  <TopBar title = "About Me"></TopBar>
  <div class="about-container">
    <Avatar :imageAvatar = MeStesso> </Avatar>
    <div class = "text-social-container">
      <h2 class = "title">Who am I</h2>
      <p class="about-text">Hello, I'm Davide Pessi, I'm a Computer Science engineer who loves to explore the world of graphics and videogame.
        Throughout my studies at Politecnico di Milano, I also discovered the world of design and I fell in love with the development of Interactive applications and installation.
      </p>
      <div class="social-row">
        <IconLink :logo="githubLogo" link="https://github.com/DavidePessi" />
        <IconLink :logo="itchLogo" link="https://natsudavi.itch.io" />
        <IconLink :logo="linkedinLogo" link="https://linkedin.com/in/davide-pessi-9447b1224" />
      </div>
    </div>
  </div>
  
  <div class="about-columns">
    <div>
      <h2 class="title">Experience</h2>
      <div>
        <div class="skill-column">
            <SkillItem text="sep 2014 - jul 2019<br>
            Liceo scientifico scienze applicate at Liceo 
            Viale dei Tigli Gallarate (VA)" />
            <SkillItem text="sep 2019 – sep 2022<br>
            Bachelor in Computer engineering at 
            Politecnico di Milano"/>
            <SkillItem text="sep 2022 - apr 2025<br>
            Master course of Computer Science and 
            Engineering at Politecnico di Milano" />
          </div>
      </div>
    </div>
    <div class="border-skills">
      <h2 class = "title">Main skills</h2>
      <div class="skills-section">
        <div class="skill-column">
          <SkillItem text="C#" />
          <SkillItem text="C++" />
          <SkillItem text="C" />
          <SkillItem text="Javascript" />
          <SkillItem text="Java" />
          <SkillItem text="HTML & CSS" />
        </div>
        <div class="skill-column">
          <SkillItem text="Figma" />
          <SkillItem text="Unity" />
          <SkillItem text="Vue.js" />
          <SkillItem text="Git" />
        </div>
        <div class="skill-column">
          <SkillItem text="Italian" />
          <SkillItem text="English" />
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>
  .about-container {
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 1200px;
    margin: 0 auto;     
    gap:20rem;        
  }

  .about-text {
    flex: 1;            
    font-size: 1.5rem;
    line-height: 1.6;
    margin-top:0rem;
    font-family:'PatrickHand';
  }
  .about-columns {
    display: flex;
    align-items: flex-start;
    max-width: 1200px;
    margin: 0 auto;     
    gap:8rem;       
    margin-bottom: 3rem;
    margin-top:3rem;
  }

  .title{
    font-family:'SketchBlock';
    font-size: 40px;
    color: darkred;
  }

  .skills-section {
    display: flex;
    justify-content: space-between;
    gap: 8rem;
    max-width: 1000px;
    margin: 0 auto;
  }

  .skill-column {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .social-row {
    display: flex;
    justify-content: center;
    gap: 50px;
    margin-top: 1px;
  }

  .text-social-container{
    display: flex;
    flex-direction: column;
  }
</style>


