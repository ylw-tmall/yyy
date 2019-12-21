<template>
    <div class="uploadFile" v-show="isShow">
        <div class="title">
            <span>报名信息</span>
        </div>
        <div class="lable-msg">视频信息:</div>
        <input type="text">
        <div class="lable-title">上传视频:</div>
        <el-upload
            ref="ruleForm"
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :file-list="fileList"
            list-type="picture">
            <el-button size="small" type="primary">上传</el-button>
    </el-upload>
    <div class="tjBtn">
        <button @click="submitForm">提交</button>
    </div>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        fileList: [{name: '', url: ''}],
        isShow:true
      };
    },
    methods: {
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      },
    submitForm() {  
        alert("提交成功")
        this.isShow=false;

        
        }  
    }  
}
</script>
<style lang="scss" scoped>
    .uploadFile{
        width:359px;
        height:219px;
        background:rgba(255,255,255,1);
        background: pink;
        margin:-247px auto;
        position: relative;
        z-index:10000;
        .title{
            width:33px;
            height:8px;
            font-size:8px;
            font-family:Microsoft YaHei;
            font-weight:bold;
            color:rgba(51,51,51,1);
            line-height:22px;
            margin-left:11px;
        }
        .lable-msg{
            height:8px;
            font-size:7px;
            font-family:Microsoft YaHei;
            font-weight:bold;
            color:rgba(51,51,51,1);
            line-height:22px;
            margin-top:36px;
            margin-left:40px;
        }
        input{
            border:none;
            background:none;
            border-bottom:1px solid rgba(238,238,238,1);
            margin-left:80px;
            outline: none;
        }
        .lable-title{
            height:8px;
            font-size:7px;
            font-family:Microsoft YaHei;
            font-weight:bold;
            color:rgba(51,51,51,1);
            line-height:22px;
             margin-top:52px;
            margin-left:40px;
        }
        .el-button--primary {
            width:31px;
            height:13px;
            background:rgba(238,238,238,1);
            border-radius:2px;
            border:none;
            color:rgba(51,51,51,1);
            font-size:7px;
            font-family:Microsoft YaHei;
            font-weight:bold;
             position: relative;
            left: 95px;
            top: -7px;
            line-height: 3px;
            display: flex;
            justify-content: center;

            }
        .el-upload-list--picture .el-upload-list__item {
            width:58px;
            height:40px;
        }
        .el-upload-list el-upload-list--picture {
            margin: 0;
            padding: 0;
            list-style: none;
            width:58px;
            height:40px;
        }
        .tjBtn{
            height:15px;
            border-radius:3px;
            margin-top:19px;
            margin-left:159px;
            button{
               width:38px;
                height:15px;
                background:rgba(255,0,0,1);
                border-radius:3px; 
                border:none;
                font-size:7px;
                font-family:Microsoft YaHei;
                font-weight:bold;
                color:rgba(255,255,255,1);
                line-height:15px; 
            }
        }
    }
    .uploadFile /deep/ .el-upload-list--picture .el-upload-list__item{
        width:60px;
        height:60px;
        margin-left:157px;
        margin-top:-46px;
    }
    .uploadFile /deep/ .el-upload-list--picture .el-upload-list__item-status-label{
        background:rgba(255,0,0,1);;
    }
</style>
