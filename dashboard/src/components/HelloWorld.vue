<template>
<div class="main-container">
  <div class="banner">
    <p>People Counter</p>
  </div>
  <div class="content-container">
    <Bar />
  </div>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.main-container {
  width: 100vw;
  height: 100vh;
  position: absolute;

}
.banner {
  width: 100vw;
  height: 70px;
  background-color: tomato;
  position: relative;
  top: 0px;
  left: 0px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}
.banner p {
  color: white;
  margin: 8px;
  font-weight: bold;
  font-size: 20px;
}
</style>
