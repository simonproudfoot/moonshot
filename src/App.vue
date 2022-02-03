<template>
<div id="app" v-on:mousemove="updateCoordinates">
    <scene-background @modelsLoaded="modelsLoaded" :loading="siteLoading" :windowsOpen="open" />
    <vue-ellipse-progress ref="loadingInternal" :progress="tasksDone" :determinate="true" color="#ff9b00" empty-color="#fff" :size="180" :thickness="9" :empty-thickness="1" lineMode="in 10" :legend-value="tasksDone" :animation="loadSpeed" fontSize="1.5rem" font-color="white" dash="5" :loading="false">
        <span slot="legend-value">%</span>
    </vue-ellipse-progress>
    <div ref="loading" class="loading">
        <div class="loading__inner">
            <h1 v-html="loadMessage">LOADING</h1>
            <p><small v-if="loadMessage !== 'SENT'">ESTABLISHING CONNECTION</small>
                <small v-else>THANK YOU!</small></p>
        </div>
    </div>

    <transition name="fade">
        <div v-if="page == 'mainPanel'" class="back-s">HOME</div>
    </transition>
    <transition name="fade">
        <div v-if="page == 'portfolioMenu'" class="back-s">WORK</div>
    </transition>
    <transition name="fade">
        <div v-if="page == 'contact'" class="back-s">CONTACT</div>
    </transition>
    <div id="wrapper" class="wrapper inactiveWrapper">
        <div>
            <div class="loader loader--style6" title="5"></div>
        </div>
        <div ref="aboutMobile" class="window mobileAbout">
            <div class="window__wrapper">
                <svg @click="closeAbout" version="1.1" id="closeb" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 41.8 41.8" style="enable-background: new 0 0 41.8 41.8" xml:space="preserve">
                    <g id="circle" transform="translate(0, 0)">
                        <ellipse transform="matrix(1 -4.136431e-03 4.136431e-03 1 -8.630285e-02 8.666051e-02)" class="st0" cx="20.9" cy="20.9" rx="20.4" ry="20.4" />
                    </g>
                    <g id="x">
                        <line class="st1" x1="13.7" y1="13.7" x2="28.2" y2="28.2" />
                        <line class="st1" x1="28.2" y1="13.7" x2="13.7" y2="28.2" />
                    </g>
                </svg>
                <div class="window__wrapper__content ">

                    <windowAbout :content="content" />
                </div>
            </div>
        </div>
        <div class="bigSQ"></div>
        <div class="window mainPanel" ref="mainPanel">
            <svg @click="closeAbout" version="1.1" v-if="about && outerWidth > 992" id="closeb" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 41.8 41.8" style="enable-background: new 0 0 41.8 41.8" xml:space="preserve">
                <g id="circle" transform="translate(0, 0)">
                    <ellipse transform="matrix(1 -4.136431e-03 4.136431e-03 1 -8.630285e-02 8.666051e-02)" class="st0" cx="20.9" cy="20.9" rx="20.4" ry="20.4" />
                </g>
                <g id="x">
                    <line class="st1" x1="13.7" y1="13.7" x2="28.2" y2="28.2" />
                    <line class="st1" x1="28.2" y1="13.7" x2="13.7" y2="28.2" />
                </g>
            </svg>
            <div class="window__wrapper window__wrapper--main">
                <div class="window__wrapper__content">
                    <div class="window__wrapper__content__foot">
                        <div class="d-block" style="margin-left: -10px">
                            <a href="https://www.instagram.com/moonshot_web_studio/" class="socialIcon mr-1 d-inline-block">
                                <img src="./assets/social2.svg" :width="(screenWidth = 'desktop' ? 30 : 48)" height="48" />
                            </a>
                            <a href="https://www.behance.net/simonproudfoot" class="socialIcon d-inline-block">
                                <img src="./assets/behance.svg" :width="(screenWidth = 'desktop' ? 30 : 48)" height="48" />
                            </a>
                        </div>

                        <small class="text-light" style="opacity: 0.4; display: block; line-height: 15px;"> Company Number 13874590.<br />Copyright &copy; {{new Date().getFullYear()}} Moonshot Web Studio Ltd. All Rights Reserved.</small>
                    </div>
                    <div class="socialHud my-5">
                        <div class="row align-items-center">
                            <div class="col-4">
                                <img src="./assets/logo.svg" width="172" height="35" />
                            </div>
                        </div>
                    </div>
                    <h1 class="titletext mb-sm-0">SPACE AGE WEB <br />TECHNOLOGY</h1>
                    <p class="mb-5 mt-0 mt-md-5 introText">
                        <span v-html="content.introOne"></span>

                        <span v-show="!about" @click="openAbout" class="text-red blinkingText ml-2" style="cursor: pointer">READ_MORE</span>
                    </p>
                    <button @click="openPortfolio()" class="mainBtn d-inline mr-3" :class="page == 'portfolioMenu' ? 'btn--active' : null">
                        WORK
                    </button>
                    <button @click="openContact()" class="mainBtn d-inline" :class="page == 'contact' ? 'btn--active' : null">
                        CONTACT
                    </button>
                    <smallgraph />
                    <pulseBar />
                    <div ref="about" v-show="about && outerWidth > 576" class="about py-3 px-4">
                        <windowAbout :content="content" />
                    </div>
                </div>
            </div>
            <span class="window__chevs"></span>
        </div>
        <div ref="portfolioMenu" class="window portfolioMenu">
            <svg @click="closePortfolio" version="1.1" id="closeb" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 41.8 41.8" style="enable-background: new 0 0 41.8 41.8" xml:space="preserve">
                <g id="circle" transform="translate(0, 0)">
                    <ellipse transform="matrix(1 -4.136431e-03 4.136431e-03 1 -8.630285e-02 8.666051e-02)" class="st0" cx="20.9" cy="20.9" rx="20.4" ry="20.4" />
                </g>
                <g id="x">
                    <line class="st1" x1="13.7" y1="13.7" x2="28.2" y2="28.2" />
                    <line class="st1" x1="28.2" y1="13.7" x2="13.7" y2="28.2" />
                </g>
            </svg>
            <span class="window__chevs"></span>
            <div class="window__wrapper">
                <div class="window__wrapper__content">
                    <div class="portfolio-list mt-5 mb-sm-0" ref="portfolio-list">
                        <li v-for="(item, i) in projects" :key="i" class="portfolio-list__item" :class="currentProject == item.id ? 'activeItem' : null" :ref="i" @click="openProject(item.id)">
                            <div class="portfolio-list__item__inner">
                                <h5 class="text-green mb-0 text-uppercase">{{item.category}}</h5>
                                <h3 class="text-uppercase" :class="deviceSize == 'mobile' ? 'h4' : null" v-html="item.title"></h3>
                            </div>
                        </li>
                    </div>
                </div>
            </div>
        </div>
        <div ref="porfolioWindow" class="porfolioWindow px-0" v-show="currentProject.length">
            <svg @click="closeProject" class="d-lg-none" version="1.1" id="closeb" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 41.8 41.8" style="enable-background: new 0 0 41.8 41.8" xml:space="preserve">
                <g id="circle" transform="translate(0, 0)">
                    <ellipse transform="matrix(1 -4.136431e-03 4.136431e-z03 1 -8.630285e-02 8.666051e-02)" class="st0" cx="20.9" cy="20.9" rx="20.4" ry="20.4" />
                </g>
                <g id="x">
                    <line class="st1" x1="13.7" y1="13.7" x2="28.2" y2="28.2" />
                    <line class="st1" x1="28.2" y1="13.7" x2="13.7" y2="28.2" />
                </g>
            </svg>
            <projectPage :y="y" :x="x" v-if="currentProject" :projects="projects" :currentProject="currentProject" v-on:imgRdy="updateSizes('on')" />
            <!-- each to be its own dynamic loaded component  -->
        </div>
        <div ref="contact" class="window contact">
            <windowContact :deviceSize="deviceSize" v-on:toggle="closeContact" v-on:sending="loadingSprite(2000, true), windowScale()" v-on:sent="windowScale('full')" />
        </div>
    </div>

</div>
</template>

<script>
import { TweenMax, TimelineMax, Power3 } from "gsap";
import portfolioList from "./components/portfolioList.vue";
import datapulseAnimation from "./components/datapulseAnimation.vue";
import windowAbout from "./components/windowAbout.vue";
import windowContact from "./components/windowContact.vue";
import Smallgraph from "./components/smallgraph.vue";
import pulseBar from "./components/pulseBar.vue";
var projects = require('@/assets/projects.json');
var content = require('@/assets/content.json');
export default {
    name: "App",
    metaInfo() {
        return {
            title: "Moonshot Web Studio Ltd",
            meta: [
                { name: 'description', content: 'Moonshot Web Studio Ltd is a creative collective based in Manchester, UK that builds out of this world websites, apps and immersive digital experiences.' },
                { property: 'og:title', content: "Moonshot Web Studio Ltd" },
                { property: 'og:site_name', content: 'Moonshot Web Studio Ltd' },
                { property: 'og:type', content: 'website' },
                { name: 'robots', content: 'index,follow' }
            ]
        }
    },
    data: function () {
        return {
            projects,
            content,
            open: {
                about: false,
                portfolio: false,
                contact: false
            },
            galaxyLoaded: false,
            vimeoWind: false,
            vimeoID: '',
            loadMessage: 'LOADING',
            tasksDone: 0,
            loadSpeed: 'loop 700 1000',
            tasksDonePercent: 0,
            determinate: true,
            noData: false,
            page: "HOME",
            currentProject: "",
            speed: 0.6,
            about: false,
            videoHeight: 500,
            options: {
                muted: true,
                autoplay: true,
            },
            playerReady: false,
            x: "",
            y: "",
            siteLoading: true,
            // back
            leftOffscreen: {
                autoAlpha: 0.2,
                width: "50%",
                scale: 0.1,
                x: "-100%",
                top: "0%",
                left: "",
                right: "",
                yPercent: 0,
                ease: Power3.easeOut,
            },
            leftOffscreenMobile: {
                autoAlpha: 0.2,
                opacity: 0.2,
                width: "100%",
                y: 0,
                yPercent: 0,
                x: "-120%",
                top: "0%",
                ease: Power3.easeOut,
            },
            rightOffscreenMobile: {
                autoAlpha: 0.2,
                opacity: 0.2,
                y: 0,
                yPercent: 0,
                x: "120%",
                ease: Power3.easeOut,
                top: "0%",
            },
            centerMobile: {
                y: 0,
                yPercent: 0,
                autoAlpha: 1,
                opacity: 1,
                top: "0%",
                x: "0%",
                width: "100%",
                ease: Power3.easeOut,
            },
            leftBack: {
                height: 900,
                autoAlpha: 0.2,
                width: "50%",
                scale: 0.5,
                x: "-20%",
                y: window.innerHeight / 2,
                yPercent: -50,
                ease: Power3.easeOut,
            },
            rightBack: {
                height: 900,
                autoAlpha: 0.2,
                width: "50%",
                scale: 0.5,
                x: "120%",
                y: window.innerHeight / 2,
                yPercent: -50,
                ease: Power3.easeOut,
            },
            centerBack: {
                height: 900,
                autoAlpha: 0.2,
                width: "50%",
                scale: 0.5,
                x: "50%",
                y: window.innerHeight / 2,
                yPercent: -50,
                ease: Power3.easeOut,
            },
            // front
            frontLeft: {
                autoAlpha: 1,
                scale: 1,
                width: "50%",
                x: "0%",
                top: "0%",
                left: "0%",
                right: "",
                y: 0,
                yPercent: 0,
                ease: Power3.easeOut,
            },
            frontLeftFull: {
                autoAlpha: 1,
                scale: 1,
                width: "100%",
                x: "0%",
                top: "0%",
                left: "0%",
                right: "0",
                y: 0,
                yPercent: 0,
                ease: Power3.easeOut,
            },
            frontRight: {
                autoAlpha: 1,
                scale: 1,
                width: "50%",
                x: "0%",
                top: "0%",
                right: "0%",
                left: "",
                y: 0,
                yPercent: 0,
                ease: Power3.easeOut,
            },
            frontCenter: {
                autoAlpha: 1,
                scale: 1,
                width: "50%",
                x: "50%",
                top: "0%",
                left: "0",
                right: "0",
                y: 0,
                yPercent: 0,
                ease: Power3.easeOut,
            },
            screenWidth: "",
            ready: false,
            // timelines
            portfolioView: new TimelineMax({ paused: true, reversed: true }),
            timeLine: new TimelineMax({ paused: true, reversed: true }),
            loading: new TimelineMax({ paused: true, reversed: true }),
            mobileWindowShift: new TimelineMax({ paused: true, reversed: true }),
            intloader: new TimelineMax({ onComplete: this.loadFin, paused: true, reversed: true }),
            deviceSize: 0,
        };
    },
    components: {
        TweenMax,
        portfolioList,
        datapulseAnimation,
        windowAbout,
        windowContact,
        Smallgraph,
        pulseBar,
        SceneBackground: () => import("./components/sceneBackground"),
        projectPage: () => import("./components/projectPage"),
    },
    methods: {
        modelsLoaded() {
            this.galaxyLoaded = true
        },
        // toggleVimeo(id) {
        //     if (!this.vimeoWind) {
        //         this.loadingInternal()
        //         this.preventScoll(true)
        //         this.vimeoWind = true
        //         this.vimeoID = id
        //         this.windowScale()
        //         document
        //             .getElementById("wrapper")
        //             .classList.add("inactiveWrapper");
        //     } else {
        //         this.preventScoll()
        //         this.vimeoWind = false
        //         this.vimeoID = ''
        //         this.windowScale('full')
        //         document
        //             .getElementById("wrapper")
        //             .classList.remove("inactiveWrapper");
        //     }
        // },
        loadFin() {
            this.loadSpeed = 'loop 0 0'
            this.tasksDone = 0
        },
        loadingInternal(pause) {
            //     this.tasksDone = 0
            document.getElementsByClassName
            if (!this.intloader.isActive()) {
                this.loadSpeed = 'loop 700 1000'
                this.intloader.play();
                this.tasksDone = 100
                if (window.innerWidth > 992) {
                    this.intloader.to(".ep-container", 1, { opacity: 0.4 });
                    this.intloader.to(".ep-container", 0.5, {opacity: 0, delay: pause });
                } else {
                    this.intloader.to(".ep-container", 1, { opacity: 1 });
                    this.intloader.to(".ep-container", 0.5, { opacity: 0, delay: pause });
                }
            }
        },
        closeProject() {
            this.portfolioView.pause(0)
            if (window.innerWidth > 992) {
                this.currentProject = "";
                this.portfolioView.reverse();
                this.updateSizes('off')
            } else {
                this.setPosition("porfolioWindow", "leftOffscreenMobile");
                this.setPosition("portfolioMenu", "centerMobile");
                setTimeout(() => {
                    this.currentProject = "";
                }, 1000);
            }
        },
        closeAll() {
            if (this.about) {
                this.closeAbout();
            }
        },
        async setPosition(element, position, time, set) {
            this.page = element;
            if (
                position == "frontLeft" ||
                position == "frontRight" ||
                position == "frontLeftFull" ||
                position == "frontCenter" ||
                position == "centerMobile"
            ) {
                this.$refs[element].classList.add("active");
                setTimeout(() => {
                    this.$refs[element].classList.add("openFlicker");
                }, 1000);
            } else {
                this.$refs[element].classList.remove("active");
                this.$refs[element].classList.remove("openFlicker");
            }
            if (set != true) {
                this.timeLine.to(this.$refs[element], this.speed, this[position], time);
                this.timeLine.play();
                setTimeout(() => {
                    this.$refs[element].classList.add("openFlicker");
                    this.$refs[element].classList.remove("openFlicker");
                }, 600);
            } else {
                this.timeLine.set(this.$refs[element], this[position], time);
                this.timeLine.play();
            }
            return true
        },
        windowScale(size) {
            size == "full" ?
                this.timeLine.to(".wrapper", 0.2, { scale: 1, autoAlpha: 1 }) :
                this.timeLine.to(".wrapper", 0.2, { scale: 0.8, autoAlpha: 0.5 });
        },
        openPortfolio() {
            this.about = false;
            this.open.portfolio = true
            if (window.innerWidth > 992) {
                this.setPosition("portfolioMenu", "rightBack");
                this.setPosition("contact", "centerBack", "-=0.5");
                this.setPosition("mainPanel", "leftBack", "-=0.5");
                this.setPosition("portfolioMenu", "frontLeft");
            } else {
                this.loadingInternal(0.3)
                this.windowScale();
                this.setPosition("mainPanel", "leftOffscreenMobile");
                this.setPosition("contact", "leftOffscreenMobile", "-=0.2");
                this.setPosition("portfolioMenu", "centerMobile", "-=0.2");
                this.windowScale("full");
            }
        },
        closePortfolio() {
            this.open.portfolio = false
            this.portfolioView.pause(0)
            this.$refs['portfolio-list'].classList.remove('pause')
            //this.portfolioView.pause(0);
            if (this.currentProject.length) {
                this.closeProject()
            }
            this.currentProject = "";
            if (window.innerWidth > 992) {
                this.setPosition("portfolioMenu", "rightBack");
                this.setPosition("mainPanel", "frontLeft");
            } else {
                this.windowScale();
                this.setPosition("portfolioMenu", "rightOffscreenMobile");
                this.setPosition("contact", "rightOffscreenMobile", "-=0.2");
                this.setPosition("mainPanel", "centerMobile", "-=0.2");
                this.windowScale("full");
            }
        },
        preventScoll(set) {
            set == true ? (document.getElementsByTagName("BODY")[0].style.overflowY = "hidden", document.getElementsByTagName("html")[0].style.overflowY = "hidden") : (document.getElementsByTagName("BODY")[0].style.overflowY = "auto", document.getElementsByTagName("html")[0].style.overflowY = "auto");
        },
        openAbout() {
            this.open.about = true
            if (window.innerWidth > 992) {
                this.setPosition("mainPanel", "frontLeftFull");
                setTimeout(() => {
                    this.about = true;
                }, 700);
            } else {
                // this.preventScoll(true)
                this.loadingInternal(0.3)
                this.windowScale();
                this.setPosition("mainPanel", "rightOffscreenMobile");
                this.setPosition("aboutMobile", "frontLeftFull");
                this.windowScale("full");
            }
        },
        closeAbout() {
            this.open.about = false
            this.about = false;
            if (window.innerWidth > 992) {
                this.setPosition("mainPanel", "frontLeft");
            } else {
                this.windowScale();
                this.setPosition("aboutMobile", "leftOffscreenMobile");
                this.setPosition("mainPanel", "frontLeftFull");
                this.windowScale("full");
            }
        },
        openContact() {
            this.open.contact = true
            this.about = false;
            if (window.innerWidth > 992) {
                this.setPosition("portfolioMenu", "rightBack");
                this.setPosition("contact", "centerBack", "-=0.5");
                this.setPosition("mainPanel", "leftBack", "-=0.5");
                this.setPosition("contact", "frontCenter");
            } else {
                this.loadingInternal(0)
                this.windowScale();
                this.setPosition("mainPanel", "leftOffscreenMobile");
                this.setPosition("contact", "centerMobile", "-=0.2");
                this.windowScale("full");
            }
        },
        closeContact() {
            this.open.contact = false
            if (window.innerWidth > 992) {
                this.setPosition("contact", "centerBack");
                this.setPosition("mainPanel", "frontLeft", "-=0.2");
            } else {
                this.windowScale();
                this.setPosition("contact", "rightOffscreenMobile");
                this.setPosition("mainPanel", "centerMobile");
                this.windowScale("full");
            }
        },
        minimiseList() {
            this.portfolioView.to(
                ".portfolio-list",
                this.speed, {
                    scale: 0.7,
                    top: "50%",
                    x: "-25%",
                    right: "",
                    ease: Power3.easeOut,
                },
                "-=0.3")
        },
        triggerEvent(proj) {
            this.currentProject = proj;
            setTimeout(() => {
                //  this.updateSizes('on')
            }, 100);
        },
        openProject(proj) {
            this.updateSizes('off')
            window.scrollTo(0, 0);
            this.currentProject = ""
            this.portfolioView.play();
            if (window.innerWidth > 992) {
                //           this.$refs['portfolio-list'].classList.add('pause')
                this.loadingInternal(0.2);
                this.setPosition("portfolioMenu", "frontLeftFull").then(() => {
                    if (this.portfolioView.progress() == 0) {
                        this.minimiseList()
                    }
                    this.portfolioView.to(".porfolioWindow", 0.8, { opacity: 1, yPercent: 0 })
                    this.portfolioView.addPause("+=0", this.triggerEvent(proj), ["scene3Done"]);

                    // }, 500);
                })
            } else {
                this.currentProject = proj
                this.loadingInternal(0.1);
                this.setPosition("portfolioMenu", "rightOffscreenMobile");
                this.setPosition("porfolioWindow", "centerMobile");
            }
        },
        initialLoad() {
            if (window.innerWidth > 992) {
                this.intloader.set(".ep-container", { scale: 0.6, opacity: 0 })
                this.setPosition("contact", "leftOffscreen", "-=1", true);
                this.setPosition("mainPanel", "leftOffscreen", "-=1", true);
                this.setPosition("portfolioMenu", "leftOffscreen", "-=1", true);
                this.setPosition("mainPanel", "rightBack");
                this.setPosition("portfolioMenu", "centerBack", "-=0.3");
                this.setPosition("contact", "leftBack", "-=0.3");
                this.setPosition("mainPanel", "frontLeft");
            } else {
                this.intloader.set(".ep-container", { scale: 0.6, opacity: 0 })
                this.windowScale();
                this.setPosition("contact", "leftOffscreenMobile", "-=1", true);
                this.setPosition("mainPanel", "leftOffscreenMobile", "-=1", true);
                this.setPosition("portfolioMenu", "leftOffscreenMobile", "-=1", true);
                this.setPosition("aboutMobile", "leftOffscreenMobile", "-=1", true);
                this.setPosition("portfolioMenu", "rightOffscreenMobile");
                this.setPosition("contact", "rightOffscreenMobile", "-=0.2");
                this.setPosition("mainPanel", "centerMobile", "-=0.2");
                this.windowScale("full");
            }
        },

        stopLoader() {

        },
        loadingSprite(time, sending) {
            if (sending) {
                this.loadMessage = 'SENDING'
            } else {
                this.loadMessage = 'LOADING'
            }
            var lWidth = "";
            if (window.innerWidth < 576) {
                lWidth = "90%";
            } else {
                lWidth = "400";
            }
            this.loading.to(this.$refs.loading, {
                css: { display: "block" },
                duration: 0,
            });
            this.loading.to(this.$refs.loading, 0.2, {
                width: lWidth,
                ease: Power3.easeInOut,
                force3D: true,
                duration: 0.4,
            });
            this.loading.to(this.$refs.loading, 0.5, {
                height: "120px",
                ease: Power3.easeInOut,
                force3D: true,
            });
            this.loading.play();

            setTimeout(
                () => {
                    if (sending) {
                        this.loadMessage = 'SENT'
                        this.loading.reverse();
                        document
                            .getElementById("wrapper")
                            .classList.remove("inactiveWrapper");
                        this.siteLoading = false;
                    } else {
                        this.loading.reverse().then(() => {
                            this.siteLoading = false;
                        });
                        document.getElementById("wrapper").classList.remove("inactiveWrapper");
                        // 
                    }

                }, !time ? 1500 : time
            );
        },
        updateCoordinates: function (event) {
            this.x = event.clientX;
            this.y = event.clientY;
        },
        sizeCheck() {
            if (window.innerWidth > 992) {
                this.deviceSize = "desktop";
            } else if (window.innerWidth > 576) {
                this.deviceSize = "tablet";
            } else {
                this.deviceSize = "mobile";
            }
        },
        updateSizes(onOff) {
            if (onOff == 'on') {
                var h = document.getElementsByClassName("porfolioWindow")[0].scrollHeight + 100;
                document.getElementsByClassName("active")[0].children[2].style.height = h + "px";
            } else {
                document.getElementsByClassName("porfolioWindow")[0].scrollHeight;
                document.getElementsByClassName("active")[0].children[2].style.height = 0 + "px";
                // document
                document.getElementsByClassName("window__wrapper")
                    .forEach((element) => {
                        element.style.height = null;
                    });
                document.getElementsByClassName("window__wrapper__content")
                    .forEach((element) => {
                        element.style.height = null;
                    });
            }
        }
    },
    computed: {
        internLoadProgress() {
            var number1 = Number(this.intloader.progress().toFixed(2));
            return Math.round(number1 * 100)
        },
        progress() {
            var number1 = Number(this.portfolioView.progress().toFixed(2));
            return Math.round(number1 * 100)
        },
        outerWidth() {
            return window.outerWidth;
        },
    },
    created() {
        this.screenWidth = window.innerWidth;
        window.addEventListener("resize", () => {
            this.sizeCheck();
        });
    },
    watch: {
        galaxyLoaded() {
            //   alert('go')
            this.initialLoad();
        },
        deviceSize() {
            if (!this.siteLoading) {
                setTimeout(function () {
                    window.location.reload();
                }, 100);
            }
        },
    },
    mounted() {
        this.sizeCheck();
        this.windowSizes;
        var wait = 100;

        if (window.innerWidth > 992) {
            this.loadingSprite(2000, false);
        } else {
            wait = 100;
            this.loadingSprite(2000, false);
        }

        this.$ga.page('/homepage');
    },
};
</script>

<style lang="scss">
@import "assets/css/bootstrap.min.css";
@import "assets/css/global.scss";
</style>
