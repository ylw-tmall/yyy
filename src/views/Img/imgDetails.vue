<template>
    <div class="imgDetails-box">
        <Tabtop></Tabtop>
        <ImgDetailsContent></ImgDetailsContent>
        <Bottom style="margin-top:39px"></Bottom>
    </div>
</template>

<script>
import Tabtop from "@/components/Tabtop"
import ImgDetailsContent from "@/components/ImgDetailsContent"
import Bottom from "@/components/Bottom"
export default {
    components:{
        Tabtop,Bottom,ImgDetailsContent
    },
    created(){
        this.id = this.recommend.id;
    }
}
</script>

<style lang="scss">
    .imgDetails-box{
        width:100%;
        height:100%;
        #img{
            color:#FF0000;
                border-bottom:1px solid #FF0000;
        }
    }
</style>
