<template>
<div>
  <div>
    <router-link :to="{name: 'cars.create'}">Добавить</router-link>
  </div>
  <div v-if="cars">
    <div v-for="(car, index) in cars">
      <p>{{ car.title }}</p>
      <p>{{ car.content }}</p>
      <div>
        <router-link :to="{name: 'cars.show', params:{id: car.id}}">Посмотреть</router-link>
      </div>
      <button @click="remove(index)">Удалить</button>
    </div>
  </div>
</div>
</template>


<script >
export default {
  data(){
    return{
      cars:[]
    }
  },
  mounted() {
    this.getCar()
  },
  methods: {
    getCar() {
      this.cars = JSON.parse(localStorage.getItem('cars'))
    },
    remove(index) {
      this.cars.splice(index, 1)
      localStorage.setItem('cars', JSON.stringify(this.cars))
    }
  }
}
</script>


<style scoped>
.cars{
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
}
.cars_card{
  border: 1px solid #c3c3c3;
}
.cars_card:hover{
  cursor: pointer;
}
.cars_card-img{
  width: 300px;
  height: 300px;
  background-color: #c3c3c3;
}
.about{
  text-align: center;
}


</style>