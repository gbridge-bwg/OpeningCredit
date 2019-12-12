<template>
    <div class="wrapper">
        <div style="display:flex; align-items: center; min-height: 300px;">
            분석중 ...<br>
            잠시만 기다려주세요...
        </div>
    </div>
</template>

<script>
import { EventBus } from './../../event-bus.js'

export default {
    components: {

    },
    methods: {
        
    },
    created() {
        setTimeout(function() {
            EventBus.$emit('progressCount', "1");
        }, 1500);

        setTimeout(function() {
            EventBus.$emit('changeContentView', 'Result');
        }, 3000);
    }
}
</script>

<style scoped>
    .wrapper {
        width: 75%;
    }
</style>