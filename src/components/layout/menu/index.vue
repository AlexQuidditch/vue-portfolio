<template lang="html">
  <nav class="pg-menu">
    <transition name="fade-menu" appear>
      <ul class="pg-menu-list">
        <li class="pg-menu-list__item">
          <router-link to="/mpu"
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
        <li class="pg-menu-list__other">
          <router-link to="/"
                       class="pg-menu-list__item _other">
                       <button onclick="window.open('https://works.uidsgn.ru')" class="pg-menu-list__item-button">
          <span><s>Другие работы</s></span>
          <icon-close class="pg-menu-list__item-icon2"></icon-close>
          </button>
          </router-link>
          
        <li class="pg-menu-list__item _close">
          <button @click="$emit('toggleMenu')" class="pg-menu-list__item-button">
            <span>Закрыть</span>
            <icon-close class="pg-menu-list__item-icon"></icon-close>
          </button>
        </li>
      </ul>
    </transition>
  </nav>
</template>

<script>

  import IconClose from '../../icons/close.js';
  import IconLink from '../../icons/link.js';

  export default {
    name: 'Page-Menu',
    components: { IconClose , IconLink } ,
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
      width: 350px;
      @include MQ(Pp) {
        width: 80%;
        margin-bottom: 100px;
      }
      &__item {
        margin: 30px 0;
        text-align: left;
        @include MQ(Pp) {
          margin: 1.20rem 0;
        }
        &._close {
          position: absolute 40px 30px auto auto;
          margin: 0;
          @include MQ(Pp) {
            top: initial;
            right: initial;
            bottom: 60px;
            .pg-menu-list__item-button {
              display: flex;
              justify-content: flex-end;
              width: 75vw;
              height: 50px;
              font-size: 24px;
              line-height: 50px;
              color: rgba( #fff , .5 );
              fill: rgba( #fff , .5 );
              &:hover {
          color: var(--azure);
          color: #1c9bf7;
          fill: var(--azure);
          fill: #1c9bf7;
        }
            }
          }
        }
        
        &._other {
          position: absolute auto 40px 30px auto;
          margin: 0;
          color: rgba( #fff , .5 ); 
          fill: rgba( #fff , .5 ); 
          font-size: 24px; 
          position:absolute;
          margin:0;
          @include MQ(Pp) {
          display: none;
          top: initial;
          right: initial;
          bottom: 160px;
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
          color: var(--azure);
          color: #1c9bf7;
          fill: var(--azure);
          fill: #1c9bf7;
        }
        @include MQ(Pp) {
          font-size: 3rem;
          line-height: 1.3;
        }
      }
      &__item-icon {
        size: 40px;
        margin-left: 10px;
      }
      
      &__item-icon2 {
        size: 40px;
        margin-left: 10px;
        display: none;
        @include MQ(Pp) {
          size: 30px;
        }
      }
      
      &__item-button {
        display: flex;
        align-items: center;
        padding: 0;
        font-size: 20px;
        line-height: 40px;
        background-color: transparent;
        color: rgba( #fff , .5 );
        fill: rgba( #fff , .5 );
        border: none;
     /* transition: .2s ease-out; */
        &:hover {
          color: var(--azure);
          color: #1c9bf7;
          fill: var(--azure);
          fill: #1c9bf7;
        }
      }
    }
  }

</style>