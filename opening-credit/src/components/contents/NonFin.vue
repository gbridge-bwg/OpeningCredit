<template>
    <div class="wrapper">
        <div id="title">비금융정보</div>

        <div class="cards">
            <transition name="cardfade" appear>
                <div class="card">
                    <div class="cardtitle">비금융정보란?</div>
                    <div class="cardcontent">
                        직접적인 경제활동 내역이 아닌 간접적인 정보입니다. SNS 라이프스타일,
                        이용약관을 읽는 시간, 위치정보, 문자 기록, 심리 측정 등의 비금융정보를 분석하여 신용에 반영하려는 추세입니다.
                    </div>
                </div>
            </transition>

            <transition name="cardfade" appear>
                <div class="card">
                    <div class="cardtitle">Thin Filer</div>
                    <div class="cardcontent">
                        Thin Filer는 대학생이나 사회초년생처럼 금융거래 정보가 거의 없는 사람들을 일컫는 용어입니다.<br>
                        이들은 경제활동을 제대로 시작해보기도 전에 저금리 대출 등에 제약을 받는 경우가 많습니다.
                    </div>
                </div>
            </transition>

            <transition name="cardfade" appear>
                <div class="card">
                    <div class="cardtitle">실제로 반영되나요?</div>
                    <div class="cardcontent">
                        싱가포르의 Lenddo, 독일의 Kreditech와 같은 해외 핀테크 기업들은
                        이미 빅데이터, 머신러닝 기술을 활용하여 적극적으로 반영중입니다.<br>
                        우리나라의 경우는 통신요금을 성실히 납부한 내역을 증명하면 반영해주는 등의 소극적인 반영이지만,
                        최근에 비금융정보에 대한 논의가 활발하게 이루어지고 있습니다.
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