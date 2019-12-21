<template>
   <div class="video-kind">
          <ul class="kind-col" >
            <li>分类:</li>
            <li>全部</li>
            <li v-for="item in typeList" :key="item.id"><a href="" active-class="active">{{item.name}}</a></li>
          </ul>
          <ul class="kind-col">
            <li>标签:</li>
            <li>全部</li>
            <!-- <li v-for="item in labelList" :key="item.id">{{item.name}}></li> -->
            <li v-for="item in labelList" :key="item.id"><a href="" active-class="active">{{item.name}}</a></li>
          </ul>
          <ul class="kind-col">
            <li>区域:</li>
            <li>全部</li>
            <li v-for="item in area" :key="item.id"><a href="" active-class="active">{{item.name}}</a></li>
          </ul>
          <ul class="kind-col">
            <li>排序:</li>
            <li>全部</li>
             <li v-for="item in advert" :key="item.id"><a :href="item.link_url" active-class="active">{{item.title}}</a></li>
            
          </ul>
      </div>
</template>

<script>
export default {
    data(){
      return{ 
        // typeList:[] ,
        // labelList:[],
        // area:[],
        // advert:[]
      }
    },
    props:["typeList","labelList","area","advert"]
}
</script>
<style lang="scss">
    .video-kind{
          height: 106px;
          width: 600px;
          margin:0 auto;
          margin-top:15px;
          font-family:Microsoft YaHei;
          font-weight:400;
          // background: red;
          border-bottom: 1px solid rgba(250,250,250,1);
          border-top: 1px solid rgba(250,250,250,1);
          .kind-col{
            list-style: none;
            overflow: hidden;
            font-size: 7px;
            padding: 0;
            li{
              float: left;
              margin-left: 18px;
              font-size:7px;
              font-family:Microsoft YaHei;
              font-weight:400;
              color:rgba(0,0,0,1);
              line-height:18px;
              a{
                text-decoration: none;
                color:rgba(0,0,0,1);
              line-height:18px;
              }
              .active{
                color: #FF0000;
              }
            }
          }
        }
</style>
