<template>
    <div class="ImgGood-box"> 
        <ImgGood></ImgGood>
        <ImgGood></ImgGood>
        <ImgGood></ImgGood>
        <ImgGood></ImgGood>
        <ImgGood></ImgGood>
    </div>
</template>

<script>
import ImgGood from "./ImgGood"
export default {
    components:{
        ImgGood
    }
}
</script>

<style lang="scss" scoped>
    .ImgGood-box{
        width:600px;
        height:100%;
        display: flex;
        justify-content: space-between;
        background:rgba(250,250,250,1);;
        margin: 0 auto;
        margin-top:15px;
    }
</style>
