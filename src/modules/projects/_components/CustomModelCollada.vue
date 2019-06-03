<template lang="pug">
    #custommodel
</template>

<script>

import { mapGetters, mapActions} from 'vuex';
import WebGlControl from '../_api/WebGlControl.js'


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
            WebGlControl.setupScene('custommodel')
        }
    },
    created () {
        this.$nextTick(() => {
            this.createDaeModel()
        })
    }
}
</script>

<style lang="stylus" scope>
$primary = #3D3BEE
#custommodel
    height 100%
    width 100%
    background #3D3BEE
    overflow hidden
    canvas 
        height 100%
        width 100%
</style>
