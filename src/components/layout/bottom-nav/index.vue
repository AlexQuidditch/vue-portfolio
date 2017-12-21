<template lang="html">
  <nav class="bottom-nav">
    <div class="container">
      <router-link :to="{ name: 'Base' , params: { Case : 'vdele' } }"
                   class="bottom-nav-link">
        <icon-step-back class="bottom-nav-link__icon"></icon-step-back>
        <span class="bottom-nav-link__text">Вернуться ко всем работам</span>
      </router-link>
      <button @click="scrollTop" class="bottom-nav-link">
        <icon-scroll-top class="bottom-nav-link__icon"></icon-scroll-top>
        <span class="bottom-nav-link__text">Уехать в самый верх</span>
      </button>
    </div>
  </nav>
</template>

<script>

  import IconStepBack from '../../icons/step-back.js'
  import IconScrollTop from '../../icons/scroll-top.js'

  export default {
    name: 'Bottom-Navigation',
    components: { IconScrollTop , IconStepBack },
    methods: {
      scrollTop () {
        window.scroll({ top: 0, behavior: 'smooth' })
      }
    }
  };

</script>

<style lang="scss">

  @import "../../../stylesheets/partials/_layout.scss";

  .bottom-nav {
    position: absolute;
    bottom: 90px; left: 0;
    width: 100%;
    @include MQ(Pp) {
      bottom: 25px;
    }
    .container {
      display: flex;
      justify-content: space-between;
    }
    .bottom-nav-link {
      display: flex;
      align-items: flex-end;
      background-color: transparent;
      border: none;
      &__icon {
        width: 45px;
        fill: #404552;
        fill: var(--charcoal-grey-two);
      }
      &__text {
        margin-left: 18px;
        margin-bottom: 10px;
        font-family: 'Panton-Light', Arial, Helvetica, sans-serif;
        font-size: 18px;
        font-weight: bold;
        color: #404552;
        color: var(--charcoal-grey-two);
        @include MQ(Pp) {
          display: none;
        }
      }
    }
  }

</style>