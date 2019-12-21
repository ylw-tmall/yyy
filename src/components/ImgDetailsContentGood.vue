<template>
<router-link to="./OneImgDetails"> 
<div>
    <div class="img-box" v-for="item in recommend" :key="item.id">
        <img :src="item.avatar" alt="" width="100%" height="100%">
    </div>
</div>
    
</router-link>   
</template>

<script>
export default {
    props:["recommend"],
    data(){
        return{
            
        }
    },

}
</script>
<style lang="scss">
     .img-box{
        width:112px;
        height:163px;
        background:rgb(255, 255, 255);
        border-radius:5px;
        margin-top:15px;
    }
</style>
