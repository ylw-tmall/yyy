<template>

  <div class="img-good-list">
      <div  v-for="item in recommend" :key="item.id">
           <router-link  :to="{path:'/imgDetails',query:{id:item.id}}">
                    <div class="img-box">
                        <img :src="item.cover_img"  width="100%" height="100%" alt="">
                    </div>
        </router-link>
                    <div class="good-bottom">
                        <div class="head-img">
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
    
</template>

<script>
export default {
    data(){
        return {
            flagZan : false,
            flagGlasses:false,
            recommend:[]

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

<style lang="scss" scoped>
.img-good-list{
                      width: 112px;
                    //   float: left;
                      height: 100%;
                      background: rgb(255, 255, 255);
                      margin-right: 2px;
                       font-size: 7.5px;
                      .img-box{
                          height: 162px;
                          border-radius: 7px;
                          img{
                              border-radius:5px;
                          }
                          
                      }
                      .good-bottom{
                          height: 14px;
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
</style>
