import Vue from 'vue'
import Vuex from 'vuex'

import { State, defaultState as state } from './state'
import { mutations } from './mutations'
import { actions } from './actions'
import { getters } from './getters'

Vue.use(Vuex)

export const strict = true 

export default new Vuex.Store<State>({ strict, state, mutations, actions, getters })
