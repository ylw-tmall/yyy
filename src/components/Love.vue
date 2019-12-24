<template>
    <div class="recommend">
        <div class="tj-box" >
                <div class="left"></div>
                <div class="center">
                    <span style="width:48px">{{title}}</span>
                </div>
                <div class="right">
                    <a href="">更多 ></a>
                </div>
            </div>
        <div class="good-list">
            <div class="good-list-top"  v-for="item in like" :key="item.id">
                <div class="img-box" height="65px">
                        <img :src="item.cover_img"  width="100%" height="100%" alt="">
                    </div>                     
                    <p>
                        {{item.title}}
                    </p>
                    <div class="good-bottom">
                        <div class="head-img">
                            <img :src="item.avatar" alt="">
                        </div>
                        <!-- <div class="zan" ref="zan" @click="changeZan"> -->
                            <img src="/assets/pic11.png" alt="" class="zan" @click="flagZan=!flagZan" v-if="flagZan">
                            <img src="/assets/pic8.png" alt="" class="zan" @click="flagZan=!flagZan" v-else>
                        <!-- </div> -->
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
        return{
            flagZan:false,     
        }
    },
    props:["title","recommend","like"],
    components:{
        
    },
    created(){
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

<style lang="scss" scoped>
    .recommend{
        width: 600px;
        height: 100%;
        margin: 0 auto;
        margin-top:20px;
       .tj-box{
             width: 600px;
            height: 40.5px;
            background:rgba(250,250,250,1);
            margin-top: 15px;    
            margin:0 auto; 
            .left{
                width:1.5px;
                height:11px;
                 background:#FF0000;
                position: relative;
                top: 18px;
                left: 0;
            } 
            .center{
                width:21.5px;
                height:10.5px;
                span{
                    display: block;
                    height:10.5px;
                    font-size:10px;
                    font-family:Microsoft YaHei;
                    font-weight:400;
                    color:rgba(0,0,0,1);
                    line-height:24px;
                    margin-left:4.5px;
                }
            }
            .right{
                float:right;
              
                a{
                    text-decoration: none;
                    font-size:7px;
                    font-family:Microsoft YaHei;
                    font-weight:400;
                    color:rgba(102,102,102,1);
                    line-height:24px;
                }
            }
            
        }
        .good-list{
             width: 600px;
             height:100%;
             background:rgba(250,250,250,1);
             margin-top:3px;
            flex-wrap: wrap;
            display: flex;  
          .good-list-top{
                 width: 112px;
                 height: 100%;
                background: rgba(255, 255, 255,1);
                margin-left: 5px;
                margin-right: 2px;
                font-size: 7.5px;
                 margin-top:15px;          
                 .good{
                      width: 112px;
                      height: 100%;
                      margin-left: 5px;
                      margin-right: 2px;
                       font-size: 7.5px;
                      .img-box{
                          width:112px;
                          height: 65px;
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
                        //   background: pink;
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
                  .img-box{
                          height: 65px;
                          border-radius: 7px;
                          img{
                              width:100%;
                              height:100%;
                              border-radius: 7px;
                          }
                          
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
                              border-radius: 50%;
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
                            //   background:url("/assets/pic8.png") no-repeat;
                            //   background-size: 100% 100%;
                              float: left;
                              margin-left: 19px;
                              margin-top:2px;
                              display: block;
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
             .good-list-bottom{
                 height: 95px;
                  background:rgba(250,250,250,1);
                 margin-top:10px;
                 .good{
                      width: 113px;
                      float: left;
                      height: 100%;
                    //   background: green;
                      margin-left: 5px;
                      margin-right: 2px;
                  }
             }
        }
    }
   
</style>
