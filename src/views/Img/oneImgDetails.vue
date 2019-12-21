<template>
    <div class="OneImgDetails-box">
        <Tabtop></Tabtop>
        <div class="OneImgDetailsContent">
            <div class="OneImgDetailsContent-title">
                <span>好看图片美景尽收眼底</span>
            </div>
            <div class="OneImgDetailsContent-center">
                <div class="imgBox">
                    <img src="/assets/pic9.png" alt="">
                </div>
                <span>此相册需要xxYC币才能浏览哦～</span>
                <div class="look-btn">
                    立即观看
                </div>
            </div>
        </div>
        <Bottom style="margin-top:62px"></Bottom>
    </div>
</template>

<script>
import Tabtop from "@/components/Tabtop"
import Bottom from "@/components/Bottom"
export default {
    components:{
        Tabtop,Bottom
    }
}
</script>

<style lang="scss">
    .OneImgDetails-box{
        width:100%;
        height:100%;
        #img{
            color:#FF0000;
                border-bottom:1px solid #FF0000;
        }
        .OneImgDetailsContent{
            width:600px;
            height:293px;
            background:rgba(255,255,255,1);
            border-radius:3px;
            margin:0 auto;
            margin-top:15px;
            .OneImgDetailsContent-title{
                width:600px;
                height:32.5px;
                border-bottom:1px solid rgba(238,238,238,1);
                span{
                    width:84px;
                    height:9px;
                    font-size:8px;
                    font-family:Microsoft YaHei;
                    font-weight:400;
                    color:rgba(0,0,0,1);
                    line-height:24px;
                }

            }
            .OneImgDetailsContent-center{
                width:137px;
                height:107px;
                background:rgba(255,255,255,1);
                margin:58px auto;
                .imgBox{
                    width:137px;
                    height:71px;
                    img{
                        width:100%;
                        height: 100%;
                    }
                }
                span{
                    width:104px;
                    height:7px;
                    font-size:7px;
                    font-family:Microsoft YaHei;
                    font-weight:400;
                    color:rgba(102,102,102,1);
                    line-height:24px;
                    margin-left: 14px;
                }
            .look-btn{
                width:44px;
                height:14px;
                background:rgba(255,0,0,1);
                border-radius:3px;
                font-size:7px;
                font-family:Microsoft YaHei;
                font-weight:400;
                color:rgba(255,255,255,1);
                line-height:14px;
                text-align: center;
                margin-top: 15px;
                margin-left: 46px;
            }
            }
            
        }
    }
</style>
