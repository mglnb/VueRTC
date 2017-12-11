<template>
<div class="login">
    <h3>Sign in</h3>
    <input type="email" placeholder="Email" v-model="email"><br>
    <input type="password" placeholder="Password" v-model="password"><br>
    <button @click.prevent="login">Connection</button>
    <p>You don't have an account?
        <router-link to="/sign-up">You can create one</router-link>
    </p>
</div>
</template>
<script>
import {loginWithEmailAndPassword} from '@/auth'
export default {
    name: 'login',
    data() {
        return {
            email: '',
            password: '',
        }
    },
    mounted() {
        this.$auth.onAuthStateChanged((user) => {
            if (user) {
                localStorage['user'] = JSON.stringify({
                    displayName: user.displayName || user.email,
                    email: user.email,
                    emailVerified: user.emailVerified || false,
                    photoURL: user.photoURL || false,
                    isAnonymous: user.isAnonymous,
                    uid: user.uid,
                    providerData: user.providerData || false,
                })
            } else {
                localStorage.removeItem('user')
            }
        })
    },
    methods: {
        login() {
           loginWithEmailAndPassword(this, this.email, this.password)
        }
    }
}
</script>

<style lang="scss" scoped>
.login {
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
p {
    margin-top: 40px;
    font-size: 13px;
    a {
        text-decoration: underline;
        cursor: pointer;
    }
}
</style>
