<template>
    <nav class="navbar navbar-expand-lg" v-bind:class=" { 'navbarOpen': show }">
        <div class="container">
            <router-link to="/">
                <img class="navbar-logo" :src="'/images/logo.svg'">
            </router-link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" @click.stop="toggleNavbar()">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent" v-bind:class="{ 'show': show }">
                <ul class="navbar-nav mr-auto navbar-links main-nav" style="margin-left: auto;">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/">Why outsource</router-link>
                    </li>
                    <li class="nav-item active">
                        <router-link class="nav-link" to="/page">What you get</router-link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/portfolio">What we do</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/contact">Working with us</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script>
    export default {
        data() {
            return {
                show: false
            }
        },
        methods: {
            toggleNavbar() {
                this.show = !this.show
            }
        }
    }
</script>

<style lang="scss">
    .navbar {
        background: #F3F3F3 0% 0% no-repeat padding-box;
        padding: 15px !important;
        border-bottom: 1px solid #E8E8E8;

        img.navbar-logo {
            width: 130px;
        }

        span.navbar-toggler-icon {
            border-bottom: 1px solid #1E1E1E;
        }

        li.nav-item {
            padding: 0 25px;

            a {
                color: #1E1E1E;
                font-size: 16px;
                opacity: 40%;
                line-height: 28px;
                font-family: Raleway, bold;
                font-weight: 700;
            }
        }

        a.nav-link.router-link-exact-active.router-link-active {
            opacity: 100%;
        }
    }

    // Small devices
    @media only screen and (max-width: 797px) {
        nav.navbar {
            padding: 15px 30px !important;
            border: none;

            div#navbarSupportedContent {
                ul.navbar-nav {
                    padding-top: 25px;

                    li {
                        padding: 0;
                    }
                }
            }

            img.navbar-logo {
                width: 90px;
            }
        }
    }
</style>
