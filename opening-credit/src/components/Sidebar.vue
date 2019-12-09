<template>
    <div class="sidebar">
        <center>
            <img src="/src/assets/title-eng.png" alt="title-eng.png">

            <hr>

            <router-link to="/" class="link">
                <p><i class="fa fa-home" aria-hidden="true"></i>메인</p>
            </router-link>

            <p><i class="fa fa-book" aria-hidden="true"></i>정보</p>

            <router-link to="/credit" class="link">
                <p><i class="fa fa-credit-card" aria-hidden="true"></i>신용이란?</p>
            </router-link>

            <router-link to="/rating" class="link">
                <p><i class="fa fa-list-ol" aria-hidden="true"></i>신용등급</p>
            </router-link>

            <router-link to="/nonfin" class="link">
                <p><i class="fa fa-info-circle" aria-hidden="true"></i>비금융정보</p>
            </router-link>

            <hr>

            <p><i class="fa fa-user" aria-hidden="true"></i>내 신용등급</p>

            <router-link to="/lookup" class="link">
                <p><i class="fa fa-check" aria-hidden="true"></i>조회</p>
            </router-link>

            <router-link to="/result" class="link">
                <p><i class="fa fa-file-text" aria-hidden="true"></i>결과</p>
            </router-link>

            <router-link to="/statistics" class="link">
                <p><i class="fa fa-pie-chart" aria-hidden="true"></i>통계</p>
            </router-link>

            <router-link to="/strategy" class="link">
                <p><i class="fa fa-line-chart" aria-hidden="true"></i>전략</p>
            </router-link>

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
    @font-face {
        font-family: 'BinggraeMelona';
        src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_twelve@1.0/BinggraeMelona.woff') format('woff');
        font-weight: normal;
        font-style: normal;
    }
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
    .link:link {
        color: black;
        cursor: default;
        text-decoration: none;
    }
    .link:visited {
        color: black;
        cursor: default;
        text-decoration: none;
    }
    .link:active {
        color: black;
        cursor: default;
        text-decoration: none;
    }
    .link:hover {
        color: blue;
        cursor: default;
        text-decoration: none;
    }
    p {
        font-family: 'BinggraeMelona', sans-serif;
    }
    </style>