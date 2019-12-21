<template>
    <div class="recommend">
        <div class="good-list">
            <div class="good-list-top">
                <ImgGood></ImgGood>
                <ImgGood></ImgGood>
                <ImgGood></ImgGood>
                <ImgGood></ImgGood>
                <ImgGood></ImgGood>
            </div>
            <!-- <div class="good-list-bottom">
                <ImgGood></ImgGood>
                <ImgGood></ImgGood>
                <ImgGood></ImgGood>
                <ImgGood></ImgGood>
                <ImgGood></ImgGood>
            </div> -->
        </div>
    </div>
</template>

<script>
import ImgGood from "./ImgGood"
export default {
    data(){
        return{
            flag:false
        }
    },
    props:["title"],
    created(){
        // console.log(this.title)
    },
    components:{
        ImgGood
    }
}
</script>

<style lang="scss" scoped>
    .recommend{
        width: 600px;
        height: 234px;
        margin: 0 auto;
        margin-top:20px;
        .good-list{
             width: 600px;
             height: 354px;
             background:rgba(250,250,250,1);
             margin-top:3px;
             overflow: hidden;
             .good-list-top{
                 height: 177px;
                  margin-top:10px;
                  line-height: 14px;
                  display: flex;
                  justify-content: space-between;
                  .good{
                      width: 112px;
                    //   float: left;
                      height: 100%;
                      background: green;
                      margin-left: 5px;
                      margin-right: 2px;
                       font-size: 7.5px;
                      .img-box{
                          height: 162px;
                          background: orange;
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
                          background: pink;
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
                 height: 59px;
                  background:rgba(250,250,250,1);
                 margin-top:19px;
                 .good{
                      width: 113px;
                      float: left;
                      height: 100%;
                      background: green;
                      margin-left: 5px;
                      margin-right: 2px;
                      
                      
                  }
             }
        }
    }
   
</style>

