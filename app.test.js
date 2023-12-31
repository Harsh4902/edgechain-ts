import {jest} from '@jest/globals'
// const {jest} = require('@jest/globals')
const app = require('./app')
const mockReadFileSync = jest.fn()
jest.mock('fs',() => {
  return {
    readFileSync:mockReadFileSync
  }
})
const mockEval = jest.fn()
jest.mock('jsonnet',() => {
  return {
    eval:mockEval
  }
})


test('Parsing Jsonnet', () => {
  
  //arange
  mockReadFileSync.mockReturnValue({
    data:'dummy Data'
  })
  mockEval.mockReturnValue({
    data:'dummy Data'
  })

  //run the app method
  const result = app()

  expect(result).toEqual({data:'dummy data'})
  

});