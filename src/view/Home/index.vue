<template>
  <div id="home-contain">
    <div class="hot-keys-tips">
      <span>Esc: 退出</span><br/>
      <span>F11: 全屏/还原</span><br/>
      <span>F10: 放大/缩小</span><br/>
      <span>F9: 最小化/还原</span>
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss">
#home-contain{
  width: 100%;
  height: 100%;
  background-image: linear-gradient(#304156, #ddd);
  text-align: left;
  .hot-keys-tips{
    padding: .5rem;
    span{
      color: rgb(180, 180, 180);
      -moz-user-select: none; 
      -webkit-user-select: none; 
      -ms-user-select: none; 
      -khtml-user-select: none; 
      user-select: none;
    }
  }
}
</style>