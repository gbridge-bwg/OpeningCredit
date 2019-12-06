<template>
    <div id="app">
        <Sidebar></Sidebar>
        <div id="right">
            <Navbar></Navbar>
            <Content></Content>
            <Footer></Footer>
        </div>
    </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue'
import Navbar from './components/Navbar.vue'
import Content from './components/Content.vue'
import Footer from './components/Footer.vue'

export default {
    components: {
        Sidebar,
        Navbar,
        Content,
        Footer
    }
}
</script>

<style scoped>
    #app {
        display: flex;
    }
    #right {
        display: block;
    }
</style>
