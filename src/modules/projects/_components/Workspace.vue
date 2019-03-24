<template lang="pug">
    .workspace
        WorkspaceControls

    //- <model-collada src="static/monster/monster.dae"></model-collada>
</template>

<script>

import { ModelCollada } from 'vue-3d-model'
import WorkspaceControls from './WorkspaceControls'

export default {
    components: {
        ModelCollada,
        WorkspaceControls
    }
}
</script>

<style lang="stylus" scope>
$primary = #3D3BEE
.workspace
    height 100%
    width 100%
    background gray
    .workspace-controls
        z-index 10
        height 100%
        width 100%
        display flex
        flex-direction row
        justify-content flex-end
        align-items flex-end
        .controls
            width 100%
            height 10vh
            display flex
            flex-direction row
            justify-content space-between
            align-items center
            &__left
                width 300px
                display flex
                flex-direction row
                justify-content space-around
                align-items center
            &__right
                width 300px
                display flex
                flex-direction row
                justify-content space-around
                align-items center
            .circle 
                width 55px
                height 55px
                border-radius 50%
                background white
                box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.2);
                display flex
                flex-direction row
                justify-content center
                align-items center
                &:hover 
                    cursor pointer
                    background $primary
                    transition background 0.5s
                    svg 
                        path
                            fill white
                            transition fill 0.5s

            .active
                background $primary
                transition background 0.5s
                svg 
                    path
                        fill white
                        transition fill 0.5s
                &:hover 
                    cursor default

</style>
