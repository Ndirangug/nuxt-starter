/* eslint-disable no-console */
import { VuexModule, Module } from 'vuex-module-decorators'

@Module({ name: 'sample', stateFactory: true, namespaced: true })
export default class Drivers extends VuexModule {
  name = "George"
}
