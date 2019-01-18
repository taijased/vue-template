<template lang="pug">
  .wrapper
    Header
    router-view 
</template>

<script>

import Header from '../modules/header/Index.vue';

export default {
  components: {
    Header
  }
}
</script>
