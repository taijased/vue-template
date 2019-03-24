<template lang="pug">
    .project-card(@click="openProject")
        .project-card__img
            img(:src="data.render")
        .project-card-panel
            .project-card-panel__title {{data.aliase}}
            .project-card-panel__controls
                .status.published Опубликован
                img(src="../assets/trash.svg", alt="trash")
</template>

<script>
export default {
    props: {
        data: Object
    },
    methods: {
        openProject () {
            this.$router.push('/project/' + this.data.aliase)
        }
    }
}
</script>

<style lang="stylus" scoped>
.project-card
    // width 350px
    background: #FFFFFF;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.197945);
    border-radius: 10px;
    margin 15px 0
    &__img
        width @width 
        height 250px
    .project-card-panel
        height 100px
        background: #F0F0F0;
        display flex
        flex-direction column
        justify-content space-between
        padding 20px 25px
        &__title
            font-family: 'TT Norms Medium';
            text-align left
            line-height: normal;
            font-size: 24px;
            letter-spacing: -0.617648px;

            color: #000000;
        &__controls
            display flex
            flex-direction row
            justify-content space-between
            align-items center
            .status
                font-family: 'TT Norms Medium';
                line-height: normal;
                font-size: 18px;
                letter-spacing: -0.494118px;
            .unpublished
                color: #D0021B;
            .published
                color: #417505;
            .moderation
                color: #F5A623;
</style>
