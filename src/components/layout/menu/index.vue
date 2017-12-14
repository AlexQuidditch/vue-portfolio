<template lang="html">
  <nav class="pg-menu">
    <ul class="pg-menu-list">
      <li class="pg-menu-list__item">
        <router-link :to="{ name: '' , params: {} }"
                     class="pg-menu-list__item-link">
          dqwd
        </router-link>
      </li>
      <li class="pg-menu-list__item">
        <button @click="$emit('toggleMenu')" class="pg-menu-list__item-button">Закрыть</button>
      </li>
    </ul>
  </nav>
</template>

<script>

  export default {
    name: 'Page-Menu'
  };

</script>

<style lang="scss">

  @import "../../../stylesheets/partials/_mixins.scss";
  
  .pg-menu {
    z-index: 999;
    position: fixed;
    top: 0; left: 0;
    width: 100%;
    height: 100vh;
    background-image: linear-gradient(241deg, #50e3c2, #24a7ef 99%, #1c9bf7);
    background-image: linear-gradient(241deg, var(--aqua-marine), #24a7ef 99%, var(--azure));
    .pg-menu-list {
      &__item {}
      &__item-link {}
      &__item-button {}
    }
  }

</style>