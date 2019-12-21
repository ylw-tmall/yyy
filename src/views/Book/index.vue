<template>
    <div>
        <Tabtop></Tabtop>
        <List :typeList="typeList" :labelList="labelList" :area="area"></List>
        <div class="avatar">
            <img :src="advert.avatar" alt="">
        </div>
        <BookList></BookList>
        <BookList></BookList>
        <BookList></BookList>
        <BookList></BookList>
        <BookList></BookList>
        <BookList></BookList>
        <Pagination style="margin-top:19px"></Pagination>
        <Bottom></Bottom>
    </div>
</template>

<script>
import Tabtop from "@/components/Tabtop"
import List from "@/components/List"
import Bottom from "@/components/Bottom"
import Pagination from "@/components/Pagination"
import BookList from "@/components/BookList"
export default {
   components:{
       Tabtop,List,Bottom,Pagination,BookList
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
             document_type:3,                         //参数
            },
        }).then(res => { 
            this.typeList=res.data.reData.typeList;
            this.labelList=res.data.reData.labelList;
            this.area =res.data.reData.area;
            this.advert = res.data.reData.advert;
            // console.log(this.advert.avatar)
          }).catch(err => {                 //请求失败后的处理函数   
            console.log(err)
          })
      }  
  
}
</script>

<style lang="scss">
   
</style>

