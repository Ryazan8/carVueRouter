<template>
  <div>
    <div>
      <router-link to="/cars">Назад</router-link>
    </div>
    <div v-if="car">
      <p>{{ car.title }}</p>
      <p>{{ car.content }}</p>
    </div>
  </div>

</template>

<script >
export default {
  data() {
    return {
      car: null,
      id: this.$route.params.id
    }
  },

  mounted() {
    this.getCar()
  },

  methods: {
    getCar() {
      let cars = JSON.parse(localStorage.getItem('cars'))

      this.car = cars.find(storageCar => parseInt(storageCar.id) === parseInt(this.id))

    },
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
.cars_card-img{
  width: 300px;
  height: 300px;
  background-color: #c3c3c3;
}
.about{
  text-align: center;
}
</style>