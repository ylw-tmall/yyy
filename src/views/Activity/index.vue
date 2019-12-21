<template>
    <div class="activity">
        <Tabtop></Tabtop>
        <!--活动首页大banner图-->
        <ActivityBanner :activeInfo="activeInfo"></ActivityBanner>
        <ActivityNav></ActivityNav>
        <Bottom style="margin-top:170px"></Bottom>
    </div>
</template>

<script>
import Tabtop from "@/components/Tabtop"
import ActivityBanner from "@/components/ActivityBanner"
import Bottom from "@/components/Bottom"
import ActivityNav from "@/components/ActivityNav"

export default {
    data(){
        return{
            activeInfo:[],
            describe:[],
            rule:[]
        }
    },
    components:{
        Tabtop,ActivityBanner,Bottom,ActivityNav
    },
    created(){
        this.$http.get('http://10.0.1.46/laravel/public/api/activeInfo',{
            params: {  
              user_id:9,                         //参数
              token:"397F806FA81B20D92D20E86B08D43798",
            },
        }).then(res => {    
            this.activeInfo=res.data.reData;               //请求成功后的处理函数               
            this.describe=res.data.reData.describe;
             this.rule=res.data.reData.rule;
            //   console.log(this.rule);

        //  console.log(this.gift)
          }).catch(err => {                 //请求失败后的处理函数   
            console.log(err)
          })
      },
}
</script>

<style lang="scss">

</style>
