<template>
  <div id="home-contain">
    <div class="hot-keys-tips">
      <span>Esc: 退出</span><br />
      <span>F11: 全屏&nbsp;/&nbsp;还原</span><br />
      <span>F10: 放大&nbsp;/&nbsp;缩小</span><br />
      <span>F9: 最小化&nbsp;/&nbsp;还原</span>
    </div>
    <div class="main-btn-box">
      <span class="main-bg">Welcome</span>
    </div>
  </div>
</template>

<script></script>

<style lang="scss">
#home-contain {
  position: relative;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(#304156, #ddd);
  text-align: left;
  .hot-keys-tips {
    position: absolute;
    top: 0;
    left: 0;
    padding: 0.5rem;
    span {
      color: rgb(180, 180, 180);
      -moz-user-select: none;
      -webkit-user-select: none;
      -ms-user-select: none;
      -khtml-user-select: none;
      user-select: none;
    }
  }
  .main-btn-box {
    height: 100%;
    position: relative;
    .main-bg {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      font-size: 80px;
      text-shadow: 5px 5px 10px #000;
      transition-property: text-shadow font-size color;
      transition: 0.5s;
      color: #111;
      user-select: none;
      &:hover {
        font-size: 120px;
        text-shadow: 8px 8px 10px #000;
        color: #304156;
      }
    }
  }
}
</style>
