import { combineReducers } from 'redux'

import loginForm, { signIn } from '../components/Login/LoginFormRedux'

export default combineReducers({
  loginForm,
})

export const actions = {
  signIn,
}