<template lang="html">
  <header class="header">
    <div :class="{ '_half' : !isPortfolio }"
         class="container">
      <div class="header-container">
        <h3 class="header__title">Сергей <span>Иванов</span></h3>
        <h4 class="header__sub-title">WEB / APP / UI DESIGN</h4>
      </div>
      <div class="header-menu">
        <span class="header-menu__text">Меню</span>
        <icon-menu class="header-menu__icon"></icon-menu>
      </div>
    </div>
  </header>
</template>

<script>

  import IconMenu from '../../icons/menu.js';

  export default {
    name: 'Page-Header',
    components: { IconMenu },
    computed: {
      isPortfolio() {
        return this.$route.fullPath.includes( '/case/' );
      }
    }
  };

</script>

<style lang="scss">

  .header {
    z-index: 999;
    position: absolute;
    top: 0; left: 0;
    width: 100%;
    padding-top: 50px;
    .container {
      display: flex;
      justify-content: space-between;
      transition: padding-right 1s ease-in-out;
      &._half {
        padding-right: (1180px / 2 + 64px );
      }
    }
    &__title {
      font-size: 30px;
      font-family: 'Panton-Bold', Arial, Helvetica, sans-serif;
      color: #4a4a4a;
      color: var(--charcoal-grey);
      span {
        font-family: 'Panton-Regular', Arial, Helvetica, sans-serif;
      }
    }
    &__sub-title {
      font-size: 18px;
      line-height: 1.11;
      color: #4a4a4a;
      color: var(--charcoal-grey);
    }
  }

  .header-menu {
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    &__text {
      font-size: 18px;
      font-family: 'Panton-Bold', Arial, Helvetica, sans-serif;
      line-height: 48px;
      color: #4a4a4a;
      color: var(--charcoal-grey);
    }
    &__icon {
      width: 50px;
      margin: 0 0 0 15px;
      fill: #4a4a4a;
      fill: var(--charcoal-grey);
    }
  }

</style>
