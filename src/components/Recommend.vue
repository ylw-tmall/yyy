<template>
    <div class="recommend">
            <div class="tj-box">
                <div class="left"></div>
                <div class="center">
                    <span style="width:48px">{{title}}</span>
                </div>
                <div class="right">
                    <a href="">更多 ></a>
                </div>
            </div>
        <div class="good-list">
            <div class="good-list-top">
                <Good :recommend="recommend"></Good>
                <Good :recommend="recommend"></Good>
                <Good :recommend="recommend"></Good>
                <Good :recommend="recommend"></Good>
                <Good :recommend="recommend"></Good>
               
            </div>
        </div>
    </div>
</template>

<script>
import Good from "./Good"
export default {
    data(){
        return{
            flag:false,
            recommend:[]
        }
    },
    props:["title"],
    components:{
        Good
    },
    created(){
        this.$http.get('http://10.0.1.46/laravel/public/api/homeIndex',{
            params: {  
              user_id:9,                         //参数
              token:"397F806FA81B20D92D20E86B08D43798"
            },
        }).then(res => {                   //请求成功后的处理函数     
            this.recommend=res.data.reData.recommend;
            // console.log(this.recommend)
          }).catch(err => {                 //请求失败后的处理函数   
            console.log(err)
          })
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
                // background:#FF0000;
                position: relative;
                top: 27px;
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
             overflow: hidden;
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
                    //   background: green;
                      margin-left: 5px;
                      margin-right: 2px;
                       font-size: 7.5px;
                      .img-box{
                          height: 65px;
                        //   background: orange;
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
