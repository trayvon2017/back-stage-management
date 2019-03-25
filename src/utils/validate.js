export default {
  methods: {
    validatename (str) {
      var length = str.trim().length
      return length >= 4 && length < 20
    }
  }
}
