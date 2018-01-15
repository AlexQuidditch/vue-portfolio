<template lang="html">
  <nav class="pg-menu">
    <ul class="pg-menu-list">
      <li class="pg-menu-list__item">
        <router-link to="/vdele"
                     class="pg-menu-list__item-link">
          Главная
        </router-link>
      </li>
      <li class="pg-menu-list__item">
        <router-link :to="{ name: 'About' }"
                     class="pg-menu-list__item-link">
          Обо мне
        </router-link>
      </li>
      <li class="pg-menu-list__item">
        <router-link :to="{ name: 'Contact' }"
                     class="pg-menu-list__item-link">
          Связаться
        </router-link>
      </li>
      <li class="pg-menu-list__item _close">
        <button @click="$emit('toggleMenu')" class="pg-menu-list__item-button">
          <span>Закрыть</span>
          <icon-close class="pg-menu-list__item-icon"></icon-close>
        </button>
      </li>
    </ul>
  </nav>
</template>

<script>

  import IconClose from '../../icons/close.js';

  export default {
    name: 'Page-Menu',
    components: { IconClose },
    watch: {
      '$route' ( to , from ) {
        setTimeout(() => this.$emit('toggleMenu') , 500);
      }
    }
  };

</script>

<style lang="scss">

  @import "../../../stylesheets/partials/_mixins.scss";
  @import "../../../stylesheets/partials/_layout.scss";
  
  .pg-menu {
    z-index: 999;
    position: fixed;
    top: 0; left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background-color: rgba( #404552 , .95 );
    .pg-menu-list {
      width: 20%;
      @include MQ(Pp) {
        width: 80%;
      }
      &__item {
        margin: 30px 0;
        text-align: left;
        @include MQ(Pp) {
          margin: 1.25rem 0;
        }
        &._close {
          position: absolute 40px 40px auto auto;
          margin: 0;
          @include MQ(Pp) {
            top: initial;
            right: initial;
            bottom: 50px;
            .pg-menu-list__item-button {
              display: flex;
              justify-content: flex-end;
              width: 75vw;
              height: 50px;
              font-size: 24px;
              line-height: 50px;
              color: rgba( #fff , .5 );
            }
            .pg-menu-list__item-icon {
              fill: rgba( #fff , .5 );
            }
          }
        }
      }
      &__item-link {
        font-size: 72px;
        font-weight: 800;
        line-height: 1;
        color: rgba( #fff , .5 );
        outline: none;
        transition: all .2s ease-in-out;
        &:hover,
        &._exact-active {
          color: #1c9bf7;
          color: var(--azure);
        }
        @include MQ(Pp) {
          font-size: 3rem;
          line-height: 1.5;
        }
      }
      &__item-icon {
        size: 40px;
        margin-left: 10px;
      }
      &__item-button {
        display: flex;
        align-items: center;
        padding: 0;
        font-size: 18px;
        line-height: 40px;
        background-color: transparent;
        border: none
      }
    }
  }

</style>