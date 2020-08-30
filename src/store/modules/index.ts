import { ModuleTree } from 'vuex'
import { State } from '../state'

import { woocommerce } from './woocommerce'

export const modules: ModuleTree<State> = { woocommerce }