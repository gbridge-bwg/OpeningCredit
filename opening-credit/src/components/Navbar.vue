<template>
    <div class="navbar">
        <i class="fa fa-bars menu" aria-hidden="true"></i>
        <gb-input2 class="search"></gb-input2>

        <gb-button class="user" label="로그인" fill="true"></gb-button>
        <i class="fa fa-share-alt share" aria-hidden="true"></i>
    </div>
</template>

<script>
import GbInput2 from './bxuip/gb-input2.vue'
import GbButton from './bxuip/gb-button.vue'

export default {
    components: {
        GbInput2,
        GbButton
    }
}
</script>

<style scoped>
    .navbar {
        display: relative;
        float: left;
        width: 85vw;
        height: 3.5rem;
        background-color: #D7F1D7;
    }
    .menu {
        font-size: 22px;
        margin-left: 25px;
        margin-right: 20px;
        margin-bottom: 4px;
    }
    .search {
        border-radius: 5px;
    }
    .share {
        float: right;
        font-size: 22px;
        margin-top: 15px;
        margin-right: 20px;
    }
    .user {
        float: right;
        margin-top: 13px;
        margin-right: 20px;
    }
</style>