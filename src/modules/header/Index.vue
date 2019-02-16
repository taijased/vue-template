<template lang="pug">
    header
        .navigation(v-if="!showProject")
            .logo 
                img(src="./assets/arq-logo.svg")
                span arq
            nav
                router-link(to="/") Проекты
                router-link(to="/metrica") Аналитика
                router-link(to="/support") Поддержка
        .navigation(v-else)
            .navigation__back(@click="$router.go(-1)")
                img(src="./assets/arrow-right.svg")
                span Назад 
        .controls
            .notification
                .notification__count 12
            .setting
                img(src="./assets/settings.svg")
            .user
                .user__logo
                .user__name Тимур Загиров
            .logout
                img(src="./assets/logout.svg")
</template>

<script>
import { mapGetters} from 'vuex';

export default {
    computed: {
        ...mapGetters({
            showProject: "projects/showProject"
        })
    }
}
</script>

<style lang="stylus" scoped>
$purple = rgba(61, 69, 238, 1)

row-center()
    display flex
    flex-direction row
    align-items center
header 
    position fixed
    top 0
    left 0
    right 0
    row-center()
    justify-content space-between
    height $header-height
    background: #FFFFFF;
    padding 0 5vw
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
    .navigation
        height @height
        row-center()
        .logo
            row-center()
            img 
                width 60px
                height 60px
            span 
                font-family: 'Avenir Medium'
                font-style: normal;
                font-weight: 500;
                line-height: normal;
                font-size: 32px;
                letter-spacing: -0.802942px;
                color: #000000;
                text-transform uppercase
                margin-left 25px
        nav
            height @height
            margin-left 100px
            row-center()
            justify-content space-between
            a
                height @height - 0.5px
                row-center()
                font-weight bold
                font-family: 'Avenir Medium'
                line-height: normal;
                font-size: 18px;
                letter-spacing: -0.617648px;
                color: #000000;
                mix-blend-mode: normal;
                opacity: 0.3
                text-decoration none
                margin-left 24px
                &.router-link-exact-active
                    color: #000000;
                    opacity: 1
                    box-shadow: 0 5px 0 -2px $purple;
        &__back 
            row-center()
            span
                margin-left 22px
                font-family: 'TT Norms Medium';
                font-style: normal;
                font-weight: 500;
                line-height: normal;
                font-size: 30px;
                letter-spacing: -0.617648px;
                color: #000000;


    .controls
        display flex
        flex-direction row
        justify-content center
        align-items center
        .notification
            width 26px
            height 26px
            border-radius 10px
            border 2px solid #000
            &__count
                display inline
                padding 0 3px
                background: #D0021B;
                border-radius: 12px;
                border 2px solid #fff
                color #fff
                font-family: 'Avenir Medium'
                line-height: normal;
                font-size: 14px;
                letter-spacing: -0.370589px;
                color: #FFFFFF;
                position: relative;
                top -10px
                left 15px
        .setting
            margin-left 40px
            margin-bottom -4px
            img 
                width 30px
                height 30px
        .user
            display flex
            flex-direction row
            justify-content center
            align-items center
            margin-left 40px
            &__logo
                background url('./assets/tim.png')
                width 60px
                height 60px
                border-radius 50%
            &__name
                margin-left 12px
                font-family: 'Avenir Medium'
                line-height: normal;
                font-size: 20px;
                letter-spacing: -0.617648px;
                color: #000000;
        .logout
            height 100%
            margin-left 40px
            margin-bottom -4px
            img 
                width 30px
                height 30px
</style>    
