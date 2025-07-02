<script setup>
    import title from '@/assets/img/Woodland Title.png'
    import minigame from '@/assets/img/WM-Puzzle1.png';
    import dialogue from '@/assets/img/WM-Dialogue.png';
    import team from '@/assets/img/WM-Team.png';
    import minigame2 from '@/assets/img/WM-Puzzle2.png';
    import notebook from '@/assets/img/WM-Notebook.png';
    import shader from '@/assets/img/WM-shader.png';
    import mockup from '@/assets/img/WM-mock-up.png';
</script>

<template>
    <TopBar title = "Woodland Mystery"></TopBar>
    <div class = "cover-image">
        <ImageDraw :image="title" :maxWidth="1000" :maxHeight="1000"></ImageDraw>
    </div>
    <div class = "body">
        <h2 class = "mini-title">Overview</h2>
        <div class = "overview">
            <p class = "body-text">
                Team: Davide Pessi, Anita Ruggiu, Pietro Arsi, Matteo Ferrero<br>
                Context: Course of videogame design and programming<br>
                Professor: Pierluca Lanzi<br>
                Year : 2023/2024<br><br>
                My role: game designer / developer
            </p>
            <ImageDraw :image="team" :maxWidth="400" :maxHeight="1000"></ImageDraw>
        </div>
        <h2 class = "mini-title">My development</h2>
        <p class = "body-text">
            The project was developed using Unity, a popular game engine which helps us to create a videogame using both 2D and 3D assets.<br>
            <br>
            As game designer my main role was to design the story of the game, meaning that I had to create all the character and their back-stories. I also had to spend a lot of time thinking how the story would unravelled to the player, and how to balance dialogues and minigames in order to keep the player interested in the story and entertained.<br>
            <br>
            As developer I was given the main task of building the world and handling the dialogue system and the interactions system between the characters.<br>
            <br>
            During the course I started to learn C# and Unity and I also started understanding the basics of computer graphics which I further developed in other courses.
        </p>
        <Gallery :image1="minigame" :image2="dialogue" :image3="notebook"></Gallery>
        <h2 class = "mini-title">Future development</h2>
        <div class = "body-text">
            The videogame, started during the course, is currently being developed. The demo is the story of a detective Fox which is assigned the case of finding the criminal behind the destruction of the ex-mayor statue Owl.<br>
            <br>
            The demo is available <wired-link href="https://polimi-game-collective.itch.io/woodland-mystery" target="_blank" elevation ="3" style=" --underline-color: teal;">here</wired-link>.
        </div>
        <div class="gallery">
            <Gallery :image1="minigame2" :image2="mockup" :image3="shader"></Gallery>
        </div>
    </div>

    <FooterProject next="Living Space" nextLink="/LivingSpace" previous="Car Game" previousLink="/CarGame"></FooterProject>
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