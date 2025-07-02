<template>
     <img :src="imageAvatar" alt="Avatar" class="avatar" />
</template>

<script setup>
  const props = defineProps({
    imageAvatar: String,
  })
</script>

<style scoped>
.avatar {
  width: 300px;         
  height: 300px;        
  border-radius: 50%;   
  object-fit: cover;    
  display: block;
}
</style>