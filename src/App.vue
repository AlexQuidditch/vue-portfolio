<template lang="html">
  <div id="wrapper" class="wrapper">
    <page-header @toggleMenu="toggleMenu"></page-header>
    <page-main></page-main>
    <transition name="fade" mode="out-in">
      <page-menu v-if="menuIsOpen" @toggleMenu="toggleMenu"></page-menu>
    </transition>
  </div>
</template>

<script>

  import PageHeader from './components/layout/header/index.vue';
  import PageMain from './components/layout/main/index.vue';
  import PageMenu from './components/layout/menu/index.vue';

  export default {
    name: 'Vue-Portfolio',
    components: { PageHeader , PageMain , PageMenu },
    data: () => ({ menuIsOpen: false }),
    mounted () {
      this.$nextTick( () => {
        document.addEventListener( 'keyup' , event => {
          event.preventDefault();
          if ( event.keyCode === 27 && this.menuIsOpen === true ) {
            this.menuIsOpen =! this.menuIsOpen;
            document.body.style.overflow = 'auto'
          }
        })
      })
    },
    methods: {
      toggleMenu () {
        this.menuIsOpen =! this.menuIsOpen;
        if ( this.menuIsOpen ) {
          document.body.style.overflow = 'hidden'
        } else {
          document.body.style.overflow = 'auto'
        }
      }
    }
  };

</script>

<style src="normalize-css/normalize.css" lang="css"></style>

<style lang="scss">

	@import "./stylesheets/partials/_layout";
	@import "./stylesheets/partials/_mixins";
	@import "./stylesheets/partials/_variables";

	@import "./stylesheets/layout/resets";

	@import "./stylesheets/transitions.scss";

  :root {
    --black: #202020;
    --charcoal-grey: #4a4a4a;
    --aqua-marine: #50e3c2;
    --azure: #1c9bf7;
    --booger-99: rgba(140, 195, 75, 0.99);
    --charcoal-grey-20: rgba(74, 74, 74, 0.2);
    --booger--80: rgba(140, 195, 75, 0.8);
    --white-90: rgba(255, 255, 255, 0.9);
    --squash: #f6a623;
    --sand-yellow: #fbda61;
    --orange: #f76b1c;
    --white: #f7f7f7;
    --butterscotch: #ffbe46;
    --butterscotch-80: rgba(255, 190, 70, 0.8);
    --black-80: rgba(32, 32, 32, 0.8);
    --neon-red-80: rgba(255, 20, 75, 0.8);
    --neon-red: #ff144b;
    --brownish-orange: #dca01e;
    --booger: #8cc34b;
    --black-two: #303030;
    --bright-light-blue: #31c5f0;
    --eggplant: #0c0824;
    --whited: #fff;
    --charcoal-grey-two: #404552;
  }

	html , body {
		font-size: 16px;
		@include font-smoothing;
		-webkit-tap-highlight-color: transparent;
    font-family: 'Panton-Regular', Arial, Helvetica, sans-serif;
	}

	.wrapper {
    overflow-x: hidden;
		position: relative;
		width: 100%;
		min-height: 100vh;
		color: #4a4a4a;
    color: var(--charcoal-grey);
	}

	.container {
	  position: relative;
		size: 100% auto;
		min-height: 100%;
		max-width: 1080px;
    margin: 0 auto;
    @include MQ(Pp) {
      padding: 0 25px;
    }
  }

  .main._column {
    flex-flow: column
  }

	button {
		cursor: pointer;
		border-radius: 0
	}

</style>
