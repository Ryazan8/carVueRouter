<template>

    <div>
      <router-view></router-view>
    </div>
</template>

<script>

</script>

<style>

.container{
  width: 100%;
  max-width: 1440px;
  margin: 50px auto;
}
.navigation{
  display: flex;
  justify-content: center;
  margin-right: 20px;
}

.nav{
  color: #000;
  text-decoration: none;
  font-size: 25px;
  padding-right: 30px;
}
.nav:hover{
  opacity: 0.6;
}
</style>
