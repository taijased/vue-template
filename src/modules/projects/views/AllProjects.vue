<template lang="pug">
    .projects
        el-row(:gutter='20')
            el-col(
                    v-for="(item, index) in getModelList", 
                    :key="'project-card' + index",
                    :xs='24', 
                    :sm='12', 
                    :md='8', 
                    :lg='6', 
                    :xl='4')
                ProjectCard(:data="item")
            el-col(:xs='24', :sm='12', :md='8', :lg='6', :xl='4')
                CreateCard
</template>

<script>
import ProjectCard from '../_components/ProjectCard';
import CreateCard from '../_components/CreateCard';
import { mapGetters, mapActions} from 'vuex';
export default {
    computed: {
        ...mapGetters({
            getModelList: "projects/getModelList"
        })
    },
    methods: {
        ...mapActions({
            fetchModelList: "projects/fetchModelList"
        })
    },
    components: {
        ProjectCard,
        CreateCard
    },
    created() {
        this.fetchModelList()
    }
}
</script>

<style lang="stylus" scoped>
.projects
    margin-top $header-height
    padding 0 $pd

</style>
