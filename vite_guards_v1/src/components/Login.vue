<template>
  <div class="login_container">
    <label for="user_pass">
        Enter your username and password
    </label>
    <input v-model="username" type="text" id="user_pass" placeholder="Username"/>
    <input v-model="password" type="password" placeholder="Password"/>
    <br>
    <button @click="Auth">Login</button>
  </div>
</template>

<script setup>
    import { ref } from 'vue';
    import { useRouter } from 'vue-router';

    const router = useRouter()

    const username = ref("")
    const password = ref("")

    const Auth = () => {
        if (username.value == 'uno' && password.value == '1234') {
            document.isAuthenticated = true;
            router.push("/profile")
        } else {
            alert("Wrong username or password")
        }
    }

</script>

<style scoped>
    .login_container {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }
</style>