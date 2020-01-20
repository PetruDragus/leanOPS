<template>
    <div id="app" class="main">

        <app-nav></app-nav>

        <!-- component matched by the route will render here -->
        <router-view></router-view>

        <!-- set progressbar -->
        <vue-progress-bar></vue-progress-bar>

        <app-footer></app-footer>
    </div>
</template>

<script>
    import Navbar from '../src/partials/navbar'
    import Footer from '../src/partials/footer'

    export default {
        components: {
            'app-nav': Navbar,
            'app-footer': Footer,
        },
        name: 'app',
        mounted () {
            //  [App.vue specific] When App.vue is finish loading finish the progress bar
            this.$Progress.finish()
        }
    }
</script>

<style lang="scss">
    * {
        font-family: Raleway, bold;
    }
    ul {
        padding: 0;

        li {
            list-style: none;
            
            a {
                cursor: pointer;
            }
        }
    }

    span.bold {
        font-family: Raleway ExtraBold;
        font-weight: 800;
    }

    .main {
        background: #F3F3F3 0% 0% no-repeat padding-box;

        .hero-area {
            position: relative;
            padding: 250px 0;

            section.header-intro {
                padding: 0 100px;

                h1 {
                    font-weight: 800;
                    font-size: 67px;
                    line-height: 89px;
                    font-family: Raleway ExtraBold;
                }

                p.header-subtitle {
                    font-size: 26px;
                    opacity: 40%;
                    padding: 0 80px;
                    line-height: 37px;
                    font-family: Raleway Medium;
                }

                span {
                    opacity: 99% ;
                    font-family: Raleway ExtraBold;
                }
            }
        }
    }
</style>
