<template>
  <div class="container">
    <nav>
      <ul>
        <li><strong><nuxt-link to="/">Home</nuxt-link></strong></li>
      </ul>
      <ul>
        <li><nuxt-link to="/login" role="button">Login</nuxt-link></li>
        <li><nuxt-link to="/register" class="secondary" role="button">Register</nuxt-link></li>
        <li><nuxt-link to="/" class="outline" role="button">Logout</nuxt-link></li>
      </ul>
    </nav>
    <main style="height: 100vh">
      <nuxt />
    </main>
    <footer>footer</footer>
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout',
}
</script>

<style></style>
