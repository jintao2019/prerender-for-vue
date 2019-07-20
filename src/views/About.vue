<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>{{count}}</div>
  </div>
</template>

<script>
import { Promise, async } from 'q';
export default {
  computed: {
    count(){
      return this.$store.getters.count
    }
  },
  created() {
    this.getData()
  },
  methods: {
    getTime() {
      return new Promise((resolve, reject) => {
        try {
          const startTime = new Date().getTime();
          setTimeout(() => {
            const endTime = new Date().getTime();
            const data = endTime - startTime
            resolve(data)
          }, 200);
        } catch (error) {
          reject(error)
        }
      })
    },
    async getSyncData() {
      let time = await this.getTime()
      let data = `endTime - startTime = ${time}`
      return data
    },
    async getData() {
      let data = await this.getSyncData()
      console.log(data)
    }
  }
  
}
</script>

