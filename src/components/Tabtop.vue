<template>
    <div class="tab-top">
        <div class="header">
                <div class="logo-box"></div>
                <div class="nav-box">
                    <router-link to="/home" active-class="active">首页</router-link>
                    <router-link to="/video" active-class="active" id="video">视频</router-link>
                    <router-link to="/img" active-class="active" id="img">图片</router-link>
                    <router-link to="/book" active-class="active" id="book" ref="book">小说</router-link>
                    <router-link to="/activity" active-class="active" id="activity">参赛活动</router-link>
                </div>
                <div class="input-box">
                    <input type="text" class="test1" placeholder="  请输入您想要搜索的内容">
                    <div class="seach">
                        <img src="/assets/pic12.png"  width="14px" height="14px" alt="">
                    </div>
                </div>
                <div class="btn-box">
                    <router-link to="/login">登录/</router-link>
                    <router-link to="/register">注册</router-link>
                </div>
            </div>
    </div>
</template>
<script>
export default {
    created(){
        // console.log(this.$router.history.current.path)
       
    },
    // mounted(){
    //      if(this.$router.history.current.path == "/bookDetails"){
    //         this.$refs.book.style.color = "red"
    //     }
    //     else{
    //         this.$refs.book.style.color = "red"
    //     }
    // }
}
</script>
<style lang="scss">
    .tab-top{
        width:100%;
        background:rgba(242,242,242,1);
    }
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
            width:170px;
            height:23px;
            float: left;
            margin-left:31px;
            border:1px solid rgba(255,0,0,1);
            margin-top: 5px;
            padding-left: 8px;
            border-radius: 3px;
            .test1{
                float: left;
                width: 137px;
                height:18px;
                border:none;
                background:rgba(242,242,242,1);
                 outline:none; border:0;
            }
            .seach{
                float: right;
                width:29px;
                height:23px;
                background:rgba(255,0,0,1); 
                // border-radius:0px 3px 3px 0px;
            // position: relative;
            // top: -26px;
            // left: 164px;
            img{
                position: relative;
                top:2px;
                left:8px;
            }
            }
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
</style>
