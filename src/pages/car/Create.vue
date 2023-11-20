<template>
  <div>
    <input type="text" v-model="title">
    <input type="text" v-model="content">
    <a href="#" @click.prevent="store">ADD</a>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        title: '',
        content: '',
      }
    },
    methods: {
      store(){
        let car = {
          id: 1,
          title: 'this.title',
          content: 'this.content'
        }
        let cars = JSON.parse(localStorage.getItem('cars'))

        if (!cars) {
          let carsArr = []
          carsArr.unshift(cars)
          localStorage.setItem('cars', JSON.stringify(carsArr))
          localStorage.setItem('car_id', 1)
        } else {
          let carId = localStorage.getItem('car_id')
          carId++
          localStorage.setItem('car_id',carId)
          car.id = carId
          cars.unshift(car)
          localStorage.setItem('cars', JSON.stringify(cars))
        }

        this.$router.push({name: 'cars.index'})

      }
    }
  }
</script>


<style scoped>
.p{
  margin-top: 50px;
}
.input{
  font-size: 20px;
  border: none;
  background-color: #C3C3C3;
  padding: 10px 15px;
  border-radius: 10px;
}
.btn {
  font-size: 20px;
  border: none;
  background-color: #C3C3C3;
  padding: 10px 15px;
  border-radius: 10px;
  color: #6A6A6A;
  transition: all 0.2s ease-in-out;
}
.btn:hover{
  cursor: pointer;
  color: #000;
}
</style>