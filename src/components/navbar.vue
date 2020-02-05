<template>
    <nav class="navbar navbar-expand-lg" v-bind:class=" { 'navbarOpen' : show }">
        <div class="container">
            <router-link to="/">
                <img class="navbar-logo" :src="'/images/logo.svg'">
            </router-link>
            <button class="navbar-toggler d-lg-none d-xl-none" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" @click.stop="toggleNavbar()">
                <span class="navbar-toggler-icon"></span>
                <span class="navbar-toggler-icon"></span>
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent" v-bind:class="{ 'show': show }">
                <ul class="navbar-nav mr-auto navbar-links main-nav" style="margin-left: auto;">
                    <li class="nav-item" v-scroll-to="'#why-devops'">
                        <router-link class="nav-link" to="/">Why outsource</router-link>
                    </li>
                    <li class="nav-item" v-scroll-to="'#about-section'">
                        <router-link to="/" class="nav-link" >What you get</router-link>
                    </li>
                    <li class="nav-item" v-scroll-to="'#tabs-section'">
                        <router-link to="/" class="nav-link">What we do</router-link>
                    </li>
                    <li class="nav-item" v-scroll-to="'#stepper-section'">
                        <router-link to="/" class="nav-link">Working with us</router-link>
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
            },
            scrollMeTo(refName) {
                var element = this.$refs[refName];
                var top = element.offsetTop;

                window.scrollTo(0, top);
            }
        }
    }
</script>

<style lang="scss">
    input:focus,
    button:focus {
        outline: none;
        border: none;
    }

    button.navbar-toggler::focus {
        outline: none;
        border: none;
    }

    .navbar button.navbar-toggler {
       outline: none;
    }
    
    .navbar {
        background: #F3F3F3 0% 0% no-repeat padding-box;
        padding: 15px !important;
        border-bottom: 1px solid #E8E8E8;

        img.navbar-logo {
            width: 130px;
        }

        button.navbar-toggler {
            display: grid;

            span.navbar-toggler-icon {
                border-bottom: 2px solid #1E1E1E;
                height: 1px !important;
                padding-bottom: 5px;

                &:first-child {
                    width: 70%;
                }
            }
        }

        li.nav-item {
            padding: 0 25px;

            a {
                color: #1E1E1E;
                font-size: 16px;
                opacity: 0.4;
                line-height: 28px;
                font-family: Raleway, bold;
                font-weight: 700;
            }
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
