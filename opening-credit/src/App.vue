<template>
    <div id="app">
        <Sidebar></Sidebar>
        <div id="right">
            <Navbar></Navbar>
            <router-view></router-view>
            <Footer></Footer>
        </div>
    </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default {
    components: {
        Sidebar,
        Navbar,
        Footer
    }
}
</script>

<style scoped>
    #app {
        display: flex;
    }
    #right {
        display: flex;
        flex-direction:column;
    }
</style>
