<template>
    <div>
        <Tabtop></Tabtop>
        <AwardOne></AwardOne>
        <!-- <AwardOneCenter></AwardOneCenter> -->
        <!-- <AwardTwoCenter></AwardTwoCenter> -->
        <AwardThreeCenter></AwardThreeCenter>
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

export default {
      components:{
        Tabtop,ActivityBanner,Bottom,AwardOne,AwardOneCenter,AwardTwoCenter,AwardThreeCenter
    }
}
</script>

<style>

</style>
