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
  }
    .footer{
        padding-top: 30px;
        margin: 0 auto;
        width: 1000px;
    }
      .info-list{
          h5{
              font-weight: normal;
              font-size: 16px;
              margin-bottom: 10px;
          }
          p{
              font-size: 12px;
              line-height: 1.8;
              span{
                  color: orange;
              }
          }
      }
 .scan{
          text-align: center;

          img{
              width: 140px;
              height: 140px;
          }
          font-size: 12px;
      }

      .licence{
          border-top: 1px #666 solid;
          margin-top: 20px;
          padding: 50px 0;
          text-align: center;
          font-size: 12px;
      }
</style>
