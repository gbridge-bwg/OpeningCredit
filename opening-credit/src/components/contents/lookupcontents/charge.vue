<template>
    <div class="wrapper">
        <div style="display:flex; align-items: center; min-height: 300px;">Charge.vue</div>

        <span class="nextBtn" @click="changeLookUpView('loading')">
            <gb-button label="다음" colorLevel="colorLevel6"></gb-button>
        </span>
    </div>
</template>

<script>
import { EventBus } from './../../event-bus.js'
import GbButton from './../../bxuip/gb-button.vue'

export default {
    components: {
        GbButton
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
</style>