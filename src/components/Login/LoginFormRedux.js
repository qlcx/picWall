const initialState = {
  authenticated: false,
  realName: '', // 用户姓名
}

/* actions */
// 登录
const AUTH_USER = 'AUTH_USER'

// 登录操作
export const signIn = ({userName, password, isRemember}) => {
  return dispatch => {
  }
}

export default function loginForm(state = initialState, action) {
  switch(action.type) {
    case AUTH_USER:
      return Object.assign({}, state, {
        authenticated: true,
        realName: action.realName,
      })
    default: 
      return state
  }
}