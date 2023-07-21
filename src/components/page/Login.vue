<template>
  <div class="login-wrap">
    <div class="dw-login">
      <div class="dw-title">钉钉机器人</div>
      <form action="" :model="param" :rules="rules" ref="login">
        <div class="dw-input">
          <input type="text" prop="username" v-model="param.username" autocomplete="off" placeholder="username">
        </div>
        <div class="dw-input">
          <input type="password" prop="password" v-model="param.password" autocomplete="off" placeholder="password">
        </div>
        <div class="login-btn">
          <button type="primary" @click="getData()"><span>登录</span></button>
        </div>
      </form>
      <div><span></span></div>
    </div>
  </div>
</template>

<script>
// 通过axios进行与后台交互数据
import { fetchData } from '../../api/robot.js';
export default {
  name: 'login',
  data () {
    return {
      // 表单填入数据
      param: {
        username: '闫佳鹏',
        password: '123456',
      },
      // 验证规则
      rules: {
        username: [{ required: true, message: '请输入用户名', trigger: 'blur' },],
        password: [{ required: true, message: '请输入密码', trigger: 'blur' },],
      },
      // 验证结束返回的数据返回的数据
      query: {
        id: "0",
        token: "",
        user_name: "",
      },
      code: 0,
      msg: '',
    }
  },
  methods: {
    // 获取数据
    getData () {
      // 通过 get 请求数据，将返回的数据存储到对应的数组中
      fetchData(this.param).then(res => {
        // 拿到数据中的 code 和 msg 
        this.code = res.data.code;
        this.msg = res.data.msg;
        this.submitForm();
      });
    },
    // 表单验证
    submitForm () {
      localStorage.setItem("username", this.param.username);
      localStorage.setItem("password", this.param.password);
      this.$router.push('/');
      // 获取ref注册的引用信息
      // validate 是Vue提供的一个表单校验库，可以帮助我们快速的进行表单验证
      // this.$refs.login.validate((valid) => {
      //   if (valid) {
      // this.$message.success('登录成功');
      //     // 如果通过校验，则将路由转到首页组件上，从而实现登录成功后组件的跳转
      //   } else {
      //     // 如果为通过校验，则提示重新输入账号和密码
      //     this.$message.error('请输入账号和密码');
      //     console.log('error submit!!');
      //     return false;
      //   }
      // });
    },
  },
}
</script>

<style scoped>
.login-wrap {
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url(../../assets/img/login-bg.jpg);
  background-size: 100%;
}
/* 登录框 */
.dw-login {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 450px;
  transform: translate(-50%, -50%);
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.3);
  overflow: hidden;
}
/* 标题 */
.dw-title {
  width: 100%;
  line-height: 50px;
  text-align: center;
  font-size: 20px;
  color: #fff;
  border-bottom: 1px solid rgb(255, 255, 255);
}
form {
  padding: 30px;
}
.dw-input {
  margin-bottom: 20px;
}

.login-btn {
  text-align: center;
}
.login-btn button {
  width: 100%;
  height: 36px;
  margin-bottom: 10px;
  color: #eee;
  cursor: pointer;
  border: none;
  background-color: #409eff;
}
button:hover {
  background-color: #66b1ff;
}
button:active {
  background-color: blue;
}
</style>