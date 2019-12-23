<template>
    <div class="xiaoshuo-box">
        <div class="tj-box">
            <div class="left"></div>
            <div class="center">
                    <span style="width:48px">{{title}}</span>
            </div>
            <div class="right">
                <a href="">更多 ></a>
            </div>
        </div>
        <div class="good-list-box">
            <div class="good-list-bot-top">
                <XiaoshuoGood></XiaoshuoGood>
                <XiaoshuoGood></XiaoshuoGood>
                <XiaoshuoGood></XiaoshuoGood>
                <XiaoshuoGood></XiaoshuoGood>
                <XiaoshuoGood></XiaoshuoGood>
            </div>    
        </div>
    </div>
</template>

<script>
import XiaoshuoGood from "./XiaoshuoGood"
export default {
    components:{
        XiaoshuoGood
    },
    props:["title"]
}
</script>

<style lang="scss">
.xiaoshuo-box{
    height:100%;

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
        .good-list-box{
            width:600px;
            height:100%;
            // background: skyblue;
            margin:0 auto;
            .good-list-bot-top{
                width:600px;
                height:85px;
                // background:red;
                display: flex;
                justify-content: space-between;
            }
              .good-list-bot-bot{
                width:600px;
                height:85px;
                // background:green;
                display: flex;
                justify-content: space-between;
            }

        }
        }
</style>
