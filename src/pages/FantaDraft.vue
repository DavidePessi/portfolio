<script setup>
    import admin from '@/assets/img/FD-Admin.png';
    import mobile from '@/assets/img/FD-Mobile.png';
import RightDescriptionBand from '@/components/RightDescriptionBand.vue';

</script>

<template>
    <TopBar title="FantaDraft"></TopBar>
    <LeftDescriptionBand :image="admin" :description = "'The application is developed to allow people to make fantasy football draft easier. The application allow to create a league of 10 participants max. The admin need to connect to the application as admin while all the participants can log in as clients.'"></LeftDescriptionBand>
    <RightDescriptionBand :image="mobile" :description="'Once their all connected the draft can start and everyone can send offer for their players from their phones or their pc by using a simple UI once the draft it’s over the admin can download a file that can be loaded to Fantacalcio.it in order to complete the transfer of all the teams.</br></br>The application also allow to download and load an incomplete draft so that you don’t lose your data if anything happens.'"></RightDescriptionBand>
</template>