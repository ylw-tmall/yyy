  <template>
    <div class="video">
      <div class="video-kind">
          <ul class="kind-col">
            <li>分类:</li>
            <li>全部</li>
            <li>分类一</li>
            <li>分类一</li>
            <li>分类一</li>
          </ul>
          <ul class="kind-col">
            <li>分类:</li>
            <li>全部</li>
            <li>分类一</li>
            <li>分类一</li>
            <li>分类一</li>
          </ul>
          <ul class="kind-col">
            <li>分类:</li>
            <li>全部</li>
            <li>分类一</li>
            <li>分类一</li>
            <li>分类一</li>
          </ul>
          <ul class="kind-col">
            <li>分类:</li>
            <li>全部</li>
            <li>分类一</li>
            <li>分类一</li>
            <li>分类一</li>
          </ul>
      </div>
      <section class="advertising-banner">
          
      </section>
      <div class="good-list">
            <div class="good-list-top">
                <div class="good">
                    <div class="img-box">

                    </div>
                    <p>
                        强烈推荐这款，真的好好用，我哈哈哈哈
                    </p>
                    <div class="good-bottom">
                        <div class="head-img">

                        </div>
                        <div class="zan">

                        </div>
                        <span>456</span>
                        <div class="glasses">

                        </div>
                        <span>456</span>
                    </div>
                </div>
                <div class="good"></div>
                <div class="good"></div>
                <div class="good"></div>
                <div class="good"></div>
                <div class="good"></div>
                <div class="good"></div>
                <div class="good"></div>
                <div class="good"></div>
                <div class="good"></div>
                <div class="good"></div>
                <div class="good"></div>
                <div class="good"></div>
                <div class="good"></div>
                <div class="good"></div>
                <div class="good"></div>
                <div class="good"></div>
                <div class="good"></div>
                <div class="good"></div>
                <div class="good"></div>
            </div>
        </div>
      <Pagination></Pagination>
    </div>
    
  </template>
  <script>
  import Pagination from "@/components/Pagination"
    export default {
      components:{
        Pagination
      }
    };
  </script>
  <style lang="scss">
      .video{
        .video-kind{
          height: 75px;
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
            }
          }
        }
        .advertising-banner{
          width: 600px;
          height: 71.5px;
          margin: 0 auto;
          background: red;
        }
        .good-list{
             width: 600px;
             height: 434px;
            //  background: yellow;
             margin:  0 auto;
             margin-top:3px;
             overflow: hidden;
             .good-list-top{
               display: flex;
               justify-content: space-between;
               flex-wrap: wrap;
               align-items: center;
               align-content: space-between;
                 height: 95px;
                  line-height: 14px;
                  .good{
                      width: 113px;
                      float: left;
                      height: 100%;
                      background: green;
                      margin-left: 5px;
                      margin-right: 2px;
                       font-size: 7.5px;
                       margin-top:10px;
                      .img-box{
                          height: 65px;
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
                                margin-top:3.5px;
                                margin-left: 23px;
                            }
                      }
                  }
             }
             .good-list-bottom{
                 height: 95px;
                 background: red;
                 margin-top:10px;
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
        .el-pagination{
            width: 250px;
            margin:0 auto;
            .btn-prev,.btn-next{
              min-width: 28px;
              height: 17px;
            }
        }
        .is-background .el-pager li{
          min-width: 17px;
          height: 17px;
          font-size: 7px;
          line-height: 17px;
        }
        .el-icon-more{
          font-size: 7px;
          line-height: 17px;
          
        }
      }
  </style>