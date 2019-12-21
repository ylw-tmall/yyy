<template>
    <div class="activityBox">
        <div class="activityNavTopBox">
            <div class="activityNavTopBoxLeft">
                <div class="title"  
                    v-for="activity in activitys"
                    :key="activity.id"
                    :class="{active:type===activity.type}"
                    @click="type=activity.type">
                    {{activity.title}}   
                </div>
            </div>
            <div class="btn">
                <button  @click="baoming">我要报名</button>
            </div>
        </div>
        <div class="activityNavBottomBox">
            <Jieshao v-if="type=='jieshao'" :activeInfo="activeInfo"></Jieshao>
            <guize v-if="type=='guize'" :activeInfo="activeInfo"></guize>
            <AwardOneCenter v-if="type=='huojiang'"></AwardOneCenter>
            <Cansai v-if="type=='cansai'"></Cansai>
        </div>
        <UploadFile v-show="isShow" :isShow="isShow"></UploadFile>
        <Pagination  v-if="type=='cansai'" style="margin-bottom:15px"></Pagination>
    </div> 
</template>
<script>
    import Pagination from "@/components/Pagination"
    import Jieshao from "@/components/Jieshao"
    import Guize from "@/components/Guize"
    import AwardOneCenter from "@/components/AwardOneCenter"
    import Cansai from "@/components/Cansai"
    import UploadFile from "@/components/UploadFile"
    export default {
        data(){
            return{
                type:"jieshao",
                isShow:false,
                activitys:[
                    {id:1,title:"活动介绍",type:"jieshao"},
                    {id:2,title:"活动规则",type:"guize"},
                    {id:3,title:"获奖作品",type:"huojiang"},
                    {id:4,title:"参赛作品",type:"cansai"},
                ],
                activeInfo:[]
            }
        },
    components:{
        Jieshao,Guize,AwardOneCenter,Cansai,Pagination,UploadFile
    },
    created(){
        this.$http.get('http://10.0.1.46/laravel/public/api/activeInfo',{
            params: {  
              user_id:9,                         //参数
              token:"397F806FA81B20D92D20E86B08D43798",
            },
        }).then(res => { 
            this.activeInfo=res.data.reData;
            // console.log(this.activeInfo)
          }).catch(err => {                 //请求失败后的处理函数   
            console.log(err)
          })
      },
      methods:{
          baoming(){
             this.isShow = true;
          }
      }
}
</script>
<style lang="scss"  scoped>
.activityBox{
    width:600px;
    height:100%;
    margin:0 auto;
    background:rgba(0,0,0,.6);
    .activityNavTopBox{
        width:600px;
        height:45px;
        margin-top:15px;
        background:rgba(255,255,255,1);
        border-bottom: 1px solid rgba(238,238,238,1);
        .activityNavTopBoxLeft{
            float: left;
            width:500px;
            .title{
            width:40px;
            height:10px;
            font-size:10px;
            font-family:Microsoft YaHei;
            font-weight:400;
            color:rgba(51,51,51,1);
            float: left;
            margin-left:50px;
            line-height: 45px;
            cursor:pointer;     
        }
        .active{
            color:rgba(255,0,0,1);
        }
        } 
        .btn{
            float: right;
            width:92px;
            height:45px;
            background:rgba(255,0,0,1);
            float: right;
            line-height: 45px;
            text-align: center;
             button{
                font-size:11px;
                font-family:Adobe Heiti Std;
                font-weight:normal;
                color:rgba(255,255,255,1);
                border:none;
                background: none;
                outline:none;
                
            }
        }    
    }
    .activityNavBottomBox{
        width:600px;
        height:100%;
        background:rgba(255,255,255,1);
    }
}    
</style>
