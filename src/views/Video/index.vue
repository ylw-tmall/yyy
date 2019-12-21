<template>
    <div>
        <Tabtop></Tabtop>
        <List :typeList="typeList" :labelList="labelList" :area="area"></List>
        <!-- <BannerOne></BannerOne> -->
        <div class="avatar">
            <img :src="advert.avatar" alt="">
        </div>
        <VideosRecommend style="margin-top: 15px"></VideosRecommend>
        <!-- <VideosRecommend style="margin-top: 0"></VideosRecommend> -->
        <Pagination style="margin-top: 15px"></Pagination>
        <Bottom></Bottom>
    </div>
</template>

<script>
import Tabtop from "@/components/Tabtop"
import List from "@/components/List"
import Bottom from "@/components/Bottom"
import BannerOne from "@/components/Banner"
import VideosRecommend from "@/components/VideosRecommend"
import Pagination from "@/components/Pagination"
export default {
   components:{
       Tabtop,List,Bottom,BannerOne,VideosRecommend,Pagination
   },
   data(){
       return{
            typeList:[] ,
            labelList:[],
            area:[],
            advert:[],
            reData:[]
       }
   },
   created(){
        this.$http.get('http://10.0.1.46/laravel/public/api/configList',{
            params: {  
             document_type:1,                         //参数
            },
        }).then(res => { 
            this.typeList=res.data.reData.typeList;
            this.labelList=res.data.reData.labelList;
            this.area =res.data.reData.area;
            this.advert = res.data.reData.advert;
            
          }).catch(err => {                 //请求失败后的处理函数   
            console.log(err)
          })
      }  
}
</script>
<style lang="scss" scoped>
    .avatar{
        width:600px;
        height:72px;
        border-radius:5px;
        margin:0 auto;
         margin-top:50px;
        img{
            width:100%;
            height:100%;
        }
    }
</style>
