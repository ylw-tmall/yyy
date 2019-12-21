<template>
    <div class="AwardOneCenter-box">
        <div class="AwardOneCenterImg1"><img src="/assets/pic35.png" alt=""></div>
        <div class="AwardOneCenterGood">
            <BookList></BookList>
        </div>
          <div class="AwardOneCenterGood">
            <BookList></BookList>
        </div>
        <div class="AwardOneCenterImg1"><img src="/assets/pic36.png" alt=""></div>
          <div class="AwardOneCenterGood">
            <BookList></BookList>
        </div>
          <div class="AwardOneCenterGood">
            <BookList></BookList>
        </div>
        <div class="AwardOneCenterImg1"><img src="/assets/pic38.png" alt=""></div>
          <div class="AwardOneCenterGood">
            <BookList></BookList>
        </div>
          <div class="AwardOneCenterGood">
            <BookList></BookList>
        </div>
    </div>
</template>

<script>
import BookList from"@/components/BookList"
export default {
    components:{
        BookList
    }
}
</script>
<style lang="scss">
    .AwardOneCenter-box{
        width:600px;
        height:100%;
        margin:0 auto;
        .AwardOneCenterImg1{
            width:96px;
            height:35px;
            margin-left:252px;
            margin-top:17px;
            img{
                width:100%;
                height:100%;
            }
        }
        .AwardOneCenterGood{
            display: flex;
            margin-top:15px;
        }
    }
</style>
