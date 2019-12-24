<template>
    <div class="home">
            <HomeTabtop></HomeTabtop>
            <div v-if="mainBanner.length != 0">
                <Banner :mainBanner="mainBanner"></Banner>
            </div> 
            <div v-if="mainBanner.length != 0"> 
                <Recommend :title="title[0]" :recommend="recommend"></Recommend>
            </div> 
            <div v-if="mainBanner.length != 0">
                <BannerOne :adverBanner="adverBanner[0]"></BannerOne>
            </div>  
            <div v-if="mainBanner.length != 0"> 
                <New :title="title[1]" :zuixin="zuixin" ></New>
            </div>
            <div v-if="mainBanner.length != 0">
                <BannerOne :adverBanner="adverBanner[1]"></BannerOne>
            </div>  
            <div v-if="mainBanner.length != 0"> 
                <Love :title="title[2]" :like="like"></Love>
             </div>
             <div v-if="mainBanner.length != 0">
                <BannerOne :adverBanner="adverBanner[2]"></BannerOne>
            </div> 
             <div v-if="mainBanner.length != 0">
            <Jingcai :title="title[3]" :wonderful="wonderful"></Jingcai>
            </div> 
            <BannerOne :adverBanner="adverBanner[3]"></BannerOne>
            <Bottom></Bottom>     
    </div> 
</template>
<script>
import Banner from "@/components/IndexBanner"
import Recommend from "@/components/Recommend"
import New from "@/components/New"
import Love from "@/components/Love"
import Jingcai from "@/components/Jingcai"
import BannerOne from "@/components/Banner"
import Bottom from "@/components/Bottom"
import HomeTabtop from "@/components/HomeTabtop"
import Xiaoshuo from "@/components/Xiaoshuo"
import axios from 'axios'
export default {
    data(){
        return {
            title:["推荐","最新","猜你喜欢","精彩"],
            mainBanner:[],
            adverBanner:[],
            recommend:[],
            zuixin:[],
            like:[],
            wonderful:[]   
        }
        },  
    components:{
        Banner,Recommend,BannerOne,Bottom,HomeTabtop,Xiaoshuo,New,Love,Jingcai
    },
    created(){
        this.$http.get('http://10.0.1.46/laravel/public/api/homeIndex',{
            params: {  
              user_id:9,                         //参数
              token:"397F806FA81B20D92D20E86B08D43798"
            },
        }).then(res => {                   //请求成功后的处理函数     
            this.mainBanner=res.data.reData.banner;
            this.adverBanner=res.data.reData.advert;
            this.recommend=res.data.reData.recommend;
            this.zuixin=res.data.reData.new;
             this.like=res.data.reData.like;
             this.wonderful=res.data.reData.wonderful;
            console.log(this.new)
          }).catch(err => {                 //请求失败后的处理函数   
            console.log(err)
          })
      }
}
</script>
<style lang="scss" scoped>
    .home{
        height:100%;
        background:#fff;
        .header-box{
            width: 960px;
            height:33px;
            background:rgba(242,242,242,1);
            margin:0 auto;
            .header{
                width:600px;
                height:33px;
                margin:0 auto;
                .logo-box{
                    width:70.5px;
                    height:26px;
                    background:yellow;
                    position: relative;
                    top:3.5px;
                    left:0;
                    float: left;
                }
                .nav-box{
                    height:33px;
                    float: left;
                    a{
                        display: block;
                        height: 33px;
                    margin-left:28.5px;
                    color:#000;
                    font-size:8px;
                    text-decoration:none;
                    font-size:8px;
                    font-family:Microsoft YaHei;
                    font-weight:400;
                    color:rgba(0,0,0,1);
                    line-height:33px;
                    float: left;
                    }
                    .active{
                        color:#FF0000;
                        border-bottom:1px solid #FF0000;
                    }
                }
                .input-box{
                    width:165.5px;
                    height:33px;
                    float: left;
                    margin-left:31px;
                
                    input{
                        width:194px;
                        height:22.5px;
                        background:rgba(246,246,246,1);
                        border:1px solid rgba(255,0,0,1);
                        border-radius:3px;
                        margin-top:2.5px;
                    }
                      .test1::-webkit-input-placeholder{
                            font-size:7px;
                            line-height:24px;
                            font-family:Microsoft YaHei;
                            font-weight:400;
                            color:rgba(153,153,153,1);
                        }
                }
                .btn-box{
                    width:53.5px;
                    height:33px;
                    float: right;
                    a{
                            font-size:7px;
                            font-family:Microsoft YaHei;
                            font-weight:400;
                            color:rgba(0,0,0,1);
                            line-height:33px;
                            text-decoration: none;
                    }
                }
            
            }
        }
        .banner-box{
            width:600px;
            height:175px;
            // background:url("/assets/pic16.png") no-repeat 100% 100%;
            margin:0 auto;
            position: relative;
            top:15px;
            left:0;
        }
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
                top: 27px;
                left: 0;
            } 
            .center{
                width:21.5px;
                height:10.5px;
                span{
                    display: block;
                    width:41.5px;
                    height:10.5px;
                    font-size:10px;
                    font-family:Microsoft YaHei;
                    font-weight:400;
                    color:rgba(0,0,0,1);
                    line-height:40.5px;
                    margin-left:4.5px;
                }
            }
            .right{
                
            }
        }
    }
</style>
