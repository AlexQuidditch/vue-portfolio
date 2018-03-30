<template lang="html">
  <header :class="{ '_fallback': isIOS && !isPortfolio }" class="header">
    <div :class="{ '_half' : !isPortfolio, '_contrast' : isTravelApp , '_mobile' : isNeedMobileContrast }"
         class="container">
      <div class="header-container">
        <router-link to="/mpu" tag="h3"
                     class="header__title">
          Сергей <span>Иванов</span>
        </router-link>
        <router-link to="/vdele" tag="h4"
                     class="header__sub-title">
          WEB / APP / UI DESIGN
        </router-link>
      </div>
      <button @click="$emit('toggleMenu')" class="header-menu">
        <span class="header-menu__text">Меню</span>
        <icon-menu class="header-menu__icon"></icon-menu>
      </button>
    </div>
  </header>
</template>

<script>

  import IconMenu from '../../icons/menu.js';

  export default {
    name: 'Page-Header',
    components: { IconMenu },
    computed: {
      isTravelApp () {
        return ( this.$route.name === 'TravelApp' || this.$route.name === 'MPU' );
      },
      isNeedMobileContrast () {
        return ( this.$route.params.Case === 'mpu' || this.$route.params.Case === 'travel' );
      },
      isPortfolio () {
        const isCase = ( this.$route.fullPath.includes('/case/') || this.$route.name === 'About' || this.$route.name === 'Contact' );
        return isCase;
      },
      isIOS () {
        return window.device.ios()
      }
    }
  };

</script>

<style lang="scss">

  @import "../../../stylesheets/partials/_layout.scss";

  .header {
    z-index: 999;
    position: absolute;
    top: 0; left: 0;
    width: 100%;
    padding-top: 50px;
    @include MQ(Pp) {
      padding-top: 25px;
    }
    @include MQ(Tp) {
      padding-top: 25px;
    }
    @include MQ(Tl) {
      padding-top: 25px;
    }
    &._fallback {
      position: fixed;
      padding-bottom: 20px;
      background-color: #fff;
      background-color: var(--whited);
      .container {
        &._mobile * {
          color: #202020;
          color: var(--black) !important;
          fill: #202020;
          fill: var(--black)
        }
      }
    }
    .container {
      display: flex;
      justify-content: space-between;
      width: 60%;
      max-width: initial;
      min-width: 1080px;
      transition: padding-right 1s ease-in-out;
      &._half {
        padding-right: ( 1180px / 2 + 30px );
        @include MQ(Tl) {
          padding-right: 48%;
        }
      }
      &._contrast * {
        color: #fff;
        color: var(--whited);
        fill: #fff;
        fill: var(--whited)
      }
      &._mobile * {
        @include MQ(Pp) {
          color: #fff;
          color: var(--whited);
          fill: #fff;
          fill: var(--whited)
        }
        @include MQ(Tp) {
          color: #fff;
          color: var(--whited);
          fill: #fff;
          fill: var(--whited)
        }
      }
      @include MQ(Pp) {
        min-width: 100%;
        &._half {
          padding-right: 25px;
        }
      }
      @include MQ(Tp) {
        min-width: 100%;
        padding: 0 25px;
        &._half {
          padding-right: 30px;
        }
      }
      @include MQ(Tl) {
        min-width: 90%;
      }
    }
    &__title {
      font-size: 30px;
      font-family: 'Panton-Bold', Arial, Helvetica, sans-serif;
      color: #4a4a4a;
      color: var(--charcoal-grey);
      cursor: pointer;
      transition: color .3s ease-in-out;
      span {
        font-family: 'Panton-Regular', Arial, Helvetica, sans-serif;
        font-weight: 400;
        transition: color .3s ease-in-out;
      }
      @include MQ(Pp) {
        font-size: 24px;
      }
    }
    &__sub-title {
      position: relative;
      font-size: 18px;
      font-weight: 300;
      line-height: 1.11;
      color: #4a4a4a;
      color: var(--charcoal-grey);
      cursor: pointer;
      transition: color .3s ease-in-out;
      @include MQ(Pp) {
        font-size: 12px;
      }
    }
  }

  .header-menu {
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;
    margin: 0;
    padding: 0;
    background-color: transparent;
    border: none;
    &:hover * {
      color: #1c9bf7;
      color: var(--azure);
      fill: #1c9bf7;
      fill: var(--azure);
    }
    &__text {
      margin: 0 15px 0 0;
      font-size: 18px;
      font-family: 'Panton-Bold', Arial, Helvetica, sans-serif;
      line-height: 48px;
      color: #4a4a4a;
      color: var(--charcoal-grey);
      @include MQ(Pp) {
        display: none;
      }
      @include MQ(Tp) {
        display: none;
      }
    }
    &__icon {
      width: 50px;
    }
  }

</style>
