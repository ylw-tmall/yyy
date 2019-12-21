<template>
    <div class="cansaiBox">  
             <div class="good">
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
       
<!--        
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
        </div> -->
    </div>
    
</template>

<script>

export default {
    compontens:{
     
    },
    data(){
        return{
            activeDocument:[]
        }
    },
     created(){
        this.$http.get('http://10.0.1.46/laravel/public/api/activeDocument',{
            params: {  
              user_id:9,                         //参数
              token:"397F806FA81B20D92D20E86B08D43798",
              id:1,
              page:1
            },
        }).then(res => { 
            this.activeDocument=res.data.reData
            // console.log(this.activeDocument)
          }).catch(err => {                 //请求失败后的处理函数   
            console.log(err)
          })
      }  
}
</script>

<style lang="scss" scoped>
.cansaiBox{
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
    
</style>
