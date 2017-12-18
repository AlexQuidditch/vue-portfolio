<template lang="html">
  <nav class="pg-menu">
    <ul class="pg-menu-list">
      <li class="pg-menu-list__item">
        <router-link to="/vdele"
                     class="pg-menu-list__item-link">
          Главная
        </router-link>
      </li>
      <li v-for="caseItem in Cases" class="pg-menu-list__item">
        <router-link :to="{ name: caseItem.route }"
                     class="pg-menu-list__item-link">
          {{ caseItem.title }}
        </router-link>
      </li>
      <li class="pg-menu-list__item">
        <router-link :to="{ name: 'Contact' }"
                     class="pg-menu-list__item-link">
          Связаться со мной
        </router-link>
      </li>
      <li class="pg-menu-list__item">
        <router-link :to="{ name: 'About' }"
                     class="pg-menu-list__item-link">
          Обо мне
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
    name: 'Page-Menu',
    data: () => ({
      Cases: [
        {
          title: 'В Деле',
          route: 'VDele'
        },
        {
          title: 'Travel App',
          route: 'TravelApp'
        },
        {
          title: 'Всё Просто',
          route: 'VseProsto'
        }
      ]
    }),
    watch: {
      '$route' ( to , from ) {
        setTimeout(() => {
          this.$emit('toggleMenu')
        }, 500);
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
    background-image: linear-gradient(241deg, #50e3c2, #24a7ef 99%, #1c9bf7);
    background-image: linear-gradient(241deg, var(--aqua-marine), #24a7ef 99%, var(--azure));
    .pg-menu-list {
      width: 80%;
      &__item {
        margin: 3rem 0;
        text-align: center;
        @include MQ(Pp) {
          margin: 1.25rem 0;
        }
      }
      &__item-link {
        font-size: 3rem;
        color: #424242;
        color: var(--charcoal-grey);
        outline: none;
        transition: all .2s ease-in-out;
        &:hover,
        &._exact-active {
          color: #ff144b;
          color: var(--neon-red);
          text-shadow:
            0 2px 2px rgba(#ff144b, 0.14),
            0 1px 5px rgba(#ff144b, 0.12),
            0 3px 1px rgba(#ff144b, 0.2);
        }
        @include MQ(Pp) {
          font-size: 1.75rem;
        }
      }
      &__item-button {
        font-size: 3rem;
        background-color: transparent;
        border: none
      }
    }
  }

</style>