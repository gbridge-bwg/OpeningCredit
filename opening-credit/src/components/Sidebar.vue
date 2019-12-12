<template>
    <transition name="sidebarfade" mode="out-in">
        <div class="sidebar" v-if="showSidebar">
            <center>
                <img v-if="!isMobile" @click="changeContentView('Main')" src="/src/assets/title.png" alt="title.png">
                <img v-if="isMobile" src="/src/assets/title-mobile.png" alt="title-mobile.png" style="width: 60%;">

                <hr>

                <p v-if="!isTablet" @click="changeContentView('Main')"><i class="fa fa-home" aria-hidden="true"></i>메인</p>
                <p v-if="isTablet" @click="changeContentView('Main')"><i class="fa fa-home" aria-hidden="true"></i></p>

                <p v-if="!isTablet" class="link" @click="showInfo = !showInfo"><i class="fa fa-book" aria-hidden="true"></i>정보</p>
                <p v-if="isTablet" class="link" @click="showInfo = !showInfo"><i class="fa fa-book" aria-hidden="true"></i></p>

                <transition name="menufade" appear>
                    <p v-if="showInfo && !isTablet" @click="changeContentView('Credit')" class="extend"><i class="fa fa-credit-card" aria-hidden="true"></i>신용</p>
                    <p v-if="showInfo && isTablet" @click="changeContentView('Credit')" class="extend"><i class="fa fa-credit-card" aria-hidden="true"></i></p>
                </transition>

                <transition name="menufade" appear>
                    <p v-if="showInfo && !isTablet" @click="changeContentView('Rating')" class="extend"><i class="fa fa-list-ol" aria-hidden="true"></i>신용등급</p>
                    <p v-if="showInfo && isTablet" @click="changeContentView('Rating')" class="extend"><i class="fa fa-list-ol" aria-hidden="true"></i></p>
                </transition>

                <transition name="menufade" appear>
                    <p v-if="showInfo && !isTablet" @click="changeContentView('NonFin')" class="extend"><i class="fa fa-info-circle" aria-hidden="true"></i>비금융정보</p>
                    <p v-if="showInfo && isTablet" @click="changeContentView('NonFin')" class="extend"><i class="fa fa-info-circle" aria-hidden="true"></i></p>
                </transition>

                <hr>

                <p v-if="!isTablet" class="link" @click="showMyCredit = !showMyCredit"><i class="fa fa-user" aria-hidden="true"></i>내 신용등급</p>
                <p v-if="isTablet" class="link" @click="showMyCredit = !showMyCredit"><i class="fa fa-user" aria-hidden="true"></i></p>

                <transition name="menufade" appear>
                    <p v-if="showMyCredit && !isTablet" @click="changeContentView('LookUp')" class="extend"><i class="fa fa-check" aria-hidden="true"></i>조회</p>
                    <p v-if="showMyCredit && isTablet" @click="changeContentView('LookUp')" class="extend"><i class="fa fa-check" aria-hidden="true"></i></p>
                </transition>

                <transition name="menufade" appear>
                    <p v-if="showMyCredit && !isTablet" @click="changeContentView('Result')" class="extend"><i class="fa fa-file-text" aria-hidden="true"></i>결과</p>
                    <p v-if="showMyCredit && isTablet" @click="changeContentView('Result')" class="extend"><i class="fa fa-file-text" aria-hidden="true"></i></p>
                </transition>

                <transition name="menufade" appear>
                    <p v-if="showMyCredit && !isTablet" @click="changeContentView('Statistics')" class="extend"><i class="fa fa-pie-chart" aria-hidden="true"></i>통계</p>
                    <p v-if="showMyCredit && isTablet" @click="changeContentView('Statistics')" class="extend"><i class="fa fa-pie-chart" aria-hidden="true"></i></p>
                </transition>

                <p v-if="!isTablet" @click="changeContentView('Strategy')"><i class="fa fa-line-chart" aria-hidden="true"></i>전략</p>
                <p v-if="isTablet" @click="changeContentView('Strategy')"><i class="fa fa-line-chart" aria-hidden="true"></i></p>

                <hr>

                <img v-if="!isMobile" src="/src/assets/gbridge.png" alt="gbridge.png">
                <img v-if="isMobile" src="/src/assets/gbridge-mobile.png" alt="gbridge.png" style="width: 45%">
            </center>
        </div>
    </transition>
</template>

<script>
import { EventBus } from './event-bus.js'

export default {
    data: function() {
        return {
            showSidebar: true,
            isMobile: false,
            isTablet: false,
            showInfo: false,
            showMyCredit: false,
        };
    },
    methods: {
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
        },
        changeContentView: function(message) {
            EventBus.$emit('changeContentView', message);
        }
    },
    created() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
        EventBus.$on('showSidebar', showSidebar => {
            this.showSidebar = showSidebar;
        });
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
    img:hover {
        cursor: pointer;
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
        cursor: pointer;
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
    p:hover {
        cursor: pointer;
    }
    .extend {
        color: rgb(100, 100, 100);
    }

    /* 트랜지션, 애니메이션 */
    .sidebarfade-enter-active {
        transition: all .5s ease;
    }
    .sidebarfade-enter {
        transform: translateX(-30px);
        opacity: 0;
    }
    .menufade-enter-active {
        transition: all .5s ease;
    }
    .menufade-leave-active {
        transition: all .2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .menufade-enter, .menufade-leave-to {
        opacity: 0;
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
        hr {
            margin: 20px 0px 20px 0px;
            width: 80%;
        }
        img {
            width: 100%;
        }
    }

    /* Mobile */
    @media screen and (max-width: 499px) {
        .sidebar {
            padding: 20px 0px 20px 0px;
        }
        i {
            font-size: 20px;
        }
        hr {
            margin-top: 10px;
            margin-bottom: 10px;
        }
    }
</style>