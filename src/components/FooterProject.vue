<template>
    <div class="footer-body">

        <router-link :to="previousLink" class="mini-arrow">
            <img :src="arrowleft" class="arrow" />
            <p>{{ previous }}</p>
        </router-link>

        <router-link :to="nextLink" class="mini-arrow">
            <p>{{ next }}</p>
            <img :src="arrowright" class ="arrow"></img>
        </router-link>
    </div>
</template>

<script setup>
    import arrowleft from '@/assets/img/ArrowLeft.webp';
    import arrowright from '@/assets/img/ArrowRight.webp';

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