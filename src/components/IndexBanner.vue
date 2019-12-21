<template>
    <div class="banner-box">
            <mt-swipe :auto="3000" :show-indicators="false">
                <mt-swipe-item   
                v-for="item in mainBanner" 
                :key="item.id">
                    <a :href="item.link_url">
                        <img :src="item.avatar" width="100%" height="100%" alt="">
                    </a>
                </mt-swipe-item>
                <!-- <mt-swipe-item><img src="/assets/pic16.png" alt="" width="100%" height="100%"></mt-swipe-item>
                <mt-swipe-item>3</mt-swipe-item>
                <mt-swipe-item>4</mt-swipe-item> -->
            </mt-swipe>
    </div>
</template>
<script>
export default {
     props:["mainBanner"],
    created(){
        // console.log(this.mainBanner)
        
    },
    methods: {
  handleChange(index) {
  }
} 
}
</script>

<style lang="scss">
    .banner-box{
            width:600px;
            height:175px;
            background:rgb(255, 255, 255);
            margin:0 auto;
            margin-top:15px;
            mt-swipe-item{
                img{
                    width:100%;
                    height:100%;
                }
            }
        }
</style>
