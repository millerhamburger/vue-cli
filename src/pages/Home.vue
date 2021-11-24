<template>
  <p>{{ Store.state.count }}</p>
  <p>{{ Store.getters.doubleCount }}</p>
  <a-button @click="handle">add</a-button>
</template>

<script lang="ts" setup>
import { useRouter, useRoute } from "vue-router"
import { useStore } from "vuex"
import { doSearch } from "../apis/getData"
const Router = useRouter()
const Route = useRoute()
const Store = useStore()
doSearch().then(res => {
  console.log(res)
})
const handle = (): void => {
  Store.commit("add", 9)
}
</script>