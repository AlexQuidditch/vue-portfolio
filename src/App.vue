<template lang="html">
  <div id="wrapper" class="wrapper">
    <page-header></page-header>
    <page-main></page-main>
  </div>
</template>

<script>

  import PageHeader from './components/layout/header/index.vue';
  import PageMain from './components/layout/main/index.vue';

  export default {
    name: 'Vue-Portfolio',
    components: { PageHeader , PageMain },
  };

</script>

<style src="normalize-css/normalize.css" lang="css"></style>

<style lang="scss">

	@import "./stylesheets/partials/_layout";
	@import "./stylesheets/partials/_mixins";
	@import "./stylesheets/partials/_variables";

	@import "./stylesheets/layout/resets";

	@import "./stylesheets/transitions.scss";

	html , body {
		font-size: 16px;
		@include font-smoothing;
		-webkit-tap-highlight-color: transparent;
	}

	.wrapper {
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
		max-width: 1180px;
		margin: 0 auto;
	}

	button {
		cursor: pointer;
		border-radius: 0
	}

</style>
