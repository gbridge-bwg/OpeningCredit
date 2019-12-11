<template>
    <div class="footer" :style="{ width: footerWidth }">
        <p>Copyright © youseokhwan 2019</p>
    </div>
</template>

<script>
import { EventBus } from './event-bus.js'

export default {
    data: function() {
        return {
            footerWidth: "85vw"
        }
    },
    created() {
        EventBus.$on('showSidebar', showSidebar => {
            if(showSidebar)
                this.footerWidth = "85vw";
            else
                this.footerWidth = "100vw";
        });
    }
}
</script>

<style scoped>
    .footer {
        display: flex;
        align-items: center;
        height: 3.5rem;
        background-color: #D7F1D7;
    }
    p {
        width: 100%;
        text-align: center;
    }
</style>