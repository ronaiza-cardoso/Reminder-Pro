import { ADD_REMINDER } from '../constans'

export const addRemninder = text => {
  const action = {
    type: ADD_REMINDER,
    text
  }

  console.log('action in addRemninder', action)
  
  return action
}
