import axios from "../config/axios"

export const doSearch = () => {
  return axios.get("/api/yan/gc.php")
}