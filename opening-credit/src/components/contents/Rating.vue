<template>
    <div class="wrapper">
        <div id="title">신용등급</div>

        <div class="cards">
            <transition name="cardfade" appear>
                <div class="card">
                    <div class="cardtitle">신용이란?</div>
                    <div class="cardcontent" style="text-align: center;">
                        <a @click="changeContentView('Credit')" style="cursor: pointer;">바로가기</a>
                    </div>
                </div>
            </transition>

            <transition name="cardfade" appear>
                <div class="card">
                    <div class="cardtitle">신용등급이란?</div>
                    <div class="cardcontent">
                        개인신용평가에서 각 개인의 신용도를 평가한 등급. NICE와 KCB에서 평가한다.
                    </div>
                </div>
            </transition>

            <transition name="cardfade" appear>
                <div class="card">
                    <div class="cardtitle">등급표</div>
                    <div class="cardcontent">
                        bxuip의 표 넣어야됨
                    </div>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
import { EventBus } from './../event-bus.js'

export default {
    components: {

    },
    data: function() {
        return {
            
        }
    },
    methods: {
        changeContentView: function(message) {
            EventBus.$emit('changeContentView', message);
        }
    }
}
</script>

<style scoped>
    .wrapper {
        display: flex;
        flex-direction: column;
        align-items: left;
    }
    #title {
        border: 5px solid #a8dba8;
        border-radius: 5px;
        width: 150px;
        height: 50px;
        line-height: 50px;
        vertical-align: middle;
        text-align: center;
        margin-top: 20px;
        margin-left: 20px;
        font-size: 20px;
        font-weight: bold;
    }
    .cards {
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 20px;
    }
    .card {
        border: 5px solid #a8dba8;
        border-radius: 5px;
        margin: 20px 20px 0px 20px;
    }
    .cardtitle {
        text-align: center;
        font-weight: bold;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
        padding: 10px;
    }
    .cardcontent {
        padding: 10px 20px 10px 20px;
    }

    .cardfade-enter-active {
        transition: all .5s ease;
    }

    .cardfade-leave-active {
        transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }

    .cardfade-enter, .cardfade-leave-to {
        transform: translateX(30px);
        opacity: 0;
    }
    
    /* Tablet */
    @media screen and (max-width: 1099px) {

    }

    /* Mobile */
    @media screen and (max-width: 499px) {

    }
</style>