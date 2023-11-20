<template>
  <div>
    <div>
      <router-link to="/cars">Назад</router-link>
    </div>
    <div v-if="car">
      <div>
        <input type="text" v-model="car.title">
        <input type="text" v-model="car.content">
        <a @click.prevent="update" href="#">Save</a>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      cars: [],
      car: {
        title: '',
        content: '',
      },
      id: this.$route.params.id
    }
  },

  mounted() {
    this.getCar()
  },

  methods: {
    getCar() {
      this.cars = JSON.parse(localStorage.getItem('cars'))
      this.car = this.cars.find(storageCar => parseInt(storageCar.id) === parseInt(this.id))
    },

    update() {
      this.cars.forEach(car => {
        if (car.id === this.car.id) {
          car.title = this.car.title
          car.content = this.car.content
        }
        localStorage.setItem('cars', JSON.stringify(this.cars))
      })

    }
  }
}

</script>

<style scoped>

</style>