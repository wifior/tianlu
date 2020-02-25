
export const state = () => ({
  userInfo: {
    name: 'hello'
  }
})

export const mutations = {
  setUserInfo (state, data) {
    state.userInfo = data
  }
}

export const actions = {}
