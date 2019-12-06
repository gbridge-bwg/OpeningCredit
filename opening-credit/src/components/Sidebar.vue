<template>
    <div class="sidebar">
        <center>
            <img src="/src/assets/title-eng.png" alt="title-eng.png">
            <hr>
            <p>Home</p>
            <p>About</p>
            <hr>
            <p>My Credit</p>
            <p>Strategy</p>
            <hr>
            <img src="/src/assets/gbridge.png" alt="gbridge.png">
        </center>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
    .sidebar {
        width: 15vw;
        min-height: 100vh;
        padding: 20px 10px 20px 10px;
        background-color: #a8dba8;
    }
    img {
        width: 80%;
    }
    hr {
        margin: 20px;
        border-top: 1px solid rgba(84, 156, 84);
        border-bottom: 0px;
    }
    p {
        text-transform: uppercase;
    }
</style>