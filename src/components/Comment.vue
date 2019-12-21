<template>
    <div class="comment-box">
       <div class="count">78789条评论</div>
       <div class="comment-text">
           <textarea  class="textarea" name="" id="" cols="67" rows="6" placeholder="说说你的看法"></textarea>
       </div>
       <div class="hf-btn"><span>回复</span></div>
       <div class="comment-list">
           <div class="list-img"></div>
           <div class="list-msg">
               <div class="list-msg-name"><span>少林寺的小尼姑</span></div>
               <div class="list-msg-text">这个视频太好看了，我很习惯</div>
               <div class="list-msg-date">09月01日</div>
           </div>
           <div class="list-btn"><button>回复</button></div>
       </div>
       <div class="comment-list">
           <div class="list-img"></div>
           <div class="list-msg">
               <div class="list-msg-name"><span>少林寺的小尼姑</span></div>
               <div class="list-msg-text">这个视频太好看了，我很习惯</div>
               <div class="list-msg-date">09月01日</div>
           </div>
           <div class="list-btn"><button>回复</button></div>
       </div>
       <div class="comment-list">
           <div class="list-img"></div>
           <div class="list-msg">
               <div class="list-msg-name"><span>少林寺的小尼姑</span></div>
               <div class="list-msg-text">这个视频太好看了，我很习惯</div>
               <div class="list-msg-date">09月01日</div>
           </div>
           <div class="list-btn"><button>回复</button></div>
       </div>
       <div class="more"><button>加载更多</button></div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
    .comment-box{
        width:478px;
        height:575px;
        background:rgba(255,255,255,1);
        border-radius:3px;
        margin-top:15px;
        .count{
            width:50px;
            height:8px;
            font-size:8px;
            font-family:Microsoft YaHei;
            font-weight:400;
            color:rgba(0,0,0,1);
            line-height:24px;
            margin-left:8px;
        }
        .comment-text{
            width:460px;
            height:97px;
            background:rgba(255,255,255,1);
            border:1px solid rgba(238,238,238,1);
            border-radius:5px;
            margin-top:19px;
            margin-left:8px;
            .textarea{
                border:none;
                background: none;
            }
             .textarea::-webkit-input-placeholder{
                    height:8px;
                    font-size:7px;
                    font-family:Microsoft YaHei;
                    font-weight:400;
                    color:rgba(153,153,153,1);
                    line-height:24px;
            }
           
        }
         .hf-btn{
                width:28px;
                height:18px;
                background:rgba(255,0,0,1);
                border-radius:3px;
                margin-left:440px;
                margin-top:15px;
                line-height: 13px;
                text-align: center;
                span{
                    height:7px;
                    font-size:7px;
                    font-family:Microsoft YaHei;
                    font-weight:400;
                    color:rgba(255,255,255,1);
                    line-height:7px;
                }
            }
        .comment-list{
            width:478px;
            height:55px;
            margin-top:16px;
            border-bottom:1px solid rgba(238,238,238,1);
            .list-img{
                width:26px;
                height:26px;  
                border-radius: 50%;  
                background:red;
                float: left;
                margin-left:6px;
                margin-top:7px;
            }
            .list-msg{
                float: left;
                margin-left:7px;
                .list-msg-name{
                    height:8px;
                    font-size:7px;
                    font-family:Microsoft YaHei;
                    font-weight:400;
                    color:rgba(102,102,102,1);
                    line-height:24px;
                    margin-top:4px;
                }
                .list-msg-text{
                    margin-top:9px;
                    height:7px;
                    font-size:7px;
                    font-family:Microsoft YaHei;
                    font-weight:400;
                    color:rgba(51,51,51,1);
                    line-height:24px;
                }
                .list-msg-date{
                    margin-top:9px;
                    font-size:6px;
                    font-family:Microsoft YaHei;
                    font-weight:400;
                    color:rgba(102,102,102,1);
                    line-height:24px;
                }
            }
            .list-btn{
                float: right;
                button{
                    border:none;
                    font-size:7px;
                    font-family:Microsoft YaHei;
                    font-weight:400;
                    color:rgba(102,102,102,1);
                    line-height:24px;
                    background: none;
                    margin-top:15px;
                
                }
            }
            

        }
        .more{
                width:462px;
                height:20px;
                background:rgba(250,250,250,1);
                margin: 0 auto;
                margin-top:16px;
                text-align: center;
                line-height: 20px;
                button{
                    border:none;
                    background:none;
                    font-size:7px;
                    font-family:Microsoft YaHei;
                    font-weight:400;
                    color:rgba(51,51,51,1);
                }
            }
    }
</style>
