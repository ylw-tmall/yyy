<template>
    <div class="recommend">
         <div class="good-list">
            <!-- <div class="good-list-top">
                <VideoGood></VideoGood>
                <VideoGood></VideoGood>
                <VideoGood></VideoGood>
                <VideoGood></VideoGood>
                <VideoGood></VideoGood>
                
            </div>
            <div class="good-list-bottom">
                <VideoGood></VideoGood>
                <VideoGood></VideoGood>
                <VideoGood></VideoGood>
                <VideoGood></VideoGood>
                <VideoGood></VideoGood>
            </div> -->
            <div class="good" >
            <div v-for="item in recommend" :key="item.id">
                 <router-link :to="{path:'/videoDetails',query:{id:item.id}}" >
                    <div class="img-box" height="65px">
                        <img :src="item.cover_img"  width="100%" height="100%" alt="">     
                    </div>
                    </router-link>
                    <p class="time">{{item.video_time}}</p>
                    <p>
                        {{item.title}}
                    </p>
                    <div class="good-bottom">
                        <div class="head-img" >
                            <img :src="item.avatar" alt="" >
                        </div>
                        <!-- <div class="zan" ref="zan" @click="changeZan">
                        </div> -->
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
        
    </div>
</template>

<script>
import VideoGood from "./VideoGood"
export default {
    data(){
        return{
            flag:false
        }
    },
    props:["title"],
    created(){
        // console.log(this.title)
    },
    components:{
        VideoGood
    }
}
</script>

<style lang="scss" scoped>
    .recommend{
        width: 600px;
        height: 100%;
        margin: 0 auto;
        margin-top:20px;
        .good-list{
             width: 600px;
             height: 100%;
             background:rgba(250,250,250,1);
             margin-top:3px;
             overflow: hidden;
             .good{
                      width: 112px;
                    //   float: left;
                      height: 100%;
                      background: rgba(255, 255, 255,1);
                      margin-left: 5px;
                      margin-right: 2px;
                       font-size: 7.5px;
                      .img-box{
                          height: 65px;
                          border-radius: 7px;
                          img{
                              width:100%;
                              height:100%;
                              border-radius: 7px;
                          } 
                      }
                      .time{
                                width:17px;
                                font-size:6px;
                                font-family:Microsoft YaHei;
                                font-weight:400;
                                color:rgba(255,255,255,1);
                                line-height:24px;
                                margin-left: -30px;
                                margin-top: -18px;
                            }
                      p{
                        overflow: hidden;
                        text-overflow:ellipsis;
                        white-space: nowrap;
                        margin: 0;
                        line-height: 15px;
                      }
                      .good-bottom{
                          height: 14px;
                          .head-img{
                              float: left;
                              width: 14px;
                              height: 14px;
                            //   background: skyblue;  
                              
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
                          }
                          .zan{
                              width:10px;
                              height: 10px;
                              background:url("/assets/pic8.png") no-repeat;
                              background-size: 100% 100%;
                              float: left;
                              margin-left: 19px;
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
             .good-list-top{
                 height: 100%;
                  margin-top:10px;
                  line-height: 14px;
                  display: flex;
                  justify-content: space-between;
                  .good{
                      width: 112px;
                    //   float: left;
                      height: 100%;
                      margin-left: 5px;
                      margin-right: 2px;
                       font-size: 7.5px;
                      .img-box{
                          height: 65px;
                          background: orange;
                          border-radius: 7px;
                          
                      }
                      p{
                        overflow: hidden;
                        text-overflow:ellipsis;
                        white-space: nowrap;
                        margin: 0;
                        line-height: 15px;
                      }
                      .good-bottom{
                          height: 14px;
                          background: pink;
                          .head-img{
                              float: left;
                              width: 14px;
                              height: 14px;
                              background: skyblue;  
                              border-radius: 50%;
                          }
                          span{
                              float: left;
                              margin-left: 1px;
                          }
                          .zan{
                              width:10px;
                              height: 10px;
                              background:url("/assets/pic8.png") no-repeat;
                              background-size: 100% 100%;
                              float: left;
                              margin-left: 19px;
                              margin-top:2px;
                          }
                            .glasses{
                                width: 11px;
                                height: 8px;
                                background: url(/assets/pic10.png);
                                background-size: 100% 100%;
                                float: left;
                                margin-top:3px;
                                margin-left: 12px;
                            }
                      }
                  }
             }
             .good-list-bottom{
                 height: 95px;
                  background:rgba(250,250,250,1);
                 margin-top:10px;
                 .good{
                      width: 113px;
                      float: left;
                      height: 100%;
                      margin-left: 5px;
                      margin-right: 2px;
                  }
             }
        }
    }
   
</style>

