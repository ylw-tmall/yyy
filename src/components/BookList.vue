<template>
    <div class="BookList-box">
        <div class="good-box" v-for="item in recommend" :key="item.id">
            <router-link :to="{path:'/bookDetails',query:{id:item.id}}">
                <div class="good-img-box">
                    <img :src="item.cover_img" alt="" width="100%" height="100%">
                </div>
            </router-link>
            <div class="good-text-box">
                <div class="good-title">{{item.title}}</div>
                <div class="actor">作者：{{item.author}}</div>
                <div class="content">{{item.introduction}}</div>
                <div class="icons-box">
                        <div class="head-img">
                            <img :src="item.avatar" alt="" width="100%" height="100%">
                        </div>
                       <img src="/assets/pic11.png" alt="" class="zan" @click="flagZan=!flagZan" v-if="flagZan">
                        <img src="/assets/pic8.png" alt="" class="zan" @click="flagZan=!flagZan" v-else>
                        <span>{{item.like_num}}</span>
                        <div class="glasses">
                        </div>
                        <span>{{item.look_num}}</span>
                </div>
            </div>
        </div> 
    </div>
</template>
<script>
export default {
    data(){
        return {
            flagZan : false,
            recommend:[]
        }
    },
     created(){
        this.$http.get('http://10.0.1.46/laravel/public/api/homeIndex',{
            params: {  
              user_id:9,                         //参数
              token:"397F806FA81B20D92D20E86B08D43798",
              type:3,
              id:1
            },
        }).then(res => {                   //请求成功后的处理函数     
         this.recommend=res.data.reData.recommend;
          }).catch(err => {                 //请求失败后的处理函数   
            console.log(err)
          })
      },
    methods:{
        changeZan(){
            if(!this.flagZan){
                this.$refs.zan.style.background = "url('/assets/pic11.png') no-repeat"
                this.$refs.zan.style.backgroundSize="100% 100%";
                this.flagZan = !this.flagZan;
            }else{
                this.$refs.zan.style.background = "url('/assets/pic8.png') no-repeat"
                this.$refs.zan.style.backgroundSize="100% 100%";
                 this.flagZan = !this.flagZan;
            }    
        },
     
    }
}
</script>

<style lang="scss">
    .BookList-box{
        width:600px;
        height:100%;
        background:rgba(255,255,255,1);
        margin:0 auto;
        margin-top:15px;
        display: flex;
        justify-content: space-between;
        .good-box{
            width:295px;
            height:110px;
            border:1px solid rgba(238,238,238,1);
            border-radius:5px;
            .good-img-box{
                width:68px;
                height:95px;
                background: pink;
                margin-top:7px;
                margin-left:8px;
                float: left;
            }
            .good-text-box{
                width:210px;
                height:110px;
                float: right;
                .good-title{
                    font-size:8px;
                    font-family:Microsoft YaHei;
                    font-weight:400;
                    color:rgba(51,51,51,1);
                    line-height:24px;
                }
                .actor{
                    font-size:6px;
                    font-family:Microsoft YaHei;
                    font-weight:400;
                    color:rgba(102,102,102,1);
                    line-height:24px;
                }
                .content{
                    font-size:7px;
                    font-family:Microsoft YaHei;
                    font-weight:400;
                    color:rgba(51,51,51,1);
                    line-height:10px;
                     overflow:hidden;
                    text-overflow: ellipsis;
                    white-space:nowrap;

                }
                .icons-box{
                         height: 14px;
                         margin-top: 16px;
                          .head-img{
                              float: left;
                              width: 14px;
                              height: 14px; 
                              img{
                                  width:100%;
                                  height:100%;
                                  border-radius: 50%;
                              }

                          }
                          span{
                              float: left;
                              margin-left: 1px;
                              width:12px;
                            height:5px;
                            font-size:6px;
                            font-family:Microsoft YaHei;
                            font-weight:400;
                            color:rgba(102,102,102,1);
                                margin-top: 2px;
                          }
                          .zan{
                              width:10px;
                              height: 10px;
                              background:url("/assets/pic8.png") no-repeat;
                              background-size: 100% 100%;
                              float: left;
                              margin-left: 119px;
                              margin-top:2px;
                          }
                            .glasses{
                                width: 11px;
                                height: 8px;
                                background: url(/assets/pic10.png);
                                background-size: 100% 100%;
                                float: left;
                                margin-top:3.5px;
                                margin-left: 12px;
                            }
                }
            }
        }
    }
</style>
