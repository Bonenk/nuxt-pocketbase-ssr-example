<template>
  <div>
    <h2>COngtetn</h2>
  </div>
</template>

<script>
export default {
  layout: 'default',
  name: 'IndexPage',
  async asyncData({ $pocketbase, error }) {
    const tes = await $pocketbase.collection('tests').getList(1, 10, {})
    return {
      tes,
    }
  },
}
</script>
