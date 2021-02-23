<template>
    <div>
        <v-dialog v-model="dialog" persistent max-width="600px" min-width="360px">
            <div>
                <v-tabs v-model="tab" show-arrows background-color="" icons-and-text grow>
                    <v-tabs-slider color=""></v-tabs-slider>
                    <v-tab 
                        v-for="(item, i) in tabs"
                        :key="`formtabs${i}`"
                    >
                    <!-- <v-tab v-for="i in tabs" :key="`formtabs${i}`"> -->
                        <v-icon large>{{ item.icon }}</v-icon>
                        <div class="caption py-1">{{ item.name }}</div>
                    </v-tab>
                    <v-tab-item>
                        <v-card class="px-4">
                            <v-card-text>
                                <v-form ref="loginForm" v-model="valid" lazy-validation>
                                    <v-row>
                                        <v-col cols="12">
                                            <v-text-field v-model="loginPhone" :rules="loginPhoneRules" label="Телефон" required></v-text-field>
                                        </v-col>
                                        <v-col cols="12">
                                            <v-text-field v-model="loginPassword" :append-icon="show1?'eye':'eye-off'" :rules="[rules.required, rules.min]" :type="show1 ? 'text' : 'password'" name="input-10-1" label="Пароль" hint="At least 4 characters" counter @click:append="show1 = !show1"></v-text-field>
                                        </v-col>
                                        <v-col class="d-flex" cols="12" sm="6" xsm="12">
                                        </v-col>
                                        <v-spacer></v-spacer>
                                        <v-col class="d-flex" cols="6" sm="3" xsm="6" align-end>
                                            <v-btn x-large block :disabled="!valid" color="success" @click="validate"> Вход </v-btn>
                                        </v-col>
                                        <v-col class="d-flex" cols="6" sm="3" xsm="6" align-end>
                                            <v-btn x-large block :disabled="!valid" color="error" @click="()=>$router.push('/')"> Отмена </v-btn>
                                        </v-col>
                                    </v-row>
                                </v-form>
                            </v-card-text>
                        </v-card>
                    </v-tab-item>
                    <v-tab-item>
                        <v-card class="px-4">
                            <v-card-text>
                                <v-form ref="registerForm" v-model="valid" lazy-validation>
                                    <v-row>
                                        <v-col cols="12" sm="6" md="6">
                                            <v-text-field v-model="firstName" :rules="[rules.required]" label="First Name" maxlength="20" required></v-text-field>
                                        </v-col>
                                        <v-col cols="12" sm="6" md="6">
                                            <v-text-field v-model="lastName" :rules="[rules.required]" label="Last Name" maxlength="20" required></v-text-field>
                                        </v-col>
                                        <v-col cols="12">
                                            <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
                                        </v-col>
                                        <v-col cols="12">
                                            <v-text-field v-model="phone" :rules="phoneRules" label="Phone Number" required></v-text-field>
                                        </v-col>
                                        <v-col cols="12">
                                            <v-text-field v-model="password" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" :rules="[rules.required, rules.min]" :type="show1 ? 'text' : 'password'" name="input-10-1" label="Password" hint="At least 8 characters" counter @click:append="show1 = !show1"></v-text-field>
                                        </v-col>
                                        <v-col cols="12">
                                            <v-text-field block v-model="verify" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" :rules="[rules.required, passwordMatch]" :type="show1 ? 'text' : 'password'" name="input-10-1" label="Confirm Password" counter @click:append="show1 = !show1"></v-text-field>
                                        </v-col>
                                        <v-spacer></v-spacer>
                                        <v-col class="d-flex ml-auto" cols="12" sm="3" xsm="12">
                                            <v-btn x-large block :disabled="!valid" color="success" @click="validate">Register</v-btn>
                                        </v-col>
                                        <v-col class="d-flex" cols="6" sm="3" xsm="6" align-end>
                                            <v-btn x-large block :disabled="!valid" color="error" @click="()=>$router.push('/')"> Отмена </v-btn>
                                        </v-col>
                                    </v-row>
                                </v-form>
                            </v-card-text>
                        </v-card>
                    </v-tab-item>
                </v-tabs>
            </div>
        </v-dialog>
    </div>
</template>

<script>
    // import router from '@/router'
    export default {
        computed: {
            passwordMatch() {
            return () => this.password === this.verify || "Password must match";
            }
        },
        methods: {
            validate() {
            if (this.$refs.loginForm.validate()) {
                //Получить поля из формы
                var postBody = {
                    'phone': this.loginPhone,
                    'password': this.loginPassword
                };
                console.log(postBody);
                //получить токен
                // this.$store.dispatch('getServerToken', postBody);
                //перейти на Admin Panel
                this.$router.push('/admin');
            }
            },
            reset() {
            this.$refs.form.reset();
            },
            resetValidation() {
            this.$refs.form.resetValidation();
            }
        },
        data: () => ({
            dialog: true,
            tab: 0,
            tabs: [
                {name:"Вход", icon:"mdi-account"},
                {name:"Регистрация", icon:"mdi-account-outline"}
            ],
            valid: true,
            
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            password: "",
            verify: "",
            loginPhone: "",
            loginPassword: "",
            loginPhoneRules: [
            v => !!v || "Required",
            v => /^\+?([0-9]{1})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{7})$/.test(v) || "Phone must be valid"
            ],
            phoneRules: [
            v => !!v || "Required",
            v => /^\+?([0-9]{1})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{7})$/.test(v) || "Phone must be valid"
            ],
            emailRules: [
            v => !!v || "Required",
            v => /.+@.+\..+/.test(v) || "E-mail must be valid"
            ],

            show1: false,
            rules: {
            required: value => !!value || "Required.",
            min: v => (v && v.length >= 4) || "Min 4 characters"
            }
        })
    }
</script>
    
<style lang="scss" scoped>

</style>
