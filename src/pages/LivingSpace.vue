<script setup>
    import title from '@/assets/img/LivingSpace Title.jpg'; 
    import prototype from '@/assets/img/LS-Prototype.png';
    import prototype2 from '@/assets/img/LS-Prototype2.png';
    import team from '@/assets/img/LS-Team.png';
    import survey from '@/assets/img/LS-Survey.png';
    import fog from '@/assets/img/LS-fog.png';
    import tutorial from '@/assets/img/LS-Tutorial.png';
    import bump from '@/assets/img/LS-Bump.png';
</script>

<template>
    <TopBar title = "Living Space"></TopBar>
    <div class = "cover-image">
        <ImageDraw :image="title" :maxWidth="1000" :maxHeight="1000"></ImageDraw>
    </div>
    <div class = "body">
        <h2 class = "mini-title">Overview</h2>
        <div class = "overview">
            <p class = "body-text">
                Authors: Davide Pessi, Matteo Fiorentino<br>
                Context: Master thesis<br>
                Advisor: Andrea Bonarini<br>
                Co-Advisor: Federico Espositi<br>
                Year : 2024/2025<br>
                <br>
                My role: developer
            </p>
            <ImageDraw :image="team" :maxWidth="300" :maxHeight="300"></ImageDraw>
        </div>
        <h2 class = "mini-title">Project details</h2>
        <p class = "body-text">
            The thesis is part of a bigger project which involved also Defne Kocamustafaogullari as designer. 
            The development of the project followed three steps:<br>
            <ul class = "body-text">
                <li>Understand the shape of our non-anthropomorphic body we want to develop, which messages are easier to convey with the chosen body and which movements are best to use to convey a specific message.</li>
                <li>Develop the first application in VR where two users can interact with each other one as human and the other as the space.</li>
                <li>Improve the application both on a graphic level and by changing controls of the space body so that are more intuitive and coherent with the space.</li>
            </ul>
        </p>
        <Gallery :image1="survey" :image2="prototype2" :image3="tutorial"></Gallery>
        <h2 class = "mini-title">My development</h2>
        <div class = "body-text">
            Since our objective was to create a space that was composed of many entities our main system was developed using Unity DOTS which help us to optimize performance while still handling each movement of every single entity.<br>
            <br>
            As developer I also developed:
            <ul class = "body-text">
                <li>The gestures and controls of the VR.</li>
                <li>Handled the system network that help us to connect the two users through LAN and keep every event synchronized using Unity Netcode.</li>
                <li>Handled the lightning and particle systems of the environment such ad the fog or the glow of elements, using post processing effects and built-in Unity particle systems.</li>
                <li>Developed the main interaction of the space which allow the user to modify the shape of the space using his hands.</li>
            </ul>
            During this thesis I learned to develop some shaders, develop a deeper understanding of how Unity and most of its main package works, and developed a design thinking approach to the project
        </div>
        <div class="gallery">
            <Gallery :image1="bump" :image2="prototype" :image3="fog"></Gallery>
        </div>
    </div>

    <FooterProject next="Helping Hands" nextLink="/HelpingHands" previous="Woodland Mystery" previousLink="/WoodlandMystery"></FooterProject>
</template>


<style scoped>
    .cover-image {
        display: flex;
        justify-content: center;
    }

    .mini-title {
        color: darkred;
        font-family: 'SketchBlock';
        font-size: 50px;
        display: flex;
        margin-bottom: 0;
    }

    .body-text {
        font-family: 'PatrickHand';
        font-size: 25px;
        margin-bottom:40px;
    }

    .body {
        margin-left: 140px;
        margin-right:140px;
    }

    .gallery{
        margin-bottom: 3rem;
    }

    .overview{
        display: flex;
        justify-content: space-between;
        margin-right: 140px;
    }

</style>