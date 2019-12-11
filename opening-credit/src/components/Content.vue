<template>
    <div class="content" :style="{ width: contentWidth }">
        <transition name="fade" mode="out-in" appear>
            <component :is="view"></component>
        </transition>
    </div>
</template>

<script>
import { EventBus } from './event-bus.js'
import Main from './contents/Main.vue'
import Credit from './contents/Credit.vue'
import Rating from './contents/Rating.vue'
import NonFin from './contents/NonFin.vue'
import LookUp from './contents/LookUp.vue'
import Result from './contents/Result.vue'
import Statistics from './contents/Statistics.vue'
import Strategy from './contents/Strategy.vue'

export default {
    components: {
        Main, Credit, Rating, NonFin, LookUp, Result, Statistics, Strategy
    },
    data: function() {
        return {
            contentWidth: "85vw",
            view: Main
        }
    },
    created() {
        EventBus.$on('showSidebar', showSidebar => {
            if(showSidebar)
                this.contentWidth = "85vw";
            else
                this.contentWidth = "100vw";
        });

        EventBus.$on('changeContentView', viewName => {
            this.view = viewName;
        });
    }
}
</script>

<style scoped>
    @import url('https://fonts.googleapis.com/css?family=Lilita+One&display=swap');
    @font-face {
        font-family: 'BBTreeGR';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_nine_@1.1/BBTreeGR.woff') format('woff');
        font-weight: normal;
        font-style: normal; 
    }

    .content {
        width: 85vw;
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .3s ease-out;
    }

    .fade-enter, .fade-leave-to {
        opacity: 0;
    }

    /* Tablet */
    @media screen and (max-width: 1099px) {
        
    }

    /* Mobile */
    @media screen and (max-width: 499px) {

    }
</style>