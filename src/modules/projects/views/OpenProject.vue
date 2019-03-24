<template lang="pug">
    .project
        el-container
            el-aside 
                h3  3D модель {{$route.params.aliase}}
            el-main
                Workspace

</template>

<script>

import Workspace from '../_components/Workspace'
import UploadListFile from '../_components/UploadListFile';
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
        // this.aliase = this.$route.params.aliase
        // console.log(this.aliase);
    },
    beforeDestroy () {
        this.updateShowProject();
    },
    components: {
        Workspace,
        UploadListFile
    }
}
</script>
<style lang="stylus">

.project
    width 100%
    height 100vh - $header-height
    overflow hidden
    .el-container 
        height 100%
        .el-aside
            padding 1%
            width 25% !important
            margin 1%
            box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
        .el-main
            margin 1%
            box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
            padding 0
</style>
