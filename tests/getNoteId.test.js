const getNoteId = require('../src/js/getNoteId')

test('return corresponding ids from note', () => {
  expect(getNoteId('C')).toEqual('0')
})