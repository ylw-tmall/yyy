<template>
    <div>
        <Tabtop></Tabtop>
        <div class="book-des">
            <div class="book-des-img"></div>
            <div class="book-des-text">
                <div class="book-des-title">爱，葬了缠绵</div>
                <div class="book-des-actor">作者：张三</div>
                <div class="book-des-list-box">
                    <span>分类：言情小说</span>
                    <span class="span2">字数：8.98万</span>
                    <span class="span3">更新时间：2019-12-14 02:15:23</span>
                </div>
                <div class="book-des-content">叶知欢自从撞上那个见不的光的秘密后，她就变成了他眼复的对象。无论她如何逃离，他始终不肯放过她。直到，她没了的那一天……</div>
                <div class="book-des-gx">最新章节：第33章结局二</div>
                <router-link to="/bookDetailsRead">
                    <div class="book-read-btn"><button>立即阅读</button></div>
                </router-link>
                
            </div>
        </div>
        <div class="book-title-list">
            <div class="book-title-list-title"><span>作品目录</span></div>
            <div class="list-box">
                <ul>
                    <li>第一章回来报仇了</li>
                    <li>第一章回来报仇了</li>
                    <li>第一章回来报仇了</li>
                    <li>第一章回来报仇了</li>
                    <li>第一章回来报仇了</li>
                    <li>第一章回来报仇了</li>
                    <li>第一章回来报仇了</li>
                </ul>
                <ul>
                    <li>第一章回来报仇了</li>
                    <li>第一章回来报仇了</li>
                    <li>第一章回来报仇了</li>
                    <li>第一章回来报仇了</li>
                    <li>第一章回来报仇了</li>
                    <li>第一章回来报仇了</li>
                    <li>第一章回来报仇了</li>
                </ul>
                 <ul>
                    <li>第一章回来报仇了</li>
                    <li>第一章回来报仇了</li>
                    <li>第一章回来报仇了</li>
                    <li>第一章回来报仇了</li>
                    <li>第一章回来报仇了</li>
                    <li>第一章回来报仇了</li>
                    <li>第一章回来报仇了</li>
                </ul>
            </div>
        </div>
        <bookComment></bookComment>
        <Bottom></Bottom>
    </div>
    
</template>

<script>
import Tabtop from "@/components/Tabtop"
import bookComment from "@/components/bookComment"
import Bottom from "@/components/Bottom"
export default {
    components:{
        Tabtop,bookComment,Bottom
    },
    created(){
        this.$http.get('http://10.0.1.46/laravel/public/api/videoInfo',{
            params: {  
              user_id:9,                         //参数
              token:"397F806FA81B20D92D20E86B08D43798",
              type:3,
              id:1
            },
        }).then(res => {                   //请求成功后的处理函数     
         this.recommend = res.data.reData.recommend;
        //  console.log(this.gift)
          }).catch(err => {                 //请求失败后的处理函数   
            console.log(err)
          })
        this.id = this.recommend.id;
      },
}
</script>
<style lang="scss">
 
    .book-des{
        width:600px;
        height:110px;
        background:rgba(255,255,255,1);
        border:1px solid rgba(238,238,238,1);
        border-radius:5px;
        margin:0 auto;
        margin-top:15px;
        .book-des-img{
            width:68px;
            height:95px;
            background:pink;
            margin-top:7px;
            margin-left:8px;
            float: left;
        }
        .book-des-text{
            width:500px;
            height:110px;
            float: right;
            .book-des-title{
                font-size:8px;
                font-family:Microsoft YaHei;
                font-weight:400;
                color:rgba(51,51,51,1);
                line-height:24px;
            }
            .book-des-actor{
                font-size:6px;
                font-family:Microsoft YaHei;
                font-weight:400;
                color:rgba(102,102,102,1);
                line-height:24px;
                margin-top: -9px
            }
            .book-des-list-box{
                margin-top: -9px;
                .span2{
                    margin-left:21px;
                }
                .span3{
                    margin-left:21px;
                }
                span{
                    font-size:6px;
                    font-family:Microsoft YaHei;
                    font-weight:400;
                    color:rgba(102,102,102,1);
                    line-height:24px;
                }
            }
            .book-des-content{
                font-size:7px;
                font-family:Microsoft YaHei;
                font-weight:400;
                color:rgba(51,51,51,1);
                line-height:10px;
            }
            .book-des-gx{
                font-size:7px;
                font-family:Microsoft YaHei;
                font-weight:400;
                color:rgba(0,0,0,1);
                line-height:10px;
                margin-top: 7px;
            }
            .book-read-btn{
                width:50px;
                height:18px;
                background:rgba(255,255,255,1);
                border:1px solid rgba(153,153,153,1);
                border-radius:3px;
                line-height: 13px;
                text-align: center;
                margin-top: 3px;
                button{
                    font-size:7px;
                    font-family:Microsoft YaHei;
                    font-weight:400;
                    color:rgba(102,102,102,1);
                    line-height:10px;
                    border:none;
                    background:none;
                }
            }
        }
    }
    .book-title-list{
        width:600px;
        height:308px;
        background:rgba(255,255,255,1);
        border-radius:3px;
        margin:0 auto;
        margin-top:15px;
        .book-title-list-title{
            width:600px;
            height:32px;
            border-bottom:1px solid rgba(238,238,238,1);
            span{
                font-size:8px;
                font-family:Microsoft YaHei;
                font-weight:400;
                color:rgba(51,51,51,1);
                line-height:10px;
                margin-left:6px;
            }
            
        }
        .list-box{
            width:600px;
            height:266px;
            display: flex;
            justify-content: space-between;
            ul{
                float: left;
                list-style: none;
                padding-left:0;
                li{
                    width:135px;
                    height:35px;
                    border-bottom: 1px solid rgba(238,238,238,1);
                    font-size:8px;
                    font-family:Microsoft YaHei;
                    font-weight:400;
                    color:rgba(51,51,51,1);
                    line-height:40px;
                    
                }
            }
            
        }
    }
    .comment-box{
        width:600px;
        margin:0 auto;
    }
</style>
