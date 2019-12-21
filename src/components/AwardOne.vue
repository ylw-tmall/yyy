<template>
    <div class="box"> 
       <div class="activityBanner-box">
        <img src="/assets/pic16.png" alt="">
    </div>
    <div class="myApple">
        <div class="myApple-left">
            <!-- <a active-class="active">活动介绍</a>
            <router-link to="/activityGz" active-class="active" id="">活动规则</router-link>
            <router-link to="/activityHj" active-class="active" id="">获奖作品</router-link>
            <router-link to="/activitCs" active-class="active" id="">参赛作品</router-link> -->
             <ul>
                <li 
                v-for="(item,index) in list" 
                @click="tab(index)" 
                :class="{active:istrue==index}" 
                >
                    {{item.tab}}
                </li>
            </ul>
            <!-- <div v-show="item.show" v-for="(item,index) in list">
            {{item.title}}
    </div> -->
        </div>
        <div class="myApple-right">
            <router-link to="/award">
                <button>我要报名</button>
            </router-link>
            
        </div>   
    </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            list:[
                {tab:"活动介绍",show:true,title:"当初，他为了报仇接近她，欺骗她的感情，在他们婚礼上，当着全天下的面，娶了叶知欢的伴娘夏南音为妻，当着全城的面羞辱她。当初，他为了报仇接近她，欺骗她的感情，在他们婚礼上，当着全天下的面，娶了叶知欢的伴娘夏南音为妻，当着全城的面羞辱她。 当天他又搞垮了她爸经营了一辈子的公司，叶父跳楼，婚礼变葬礼，叶家家破人亡，只剩下叶知欢一个人。 那三年他虽在演戏，可他唯一没有预料的是，自己入戏太深，爱上了叶知欢难以自拔。 他用力拽着叶知欢的手，迅速往前走去，然后一脚踹开病房的门，将叶知欢推了进去。 他用力拽着叶知欢的手，迅速往前走去，然后一脚踹开病房的门，将叶知欢推了进去。 【奖项设置】 一等奖xx名，奖励xxxxxx 二等奖xx名，奖励xxxxx 三等奖xx名，奖励xxxx 【投稿时间】 8月13日12:00:00-9月15日23:59:59 【投稿方式】 活动期间内，点击活动页面中“我要参加”按钮上传作品，或发布作品时添加”手工饰品制作大赛“标签即可~11111"},
                {tab:"活动规则",show:false,title:"【活动规则】 1. 活动期间新发布[饰品]类相关手工作品，需有亲手制作成分，投稿形式不限于图片、视频。 2. 完整的制作教程/作品展示均可，类型不限，包括但不限于：挂饰、首饰、发饰、摆件、道具、手机壳/支架、相框、吧唧托、娃用饰品等。 使用材料不限，包括但不限于：粘土、热缩片、滴胶、布艺、针织、羊毛毡、皮具等。 3. 活动期间增长的有效赞数仅作为评奖参考，不作为最终决定标准。 4. 本次活动最终解释权归半次元所有，与苹果公司无关。"},
                {tab:"获奖作品",show:false,title:"333333333333"},
                {tab:"参赛作品",show:false,title:"555555555555"}
            ],
             istrue: 0

        }
    },
     methods:{
            tab:function(index){
                for(var i=0;i<this.list.length;i++){
                    this.list[i].show=false;
                }
                this.list[index].show=true;
            }
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
