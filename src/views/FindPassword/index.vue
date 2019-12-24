 <template>
    <div class="findPsw-box">
        <div class="findPsw">
            <div class="findPsw-logo">
                <img src="/assets/pclogo.png" alt="" width="100%" height="100%">
            </div>
            <div class="findPsw-form-box">
                <div class="findPsw-form">
                    <div class="findPsw-title"><span>找回密码</span></div>
                    <div class="findPsw-user">
                        <input type="text"  class="test1" placeholder="  手机号" v-model="phone">
                        <div class="hqyzm" style="
                        cursor:pointer"  @click="getYanzheng">发送验证码</div>
                    </div>
                    <div class="findPsw-psw">
                        <input type="text" class="test1" placeholder="   验证码" v-model="code">
                    </div>
                    
                    <div class="findPsw-check" >
                        <input  type="text" class="test1"  placeholder="  密码" v-model="password">
                    </div>
                     <div class="findPsw-true-check" >
                        <input  type="text" class="test1"  placeholder="  确认密码" v-model="repassword">
                    </div>
                    <div class="findPsw-btn" @click="findPassword" style="
                        cursor:pointer">
                        <span >完成</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                phone:"",
                code:"",
                password:"",
                repassword:""
            }
        },
        methods:{
            findPassword(){
                this.$http("http://10.0.1.46/laravel/public/api/findPassword",{
                    phone:this.phone,
                    code:this.code,
                    password:this.password,
                    repassword:this.repassword,
          }).then(res =>{
              console.log(res.data.message);
          })    
        },
         getYanzheng(){
          this.$http("http://10.0.1.46/laravel/public/api/sendCode",{
              phone:this.phone,
              type:3
          }).then(res => {
              console.log(res.data.reData)
          })
      },
    }
    }
</script>
<style lang="scss">
    .findPsw-box{
        width:100%;
        height:auto;
        background:#fff;
        .findPsw{
            width:960px;
            height:540px;
            background:url("/assets/pic34.png") no-repeat;
            background-size:cover;
            margin:0 auto;
            .findPsw-logo{
                 width:71px;
                height:26px;
                float: left;
                margin-top: 251px;
                margin-left: 243px;
                span{
                    width:53px;
                    height:26px;
                    font-size:24px;
                    font-family:Microsoft YaHei;
                    font-weight:400;
                    color:rgba(51,51,51,1);
                    line-height:540px;
                    margin:0 133px 263px 243.5px;
        
                }
                
            }
            .findPsw-form-box{
                width:531px;
                height:540px;
                float: right;
                .findPsw-form{
                    width:395px;
                    height:380px;
                    margin:80.5px 136px 79.5px 0;
                    .findPsw-title{
                            width:60px;
                            height:12px;
                            margin:34px 221.5px 334.5px 148.5px;
                        span{
                            width:25px;
                            height:12px;
                            font-size:12px;
                            font-family:Microsoft YaHei;
                            font-weight:400;
                            color:rgba(255,254,254,1);
                            line-height:24px;
                            position: relative;
                            top:34px;
                            left:0;
                        }
                    }
                    .findPsw-user{
                        width:156px;
                        height:20px;
                        position: relative;
                        bottom:277px;
                        left:91px;
                        border-bottom:1px solid rgba(255,255,255,1);
                        opacity:0.7;
                        input{
                            width:146px;
                            height:19px;
                            border:none;
                            position: relative;
                            bottom:2px;
                            background: rgba(255,254,254,0);
                             outline:none; border:0;
                        }
                        .test1::-webkit-input-placeholder{
                            width:87px;
                            height:20px;
                            font-size:7px;
                            font-family:Microsoft YaHei;
                            font-weight:400;
                            color:rgba(255,255,255,1);
                            line-height:24px;
                        }
                        
                    .hqyzm{
                            width:56px;
                            height:7px;
                            font-size:7px;
                            font-family:Microsoft YaHei;
                            font-weight:400;
                            color:rgba(255,255,255,1);
                            line-height:24px;
                            position: relative;
                            bottom: 25px;
                            left: 102px;
                        }
                
                    }
                    .findPsw-psw{
                        width:156px;
                        height:20px;
                        position: relative;
                        bottom:245px;
                        left:91px;
                        border-bottom:1px solid rgba(255,255,255,1);
                        opacity:0.7;
                        input{
                            width:146px;
                            height:19px;
                            border:none;
                            position: relative;
                            bottom:2px;
                            background: rgba(255,254,254,0);
                            outline:none; border:0;
                        }
                        .test1::-webkit-input-placeholder{
                            width:87px;
                            height:20px;
                            font-size:7px;
                            font-family:Microsoft YaHei;
                            font-weight:400;
                            color:rgba(255,255,255,1);
                            line-height:24px;
                }
                    }
                    .findPsw-check{
                        width:156px;
                        height:54px;
                        position: relative;
                        bottom:237px;
                        left:91px;
                        border-bottom:1px solid rgba(255,255,255,1);
                        opacity:0.7;
                        input{
                            width:91px;
                            height:19px;
                            border:none;
                            position: relative;
                            top:33px;
                            background: rgba(255,254,254,0);
                             outline:none; border:0;
                        }
                        .test1::-webkit-input-placeholder{
                            width:87px;
                            height:20px;
                            font-size:7px;
                            font-family:Microsoft YaHei;
                            font-weight:400;
                            color:rgba(255,255,255,1);
                            line-height:24px;
                        }

                    }
                    .findPsw-true-check{
                        width:156px;
                        height:54px;
                        position: relative;
                        bottom:236px;
                        left:91px;
                          border-bottom:1px solid rgba(255,255,255,1);
                        opacity:0.7;
                        input{
                            width:91px;
                            height:19px;
                            border:none;
                            position: relative;
                            top:33px;
                            background: rgba(255,254,254,0);
                             outline:none; border:0;
                        }
                        .test1::-webkit-input-placeholder{
                            width:87px;
                            height:20px;
                            font-size:7px;
                            font-family:Microsoft YaHei;
                            font-weight:400;
                            color:rgba(255,255,255,1);
                            line-height:24px;
                        }
                    }
                    .findPsw-btn{
                        width:155px;
                        height:25px;
                        background:rgba(255,255,255,1);
                        border-radius:13px;
                        position: relative;
                        bottom:202px;
                        left:91px;
                        text-align: center;
                        img{
                            position: relative;
                            bottom: 7px;
                        }
                        span{
                            border:none;
                            height:7px;
                            font-size:7px;
                            font-family:Microsoft YaHei;
                            font-weight:400;
                            color:rgba(0,0,0,1);
                            line-height:24px;
                            
                        }
                    }

                }
            }
        }
    }
</style>
