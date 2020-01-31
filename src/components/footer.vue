<template>
    <div id="footer">
        <div class="container">
            <div class="row mobile-reverse">
                <div class="col-sm-12 col-md-8">
                    <div class="container mobile-reverse">
                        <div class="row mobile-reverse">
                            <div class="col-md-4 ft-copyright-column">
                                <img class="footer-logo" :src="'/images/logo.svg'">

                                <p class="ft-copyright">© Copyright 2019 LeanOps All rights reserved.</p>
                            </div>

                            <div class="col-md-4 ft-list">
                                <h1 class="ft-list-title">Headquarters</h1>

                                <ul class="contact-details-list">
                                    <li>
                                        <img class="footer-icon" :src="'/images/location@2x.png'">
                                        <span>7400 Briarwood Street West Chicago, IL 60185</span>
                                    </li>
                                    <li>
                                        <img class="footer-icon" :src="'/images/smartphone@2x.png'">
                                        <span>+1-202-555-0186 <br> leanops@office.com</span>
                                    </li>
                                </ul>
                            </div>

                            <div class="col-md-4 ft-list">
                                <h1 class="ft-list-title">Say hello</h1>

                                <ul>
                                    <li>
                                        <a>LinkedIn</a>
                                    </li>

                                    <li>
                                        <a>Facebook</a>
                                    </li>

                                    <li>
                                        <a>Twitter</a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col-md-6 get-touch">
                                <h1>Got questions? – get in touch</h1>
                                <p>Leave your email and we will contact you shortly.</p>

                                <form>
                                    <div class="inline-icon">
                                        <input type="text" placeholder="Your email" />
                                        <button clear slot="end">Send</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-12 col-sm-12 col-md-4 ft-list text-center ft-img-wrap">
                    <div class="mobile-reverse">
                        <img class="footer-image" :src="'/images/superjobb.png'">

                        <div class="under-image-text">
                            <p class="bold-text">Want to work on great projects and get your ideas to life?</p>
                        </div>
                    </div>

                    <div class="under-image-text">
                        <p class="medium-text">Check out our requirements and see if you can take <span class="bold">the next Super job</span></p>
                    </div>

                    <router-link to="/page" class="btn white-round-btn">Open Requirements</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    div#footer {
        background: #D0FF14 0% 0% no-repeat padding-box;
        opacity: 1;
        padding: 270px 0 210px 0;

        p, span {
            margin-bottom: 0;
            font-size: 15px;
            line-height: 21px;
            font-family: Roboto Condensed;
        }

        span.bold {
            font-weight: 700;
        }

        .ft-copyright-column {
            img.footer-logo {
                width: 135px;
            }

            p.ft-copyright {
                margin-top: 50px;
            }
        }

        .get-touch {
            margin-top: 10px;

            h1 {
                font-family: Raleway;
                letter-spacing: 0;
                color: #1E1E1E;
                opacity: 1;
                font-size: 21px;
                line-height: 28px;
                margin-bottom: 30px;
                font-weight: 700;
            }

            p {
                font-size: 16px;
                line-height: 21px;
                font-family: Roboto, Condensed;
                letter-spacing: 0;
                color: #1E1E1E;
                font-weight: 300;
                opacity: 1;
                margin-bottom: 25px;
                width: 16rem;
            }

            .inline-icon {
                input[type="text"] {
                    border: 1px solid #1E1E1E;
                    border-radius: 27px;
                    background: transparent;
                    font-family: Roboto, Condensed;
                    font-size: 13px;
                    line-height: 21px;
                    letter-spacing: 0;
                    color: #1E1E1E;
                    opacity: 0.5;
                    width: 70%;
                    padding: 5px 25px;
                }

                button {
                    background: #1E1E1E 0% 0% no-repeat padding-box;
                    border-radius: 27px;
                    opacity: 1;
                    color: #F3F3F3;
                    font-size: 13px;
                    line-height: 21px;
                    padding: 6px 25px;
                    font-family: Roboto;
                    font-weight: 500;
                    margin-left: -30px;
                }
            }
        }

        .ft-list {
            h1.ft-list-title {
                margin-bottom: 50px;
                padding-top: 10px;
                font-size: 21px;
                line-height: 28px;
                font-family: Raleway;
                font-weight: 700;
            }

            ul.contact-details-list {
                li {
                    display: inline-flex;
                    margin-bottom: 30px;

                    img.footer-icon {
                        height: 35px;
                        margin-right: 20px;
                    }
                }
            }

            a.btn.white-round-btn {
                height: 35px;
                background: #fff;
                border-radius: 20px;
                font-size: 14px;
                padding: 6px 70px;
                -webkit-box-shadow: 0 0 15px #FFF;
                box-shadow: 0 0 15px #FFF;
                font-family: Roboto Condensed;
            }

            .under-image-text {
                margin-bottom: 30px;
                padding-left: 35px;

                p.bold-text {
                    font-size: 21px !important;
                    text-align: left;
                    font-family: Raleway;
                    font-weight: 700;
                }

                p.medium-text {
                    text-align: left;
                }
            }
        }

        img.footer-image {
            width: 100%;
            margin-top: -5.5rem;
        }
    }

    // Small devices
    @media only screen and (max-width: 767px) {
        div#footer {
            padding: 70px 0 55px 0;

            .ft-list {
                h1.ft-list-title {
                    margin-bottom: 15px;
                }

                .under-image-text {
                    margin-bottom: 5px;
                    padding-left: 15px;
                }

                a.btn.white-round-btn {
                    width: 90%;
                    margin-top: 20px;
                    text-align: center;
                }
            }

            .get-touch {
                margin-top: 55px;
                margin-bottom: 60px;

                h1 {
                    width: 10rem;
                    margin-bottom: 15px;
                }

                .inline-icon {
                    input[type="text"] {
                        width: 84%;
                    }
                }
            }

            .ft-copyright-column {
                margin-top: 30px;

                p.ft-copyright {
                    margin-top: 25px;
                }
            }

            img.footer-image {
                margin-bottom: -80px;
                margin-left: -20px;
            }

            .mobile-reverse {
                display: flex;
                flex-direction: column-reverse;
            }
        }
    }

    // Medium screens (iPad)
    @media only screen
    and (min-device-width : 768px)
    and (max-device-width : 1024px) {
        .ft-img-wrap {
            p.bold-text {
                width: 90%;
            }
        }

        .white-round-btn {
            padding: 6px 45px !important;
        }
    }
</style>