<template lang="pug">
    .workspace
        WorkspaceControls
        CustomModelCollada
        //- ModelCollada(src="../../../static/monster/monster.dae")
</template>

<script>

// import { ModelCollada } from 'vue-3d-model'
import WorkspaceControls from './WorkspaceControls'
import CustomModelCollada from './CustomModelCollada';
import { mapGetters, mapActions} from 'vuex';

export default {
    computed: {
        ...mapGetters({
            showProject: "projects/showProject"
        })
    },
    methods: {
        ...mapActions({
            fetchModelFromServer: "projects/fetchModelFromServer"
        })
    },
    created () {
       this.fetchModelFromServer(this.$route.params.aliase)
    },
    components: {
        // ModelCollada,
        WorkspaceControls,
        CustomModelCollada
    }
}
</script>

<style lang="stylus" scope>
$primary = #3D3BEE
.workspace
    height 100%
    width 100%
    background gray
    overflow hidden
        
</style>
