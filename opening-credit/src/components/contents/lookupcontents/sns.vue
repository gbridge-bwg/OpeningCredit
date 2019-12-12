<template>
    <div class="wrapper">
        <p class="title">SNS 아이디를 입력해주세요</p>

        <div class="content">
            <gb-input1 label="트위터"></gb-input1>
        </div>

        <div class="content">
            <gb-input1 label="페이스북"></gb-input1>
        </div>

        <div class="content">
            <gb-input1 label="인스타그램"></gb-input1>
        </div>

        <span class="nextBtn" @click="changeLookUpView('Charge')">
            <gb-button label="다음" colorLevel="colorLevel6"></gb-button>
        </span>
    </div>
</template>

<script>
import { EventBus } from './../../event-bus.js'
import GbInput1 from './../../bxuip/gb-input1.vue'
import GbButton from './../../bxuip/gb-button.vue'

export default {
    components: {
        GbButton,
        GbInput1
    },
    methods: {
        changeLookUpView: function(message) {
            EventBus.$emit('progressCount', "1");
            EventBus.$emit('changeLookUpView', message);
        }
    }
}
</script>

<style scoped>
    .wrapper {
        width: 75%;
    }
    .nextBtn {
        margin-top: 20px;
    }
    .title {
        font-weight: bold;
        margin-bottom: 20px;
    }
    .content {
        margin-bottom: 20px;
        transform: scale(1.2);
    }
</style>