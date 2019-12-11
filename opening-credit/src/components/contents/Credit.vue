<template>
    <div class="wrapper">
        <div id="title">신용</div>

        <div class="cards">
            <transition name="cardfade" appear>
                <div class="card">
                    <div class="cardtitle">사전적 의미</div>
                    <div class="cardcontent">
                        거래한 재화의 대가를 앞으로 치를 수 있음을 보이는 능력.
                        외상값, 빚, 급부 따위를 감당할 수 있는 지급 능력으로 소유 재산의 화폐적 기능을 이른다.
                    </div>
                </div>
            </transition>

            <transition name="cardfade" appear>
                <div class="card">
                    <div class="cardtitle">경제적 의미</div>
                    <div class="cardcontent">
                        쉽게 표현하면, '빌린 돈을 잘 갚을 수 있는가'를 판단하는 척도입니다.
                        신용은 경제활동을 통해 쌓인 객관적인 사실을 토대로 검증하고 평가되며
                        신용등급이 낮을 경우 신용카드 발급, 대출 시 금리의 차이 등 불이익을 볼 수 있기 때문에
                        신용관리는 현대 사회에서 필수적입니다.
                    </div>
                </div>
            </transition>

            <transition name="cardfade" appear>
                <div class="card">
                    <div class="cardtitle">누가 평가하나요?</div>
                    <div class="cardcontent">
                        신용은 채무상환 이력, 부채, 보증, 과거 신용거래 등을 척도로 신용평가회사에서 평가합니다.
                        우리나라의 신용평가회사로는 NICE와 KCB가 있습니다.
                    </div>
                </div>
            </transition>

            <transition name="cardfade" appear>
                <div class="card">
                    <div class="cardtitle">신용등급이란?</div>
                    <div class="cardcontent" style="text-align: center;">
                        <a @click="changeContentView('Rating')" style="cursor: pointer;">바로가기</a>
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