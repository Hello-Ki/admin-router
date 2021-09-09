<template>
  <div class="login-container">
    <div class="login-box">
      <div class="text-center avatar-box">
        <img src="../assets/logo.png" class="img-thumbnail avatar" alt="">
      </div>
    </div>
    <!-- 表单区域 -->
    <div class="form-login p-4">
      <!-- 登录名称 -->
      <div class="form-group form-inline">
        <label for="username">登录名称</label>
        <input type="text" class="form-control ml-2" id="username" placeholder="请输入登录名称" autocomplete="off"
        v-model.trim="username">
      </div>
      <!-- 登录密码 -->
      <div class="form-group form-inline">
        <label for="password">登录密码</label>
        <input type="text" class="form-control ml-2" id="password" placeholder="请输入登录密码"
        v-model.trim="passward">
      </div>
      <!-- 登录和重置按钮 -->
      <div class="form-group form-inline d-flex justify-content-end">
        <button type="button" class="btn btn-secondary mr-2" @click="reset">重置</button>
        <button type="button" class="btn btn-primary" @click="login">登录</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyLogin',
  data () {
    return {
      username: '',
      passward: ''
    }
  },
  methods: {
    reset () {
      this.username = ''
      this.passward = ''
    },
    login () {
      if (this.username === 'admin' && this.passward === '666666') {
        localStorage.setItem('token', 'Bearer xxx')
        this.$router.push('/home')
      } else {
        localStorage.removeItem('token')
      }
    }
  }
}
</script>

<style lang="less" scoped>
.login-container {
  background-color: #35495e;
  height: 100%;
  .login-box {
    width: 400px;
    height: 250px;
    background-color: #fff;
    border-radius: 3px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translateX(-200px) translateY(-125px);
  }
  .form-login {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-200px) translateY(-50px);
  }
  .avatar {
    position: absolute;
    top: -50%;
    left: 50%;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    transform: translateX(-100px) scale(0.8);
  }
  .form-control {
    width: 300px;
  }
}
</style>
