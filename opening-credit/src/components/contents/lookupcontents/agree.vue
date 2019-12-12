<template>
    <div class="wrapper">
        <p class="title">서비스 이용약관</p>
        <p class="textarea">
            <b>제 1조 (목적)</b><br>
            이 약관은 임의로 작성되었으며, 서비스를 이용함에 있어서 이용자와 회사간에 준수할 사항을 정함을 목적으로 함.<br><br>
            <b>제 2조 (정의)</b><br>
            1. '서비스'라 함은 회사가 ... ... ...<br>
            2. '이용자'라 함은 회원 및 비회원 ... ... ...<br><br>
            <b>제 3조 ...</b><br>
            내용 ...<br><br>
            <b>제 4조 ...</b><br>
            내용 ...<br><br>
            <b>제 5조 ...</b><br>
            내용 ...<br><br>
            <b>제 6조 ...</b><br>
            내용 ...<br><br>
        </p>
        
        <p class="title">개인정보 수집 및 이용</p>
        <p class="textarea">
            서비스를 이용하기 위해서 자세히 정보를 읽어보신 후 동의 여부를 결정하여 주시기 바랍니다.<br><br>
            [수집하는 개인정보의 항목]<br>
            가. 일반 회원가입<br>
            - 성명, 아이디, 비밀번호, 이메일주소, 휴대폰번호<br>
            나. 외국인 회원가입<br>
            - 담당자 정보, 성명, 기업 아이디, 기업 비밀번호, 휴대폰번호<br>
            다. ...<br>
            - 내용 ...<br>
            라. ...<br>
            - 내용 ...<br>
        </p>

        <gb-checkbox text='위의 "서비스 이용약관"과 "개인정보 수집 및 이용"에 동의합니다.'></gb-checkbox>

        <span class="nextBtn" @click="changeLookUpView('Sns')">
            <gb-button label="다음" colorLevel="colorLevel6"></gb-button>
        </span>
    </div>
</template>

<script>
import { EventBus } from './../../event-bus.js'
import GbButton from './../../bxuip/gb-button.vue'
import GbCheckbox from './../../bxuip/gb-checkbox.vue'

export default {
    components: {
        GbButton,
        GbCheckbox
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
        margin-bottom: 0px;
    }
    .textarea {
        width: 90%;
        overflow: scroll;
        max-height: 200px;
        margin-top: 10px;
        border: 1px solid rgba(0, 0, 0, 0.3);
        padding: 5px;
    }
</style>