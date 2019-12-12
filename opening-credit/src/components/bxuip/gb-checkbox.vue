<template>
    <div class="gb-checkbox">
        <div class="box" @click="check"></div>
        <span class="text">{{text}}</span>
    </div>
</template>

<script>
export default {
    props: {
        text: String
    },
    data: function() {
        return {
            isChecked: false
        };
    },
    methods: {
        check: function(event) {
            if(this.isChecked) {
                this.isChecked = false;
                event.target.style.backgroundImage = "";
            }
            else {
                this.isChecked = true;
                event.target.style.backgroundImage = "url('/src/assets/checked.png')";
            }
        }
    }
}
</script>

<style scoped>
    .gb-checkbox {
        display: flex;
        align-items: center;
        margin-top: 20px;
    }
    .box {
        border: 1px solid rgba(0, 0, 0, 0.3);
        width: 15px;
        height: 15px;
    }
    .text {
        font-size: 12px;
        margin-left: 10px;
    }
</style>