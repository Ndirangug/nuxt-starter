/* eslint-disable import/no-mutable-exports */
import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import sample from '~/store/sample'


let sampleStore: sample


function initialiseStores(store: Store<any>): void {
  sampleStore = getModule(sample, store)
}

export {
  initialiseStores,
  sampleStore,

}
