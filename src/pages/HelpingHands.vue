<script setup >
import chatbot from '@/assets/img/HH-Chatbot.jpg';
import contact from '@/assets/img/HH-Contact.jpg';
import projects from '@/assets/img/HH-Projects.jpg';
import mockup from '@/assets/img/HH-mock-up.png';
import title from '@/assets/img/HelpingHands Title.jpg';
import worker from '@/assets/img/HH-worker.jpg';
import footer from '@/assets/img/HH-footer.jpg';
import donate from '@/assets/img/HH-Donate.jpg';
</script>

<template>
    <TopBar title = "Helping Hands"></TopBar>
    <div class = "cover-image">
        <ImageDraw :image="title" :maxWidth="1000" :maxHeight="1000"></ImageDraw>
    </div>
    <div class = "body">
        <h2 class = "mini-title">Overview</h2>
        <div class = "overview">
            <p class = "body-text">
                Team: Davide Pessi, Matteo Fiorentino, Luca Longinotti, Filippo Fini<br>
                Context: Course of Hypermedia Application<br>
                Year : 2023/2024<br>
                <br>
                My role: back-end and front-end developer
            </p>
        </div>
        <h2 class = "mini-title">Project details</h2>
        <p class = "body-text">
            The project aimed at creating a web-site for a non-profit organization that helps women victim of violence.<br>
            To achieve this we first realized a mock up using Figma, by defining each component that we would have to use:
        </p>
        <ImageDraw :image="mockup" :maxWidth="800" :maxHeight="800"></ImageDraw>
        <p class = "body-text">
            And then we started developing each page, developing each component when encountered for the first time.<br>
            <br>
            In order to have a scaling web-site we decided to use supabase as our database and create pages based on the elements inside our database. For instance we have one page generated for each worker at the organization, with their photo, role and project that had worked on.
        </p>
        <div class ="gallery">
            <Gallery :image1="worker" :image2="projects" :image3="contact"></Gallery>
        </div>
        <div class = "body-text">
            Finally the project requirements also asked to include a working chatbot, we therefore decided to add a bot connected to ChatGPT that could help the users to navigate the website and answer question about violence using a prompt that authorized the bot to only answer these kind of questions.<br>
            <br>
            The source of the full project can be found on my GitHub <wired-link href="https://github.com/DavidePessi/Helping-Hands" target="_blank" elevation ="3" style=" --underline-color: teal;">here</wired-link>.
        </div>
        <div class="gallery">
        <Gallery :image1="chatbot" :image2="footer" :image3="donate"></Gallery>
        </div>
    </div>
    <FooterProject next="Car Game" nextLink="/CarGame" previous="Living Space" previousLink="/LivingSpace"></FooterProject>
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