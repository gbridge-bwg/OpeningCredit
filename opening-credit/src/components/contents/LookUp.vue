<template>
    <div class="wrapper">
        <div class="title">조회</div>
        <div class="content">
            <gb-progress :value="progressCount" max="5" color="rgba(84, 156, 84)"></gb-progress>
    
            <transition name="viewchange" mode="out-in">
                <component class="view" :is="view"></component>
            </transition>
        </div>
    </div>
</template>

<script>
import { EventBus } from './../event-bus.js'
import GbProgress from './../bxuip/gb-progress.vue'
import Agree from './lookupcontents/agree.vue'
import Sns from './lookupcontents/sns.vue'
import Survey from './lookupcontents/survey.vue'
import Loading from './lookupcontents/loading.vue'

export default {
    components: {
        GbProgress,
        Agree,
        Sns,
        Survey,
        Loading
    },
    data: function() {
        return {
            view: Agree,
            progressCount: "1"
        }
    },
    created() {
        this.progressCount = "1";

        EventBus.$on('changeLookUpView', viewName => {
            this.view = viewName;
        });

        EventBus.$on('progressCount', num => {
            this.progressCount = String(Number(this.progressCount) + Number(num));
        });
    }
}
</script>

<style scoped>
    .wrapper {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .title {
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
    .content {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 20px 20px 20px 20px;
    }
    .view {
        margin-top: 20px;
    }

    /* 트랜지션, 애니메이션 */
    .viewchange-enter-active, .viewchange-leave-active {
        transition: all .5s;
    }
    .viewchange-enter {
        opacity: 0;
        transform: translateX(30px);
    }
    .viewchange-leave-to {
        opacity: 0;
        transform: translateX(-30px);
    }

    /* Tablet */
    @media screen and (max-width: 1099px) {

    }

    /* Mobile */
    @media screen and (max-width: 499px) {

    }
</style>