import { reactive, ref } from 'vue'
export default {
  setup() {
    const message = ref('Hello Vue!')


    const counter = reactive({ count: 0 })
      return {
	message
      }
  }
}