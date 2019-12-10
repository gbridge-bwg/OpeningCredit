<template>
    <div class="sidebar">
        <center>
            <router-link to="/" class="link">
                <img src="/src/assets/title-eng.png" alt="title-eng.png">
            </router-link>

            <hr>

            <router-link to="/" class="link">
                <p v-if="!isTablet"><i class="fa fa-home" aria-hidden="true"></i>메인</p>
                <p v-if="isTablet"><i class="fa fa-home" aria-hidden="true"></i></p>
            </router-link>

            <p v-if="!isTablet" class="link" @click="toggleInfo"><i class="fa fa-book" aria-hidden="true"></i>정보</p>
            <p v-if="isTablet" class="link" @click="toggleInfo"><i class="fa fa-book" aria-hidden="true"></i></p>

            <router-link v-if="showInfo" to="/credit" class="link">
                <p v-if="!isTablet"><i class="fa fa-credit-card" aria-hidden="true"></i>신용이란?</p>
                <p v-if="isTablet"><i class="fa fa-credit-card" aria-hidden="true"></i></p>
            </router-link>

            <router-link v-if="showInfo" to="/rating" class="link">
                <p v-if="!isTablet"><i class="fa fa-list-ol" aria-hidden="true"></i>신용등급</p>
                <p v-if="isTablet"><i class="fa fa-list-ol" aria-hidden="true"></i></p>
            </router-link>

            <router-link v-if="showInfo" to="/nonfin" class="link">
                <p v-if="!isTablet"><i class="fa fa-info-circle" aria-hidden="true"></i>비금융정보</p>
                <p v-if="isTablet"><i class="fa fa-info-circle" aria-hidden="true"></i></p>
            </router-link>

            <hr>

            <p v-if="!isTablet" class="link" @click="toggleMyCredit"><i class="fa fa-user" aria-hidden="true"></i>내 신용등급</p>
            <p v-if="isTablet" class="link" @click="toggleMyCredit"><i class="fa fa-user" aria-hidden="true"></i></p>

            <router-link v-if="showMyCredit" to="/lookup" class="link">
                <p v-if="!isTablet"><i class="fa fa-check" aria-hidden="true"></i>조회</p>
                <p v-if="isTablet"><i class="fa fa-check" aria-hidden="true"></i></p>
            </router-link>

            <router-link v-if="showMyCredit" to="/result" class="link">
                <p v-if="!isTablet"><i class="fa fa-file-text" aria-hidden="true"></i>결과</p>
                <p v-if="isTablet"><i class="fa fa-file-text" aria-hidden="true"></i></p>
            </router-link>

            <router-link v-if="showMyCredit" to="/statistics" class="link">
                <p v-if="!isTablet"><i class="fa fa-pie-chart" aria-hidden="true"></i>통계</p>
                <p v-if="isTablet"><i class="fa fa-pie-chart" aria-hidden="true"></i></p>
            </router-link>

            <router-link to="/strategy" class="link">
                <p v-if="!isTablet"><i class="fa fa-line-chart" aria-hidden="true"></i>전략</p>
                <p v-if="isTablet"><i class="fa fa-line-chart" aria-hidden="true"></i></p>
            </router-link>

            <hr>

            <img src="/src/assets/gbridge.png" alt="gbridge.png">
        </center>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            isMobile: false,
            isTablet: false,
            showInfo: false,
            showMyCredit: false
        };
    },
    methods: {
        toggleInfo: function() {
            this.showInfo = !this.showInfo;
        },
        toggleMyCredit: function() {
            this.showMyCredit = !this.showMyCredit;
        },
        handleResize: function() {
            if(window.innerWidth < 500) {
                this.isMobile = true;
                this.isTablet = true;
            }
            else if(window.innerWidth >= 500 && window.innerWidth < 1100) {
                this.isMobile = false;
                this.isTablet = true;
            }
            else {
                this.isMobile = false;
                this.isTablet = false;
            }
        }
    },
    created() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
    },
    destroyed() {
        window.removeEventListener('resize', this.handleResize);
    }
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
        position: relative;
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
        color: black;
        cursor: default;
        text-decoration: none;
    }
    i {
        margin-top: 2px;
        position: absolute;
        left: 30px;
    }
    p {
        margin-left: 35px;
        font-family: 'BinggraeMelona', sans-serif;
    }

    /* Tablet */
    @media screen and (max-width: 1099px) {
        i {
            position: static;
            left: 0px;
            font-size: 30px;
        }
        p {
            margin-left: 0px;
        }
    }

    /* Mobile */
    @media screen and (max-width: 499px) {
        .sidebar {
            padding: 20px 0px 20px 0px;
        }
        hr {
            border-top: 1px solid rgba(84, 156, 84);
            border-bottom: 0px;
        }
    }
</style>