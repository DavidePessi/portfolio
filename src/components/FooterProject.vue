<template>
    <div class="footer-body">

        <a :href="previousLink" class="mini-arrow">
            <img :src="arrowleft" class ="arrow"></img>
            <p>{{previous}}</p>
        </a>

        <a :href="nextLink" class="mini-arrow">
            <p>{{ next }}</p>
            <img :src="arrowright" class ="arrow"></img>
        </a>
    </div>
</template>

<script setup>
    import arrowleft from '@/assets/img/ArrowLeft.png';
    import arrowright from '@/assets/img/ArrowRight.png';

    const props = defineProps({
        next: String,
        nextLink: String,
        previous: String,
        previousLink: String,
    })
</script>

<style scoped>
     .footer-body{
        display: flex;
        justify-content: space-between;
        margin-left: 8rem;
        margin-right: 8rem;
        border-top: 1px solid rgba(0, 0, 0, 0.5);
    }
    .mini-arrow {
        font-size: 2rem;
        font-family: 'PatrickHand';
        display: flex;
        flex-direction: row;  
        align-items: center;
        gap: 10px;
        text-decoration: none;
        color: black;
    }
    .mini-arrow:visited {
        color: black;
    }
    .mini-arrow:hover{
        text-decoration: underline;
    }

    .arrow{
        width: 60px;
        height: auto;
    }
</style>