import { createApp } from 'vue';
import 'wired-elements';

import App from './App.vue';
import Home from './pages/Home.vue';
import Projects from './pages/Projects.vue';
import About from './pages/About.vue';
import WoodlandMystery from './pages/WoodlandMystery.vue';
import HelpingHands from './pages/HelpingHands.vue';
import CarGame from './pages/CarGame.vue';
import LivingSpace from './pages/LivingSpace.vue';
import ExpiredFilm from './pages/ExpiredFilm.vue';
import FantaDraft from './pages/FantaDraft.vue';

import Button from './components/Button.vue';
import Puck from './components/Puck.vue';
import TopBar from './components/TopBar.vue';
import Band from './components/Band.vue';
import Avatar from './components/Avatar.vue';
import SkillItem from './components/SkillItem.vue';
import IconLink from './components/IconLink.vue';
import LeftDescriptionBand from './components/LeftDescriptionBand.vue';
import RightDescriptionBand from './components/RightDescriptionBand.vue';
import ImageDraw from './components/ImageDraw.vue';
import Gallery from './components/Gallery.vue';
import Highlight from './components/Highlight.vue';
import SketchedCard from './components/SketchCard.vue';
import FooterProject from './components/FooterProject.vue';

import { createWebHistory } from 'vue-router';
import { createRouter } from 'vue-router';

import './assets/global.css'


const routes = [
    {
        path: '/', component: Home,
    },
    {
        path: '/Home', component: Home,
    },
    {
        path: '/Projects', component: Projects,
    },
    {
        path: '/About', component: About,
    },
    {
        path: '/WoodlandMystery', component: WoodlandMystery,
    },
    {
        path: '/HelpingHands', component: HelpingHands,
    },
    {
        path: '/CarGame', component: CarGame,
    },
    {
        path: '/LivingSpace', component: LivingSpace,
    },
    {
        path: '/ExpiredFilm', component: ExpiredFilm,
    },
    {
        path: '/FantaDraft', component: FantaDraft,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
})

const app = createApp(App);
app.component('Button', Button);
app.component('Puck', Puck);
app.component('TopBar', TopBar);
app.component('Band', Band);
app.component('Avatar', Avatar);
app.component('SkillItem', SkillItem);
app.component('IconLink', IconLink);
app.component('LeftDescriptionBand', LeftDescriptionBand);
app.component('RightDescriptionBand', RightDescriptionBand);
app.component('Gallery', Gallery);
app.component('ImageDraw', ImageDraw);
app.component('Highlight', Highlight);
app.component('SketchedCard', SketchedCard);
app.component('FooterProject', FooterProject);


import paper1 from './assets/img/paper1.webp';
import paper2 from './assets/img/paper2.webp';
import paper3 from './assets/img/paper3.webp';
import paper4 from './assets/img/paper4.webp';


const paperImages = [paper1, paper2, paper3, paper4];
const randomIndex = Math.floor(Math.random() * paperImages.length);
const imageUrl = paperImages[randomIndex];

document.body.style.backgroundImage = `url('${imageUrl}')`;
document.body.style.backgroundRepeat = 'repeat-y';
document.body.style.backgroundPosition = 'center top';
document.body.style.backgroundSize = '100% auto';
document.body.style.backgroundAttachment = 'fixed';


app.use(router);
app.mount('#app');