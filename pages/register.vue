<template>
  <form style="margin: 50px">
    <label for="username">
      Username
      <input
        type="text"
        id="username"
        name="username"
        placeholder="Username"
        required
      />
    </label>
    <label for="email">
      Email
      <input
        type="email"
        id="email"
        name="email"
        placeholder="email@mail.com"
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
        required
      />
    </label>
    <button type="submit">Register</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      email: '',
      password: '',
      loading: false,
    }
  },
    methods: {
        async register() {
        this.loading = true
        // const cuser = await this.$pocketbase.collection('users').create(this.username, this.email, this.password, this.pa));
        }
    }
}
</script>

<style></style>
