<template>
    <div class="navbar" :style="{ width: navbarWidth }">
        <i class="fa fa-bars menu" @click="toggleSidebar" aria-hidden="true"></i>
        <gb-input2 v-if="!isTablet && !isMobile" class="search" width="300px"></gb-input2>
        <gb-input2 v-if="isTablet && !isMobile" class="search" width="175px"></gb-input2>
        <gb-input2 v-if="isMobile" class="search" width="100px"></gb-input2>

        <gb-button class="user" label="로그인" fill="true"></gb-button>
        <i class="fa fa-share-alt share" aria-hidden="true"></i>
    </div>
</template>

<script>
import GbInput2 from './bxuip/gb-input2.vue'
import GbButton from './bxuip/gb-button.vue'
import { EventBus } from './event-bus.js'

export default {
    components: {
        GbInput2,
        GbButton
    },
    data: function() {
        return {
            isTablet: false,
            isMobile: false,
            showSidebar: true,
            navbarWidth: "85vw"
        }
    },
    methods: {
        handleResize: function() {
            if(window.innerWidth < 500) {
                this.isMobile = true;
                this.isTablet = true;
            }
            else if(window.innerWidth >= 500 && window.innerWidth < 1100) {
                this.isMobile = false;
                this.isTablet = true;
            }
            else {
                this.isMobile = false;
                this.isTablet = false;
            }
        },
        toggleSidebar: function() {
            if(this.showSidebar) {
                this.showSidebar = false;
                this.navbarWidth = "100vw";
            }
            else {
                this.showSidebar = true;
                this.navbarWidth = "85vw";
            }

            EventBus.$emit('showSidebar', this.showSidebar);
        }
    },
    created() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
    },
    destroyed() {
        window.removeEventListener('resize', this.handleResize);
    }
}
</script>

<style scoped>
    .navbar {
        display: relative;
        float: left;
        height: 3.5rem;
        background-color: #D7F1D7;
    }
    .menu {
        font-size: 22px;
        margin-left: 25px;
        margin-right: 20px;
        margin-bottom: 4px;
        cursor: pointer;
    }
    .search {
        border-radius: 5px;
    }
    .share {
        float: right;
        font-size: 22px;
        margin-top: 15px;
        margin-right: 20px;
        cursor: pointer;
    }
    .user {
        float: right;
        margin-top: 13px;
        margin-right: 20px;
    }

    /* Tablet */
    @media screen and (max-width: 1099px) {

    }

    /* Mobile */
    @media screen and (max-width: 499px) {
        .menu {
            margin-left: 15px;
            margin-right: 10px;
        }
        .share {
            margin-right: 10px;
        }
        .user {
            margin-right: 10px;
        }
    }
</style>