 <template>
    <div class="login-box">
        <div class="login">
            <div class="login-logo">
                <span>logo</span>
            </div>
            <div class="login-form-box">
                <div class="login-form">
                    <div class="login-title"><span>登录</span></div>
                    <div class="login-user">
                        <img src="/assets/pic13.png" width="10px" height="13px" alt="">
                        <input type="text"  class="test1" placeholder="  请输入用户名/手机号/邮箱" v-model="username">
                    </div>
                    <div class="login-psw">
                        <img src="/assets/pic14.png" width="10px" height="12px" alt="">
                        <input type="text" class="test1" placeholder="  请输入密码" v-model="password">
                    </div>
                    
                    <div class="login-check" >
                        <img src="/assets/pic15.png"  width="10px" height="11px" alt="">
                        <input  type="text" class="test1"  placeholder="  请输入验证码" v-model="yanzheng" ref="yanzheng">
                        <!-- <div class="yzm" @click="refreshCode" prop="code">7234</div> -->
                        <div class="login-code" @click="refreshCode" prop="code" height="20px">
                            <Sidentify :identifyCode="identifyCode" />
                        </div>
                    </div>
         
                    <div class="login-btn">
                        <router-link to="#"><span @click="login">登录</span></router-link>
                    </div>
                    <div class="login-look-box">
                        <router-link to="./findPassword"><a href="">找回密码</a></router-link>
                        <router-link to="./register"><a href="" class="zczh">注册账号</a></router-link>
                    </div>
                    <div class="login-three">————  第三方登录 ————</div>
                    <div class="login-qq-wx-box">
                        <router-link to="./bindPhone"><a href=""><img src="/assets/pic41.png" alt="" width="17px" height="18px"></a></router-link>
                        <router-link to="./bindPhone"><a href=""><img src="/assets/pic42.png" alt="" width="20px" height="18px"></a></router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Sidentify from "@/components/Sidentify"
    export default {
        components:{
            Sidentify
        },
    data(){
        return{
            username:"",
            password:"",
            identifyCodes: "1234567890",
            identifyCode: "",
            yanzheng:""
        }
    },
    methods:{
        //登录
        login(){
            if(this.$refs.yanzheng.value == this.identifyCode){
                 alert("验证成功");
                 this.$http("http://10.0.1.46/laravel/public/api/loginIn",{
                    password:this.password,
                    account:this.username
                    })
            }else{
                alert("验证失败")
            }     
        },
    //验证码
        randomNum(min, max) {
            return Math.floor(Math.random() * (max - min) + min);
        },
        refreshCode() {
            this.identifyCode = "";
            this.makeCode(this.identifyCodes, 4);
            },
            makeCode(o, l) {
                for (let i = 0; i < l; i++) {
                    this.identifyCode += this.identifyCodes[
                    this.randomNum(0, this.identifyCodes.length)
                    ];
                }
            // console.log(this.identifyCode);
        }
    },
    created() {
    //初始化验证码
        this.refreshCode();
    
    },
    mounted() {
        this.identifyCode = "";
        this.makeCode(this.identifyCodes, 4);
    }
    }
</script>
<style lang="scss">
    .login-box{
        width:100%;
        height:auto;
        background:#fff;
        .login{
            width:960px;
            height:540px;
            background:url("/assets/pic34.png") no-repeat;
            background-size:cover;
            margin:0 auto;
            .login-logo{
                width:429px;
                height:540px;
                float: left;
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
            .login-form-box{
                width:531px;
                height:540px;
                float: right;
                .login-form{
                    width:395px;
                    height:380px;
                    margin:80.5px 136px 79.5px 0;
                    .login-title{
                            width:25px;
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
                    .login-user{
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
                    }
                    .login-psw{
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
                    .login-check{
                        width:156px;
                        height:54px;
                        position: relative;
                        bottom:237px;
                        left:91px;
                        border-bottom:1px solid rgba(255,255,255,1);
                        opacity:0.7;
                        img{
                               position: relative;
                            top:33px;
                        }
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
                        .yzm{
                            width:50px;
                            height:20px;
                            background: olivedrab;
                            margin-left:106px;
                            margin-top:8px;
                            text-align: center;
                            z-index: 100;
                            display: none;
                            
                        }
                        .login-code{
                            width:50px;
                            height:20px;
                            margin-left:106px;
                            margin-top:8px;
                            text-align: center;
                        }
                    }
                    .login-btn{
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
                    .login-look-box{
                        width:155px;
                        height:8px;
                        position: relative;
                        bottom:195px;
                        left:91px;
                     
                        a{
                            width:29px;
                            height:8px;
                            font-size:7px;
                            font-family:Microsoft YaHei;
                            font-weight:400;
                            color:rgba(255,255,255,1);
                            line-height:24px;
                            text-decoration: none;
                        }
                        .zczh{
                            margin-left:55px;
                        }
                    }
                    .login-three{
                        width:171px;
                        height:7px;
                        font-size:7px;
                        font-family:Adobe Heiti Std;
                        font-weight:normal;
                        color:rgba(204,204,204,1);
                        position: relative;
                        bottom:175px;
                        left:91px;
                    }
                    .login-qq-wx-box{
                        width:165px;
                        height:20px;
                        position: relative;
                        bottom:145px;
                        left:46px;
                        a{
                            margin-left:32px;
                            text-align: center;
                        }
                    }

                }
            }
        }
    }
</style>
