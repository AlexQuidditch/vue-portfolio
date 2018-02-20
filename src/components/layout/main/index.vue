<template lang="html">
  <transition name="fade" mode="out-in" appear>
    <router-view />
  </transition>
</template>

<script>
  export default { name: 'Page-Main' };
</script>
