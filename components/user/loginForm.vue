<template>
  <div>
    <el-form class="form" :model="form" :rules="rules" ref="form">
      <el-form-item prop="username">
        <el-input placeholder="用户名/手机" v-model="form.username"></el-input>
         </el-form-item>
         <el-form-item>
           <el-input placeholder="密码" type="password" v-model="form.password"></el-input>
         </el-form-item>
         <el-button type="primary" style="width:100%;" @click="handleSubmit">登陆</el-button>
        </el-form>
    </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        username: '',
        password: ''
      },
      rules: {
        username: [
          {
            required: true,
            message: '',
            trigger: 'blur'
          }
        ]
      }
    }
  },

  methods: {
    handleSubmit () {
      this.$$refs.form.validate(valid => ({
        if (valid) {
          this.$axios({
            url: '远程API',
            method: 'POST',
            data: this.form
          }).then(res => (
            this.$store.commit('user/setUserInfo', res.data)
          ))
        }
      }
      ))
    }
  }
}
</script>

<style scoped lang="less">
  .form{
    padding: 25px;
  }
</style>
