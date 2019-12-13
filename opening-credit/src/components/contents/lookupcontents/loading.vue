<template>
    <div class="wrapper">
        <transition name="imgfade" mode="out-in">
            <component :is="view"></component>
        </transition>
        <div id="text">
            분석중 ...<br>
            잠시만 기다려주세요...
        </div>
    </div>
</template>

<script>
import { EventBus } from './../../event-bus.js'

export default {
    components: {
        'cycle1': {
            template: `<img class="imgcycle" src="https://github.com/gbridge-bwg/OpeningCredit/blob/master/opening-credit/src/assets/cycle1.png?raw=true"></img>`
        },
        'cycle2': {
            template: `<img class="imgcycle" src="https://github.com/gbridge-bwg/OpeningCredit/blob/master/opening-credit/src/assets/cycle2.png?raw=true"></img>`
        },
        'cycle3': {
            template: `<img class="imgcycle" src="https://github.com/gbridge-bwg/OpeningCredit/blob/master/opening-credit/src/assets/cycle3.png?raw=true"></img>`
        },
    },
    data: function(){
        return {
            view: 'cycle1'
        }
    },
    created() {
        EventBus.$on('imagecycle', viewName => {
            this.view = viewName;
        });

        setTimeout(function() {
            EventBus.$emit('progressCount', "1");
        }, 1500);

        setTimeout(function() {
            EventBus.$emit('changeContentView', 'Result');
        }, 7000);

        setTimeout(function() {
            EventBus.$emit('imagecycle', 'cycle2');
        }, 1000);

        setTimeout(function() {
            EventBus.$emit('imagecycle', 'cycle3');
        }, 2000);

        setTimeout(function() {
            EventBus.$emit('imagecycle', 'cycle1');
        }, 3000);

        setTimeout(function() {
            EventBus.$emit('imagecycle', 'cycle2');
        }, 4000);

        setTimeout(function() {
            EventBus.$emit('imagecycle', 'cycle3');
        }, 5000);

        setTimeout(function() {
            EventBus.$emit('imagecycle', 'cycle1');
        }, 6000);
    }
}
</script>

<style scoped>
    .wrapper {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
        width: 500px;
    }
    .imgcycle {
        width: 150px;
        height: 150px;
    }
    #text {
        display:flex;
        align-items: center;
        height: 300px;
    }

    /* 트랜지션, 애니메이션 */
    .imgfade-enter-active, .imgfade-leave-active {
        transition: opacity .3s ease-out;
    }
    .imgfade-enter, .imgfade-leave-to {
        opacity: 0;
    }

    /* Tablet */
    @media screen and (max-width: 1099px) {
        .wrapper {
            width: 75%;
            flex-direction: column;
        }
        #text {
            height: 100px;
        }
    }

    /* Mobile */
    @media screen and (max-width: 499px) {

    }
</style>