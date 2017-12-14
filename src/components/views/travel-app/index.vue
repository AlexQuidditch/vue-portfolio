<template lang="html">
  <main id="main" class="main">
    <section class="travel">Travel-App</section>

    <bottom-navigation></bottom-navigation>
  </main>
</template>

<script>

  import BottomNavigation from '../../layout/bottom-nav/index.vue';

  export default {
    name: "Travel-App",
    components: { BottomNavigation },
    data: () => ({

    })
  };

</script>

<style lang="scss">

  .travel {}

</style>
