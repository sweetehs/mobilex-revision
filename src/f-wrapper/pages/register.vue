<style lang="less">
  .register-wrapper {
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
  <div class="register-wrapper">
    <header>MobileX-注册</header>
    <div class="form">
      <el-form label-width="100px" size="small">
        <el-form-item label="用户名：">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="密码：">
          <el-input type="password" v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item label="重复密码：">
          <el-input type="password" v-model="form.repassword"></el-input>
        </el-form-item>
        <el-form-item>
          <div class="action">
            <el-button @click="register" type="primary" size="small">注册</el-button>
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
          password: "aaaaaa",
          repassword: "aaaaaa"
        }
      };
    },
    methods: {
      register() {
        let subData = clone(this.form);
        for (var i in subData) {
          subData[i] = trim(subData[i])
        }
        const {
          username,
          password,
          repassword
        } = subData
        // 校验
        let error = "";
        if (!isRequired(username)) {
          error = "请输入用户名";
        } else if (username.length < 6) {
          error = "用户名长度必须6位以上"
        } else if (!isRequired(password) || !isRequired(repassword)) {
          error = "请输入密码";
        } else if (password.length < 6) {
          error = "密码长度必须6位以上"
        } else if (password !== repassword) {
          error = "请输入相同的密码";
        }
        if (error) {
          this.$message.error(error);
          return;
        }
        delete subData.repassword;
        axios({
          url: "/mobilex/user/register",
          method: "post",
          data: subData
        }).then(ajaxData => {
          this.$message.success("增加成功")
        }).catch((error)=>{
          this.$message.error(error.message)
        });
      }
    }
  };
</script>

