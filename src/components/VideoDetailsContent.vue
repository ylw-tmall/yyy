<template>
    <div class="VideoDetailsContent-box">
        <div class="VideoDetailsContent-left-box">
            <div class="bigVideo">
               <video src="http://q2ce7dmaf.bkt.clouddn.com/WJuKDTNEzfqRVEn0UMNeMkEGqbgDbwSSCVYQZx4j.mp4" width="100%" height="100%"></video>
            </div>
            <div class="bigVideo-title">
                <div class="title-left">
                    <div class="left-top">
                        <span>全世界最好看的自然景观</span>
                    </div>
                    <div class="left-bottom">
                        <label  class="lable" for="">分类：</label>
                        <span>自然景观</span>
                        <label  class="lable" for="">标签：</label>
                        <span>风景</span>
                        <label  class="lable" for="">区域：</label>
                        <span>山东</span>
                    </div>
                </div>
                <div class="title-right">
                    <img src="/assets/pic17.png" alt="">
                    <span>收藏</span>
                    <img src="/assets/pic8.png" alt="">
                    <span>点赞</span>
                    <img src="/assets/pic8.png" alt="">
                    <span>分享</span>
                    <img src="/assets/pic21.png" alt="">
                    <span>下载</span>
                    <img src="/assets/pic23.png" alt="">
                    <span>举报</span>
                </div>
            </div> 
            <div class="videoDs-img">
                <!-- <img src="/assets/pic1.png" width="100%" height="100%" alt=""> -->
                <div class="hs-box" v-for="item in gift" :key="item.id">
                    <div class="hs">
                        <div class="img-box">
                            <img src="/assets/pic4.png" alt="">
                            <!-- <img :src="item.img_url" alt=""> -->
                        </div>
                        <span>{{item.name}}</span>
                    </div>
                    <div class="btn">
                        <button>打赏</button>
                        <span>{{item.price}}YC币</span>
                    </div>
                </div>
            </div>
            <Comment></Comment>
        </div>
        <!-- <div class="VideoDetailsContent-right-box">
            <div>
                <div class="tjVideo">
                <span>推荐视频</span>
            </div>
            <div class="videoBox"> 
                <div class="video"></div>
                <div class="video-text">强烈推荐这款真的好好用，我...</div>
            </div>
            <div class="videoBox"> 
                <div class="video"></div>
                <div class="video-text">强烈推荐这款真的好好用，我...</div>
            </div>
            <div class="videoBox"> 
                <div class="video"></div>
                <div class="video-text">强烈推荐这款真的好好用，我...</div>
            </div>
            <div class="videoBox"> 
                <div class="video"></div>
                <div class="video-text">强烈推荐这款真的好好用，我...</div>
            </div>
            <div class="videoBox"> 
                <div class="video"></div>
                <div class="video-text">强烈推荐这款真的好好用，我...</div>
            </div>
            </div>
            
        </div> -->
    </div>
</template>

<script>
import Comment from"@/components/Comment"
export default {
    components:{
        Comment
    },
    props:["gift","recommend"],
    created(){
        // console.log(this.gift)
    }
}
</script>

<style lang="scss" scoped>
    .VideoDetailsContent-box{
        width:600px;
        height:100%;
        margin:0 auto;
        background:rgba(250,250,250,1);
        margin-top:15px;
        .VideoDetailsContent-left-box{
            width:478px;
            height:1009px;
            float: left;
            .bigVideo{
                width:478px;
                height:256px;
                border-radius:5px;
            }
            .bigVideo-title{
                width:478px;
                height:48px;
                .title-left{
                    width:239px;
                    height:32px;
                    float: left;
                    .left-top{
                        margin-left: 7px;
                        span{
                            width:93px;
                            height:9px;
                            font-size:8px;
                            font-family:Microsoft YaHei;
                            font-weight:400;
                            color:rgba(0,0,0,1);
                            line-height:24px;
                        }
                    }
                    .left-bottom{
                        width:239px;
                        height:10px;
                        margin-top:10px;
                        .lable{
                            width:19px;
                            height:8px;
                            font-size:7px;
                            font-family:Microsoft YaHei;
                            font-weight:400;
                            color:rgba(153,153,153,1);
                            line-height:24px;
                            position: relative;
                            top: -14px;
                            left: 0;
                            margin-left: 7px;
                        }
                        span{
                            width:29px;
                            height:7px;
                            font-size:7px;
                            font-family:Microsoft YaHei;
                            font-weight:400;
                            color:rgba(51,51,51,1);
                            line-height:24px;
                            position: relative;
                            top: -14px;
                            left: 0;
                        }
                    }

                }
                .title-right{
                    float: right;
                    margin-top: 20px;
                    img{
                    width:11px;
                    height:11px;
                    margin-left:16px;
                }
                span{
                    font-size:7px;
                    font-family:Microsoft YaHei;
                    font-weight:400;
                    color:rgba(153,153,153,1);
                    line-height:24px;
                    margin-left:3px;
                }
                }
            }
            .videoDs-img{
                width:478px;
                height:75px;
                display: flex;
                justify-content: space-around;
                img{
                    width:40px;

                }
                span{
                    font-size:7px;
                    font-family:Microsoft YaHei;
                    font-weight:400;
                    color:rgba(102,102,102,1);
                    line-height:24px;
                }
                .hs-box{
                    .hs{
                        float: left;
                        
                        span{
                            margin-left:12px;
                        }
                    }
                    .btn{
                        float: right;
                        margin-left:10px;
                         span{
                            margin-left:-28px;
                            position: relative;
                            top: 16px;
                            left:-6px;
                            font-size:6px;
                            font-family:Microsoft YaHei;
                            font-weight:400;
                            color:rgba(102,102,102,1);
                            line-height:24px;
                        }
                        button{
                            width:31px;
                            height:12px;
                            background:rgba(255,0,0,1);
                            border-radius:6px;
                            font-size:7px;
                            font-family:Microsoft YaHei;
                            font-weight:400;
                            color:rgba(255,255,255,1);
                            line-height:10px;
                            border:none;
                                margin-top: 20px;

                       
                    }
                    }
                    
                }
                
               
                // img{
                //     width:100%;
                //     height:100%;
                // }
            }
        }
        .VideoDetailsContent-right-box{
            width:122px;
            height:1009px;

            float: right;
            .tjVideo{
                width:33px;
                height:8px;
                font-size:8px;
                font-family:Microsoft YaHei;
                font-weight:400;
                color:rgba(51,51,51,1);
                line-height:20px;
                margin-left:10px;
            }
            .videoBox{
                width:122px;
                height:80px;

                margin-top:13px;
                .video{
                    width:112px;
                    height:65px;
                    border-radius:4px;
                    margin-left:10px;
                    // background:pink;
                }
                .video-text{

                    height:7px;
                    font-size:6px;
                    font-family:Microsoft YaHei;
                    font-weight:400;
                    color:rgba(0,0,0,1);
                    margin-left:10px;
                    margin-top:5px;
                }
            }
        }
    }
</style>
