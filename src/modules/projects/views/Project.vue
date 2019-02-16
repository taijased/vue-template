<template lang="pug">
    .project
        h1 hello 
</template>

<script>

import { mapGetters, mapActions} from 'vuex';
export default {
    computed: {
        ...mapGetters({
            showProject: "projects/showProject"
        })
    },
    methods: {
        ...mapActions({
            updateShowProject: "projects/updateShowProject"
        })
    },
    created () {
        this.updateShowProject();
    },
    beforeDestroy () {
        this.updateShowProject();
    }
    
}
</script>

<style lang="stylus" scoped>
.project
    width 100%
    height 100vh - $header-height
    padding-top $header-height
    overflow hidden
</style>
