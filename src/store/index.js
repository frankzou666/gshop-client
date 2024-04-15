//创建store对像


import Vuex from 'vuex'

import state from './state'
import mutations  from './mutations'
import getters  from './getters'
import actions from './actions'


//v2使用Vue.use(Vuex),v3在app上app.use(store)

const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})

export default store