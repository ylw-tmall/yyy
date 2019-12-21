<template>
    <div>
        <Tabtop></Tabtop>
        <AwardOne></AwardOne>
        <!--获奖小组-->
        <!-- <AwardOneCenter></AwardOneCenter> -->
        <!-- <AwardTwoCenter></AwardTwoCenter> -->
        <!-- <AwardThreeCenter></AwardThreeCenter> -->
        <!--获奖作品-->
        <div class="works-box">
            <Good></Good>
            <Good></Good>
            <Good></Good>
            <Good></Good>
            <Good></Good>
        </div>
        <div class="works-box">
            <Good></Good>
            <Good></Good>
            <Good></Good>
            <Good></Good>
            <Good></Good>
        </div>

<div class="works-box">
            <Good></Good>
            <Good></Good>
            <Good></Good>
            <Good></Good>
            <Good></Good>
        </div>

        <Pagination style="margin-top:30px"></Pagination>
        <Bottom style="margin-top:41px"></Bottom>
        
    </div>
</template>

<script>
import Tabtop from "@/components/Tabtop"
import ActivityBanner from "@/components/ActivityBanner"
import Bottom from "@/components/Bottom"
import AwardOne from "@/components/AwardOne"
import AwardOneCenter from "@/components/AwardOneCenter"
import AwardTwoCenter from "@/components/AwardTwoCenter"
import AwardThreeCenter from "@/components/AwardThreeCenter"
import Good from "@/components/Good"
import Pagination from "@/components/Pagination"

export default {
      components:{
        Tabtop,ActivityBanner,Bottom,
        AwardOne,AwardOneCenter,AwardTwoCenter,AwardThreeCenter,
        Good,Pagination

    }
}
</script>

<style lang="scss">
    .works-box{
        width:600px;
        height:100%;
        margin:0 auto;
        margin-top:15px;
        display: flex;
    }
</style>
