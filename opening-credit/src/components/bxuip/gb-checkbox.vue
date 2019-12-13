<template>
    <div class="gb-checkbox" @click="check">
        <div id="box"></div>
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
        check: function() {
            if(this.isChecked) {
                this.isChecked = false;
                document.getElementById('box').style.backgroundImage = "";
            }
            else {
                this.isChecked = true;
                document.getElementById('box').style.backgroundImage = "url('https://github.com/gbridge-bwg/OpeningCredit/blob/master/opening-credit/src/assets/checked.png?raw=true')";
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
    #box {
        border: 1px solid rgba(0, 0, 0, 0.3);
        width: 15px;
        height: 15px;
    }
    .text {
        font-size: 12px;
        margin-left: 10px;
    }
</style>