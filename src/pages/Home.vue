<template>
  <!-- <div @click="handle">this is <router-link to="/preview">home</router-link></div> -->
  <p>{{ Store.state.count }}</p>
  <p>{{ Store.getters.doubleCount }}</p>
  <button @click="handle">add</button>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
const Router = useRouter()
const Store = useStore()
const handle = () => {
  Store.commit('add', 9)
  // Router.push({ name: 'preview' })
}
</script>