<template>
  <login-header>欢迎登录</login-header>
  <section class="login-section">
    <div class="wrapper">
      <nav>
        <a
          @click="activeName = 'account'"
          :class="{ active: activeName === 'account' }"
          href="javascript:;"
          >账户登录</a
        >
        <a
          @click="activeName = 'qrcode'"
          :class="{ active: activeName === 'qrcode' }"
          href="javascript:;"
          >扫码登录</a
        >
      </nav>
      <!-- 表单 -->
      <div v-if="activeName === 'account'" class="account-box">
        <login-form></login-form>
      </div>
      <div v-if="activeName === 'qrcode'" class="qrcode-box">
        <img src="@/assets/images/qrcode.jpg" alt="" />
        <p>打开<a href="javascript:;">App</a>扫码登录</p>
      </div>
    </div>
  </section>
  <login-footer></login-footer>
</template>

<script>
import LoginHeader from './components/login-header.vue'
import LoginFooter from './components/login-footer.vue'
import LoginForm from './components/login-form.vue'

import { ref } from 'vue'
export default {
  name: 'pageLogin',
  components: {
    LoginHeader,
    LoginFooter,
    LoginForm
  },
  setup() {
    const activeName = ref('account')
    return { activeName }
  }
}
</script>

<style lang="less" scoped>
.login-section {
  background: url() no-repeat center / cover;
  height: 488px;
  position: relative;
  .wrapper {
    width: 380px;
    background: #fff;
    min-height: 400px;
    position: absolute;
    left: 50%;
    top: 54px;
    transform: translate3d(100px, 0, 0);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    nav {
      height: 55px;
      border-bottom: 1px solid #f5f5f5;
      display: flex;
      align-items: center;
      text-align: right;
      padding: 0 40px;
      a {
        flex: 1;
        line-height: 1;
        font-size: 18px;
        &:first-child {
          text-align: left;
          border-right: 1px solid #f5f5f5;
        }
        &.active {
          color: @xtxColor;
          font-weight: bold;
        }
      }
    }
  }
}

// 二维码容器
.qrcode-box {
  text-align: center;
  padding-top: 40px;
  p {
    margin-top: 20px;
    a {
      color: @xtxColor;
      font-size: 16px;
    }
  }
}
</style>
