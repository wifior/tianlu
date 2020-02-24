<template>
    <div class="footer-wrapper">
        <div class="footer">
            <el-row class="info-list">
                <el-col :span="6" :offset="1">
                    <h5>天路旅游网</h5>
                    <p>旅游神器</p>
                </el-col>
                <el-col :span="5">
                    <h5>天路旅游网</h5>
                    <p>旅游神器</p>
                </el-col>
                <el-col :span="5">
                    <h5>天路旅游网</h5>
                    <p>旅游神器</p>
                </el-col>
                <el-col :span="6" class="scan">
                    <p><img src="http://157.122.54.189:9093/images/1556522965.png" alt=""></p>
                    关注我们
                </el-col>
            </el-row>

            <div class="licence">
                百度一下
            </div>
        </div>
    </div>
</template>
<script>
export default {
}
</script>
<style scoped lang="less">
  .footer-wrapper{
      background: #333;
      color: #ccc;
      min-width: 1000px;
      .footer{
          padding-top: 30px;
          margin: 0 auto;
          width: 1000px;
      }
      .info-list{
          box-sizing: border-box;
      }
  }
</style>
