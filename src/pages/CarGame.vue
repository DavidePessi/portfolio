<script setup>
    import title from '@/assets/img/CarGame Title.jpg';
    import isometric from '@/assets/img/CG-isometric.webp';
    import day from '@/assets/img/CG-day.webp';
    import shader from '@/assets/img/CG-shader.webp';
    import night from '@/assets/img/CG-night.webp';
    import coin from '@/assets/img/CG-coin.webp';

</script>

<template>
    <TopBar title = "Car Game"></TopBar>
    <div class = "cover-image">
        <ImageDraw :image="title" :maxWidth="600" :maxHeight="600"></ImageDraw>
    </div>
    <div class = "body">
        <h2 class = "mini-title">Overview</h2>
        <div class = "overview">
            <p class = "body-text">
                Team: Davide Pessi, Riccardo Gelato<br>
                Context: Course of Computer Graphics<br>
                Professor: Marco Gribaudo<br>
                Year : 2024/2025<br>
                <br>
                My role: developer
            </p>
        </div>
        <h2 class = "mini-title">Project details</h2>
        <p class = "body-text">
            The project started by implementing three different cameras, the first person, third person and isometric camera.
        </p>
        <div class="gallery">
            <Gallery :image1="isometric" :image2="day" :image3="shader"></Gallery>
        </div>
        <div class = "body-text">
            We then divided the work of developing shaders and render pipeline. I was in charge of implementing a class that handled the rendering of multiple objects without having to manage each object alone.<br>
            Once the architecture behind was developed we started creating the world adding lights, and developing the movements of the car and the physics of the colliders for the obstacles.<br>
            Finally in the end we added the coins and the logic that allow the player to win if he collected all coins including a win screen and a starting menu.<br>
            <br>
            The project is available to download on my GitHub <wired-link href="https://github.com/DavidePessi/Car-Game" target="_blank" elevation ="3" style=" --underline-color: teal;">here</wired-link>.
        </div>
        <div class = "images">
            <ImageDraw :image="coin"></ImageDraw>
            <ImageDraw :image="night"></ImageDraw>
        </div>
    </div>

    <FooterProject next="Woodland Mystery" nextLink="/WoodlandMystery" previous="Helping Hands" previousLink="/HelpingHands"></FooterProject>
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

    .overview{
        display: flex;
        justify-content: space-between;
        margin-right: 140px;
    }
    .gallery{
        margin-bottom: 3rem;
    }

    .images{
        display: flex;
        justify-content: center;
        gap: 10rem;
        margin-bottom: 3rem;
    }

</style>