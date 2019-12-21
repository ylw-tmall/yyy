<template>
    <div class="jieshaoBox">
        {{activeInfo.describe}}
    </div>
</template>

<script>
export default {
    props:["activeInfo"]

}
</script>

<style lang="scss" scoped>
    .jieshaoBox{
        width:600px;
        height:185px;
        background:rgba(255,255,255,1);
        font-size:7px;
        font-family:Microsoft YaHei;
        font-weight:400;
        color:rgba(51,51,51,1);

    }
</style>
