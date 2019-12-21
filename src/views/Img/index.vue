<template>
    <div>
        <Tabtop></Tabtop>
        <List :typeList="typeList" :labelList="labelList" :area="area"></List>
          <div class="avatar">
            <img :src="advert.avatar" alt="">
        </div>
        <ImgList></ImgList>
        <ImgList></ImgList>
        <!-- <ImgList></ImgList>
        <ImgList></ImgList>
        <ImgList></ImgList> -->
        <Pagination style="margin-top:20px"></Pagination>
        <!-- <ImgRecommend style="margin-top: 15px; height:208px"></ImgRecommend>
        <ImgRecommend style="margin-top: 142px"></ImgRecommend> -->
        <Bottom ></Bottom>
    </div>
</template>

<script>
import Tabtop from "@/components/Tabtop"
import List from "@/components/List"
import BannerOne from "@/components/Banner"
import ImgList from "@/components/ImgList"
import ImgRecommend from "@/components/ImgRecommend"
import Bottom from "@/components/Bottom"
import Pagination from "@/components/Pagination"
export default {
   components:{
       Tabtop,List,BannerOne,ImgRecommend,Bottom,ImgList,Pagination
   },
   data(){
       return{
           recommend:[],
            typeList:[] ,
            labelList:[],
            area:[],
            advert:[],
            reData:[]
       }
   },
   created(){
        this.$http.get('http://10.0.1.46/laravel/public/api/homeIndex',{
            params: {  
              user_id:9,                         //参数
              token:"397F806FA81B20D92D20E86B08D43798",
              type:2,
              id:1
            },
        }).then(res => {                   //请求成功后的处理函数     
         this.recommend=res.data.reData.recommend;
          }).catch(err => {                 //请求失败后的处理函数   
            console.log(err)
          }),
          this.$http.get('http://10.0.1.46/laravel/public/api/configList',{
            params: {  
             document_type:2,                         //参数
            },
        }).then(res => {   
            this.typeList=res.data.reData.typeList;
            this.labelList=res.data.reData.labelList;
            this.area =res.data.reData.area;
            this.advert = res.data.reData.advert;
          }).catch(err => {                 //请求失败后的处理函数   
            console.log(err)
          })
      },
}
</script>

<style lang="scss">
    .avatar{
        width:600px;
        height:72px;
        border-radius:5px;
        background:rgb(255, 255, 255);
        margin:0 auto;
         margin-top:50px;
        img{
            width:100%;
            height:100%;
        }
    }
</style>
