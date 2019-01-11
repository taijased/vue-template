<template lang="pug">
  .about 
    h1  This is an about page
    .block
      el-date-picker(v-model='value8', type='date', placeholder='Pick a date', default-value='2010-10-01')

</template>

<script>
export default {
  data() {
    return {
      value8: '',
      value9: ''
    };
  }
};
</script>

<style lang="stylus" scoped>
h1 
  color $lolo
</style>
