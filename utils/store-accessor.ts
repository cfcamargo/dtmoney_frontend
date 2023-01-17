import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import Transactions from '@/store/transactions'

let transaction: Transactions

function initializeStores(store: Store<any>): void {
    transaction = getModule(Transactions, store)
}

export { initializeStores, Transaction }