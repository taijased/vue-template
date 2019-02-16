<template lang="pug">
    .projects
        ProjectCard(
            v-for="(item, index) in 15", 
            :key="'project-card' + index")
</template>

<script>
import ProjectCard from '../_components/ProjectCard';
export default {
    components: {
        ProjectCard
    }
}
</script>

<style lang="stylus" scoped>
.projects
    display flex
    align-items center
    justify-content flex-start
    flex-wrap wrap
    margin-top $header-height
    padding 0 $pd

</style>
