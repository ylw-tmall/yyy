<template>
    <div class="page-box">
       <el-pagination
          background
          layout="prev, pager, next"
          :total="100">
        </el-pagination>
    </div>
 
</template>
<script>
  export default {
  }
</script>
<style lang="scss">
  .page-box{
    width:100%;
    height:100%;
      .el-pagination{
            width: 250px;
            margin:0 auto;
            font-weight: 0;
            .btn-prev,.btn-next{
              min-width: 28px;
              height: 17px;
              border:0.5px solid rgba(255,0,0,1);
              .el-icon-arrow-left:before {
                content: "上一页";
                 font-size:7px;
                font-family:Microsoft YaHei;
                font-weight:400;
                color:rgba(102,102,102,1);
                line-height: 17px;
                 
                }
                .el-icon-arrow-right:before {
                    content: "下一页";
                      font-size:7px;
                font-family:Microsoft YaHei;
                font-weight:400;
                color:rgba(102,102,102,1);
                line-height: 17px;
                 
                }
                .el-icon-more:before {
                  content: "\e794";
                  line-height: 17px;
                }
            }
        }
        .el-pagination.is-background .el-pager li:not(.disabled).active {
    background-color: #FF0000;
    color: #FFF;
        }
        .is-background .el-pager li{
          min-width: 17px;
          height: 17px;
         font-size:7px;
        font-family:Microsoft YaHei;
        font-weight:400;
        color:rgba(102,102,102,1);
        line-height: 17px;
        border:0.5px solid rgba(255,0,0,1);
        }
        .el-icon-more{
          font-size: 7px;
          line-height: 17px;
          
        }
  }
    
</style>