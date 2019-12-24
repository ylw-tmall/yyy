<template>
    <div class="Box">
        <div class="tj-box" >
            <div class="left"></div>
            <div class="center">
                <span style="width:48px">{{title}}</span>
            </div>
            <div class="right">
                <a href="">更多 ></a>
            </div>
        </div>
        <div class="jincaiBox">
            <div class="jingcai"  v-for="item in wonderful" :key="item.id">
        <div class="jingcai-top">
            <div class="top-left">
                <img :src="item.cover_img" alt="" width="100%" height="100%">
            </div>
            <div class="top-right">
                <div class="title">
                    <span>{{item.title}}</span>
                </div>
                <div class="text">
                    <span>{{item.introduction}}</span>
                </div>
            </div>
        </div>
        <div class="good-bottom">
            <div class="head-img">
                <img :src="item.avatar" alt="">
            </div>
            <!-- <div class="zan" ref="zan" @click="changeZan">
            </div> -->
            <img src="/assets/pic11.png" alt="" class="zan" @click="flagZan=!flagZan" v-if="flagZan">
            <img src="/assets/pic8.png" alt="" class="zan" @click="flagZan=!flagZan" v-else>
            <span>{{item.like_num}}</span>
            <div class="glasses"></div>
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
        }
    },
    props:["wonderful","title"],
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
.Box{
    width:600px;
    margin:0 auto;
    .tj-box{
             width: 600px;
            height: 40.5px;
            background:rgba(250,250,250,1);
            margin-top: 15px;    
         
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
        .jincaiBox{
            width: 600px;
             height:100%;
             background:rgba(250,250,250,1);
             margin-top:3px;
            flex-wrap: wrap;
            display: flex; 
            margin: 0 auto;
            justify-content: space-between;
            .jingcai{
          width:112px;
        margin-top:15px;
        
        .jingcai-top{
            width:112px;
            height:55px;
            background:rgba(255,255,255,1);
            border-radius:4px;
            .top-left{
                width:37px;
                height:49px;
                // background:pink;
                margin:2.5px 3px 3px 4px;
                float: left;
                img{
                    width:100%;
                    height:100%;
                }
            }
            .top-right{
                width:68px;
                height:49px;
                // background:greenyellow;
                float: right;
                margin-top:2.5px;
                .title{
                    width:34px;
                    height:14px;
                    font-size:8px;
                    font-family:Microsoft YaHei;
                    font-weight:400;
                    color:rgba(0,0,0,1);
                    margin-left:2px;
                      overflow:hidden;
                    text-overflow: ellipsis;
                    white-space:nowrap;
                  
                }
                .text{
                    width:63px;
                    height:33px;
                    font-size:6px;
                    font-family:Microsoft YaHei;
                    font-weight:400;
                    color:rgba(102,102,102,1);
                    line-height:9px;
                    margin-left:2px;
                    margin-top:4.5px;
                    overflow:hidden;
                    text-overflow: ellipsis;
                    white-space:nowrap;

                    
                }
            }
        }
       .good-bottom{
            width:112px;
            height: 15px;
            // background: pink;
            .head-img{
                float: left;
                width: 14px;
                height: 14px; 
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
                font-size:6px;
                font-family:Microsoft YaHei;
                font-weight:400;
                color:rgba(153,153,153,1);
                margin-top:4px;
            }
            .zan{
                width:10px;
                height: 10px;
                background:url("/assets/pic8.png") no-repeat;
                background-size: 100% 100%;
                float: left;
                margin-left: 19px;
                margin-top:4px;
            }
            .glasses{
                width: 11px;
                height: 8px;
                background: url(/assets/pic10.png);
                background-size: 100% 100%;
                float: left;
                margin-top:5px;
                margin-left: 12px;
            }
        }
    }
        }
    
}  
</style>
