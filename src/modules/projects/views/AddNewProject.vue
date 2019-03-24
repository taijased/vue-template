<template lang="pug">
  
    el-container
        el-aside 
            h3  Загрузить 3D модель
            UploadListFile
        el-main
            DModel

</template>

<script>

import DModel from '../_components/DModel'
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
    },
    beforeDestroy () {
        this.updateShowProject();
    },
    components: {
        DModel,
        UploadListFile
    }
}
</script>
<style lang="stylus">

.el-container 
    height 90vh
    .el-aside
        padding 1%
        width 25% !important
        margin 1%
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);

    .el-main
        margin 1%
        box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
</style>
