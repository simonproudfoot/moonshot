<template>
<div>
    <span class="window__chevs"></span>
    <div class="window__wrapper">
        <div class="window__wrapper__content">
            <svg @click="close" version="1.1" id="closeb" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 41.8 41.8" style="enable-background:new 0 0 41.8 41.8;" xml:space="preserve">
                <g id="circle" transform="translate(0, 0)">
                    <ellipse transform="matrix(1 -4.136431e-03 4.136431e-03 1 -8.630285e-02 8.666051e-02)" class="st0 " cx="20.9" cy="20.9" rx="20.4" ry="20.4" />
                </g>
                <g id="x">
                    <line class="st1" x1="13.7" y1="13.7" x2="28.2" y2="28.2" />
                    <line class="st1" x1="28.2" y1="13.7" x2="13.7" y2="28.2" />
                </g>
            </svg>
            <div class="pt-5">
                    <div class="row">
                        <div class="col-8">
                            <h1 :class="deviceSize == 'mobile' ? 'h2' : null">SEND SUBSPACE <br />COMMUNICATION</h1>
                        </div>
                        <div class="col-4">
                            <div id="soundwave">
                                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="200px" height="50px" viewBox="0 0 24 30" style="enable-background: new 0 0 50 50" xml:space="preserve">
                                    <rect x="0" y="13" width="2" height="5" fill="#fff">
                                        <animate attributeName="height" attributeType="XML" values="5;21;5" begin="0s" dur="01" repeatCount="indefinite" />
                                        <animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0s" dur="0.6s" repeatCount="indefinite" />
                                    </rect>
                                    <rect x="10" y="13" width="2" height="50" fill="#fff">
                                        <animate attributeName="height" attributeType="XML" values="5;21;5" begin="0.15s" dur="0.6s" repeatCount="indefinite" />
                                        <animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0.15s" dur="0.6s" repeatCount="indefinite" />
                                    </rect>
                                    <rect x="20" y="13" width="2" height="50" fill="#fff">
                                        <animate attributeName="height" attributeType="XML" values="5;21;5" begin="0.3s" dur="0.6s" repeatCount="indefinite" />
                                        <animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0.3s" dur="0.6s" repeatCount="indefinite" />
                                    </rect>
                                    <rect x="20" y="13" width="2" height="50" fill="#fff">
                                        <animate attributeName="height" attributeType="XML" values="5;21;5" begin="0.3s" dur="0.6s" repeatCount="indefinite" />
                                        <animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0.3s" dur="0.6s" repeatCount="indefinite" />
                                    </rect>
                                    <rect x="30" y="13" width="2" height="50" fill="#fff">
                                        <animate attributeName="height" attributeType="XML" values="5;21;5" begin="0.3s" dur="0.6s" repeatCount="indefinite" />
                                        <animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0.20s" dur="0.6s" repeatCount="indefinite" />
                                    </rect>
                                    <rect x="40" y="13" width="2" height="50" fill="#fff">
                                        <animate attributeName="height" attributeType="XML" values="5;21;5" begin="0.3s" dur="0.6s" repeatCount="indefinite" />
                                        <animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0.3s" dur="0.6s" repeatCount="indefinite" />
                                    </rect>
                                    <rect x="50" y="13" width="2" height="10" fill="#fff">
                                        <animate attributeName="height" attributeType="XML" values="5;21;5" begin="0.3s" dur="0.6s" repeatCount="indefinite" />
                                        <animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0.15s" dur="0.6s" repeatCount="indefinite" />
                                    </rect>
                                    <rect x="60" y="13" width="2" height="50" fill="#fff">
                                        <animate attributeName="height" attributeType="XML" values="5;21;5" begin="0.3s" dur="0.6s" repeatCount="indefinite" />
                                        <animate attributeName="y" attributeType="XML" values="13; 5; 13" begin="0.3s" dur="0.6s" repeatCount="indefinite" />
                                    </rect>
                                </svg>
                            </div>
                        </div>
                        <div class="col-12 mb-5">
                            <p>If you have a project in mind or just want to say hello. Please fill in the form below. Please give as much detail about your project as possible</p>
                        </div>
                    </div>
                    <form name="contact" method="POST" @submit.prevent="sendEmail" autocomplete="off">
                        <input v-model="form.name" label="Email" type="text" placeholder="NAME" name="name" class="mb-4">
                        <input v-model="form.email" type="email" placeholder="EMAIL_ADDRESS" name="email" class="mb-4">
                        <textarea v-model="form.message" name="message" id="" cols="30" rows="5" placeholder="MESSAGE" class="mb-4"> </textarea>
                        <input v-model="form.budget" type="text" placeholder="Project budget" name="budget" class="mb-4">
                        <button class="text-red  sendBtn mt-5" value="transmit" :class="!valid ? 'btnInactive' : 'blinkingText'">TRANSMIT</button>
                    </form>
                </div>
            </div>
            <Smallgraph />
            <pulseBar />
        </div>
    </div>
</div>
</template>
<script>
import emailjs from 'emailjs-com';
import Smallgraph from './smallgraph.vue';
import pulseBar from './pulseBar.vue';
export default {
    props: ['deviceSize'],
    components: {
        Smallgraph,
        pulseBar
    },
    data: () => ({
        form: {
            name: '',
            email: '',
            message: '',
            budget: ''
        },
    }),
    computed: {
        valid() {
            if (this.form.name.length && this.form.email.length && this.form.message.length) {
                return true
            }
        }
    },
    methods: {
        close() {
            this.$emit('toggle', '');
        },
        resetForm() {
            this.$set(this.form, 'name', '');
            this.$set(this.form, 'email', '');
            this.$set(this.form, 'message', '');
        },
        sendEmail(e) {
            if (this.valid) {
                this.$emit('sending', '');
                // trigger sending anilation
                try {
                    emailjs.init("user_B7EKHc1Amf3PSsjQGLczR");
                    emailjs.sendForm('service_zszg7xn', 'template_838lkgw', e.target,
                        'user_B7EKHc1Amf3PSsjQGLczR', {
                            name: this.name,
                            email: this.email,
                            message: this.message
                        })
                } catch (error) {
                    console.log({ error })
                } finally {
                    setTimeout(() => {
                        this.resetForm()
                        this.$emit('sent', '');
                    }, 3000);
                }
            } else {
                alert('Error: please complete all fields')
            }
            // Reset form field
        },
    }
};
</script>
<style>
.btnInactive {
    opacity: 0.5 !important;
}
</style>
