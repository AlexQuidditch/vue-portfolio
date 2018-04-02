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
    background-color: #ffffff;
    box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.1);
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
      border-color: transparent transparent rgba( 123 , 203 , 251 , .9 ) transparent;
      transform: translateX(-50%)
    }
    &:hover {
    box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.1);
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
      margin: 12px;
    }
  }

</style>