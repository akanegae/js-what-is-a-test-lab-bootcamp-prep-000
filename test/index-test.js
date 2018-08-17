var index = require("../index.js")

describe('what-is-a-test', () => {
  describe('Name', () => {
    it('returns "Susan"', () => {
      expect(index.name).toEqual('Susan')
    })
  })


  describe('Height', () => {
    it('returns "less than 40"', () => {
      expect(index.height).toBeLessThan(40)
    })
  })

  describe('Message', () => {
    it('Susan is 30 inches tall', () => {
      expect(index.message).toInclude(index.name)
      expect(index.message).toInclude(index.height)
    })
  })

})
