<template>
<div class="sign-up">
    <p>Let's create a new account !</p>
    <input type="email" placeholder="Email" v-model="email"><br>
    <input type="password" placeholder="Password" v-model="password"><br>
    <button @click="signUp">Sign up</button>
    <span>or go back to <router-link to="/login">login.</router-link> </span>
</div>
</template>

<script>
import {signUpWithEmaiLAndPassword} from '@/auth'
export default {
    name: 'signUp',
    data() {
        return {
            email: '',
            password: '',
        }
    },
    methods: {
        signUp() {
            signUpWithEmaiLAndPassword(this, this.email, this.password)
        }
    }
}
</script>

<style lang="scss" scoped>
.signUp {
    margin-top: 40px;
}

input {
    margin: 10px 0;
    width: 20%;
    padding: 15px;
}

button {
    margin-top: 20px;
    width: 10%;
    cursor: pointer;
}

span {
    display: block;
    margin-top: 20px;
    font-size: 11px;
}
</style>
