<template lang="html">
   <div class="workflow-tooltip"
        role="tooltip" 
        tabindex="-1">
    <p class="workflow-tooltip__text">{{ Description }}</p>
  </div>
</template>

<script>

  export default {
    name: 'Worflow-Tooltip',
    props: {
      'Description': {
        type: String,
        default: 'Нет описания'
      }
    }
  };

</script>

<style lang="scss">

  @import "../../../stylesheets/partials/_layout.scss";
  @import "../../../stylesheets/partials/_mixins.scss";

  .workflow-tooltip {
    opacity: 0;
    visibility: hidden;
    position: absolute;
    top: 120px;
    left: 50%;
    z-index: 1060;
    width: 225px;
    padding: 10px;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;
    font-style: normal;
    font-weight: 400;
    line-height: 1.5;
    font-size: .875rem;
    word-wrap: break-word;
    background-color: #f5f5f5;
    border: 1px solid rgba( 0 , 0 , 0 , .2 );
    border-radius: .3rem;
    transform: translateX(-50%);
    transition:
      opacity .2s ease-in-out,
      visibility .2s ease-in-out;
    &::before {
      position: absolute;
      top: -10px;
      left: 50%;
      content: "";
      display: block;
      width: 10px;
      height: 10px;
      border-style: solid;
      border-width: 0 10px 10px 10px;
      border-color: transparent transparent rgba( 0 , 0 , 0 , .2 ) transparent;
      transform: translateX(-50%)
    }
    @include MQ(Pp) {
      position: fixed;
      top: 50%; left: 50%;
      width: 75%;
      transform: translate(-50%,-50%);
      &::before {
        display: none;
      }
    }
    &__text {
      padding: 0;
      margin: 0;
    }
  }

</style>