 <template>
    <div class="register-box">
        <div class="register">
            <div class="register-logo">
                <img src="/assets/pclogo.png" alt="" width="100%" height="100%">
            </div>
            <div class="register-form-box">
                <div class="register-form">
                    <div class="register-title"><span>注册</span></div>
                    <div class="register-user">
                        <img src="/assets/pic13.png" width="10px" height="13px" alt="">
                        <input type="text"  class="test1" placeholder="请输入手机号" v-model="phone" @blur="checkphone()">
                        <div class="hqyzm" @click="getYanzheng" style="
                        cursor:pointer"><button>获取验证码</button></div>
                    </div>
                    <div class="register-check0">
                        <img src="/assets/pic15.png"  width="10px" height="11px" alt="">
                        <input type="text" class="test1"  placeholder="请输入短信验证码" v-model="code" @blur=" checkLpicma">
                        
                    </div>
                    <div class="register-psw">
                        <img src="/assets/pic14.png" width="10px" height="12px" alt="">
                        <input type="text" class="test1" placeholder="请输入密码" v-model="password" @blur="checkpassword">
                    </div>
                    <div class="register-true-psw">
                        <img src="/assets/pic14.png" width="10px" height="12px" alt="">
                        <input type="text" class="test1" placeholder="确认密码" v-model="repassword" @blur=" passwordCheckValidate">
                    </div>
                    <div class="register-check">
                        <input type="text" class="test1"  placeholder="请输入邀请码" v-model="pcode" >    
                    </div>
                    <div id="cheacklist" style="background:none"
                    @blur="checkagree"
                    >
                         <mt-checklist
                         
                        v-model="value"
                        :options="['同意优创网协议']">
                    </mt-checklist>
                    </div>

                    <div class="register-btn">
                        <span @click="regist" style="
                        cursor:pointer" >立即注册</span>
                    </div>
                    <div class="go-login">
                        <router-link to="./login"><a href="" id="a1" style="text-decoration:none;">已有账号,去登录</a></router-link>
                        
                    </div>      
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import md5 from 'js-md5';
export default {
    name: 'cheacklist',
    data () {
  	return {
  		//存放所选选项
			value:[],
			//checklist设置
			options : [{
		    label: '同意优创网协议',
		    value: 'A',
		    disabled: true	//可以禁用选项
            }],  
            phone:"",
            code:"",
            password:"",
            repassword:"",
            pcode:"",
      }
  },
   components:{
       
   },
   mounted(){
    //    alert(111)
   },
   methods:{
      regist:function(){
          this.$http("http://10.0.1.46/laravel/public/api/register",{
            phone:this.phone,
            code:this.code,
            password:md5(this.password),
            repassword:md5(this.repassword),
            pcode:this.pcode
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
      //验证手机号
      checkphone(){
           var re = /^1\d{10}$/;
           let str = this.phone;
           if(re.test(str)){
               alert('手机号格式正确')
           }else {
               alert('手机格式不对')
          }
       },
       //验证验证码和获取的是否一致
        checkLpicma(){   
          if(this.code == '') {
           console.log('验证码不能为空'); 
          }else if(this.code != this.code ) { 
           alert('验证码输入错误'); 
           this.code = '';
          }else {
           //输入正确时
            console.log("验证码验证成功")
          } 
    },
//密码验证
        checkpassword:function(){
                var word=this.password.trim();
                if(word.length==0)
                    console.log("密码不能为空");
                var count=0;
                if(/[0-9]/.test(word)){
                    count++;
                }
                if(/[A-Za-z]/.test(word))
                {
                    count++;
                }
                if(/[^0-9A-Za-z]/.test(word)){
                    count++;
                }
                if(count==3&& word.length>=6)
                {
                   console.log("高强度");
                }else if(count==2&& word.length>=6){
                    console.log("中强度");
                }else{
                    console.log("低强度");
                }
                return word >=0;
            },
        //确认密码验证
        passwordCheckValidate: function() {
        if(this.repassword = " ") {
            console.log('密码不能为空')
        }else if(this.repassword==this.password ){
            console.log('两次密码匹配')
        }
        else {
            console.log("两次密码一致")
        }
    },
    //勾选框验证
    checkagree:function () {
                if(!this.value){
                    this.msgagree="";
                }else{
                    this.msgagree= "必须勾选";
                }
                return this.value;
            },    
},
}
</script>

<style lang="scss" >
    .register-box{
        width:100%;
        height:auto;
        background:#fff;
        .register{
            width:960px;
            height:540px;
            background:url("/assets/pic34.png") no-repeat;
            background-size:cover;
            margin:0 auto;
            .register-logo{
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
            .register-form-box{
                width:531px;
                height:540px;
                float: right;
                .register-form{
                    width:395px;
                    height:380px;
                    margin:80.5px 136px 79.5px 0;
                    input{
                        outline:none; border:0; 
                        padding-left:9px;
                    }
                    .register-title{
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
                    .register-user{
                        width:156px;
                        height:20px;
                        position: relative;
                        bottom:277px;
                        left:91px;
                        border-bottom:1px solid rgba(255,255,255,1);
                        opacity:0.7;
                        input{
                            width:120px;
                            height:19px;
                            border:none;
                            position: relative;
                            bottom:2px;
                            background: rgba(255,254,254,0)
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
                            height:7px;
                            position: relative;
                            bottom: 25px;
                            left: 102px;
                            button{
                                background:none;
                                border:none;
                                 font-size:3px;
                                font-family:Microsoft YaHei;
                                font-weight:400;
                                color:rgba(255,255,255,1);
                                line-height:24px;
                            }
                        }
                    }
                    .register-check0{
                        width: 156px;
                        height: 54px;
                        position: relative;
                        bottom: 288px;
                        left: 91px;
                        border-bottom: 1px solid white;
                        opacity: 0.7;
                         img{
                               position: relative;
                            top:33px;
                        }
                        input{
                            width:120px;
                            height:19px;
                            border:none;
                            position: relative;
                            top:33px;
                            background: rgba(255,254,254,0)
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
                    .register-psw{
                        width:156px;
                        height:20px;
                        position: relative;
                        bottom:259px;
                        left:91px;
                        border-bottom:1px solid rgba(255,255,255,1);
                        opacity:0.7;
                        input{
                            width:120px;
                            height:19px;
                            border:none;
                            position: relative;
                            bottom:2px;
                            background: rgba(255,254,254,0)
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
                    .register-true-psw{
                        width:156px;
                        height:20px;
                        position: relative;
                        bottom:230px;
                        left:91px;
                        border-bottom:1px solid rgba(255,255,255,1);
                        opacity:0.7;
                        input{
                            width:120px;
                            height:19px;
                            border:none;
                            position: relative;
                            bottom:2px;
                            background: rgba(255,254,254,0)
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
                    .register-check{
                        width:156px;
                        height:54px;
                        position: relative;
                        bottom:237px;
                        left:91px;
                        border-bottom:1px solid rgba(255,255,255,1);
                        opacity:0.7;
                        input{
                            width:120px;
                            height:19px;
                            border:none;
                            position: relative;
                            top:33px;
                            background: rgba(255,254,254,0)
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
                    #cheacklist{
                        width:156px;
                        height:1px;
                        position: relative;
                        bottom:242px;
                        left:75px;
                        border:none;
                        .mint-checklist{
                            .mint-cell:last-child {
                                background:none;
                            }
                            .mint-cell{
                                background:none;
                                font-size:7px;
                                .mint-cell-wrapper{
                                    background-image:none;
                                    font-size:7px;
                                    font-family:Microsoft YaHei;
                                    font-weight:400;
                                    color:rgba(255,255,255,1);
                                    line-height:24px;
                                }
                                .mint-checkbox-core{
                                    width:13px;
                                    height:13px;
                                    background:rgba(255,255,255,1);
                                    border-color: #FE7974;
                                }
                            //     .mint-checkbox-input:checked + .mint-checkbox-core::after{
                            //         border-color: #FE7974;
                            //         top: 1px;
                            //         left: 4px;
                            // }
                            .mint-checkbox-label{
                                height:7px;
                                font-size:7px;
                                font-family:Microsoft YaHei;
                                font-weight:400;
                                color:#fff;;
                                line-height:24px;
                            }    
                            }    
                        }    
                    }
                    .register-btn{
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
                    .go-login{
                        width:90px;
                        height:8px;
                        position: relative;
                        bottom: 197px;
                        left: 157px;
                        
                    }
                     #a1{
                         
                          font-size:7px;
                        font-family:Microsoft YaHei;
                        font-weight:400;
                        color:rgba(255,255,255,1);
                        line-height:24px; 
                        }
                    

                }
            }
        }
        .mint-checkbox-core::after {
        border: 2px solid transparent;
        border-left: 0;
        border-top: 0;
        content: " ";
        top: 1px;
        left: 4px;
        position: absolute;
        width: 4px;
        height: 8px;
    }
    }
</style>

