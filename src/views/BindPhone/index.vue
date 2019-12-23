 <template>
    <div class="bindPhone-box">
        <div class="bindPhone">
            <div class="bindPhone-logo">
                <img src="/assets/pclogo.png" alt="" width="100%" height="100%">
            </div>
            <div class="bindPhone-form-box">
                <div class="bindPhone-form">
                    <div class="bindPhone-title"><span>绑定手机号</span></div>
                    <div class="bindPhone-user">
                        <input type="text"  class="test1" placeholder="手机号" v-model="phone">
                        <div class="hqyzm" style="
                        cursor:pointer" @click="getYanzheng">发送验证码</div>
                    </div>
                    <div class="bindPhone-psw">
                        <input type="text" class="test1" v-model="code" placeholder="验证码">
                    </div>
                    
                    <div class="bindPhone-btn" @click="bindPhone" style="
                        cursor:pointer">
                        <span>立即绑定</span>
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
                code:""
            }
        },
        methods:{
            bindPhone(){
                this.$http("http://10.0.1.46/laravel/public/api/bindPhone",{
                    phone:this.phone,
                    code:this.code,
                }).then(res =>{
                    console.log(res.data.message);
                })    
            },
            getYanzheng(){
                this.$http("http://10.0.1.46/laravel/public/api/sendCode",{
                    phone:this.phone,
                    type:1
                }).then(res => {
                    console.log(res.data.reData)
                })
            },
        }
    }
</script>
<style lang="scss">
    .bindPhone-box{
        width:100%;
        height:auto;
        background:#fff;
        .bindPhone{
            width:960px;
            height:540px;
            background:url("/assets/pic34.png") no-repeat;
            background-size:cover;
            margin:0 auto;
            .bindPhone-logo{
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
            .bindPhone-form-box{
                width:531px;
                height:540px;
                float: right;
                .bindPhone-form{
                    width:395px;
                    height:380px;
                    margin:80.5px 136px 79.5px 0;
                    input{
                        padding-left:10px;
                    }
                    .bindPhone-title{
                            width:70px;
                            height:12px;
                            margin:139px 221.5px 334.5px 148.5px;
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
                    .bindPhone-user{
                        width:156px;
                        height:20px;
                        position: relative;
                        bottom:267px;
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
                    .bindPhone-psw{
                        width:156px;
                        height:20px;
                        position: relative;
                        bottom:234px;
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
                    .bindPhone-btn{
                        width:155px;
                        height:25px;
                        background:rgba(255,255,255,1);
                        border-radius:13px;
                        position: relative;
                        bottom:197px;
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
