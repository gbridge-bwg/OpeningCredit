<template>
    <div class="wrapper">
        <div class="content">
            <p>1. 평소 이용약관을 자세히 읽어본다.</p>
            <input type="radio" class="radiobtn" name="query1" value="1"> 매우 그렇지 않다
            <input type="radio" class="radiobtn" name="query1" value="2"> 그렇지 않다
            <input type="radio" class="radiobtn" name="query1" value="3"> 보통이다
            <input type="radio" class="radiobtn" name="query1" value="4"> 그렇다
            <input type="radio" class="radiobtn" name="query1" value="5"> 매우 그렇다
        </div>

        <div class="content">
            <p>2. 사회적 관습이 마음에 들지않는다.</p>
            <input type="radio" class="radiobtn" name="query2" value="1"> 매우 그렇지 않다
            <input type="radio" class="radiobtn" name="query2" value="2"> 그렇지 않다
            <input type="radio" class="radiobtn" name="query2" value="3"> 보통이다
            <input type="radio" class="radiobtn" name="query2" value="4"> 그렇다
            <input type="radio" class="radiobtn" name="query2" value="5"> 매우 그렇다
        </div>

        <div class="content">
            <p>3. 오랜 시간을 기다리는 것이 힘들지 않다.</p>
            <input type="radio" class="radiobtn" name="query3" value="1"> 매우 그렇지 않다
            <input type="radio" class="radiobtn" name="query3" value="2"> 그렇지 않다
            <input type="radio" class="radiobtn" name="query3" value="3"> 보통이다
            <input type="radio" class="radiobtn" name="query3" value="4"> 그렇다
            <input type="radio" class="radiobtn" name="query3" value="5"> 매우 그렇다
        </div>

        <div class="content">
            <p>4. 내가 해야할 일을 정확히 안다.</p>
            <input type="radio" class="radiobtn" name="query4" value="1"> 매우 그렇지 않다
            <input type="radio" class="radiobtn" name="query4" value="2"> 그렇지 않다
            <input type="radio" class="radiobtn" name="query4" value="3"> 보통이다
            <input type="radio" class="radiobtn" name="query4" value="4"> 그렇다
            <input type="radio" class="radiobtn" name="query4" value="5"> 매우 그렇다
        </div>

        <div class="content">
            <p>5. 친한 친구사이여도 돈 관계를 명확히 하는 편이다</p>
            <input type="radio" class="radiobtn" name="query5" value="1"> 매우 그렇지 않다
            <input type="radio" class="radiobtn" name="query5" value="2"> 그렇지 않다
            <input type="radio" class="radiobtn" name="query5" value="3"> 보통이다
            <input type="radio" class="radiobtn" name="query5" value="4"> 그렇다
            <input type="radio" class="radiobtn" name="query5" value="5"> 매우 그렇다
        </div>

        <div class="content">
            <p>6. 평소 약속시간을 칼같이 지키는 편이다</p>
            <input type="radio" class="radiobtn" name="query6" value="1"> 매우 그렇지 않다
            <input type="radio" class="radiobtn" name="query6" value="2"> 그렇지 않다
            <input type="radio" class="radiobtn" name="query6" value="3"> 보통이다
            <input type="radio" class="radiobtn" name="query6" value="4"> 그렇다
            <input type="radio" class="radiobtn" name="query6" value="5"> 매우 그렇다
        </div>

        <span class="nextBtn" @click="changeLookUpView('Loading')">
            <gb-button label="다음" colorLevel="colorLevel6"></gb-button>
        </span>
    </div>
</template>

<script>
import { EventBus } from './../../event-bus.js'
import GbButton from './../../bxuip/gb-button.vue'

export default {
    components: {
        GbButton,
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
        display: flex;
        flex-direction: column;
    }
    .nextBtn {
        margin-top: 20px;
    }
    .content {
        margin-top: 10px;
        margin-bottom: 10px;
    }
    .radiobtn {
        margin-left: 5px;
        margin-right: 5px;
    }
</style>