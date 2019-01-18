<template lang="pug">
    .projects
        .projects__items
            ProjectCard(
                v-for="(item, index) in 15", 
                :key="'project-card' + index")
</template>

<script>
import ProjectCard from './_components/ProjectCard';
export default {
    components: {
        ProjectCard
    }
}
</script>

<style lang="stylus" scoped>
.projects
    width 100%
    padding-top 2.5vh
    &__items
        display flex
        align-items center
        justify-content space-between
        flex-wrap wrap
        margin-top $header-height
        padding 0 $pd

</style>
