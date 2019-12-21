<template>
    <div class="AwardOneCenter-box">
        <div class="AwardOneCenterImg1"><img src="/assets/pic35.png" alt=""></div>
        <div class="AwardOneCenterGood">
            <router-link to="/videoDetails">
             <div class="good" >
            <div >
                <div class="img-box" height="65px">
                        <img src="http://q2ce7dmaf.bkt.clouddn.com/vaOEPmeXH6dQ17uvf80TFsieCsCoQgR8cXCF2iB0.png"  width="100%" height="100%" alt="">
                    </div>
                     
                    <p>
                        2222
                    </p>
                    <div class="good-bottom">
                        <div class="head-img">
                            <img src="http://q2ce7dmaf.bkt.clouddn.com/vaOEPmeXH6dQ17uvf80TFsieCsCoQgR8cXCF2iB0.png" alt="">
                        </div>
                        <div class="zan" ref="zan">
                        </div>
                        <span>11</span>
                        <div class="glasses">
                        </div>
                        <span>1111</span>
                    </div>
            </div>              
        </div>
         </router-link>
        </div>
        <div class="AwardOneCenterImg1"><img src="/assets/pic36.png" alt=""></div>
        <div class="AwardOneCenterGood">
            <div class="good" >
            <div >
                <div class="img-box" height="65px">
                        <img src="http://q2ce7dmaf.bkt.clouddn.com/vaOEPmeXH6dQ17uvf80TFsieCsCoQgR8cXCF2iB0.png"  width="100%" height="100%" alt="">
                    </div>
                     
                    <p>
                        2222
                    </p>
                    <div class="good-bottom">
                        <div class="head-img">
                            <img src="http://q2ce7dmaf.bkt.clouddn.com/vaOEPmeXH6dQ17uvf80TFsieCsCoQgR8cXCF2iB0.png" alt="">
                        </div>
                        <div class="zan" ref="zan">
                        </div>
                        <span>11</span>
                        <div class="glasses">
                        </div>
                        <span>1111</span>
                    </div>
            </div>              
        </div>
        </div>
        <div class="AwardOneCenterImg1"><img src="/assets/pic38.png" alt=""></div>
        <div class="AwardOneCenterGood">
            <div class="good" >
            <div >
                <div class="img-box" height="65px">
                        <img src="http://q2ce7dmaf.bkt.clouddn.com/vaOEPmeXH6dQ17uvf80TFsieCsCoQgR8cXCF2iB0.png"  width="100%" height="100%" alt="">
                    </div>
                     
                    <p>
                        2222
                    </p>
                    <div class="good-bottom">
                        <div class="head-img">
                            <img src="http://q2ce7dmaf.bkt.clouddn.com/vaOEPmeXH6dQ17uvf80TFsieCsCoQgR8cXCF2iB0.png" alt="">
                        </div>
                        <div class="zan" ref="zan">
                        </div>
                        <span>11</span>
                        <div class="glasses">
                        </div>
                        <span>1111</span>
                    </div>
            </div>              
        </div>
        </div>
    </div>
</template>

<script>
import Good from"./Good"
export default {
    components:{
        Good
    }
}
</script>

<style lang="scss">
    // #activity{
    //     color:#FF0000;
    //     border-bottom:1px solid #FF0000;
    // }
    .AwardOneCenter-box{
        width:600px;
        height:100%;
        margin:0 auto;
        .AwardOneCenterImg1{
            width:96px;
            height:35px;
            margin-left:252px;
            margin-top:17px;
            img{
                width:100%;
                height:100%;
            }
        }
        .AwardOneCenterGood{
            display: flex;
            margin-top:15px;
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
        }
    }
</style>
