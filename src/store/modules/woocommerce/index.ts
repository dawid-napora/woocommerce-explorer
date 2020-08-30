import { Module } from 'vuex'
import { State } from '@/store/state'

import { WoocommerceState, defaultState as state } from './state'
import { mutations } from './mutations'
import { actions } from './actions'
import { getters } from './getters'

export const namespaced = true

export const woocommerce: Module<WoocommerceState, State> = { namespaced, state, mutations, actions, getters }