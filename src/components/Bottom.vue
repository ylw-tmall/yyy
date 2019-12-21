<template>
    <div class="bottom-box">
      <div class="bottom">
          <div class="bottom-top">
              <div class="left">
                  <ul class="text">
                      <li>
                          <a href="">用户协议</a>
                          <a href="">作者招募</a>
                          <a href="">联系我们</a>
                      </li>
                      <li>
                          <a href="">品牌合作</a>
                          <a href="">使用帮助</a>
                      </li>
                  </ul>
              </div>
              <div class="right">
                  <div class="erweima1-box">
                      <div class="erweima1">
                          <img src="/assets/pic2.png" alt="">
                      </div>
                      <div class="text1">手机APP下载</div>
                  </div>
                  <div class="erweima2-box">
                       <div class="erweima2">
                           <img src="/assets/pic2.png" alt="">
                       </div>
                      <div class="text2">官方公众号</div>
                  </div>
                 
              </div>
          </div>
          <div class="bottom-bot">
              <div class="bottom">© 2019 qingdao 青ICP证0378783号  青岛公网安备11568781  青岛市（2017）2863-327号</div>
          </div>
      </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    .bottom-box{
        width:100%;
        height:136px;
        background:rgba(238,238,238,1);
        margin-top:15px;
        .bottom{
            width:600px;
            height:136px;
          
            margin:0 auto;
            .bottom-top{
                width:600px;
                height:100px;
            
                .left{
                    width:312px;
                    height:73.5px;
                    float: left;
                    ul{
                        //  position: relative;
                            // top: 41.5px;
                            // left: 0;
                            float: left;
                        li{
                            list-style: none;
                            height: 30px;
                            margin-top:7.5px;
                            
                          
                            a{
                                margin-left:51px;
                                text-decoration: none;
                                width:29px;
                                height:7px;
                                font-size:7px;
                                font-family:Microsoft YaHei;
                                font-weight:400;
                                color:rgba(0,0,0,1);
                                line-height:24px;
                            }
                            
                        }
                    
                    }
                }
                .right{
                    width:208px;
                    height:73.5px;
                    float:right;
                    .erweima1-box{
                        width:53px;
                        height:77.5px;
                         float: left;
                         margin-top:27.5px;
                         .erweima1{
                                width: 53px;
                                height: 53px; 
                                img{
                                    width:100%;
                                    height:100%;
                                }                 
                        }
                        .text1{
                            height:7px;
                            font-size:7px;
                            font-family:Microsoft YaHei;
                            font-weight:400;
                            color:rgba(0,0,0,1);
                            line-height:24px;
                            text-align: center;
                        }
                    }
                    .erweima2-box{
                           width:53px;
                            height:77.5px;
                               float: right;
                               margin-right:62px;
                               margin-top:27.5px;
                            .erweima2{
                                width: 53px;
                                height: 53px; 
                                img{
                                    width:100%;
                                }          
                        }
                        .text2{
                            height:7px;
                            font-size:7px;
                            font-family:Microsoft YaHei;
                            font-weight:400;
                            color:rgba(0,0,0,1);
                            line-height:24px;
                            text-align: center;
                        }
                    }
                  
                }
            }
            .bottom-bot{
                width:600px;
                height:57.5px;

                .bottom{
                    height:8px;
                    font-size:7px;
                    font-family:Microsoft YaHei;
                    font-weight:400;
                    color:rgba(0,0,0,1);
                    line-height:24px;
                    text-align: center;
                    margin-top:18px;
                }
            
            }
        }
    }
</style>
