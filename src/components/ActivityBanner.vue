<template>
    <div class="box"> 
       <div class="activityBanner-box">
            <img :src="activeInfo.cover_img" alt="">
        </div>
    <!-- <div class="myApple">
        <div class="myApple-left">
             <ul>
                <li 
                v-for="(item,index) in list" 
                @click="tab(index)" 
                :class="{active:istrue==index}" 
                >
                    {{item.tab}}
                </li>
            </ul>
            <div v-show="item.show" v-for="(item,index) in list">
            {{item.title}}
    </div>
        </div>
        <div class="myApple-right">
            <router-link to="/award">
                <button>我要报名</button>
            </router-link>   
        </div>   
        <div class="myApple-right">
            <router-link to="/works">
                <button>我要报名</button>
        </router-link>
     
        </div>  -->
    </div>
</template>

<script>
export default {
    data(){
        return{
            list:[
                {tab:"活动介绍",show:true,title:"www"},
                {tab:"活动规则",show:false,title:"1wwwwwwwwww"},
                {tab:"获奖作品",show:false,title:"333333333333"},
                {tab:"参赛作品",show:false,title:"555555555555"}
            ],
             istrue: 0,
             activeInfo:[]
        }
    },
     created(){
        this.$http.get('http://10.0.1.46/laravel/public/api/activeInfo',{
            params: {  
              user_id:9,                         //参数
              token:"397F806FA81B20D92D20E86B08D43798",
            },
        }).then(res => {    
            this.activeInfo=res.data.reData;               //请求成功后的处理函数               
            this.describe=res.data.reData.describe;
             this.rule=res.data.reData.rule;
            //   console.log(this.rule);
        //  console.log(this.gift)
          }).catch(err => {                 //请求失败后的处理函数   
            console.log(err)
          })
      },
     methods:{
            tab:function(index){
                for(var i=0;i<this.list.length;i++){
                    this.list[i].show=false;
                }
                this.list[index].show=true;
            },
            
        }
}
</script>

<style lang="scss">
    .box{
        width:600px;
        height:100%;
        margin:0 auto;
        .activityBanner-box{
        width:600px;
        height:214px;
        background:rgba(250,250,250,1);
        margin:0 auto;
        margin-top:15px;
        img{
            width:100%;
            height:100%;
        }
    }
    .myApple{
        width:600px;
        height:45px;
        margin-top:15px;
        border-bottom:1px solid rgba(238,238,238,1);        
        .myApple-left{
            width:508px;
            height:45px;
            float: left;           
            ul{
                overflow: hidden;
                width:450px;
                margin-left: -66px;
                li{
                display: block;
                height: 45px;
                margin-left:50.5px;
                text-decoration:none;
               font-size:10px;
                font-family:Microsoft YaHei;
                font-weight:400;
                color:rgba(51,51,51,1);
                line-height: 19px;
                float: left;
                cursor:pointer;
            }
            .active{
                color: red;
            }
    }         
            div{
                width:600px;
                height:230px;
                font-size:7px;
                font-family:Microsoft YaHei;
                font-weight:400;
                color:rgba(51,51,51,1);
                margin-top: -12px;
                margin-left: 25px;
                white-space: pre-wrap;
            }
        }
        }
        .myApple-right{
            width:92px;
            height:45px;
            background:rgba(255,0,0,1);
            float: right;
            line-height: 45px;
            text-align: center;
            button{
                font-size:11px;
                font-family:Adobe Heiti Std;
                font-weight:normal;
                color:rgba(255,255,255,1);
                border:none;
                background: none;
            }
        }
    }   
</style>
