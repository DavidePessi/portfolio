<template>
  <div class="header-container">
    <h1 class = "title">{{ title }}</h1>
    <div class="button-container">
      <Button nameButton="Home" link="/Home" ariaLabel="Home"></Button>
      <Button nameButton="Projects" link="/Projects" ariaLabel="Projects"></Button>
      <Button nameButton="About Me" link="/About" ariaLabel="AboutMe"></Button>
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    title: String,
  })
</script>


<style scoped>
.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family:'SketchBlock';
  padding: 0 20px;
}

.button-container {
  display: flex;
  justify-content: flex-end; 
  gap: 1rem;
  padding: 1rem;
}

.title {
  font-size: 50px;
}
</style>