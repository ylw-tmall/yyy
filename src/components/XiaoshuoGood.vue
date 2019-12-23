<template>
<div >
    <div class="XiaoshuoGood"  v-for="item in wonderful" :key="item.id">
        
        <div class="XiaoshuoGood-top">
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
                        <div class="glasses">
                        </div>
                        <span>{{item.look_num}}</span>
                    </div>
                </div>
    </div>
</template>

<script>
export default {
      data(){
        return {
            flagZan : false,
            wonderful:[],
            type:3
        }
    },
    created(){
        this.$http.get('http://10.0.1.46/laravel/public/api/homeIndex',{
            params: {  
              user_id:9,                         //参数
              token:"397F806FA81B20D92D20E86B08D43798"
            },
        }).then(res => {         
                   //请求成功后的处理函数     
            this.wonderful=res.data.reData.wonderful;
            // console.log(this.wonderful)
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
    .XiaoshuoGood{
        margin-top:15px;
        .XiaoshuoGood-top{
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
                    height:9px;
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
</style>
