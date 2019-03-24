<template lang="pug">
    .create-card(@click="createNewModel")
        .circle-plus
            .circle
                .horizontal
                .vertical

        
</template>

<script>
export default {
    methods: {
        createNewModel() {

            this.$router.push('/addnewproject')
        }
    }
}
</script>

<style lang="stylus" scoped>
.create-card
    height 390px
    background: #FFFFFF;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.197945);
    border-radius: 10px;
    margin 15px 0
    display flex
    flex-direction row
    justify-content center
    align-items center
 
.circle-plus {
    height:6em; 
    width:6em; 
    font-size:1em;
    .circle {
        position: relative; 
        width: 4.5em; 
        height: 4.5em; 
        border-radius: 100%; 
        border: solid .8em #DFDAD7;
        .horizontal {
            position: absolute; 
            background-color: #DFDAD7; 
            width: 2.4em; 
            height: .7em; 
            top: 1.9em; 
            left: 1.05em;
        }
        .vertical {
            position: absolute; 
            background-color: #DFDAD7; 
            width: .7em; 
            height: 2.4em; 
            top: 1.05em; 
            left: 1.9em;
        }
    }
}

</style>
