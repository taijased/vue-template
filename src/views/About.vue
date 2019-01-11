<template lang="pug">
  .about 
    h1  {{title}}
    .block
      el-date-picker(v-model='value8', type='date', placeholder='Pick a date', default-value='2010-10-01')

</template>

<script>
export default {
  data() {
    return {
      value8: '',
      value9: '',
      title: process.env.NODE_ENV
    };
  }
};
</script>

<style lang="stylus" scoped>
h1 
  color $lolo
</style>
