<template>
    <div class="banner">
        <!-- <a href="www.4399.com">
            <img src="" width="100%" height="100%" alt="">
        </a> -->
        
        <div 
            v-for="item in adverBanner" :key="item.id">
                <a :href="item.link_url" >
                    <img :src="item.avatar"
             width="100%" height="100%" alt="">
                </a>
        </div>        
    </div>
</template>
<script>
export default {
   props:["adverBanner"],
        data(){
            return{
               
            }
        },
    created(){
        // console.log(this.adverBanner)
    },
}
</script>
<style lang="scss">
    .banner{
        width: 600px;
        height: 71.5px;
        //  background:url("/assets/pic37.png") no-repeat 100% 100%;
        background:rgba(255, 255, 255,1);
         background-size:cover;
        margin: 0 auto;
        margin-top:32px;
        border-radius:5px;
        img{
            width:100%;
            height:100%;
        }
    }
</style>
