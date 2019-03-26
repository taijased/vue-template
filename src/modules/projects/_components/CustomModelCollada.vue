<template lang="pug">
    .custom-model
        div(id="custommodel")
</template>

<script>

import { mapGetters, mapActions} from 'vuex';
import WorkerWebGl from '../_api/WorkerWebGl.js';


export default {
    computed: {
        ...mapGetters({
            showProject: "projects/showProject"
        })
    },
    methods: {
        ...mapActions({
            fetchModelFromServer: "projects/fetchModelFromServer"
        }),
        createDaeModel() {
            WorkerWebGl.setupScene('custommodel')
        }
    },
    created () {
        setTimeout(() => {
            this.createDaeModel()
        }, 2000);
    }
}
</script>

<style lang="stylus" scope>
$primary = #3D3BEE
.custom-model
    height 100%
    width 100%
    background #3D3BEE
    overflow hidden
    canvas 
        width 100%
        height 100%
</style>
