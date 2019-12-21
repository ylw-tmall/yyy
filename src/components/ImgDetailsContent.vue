<template>
    <div class="ImgDetailsContent-box">
        <div class="ImgContent-header">
            <div class="header-left">
                <div class="left-title">
                    好看图片美景尽收眼底
                </div>
                <div class="left-btn-box">
                    <div class="left-btn1"><span>网红写真</span></div>
                    <div class="left-btn2"><span>校图美景</span></div>
                </div>
                
            </div>
            <div class="header-right">
                <img src="/assets/pic17.png" alt="">
                <span>收藏</span>
                <img src="/assets/pic8.png" alt="">
                <span>点赞</span>
                <img src="/assets/pic22.png" alt="">
                <span>下载</span>
            </div>
        </div>
        <div class="ImgContent-img">
            <ImgDetailsContentGood :recommend="recommend"></ImgDetailsContentGood>
            <ImgDetailsContentGood :recommend="recommend"></ImgDetailsContentGood>
            <ImgDetailsContentGood :recommend="recommend"></ImgDetailsContentGood>
            <ImgDetailsContentGood :recommend="recommend"></ImgDetailsContentGood>
            <ImgDetailsContentGood :recommend="recommend"></ImgDetailsContentGood>
        </div>
    </div>
</template>

<script>
import ImgDetailsContentGood from "@/components/ImgDetailsContentGood" 
export default {
    data(){
        return{
            recommend:[]
        }
    },
    components:{
        ImgDetailsContentGood
    
    },
    created(){
        this.$http.get('http://10.0.1.46/laravel/public/api/videoInfo',{
            params: {  
              user_id:9,                         //参数
              token:"397F806FA81B20D92D20E86B08D43798",
              type:1,
              id:1
            },
        }).then(res => {                   //请求成功后的处理函数     
         this.recommend=res.data.reData.recommend;
         console.log(this.recommend)
     
          }).catch(err => {                 //请求失败后的处理函数   
            console.log(err)
          })
      },
}
</script>

<style lang="scss">
    .ImgDetailsContent-box{
        width:600px;
        height:100%;
        background:rgba(250,250,250,1);
        margin: 0 auto;
        .ImgContent-header{
            width:600px;
            height:43px;
            background:rgba(255,255,255,1);

            border-radius:3px;
            margin-top:15px;
            .header-left{
                width:300px;
                height:43px;
                float: left;
                .left-title{
                    width:84px;
                    height:9px;
                    font-size:8px;
                    font-family:Microsoft YaHei;
                    font-weight:400;
                    color:rgba(0,0,0,1);
                    line-height:24px;
                }
                .left-btn-box{
                    display: flex;
                    margin-top:14px;
                    .left-btn1,.left-btn2{
                    width:37px;
                    height:11px;
                    background:rgba(255,0,0,1);
                    opacity:0.5;
                    border-radius:2px;
                    margin-top:5px;
                      text-align: center;
                    span{
                        width:25px;
                        height:6px;
                        font-size:6px;
                        font-family:Microsoft YaHei;
                        font-weight:400;
                        color:rgba(255,255,255,1);
                        line-height:24px;
                        position: relative;
                        top:-8px;
                        left:0;
                      
                    }
                }
                .left-btn2{
                       margin-left:5px;
                }
                }
                
            }
            .header-right{
                width:144px;
                height:25px;
                float: left;
                margin-top: 18px;
                margin-left: 152px;
                img{
                    width:11px;
                    height:11px;
                    margin-left:16px;
                }
                span{
                    font-size:7px;
                    font-family:Microsoft YaHei;
                    font-weight:400;
                    color:rgba(153,153,153,1);
                    line-height:24px;
                    margin-left:3px;
                }
            }
        }
        .ImgContent-img{
            width:600px;
            height:100%;
            background:rgb(255, 255, 255);
            display: flex;
            justify-content: space-between;
            margin-top:10px;
           

        }
    }
</style>
