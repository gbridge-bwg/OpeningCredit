<template>
    <span>
        <button class="gb-button" :action="action" :class="[colorLevel, fill]">{{label}}</button>
    </span>
</template>

<script>
export default {
    props: {
        label: String,
        action: String,
        colorLevel: String,
        fill: String
    }
}
</script>

<style scoped>
    .gb-button {
        box-sizing: border-box;
        height: 28px;
        line-height: 25px;
        cursor: pointer;
        display: inline-block;
        border: 0;
        padding: 0 10px;
        border-radius: 5px;
        font-size: 15px;
        text-transform: capitalize;
        color: white;
        background: #1297bf;
    }
    .colorLevel1 {
        background: hsla(178,83%,31%,1);
    }
    .colorLevel2 {
        background: hsla(186,83%,36%,1);
    }
    .colorLevel3 {
        background: hsla(194,83%,41%,1);
    }
    .colorLevel4 {
        background: hsla(202,83%,46%,1);
    }
    .colorLevel5 {
        background: hsla(210,83%,51%,1);
    }
    .colorLevel6 {
        background: rgba(84, 156, 84);
    }
    .true {
        background: #ffffff;
        color: rgba(84, 156, 84);
        box-shadow: inset 0 0 0 1px rgba(84, 156, 84);
    }
</style>