<template>
    <div class="wrapper">
        <div id="title">신용등급</div>

        <div class="content">
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
                            신용을 NICE와 KCB에서 평가하여 총 10등급 및 1000점 만점의 점수로 나타낸 것.
                        </div>
                    </div>
                </transition>

                <transition name="cardfade" appear>
                    <div class="card">
                        <div class="cardtitle">신용등급이란?</div>
                        <div class="cardcontent">
                            1등급으로 갈수록 좋은 신용이며, 3~6등급이 일반적입니다.<br>
                            최근에는 Toss, 카카오뱅크, 카카오페이, 뱅크샐러드 등에서 간편하게 신용 정보를 제공합니다.
                        </div>
                    </div>
                </transition>

                <transition name="cardfade" appear>
                    <div class="card">
                        <div class="cardtitle">분포</div>
                        <div class="cardcontent">
                            3등급 이상의 고신용 등급이 전체의 약 54%로 절반을 넘고, 4~6등급은 약 31%,<br>
                            7등급 이하의 저신용 등급은 약 14%입니다.
                        </div>
                    </div>
                </transition>

                <transition name="cardfade" appear>
                    <div class="card">
                        <div class="cardtitle">신용불량자</div>
                        <div class="cardcontent">
                            주로 7등급 이하의 신용등급을 가진 사람을 뜻하며,
                            제1금융권 경제활동에 많은 지장이 생깁니다.
                        </div>
                    </div>
                </transition>
            </div>

            <transition name="cardfade" appear>
                <div id="grid" style="width: 100%; margin: 20px;">
                    <gb-grid></gb-grid>
                </div>
            </transition>
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
    .content {
        display: flex;
    }
    .cards {
        display: flex;
        flex-direction: row;
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
        .content {
            flex-direction: column;
        }
    }

    /* Mobile */
    @media screen and (max-width: 499px) {

    }
</style>