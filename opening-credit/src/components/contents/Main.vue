<template>
    <div class="wrapper">
        <img id="maintitle" src="https://github.com/gbridge-bwg/OpeningCredit/blob/master/opening-credit/src/assets/maintitle.png?raw=true" alt="maintitle.png">
        <div>
            <p id="title"><b>Opening Credit</b></p>
            <p id="subtitle"><b>대학생을 위한 신용등급 예측</b></p>
        </div>
    </div>
</template>

<script>
import GbButton from './../bxuip/gb-button.vue'
import { EventBus } from './../event-bus.js'

export default {
    components: {
        GbButton
    },
    data: function() {
        return {
            
        }
    },
    created() {
        
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

    .wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    p {
        margin-top: 0px;
        margin-bottom: 0px;
    }
    #maintitle {
        width: 30%;
        margin: 100px 50px 100px 50px;
    }
    #title {
        font-family: 'Lilita One', cursive;
        font-size: 65px;
        margin-left: 50px;
        margin-right: 50px;
        color: green;
    }
    #subtitle {
        font-family: 'BBTreeGR';
        font-size: 30px;
        margin: 20px 50px 50px 50px;
    }

    /* Tablet */
    @media screen and (max-width: 1099px) {
        .wrapper {
            display: block;
            text-align: center;
            margin: 0 auto;
        }
        #maintitle {
            margin-bottom: 50px;
        }
        #title {
            font-family: 'Lilita One', cursive;
            font-size: 45px;
            margin-left: 50px;
            margin-right: 50px;
            color: green;
        }
        #subtitle {
            font-family: 'BBTreeGR';
            font-size: 25px;
            margin-top: 20px;
            margin-left: 50px;
            margin-right: 50px;
        }
    }

    /* Mobile */
    @media screen and (max-width: 499px) {
        #maintitle {
            width: 50%;
            margin: 50px 50px 20px 50px;
        }
        #subtitle {
            font-family: 'BBTreeGR';
            font-size: 15px;
            margin-top: 20px;
            margin-left: 50px;
            margin-right: 50px;
        }
    }
</style>