export default {
  // declare emitted events
  emits: ['response'],
  setup(props, { emit }) {
    // emit with argument
    emit('response', 'hello [Vue] from child')
  }
}