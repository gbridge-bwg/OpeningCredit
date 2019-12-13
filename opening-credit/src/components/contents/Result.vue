<template>
    <div class="wrapper">
        <div id="title">결과</div>

        <div id="content">
            <div id="scoreboard">
                <div id="score">{{score}}<span style="font-size: 20px;">점</span></div>
                <div id="grade">{{grade}} <span style="font-size: 15px;">등급</span></div>
            </div>

            <div id="grid">
                <gb-grid></gb-grid>
            </div>
        </div>
    </div>
</template>

<script>
import { EventBus } from './../event-bus.js'
import GbGrid from './../bxuip/gb-grid.vue'

export default {
    components: {
        GbGrid
    },
    data: function() {
        return {
            score: 750,
            grade: 5
        }
    }
}
</script>

<style scoped>
    .wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    #title {
        border: 5px solid rgba(84, 156, 84);
        border-radius: 5px;
        width: 150px;
        height: 50px;
        line-height: 50px;
        vertical-align: middle;
        text-align: center;
        margin: 20px 20px 0px 20px;
        font-size: 20px;
        font-weight: bold;
    }
    #content {
        width: 80%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        margin-top: 20px;
        margin-bottom: 20px;
    }
    #scoreboard {
        margin-left: 10px;
        margin-right: 10px;
        width: 300px;
        height: 300px;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    #score {
        width: 200px;
        height: 200px;
        border: 5px solid green;
        /* border-radius: 150px; */
        border-radius: 50%;
        text-align: center;
        margin: 0 auto;
        vertical-align: middle;
        line-height: 200px;
        font-size: 40px;
    }
    #grade {
        height: 50px;
        text-align: center;
        margin: 0 auto;
        vertical-align: middle;
        line-height: 100px;
        font-size: 25px;
    }
    #grid {
        margin-left: 10px;
        margin-right: 10px;
    }

    /* Tablet */
    @media screen and (max-width: 1099px) {
        #content {
            flex-direction: column;
        }
    }

    /* Mobile */
    @media screen and (max-width: 499px) {

    }
</style>