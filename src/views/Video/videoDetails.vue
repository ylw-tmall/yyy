<template>
    <div class="videoDetails-box">
        <Tabtop></Tabtop>
        <VideoDetailsContent :gift="gift" :recommend="recommend"></VideoDetailsContent>
        <Bottom style="margin-top:1024px"></Bottom>
    </div>
</template>

<script>
import Tabtop from "@/components/Tabtop"
import Bottom from "@/components/Bottom"
import VideoDetailsContent from "@/components/VideoDetailsContent"
export default {
    components:{
        Tabtop,VideoDetailsContent,Bottom
    },
    data(){
        return{  
            gift:[],
            recommend:[]
        }
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
         this.gift=res.data.reData.gift;
         this.recommend = res.data.reData.recommend;
        //  console.log(this.gift)
          }).catch(err => {                 //请求失败后的处理函数   
            console.log(err)
          })
        this.id = this.recommend.id;
      },
}
</script>

<style lang="scss">
    .videoDetails-box{
        width:100%;
        height:100%;
        #video{
            color:#FF0000;
                border-bottom:1px solid #FF0000;
        }
    }
</style>
