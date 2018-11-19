<style lang="less">
  .login-wrapper {
    // background: #eee;
    width: 400px;
    min-height: 200px;
    border-radius: 5px;
    box-shadow: 0 0 5px #ccc;
    position: absolute;
    left: 50%;
    top: 40%;
    transform: translate(-50%, -50%);
    overflow: hidden;
    header {
      height: 50px;
      line-height: 50px;
      text-align: center;
      background: #333;
      color: #fff;
    }
    .form {
      padding: 40px 30px 20px 20px;
    }
    .action {
      text-align: center;
    }
  }
</style>

<template>
  <div class="login-wrapper">
    <header>MobileX-登录</header>
    <div class="form">
      <el-form label-width="100px" size="small">
        <el-form-item label="用户名：">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="密码：">
          <el-input type="password" v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item>
          <div class="action">
            <el-button @click="login" type="primary" size="small">登录</el-button>
          </div>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  import axios from "axios";
  import {
    clone,
    isRequired,
    trim
  } from "@/util/util";
  export default {
    data() {
      return {
        form: {
          username: "aaaaaa",
          password: "aaaaaa"
        }
      };
    },
    methods: {
      login() {
        axios({
          url: "/mobilex/user/login",
          method: "post",
          data: this.form
        }).then((ajaxData) => {
          localStorage.setItem("mobilex-token",ajaxData.data.token)
          this.$router.push({
            path: "/list"
          })
        }).catch(() => {
          this.$message.error("登录失败")
        })
      }
    }
  };
</script>

