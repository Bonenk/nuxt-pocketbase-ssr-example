<template>
  <form style="margin: 50px" @submit.prevent="login">
    <label for="username">
      Username
      <input
        type="text"
        id="username"
        name="username"
        placeholder="Username"
        v-model="username"
        required
      />
    </label>
    <label for="password">
      Password
      <input
        type="password"
        id="password"
        name="password"
        placeholder="Password"
        v-model="password"
        required
      />
    </label>
    <button :aria-busy="loading" type="submit">Login</button>
  </form>
</template>

<script>
export default {
    middleware: 'auth',
  async asyncData({ $pocketbase, redirect }) {
    if ($pocketbase.authStore.isValid) {
      return redirect('/')
    }
  },
  data() {
    return {
      username: '',
      password: '',
      loading: false,
    }
  },
  methods: {
    async login() {
      this.loading = true
      const authData = await this.$pocketbase
        .collection('users')
        .authWithPassword(this.username, this.password)

      console.log(authData)
      this.loading = false
      this.$router.push('/')
    },
  },
}
</script>

<style></style>
