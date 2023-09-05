<template>
  <div class="login">
    <el-form class="box" label-width="60px">
      <el-form-item label="用户名">
        <el-input v-model="userInfo.userName" />
      </el-form-item>

      <el-form-item label="密码">
        <el-input v-model="userInfo.password" show-password />
      </el-form-item>

      <el-form-item>
        <el-button type="success" class="btn" @click="login">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

// 用户信息
const userInfo = reactive({
  userName: '',
  password: ''
})
// 登录按钮事件
const login = () => {
  //
}
</script>

<style lang="scss" scoped>
.login {
  width: 100%;
  height: 100%;
  background-color: skyblue;
  display: flex;
  justify-content: center;
  align-items: center;

  .box {
    width: 400px;
    height: 300px;
    background-color: orange;
    padding: 20px;

    .btn {
      width: 100%;
    }
  }
}
</style>
