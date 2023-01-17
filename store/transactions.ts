import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'

interface Transaction {
    decription : string,
    type : 'expense' | 'recipe'
    amount : number
    category : string
}

@Module({name: 'Transactions', stateFactory : true, namespaced: true})
export default class transactions extends VuexModule {
  private transactions = [] as Transaction[]

  @Mutation
  private ADD_TRANSACTION(transaction: Transaction) {
    this.transactions.push(transaction)
  }

  @Mutation
  private LIST_TRANSACTIONS(transaction: Transaction) {

  }


  @Action
  public addTransaction(transaction : Transaction) {
    this.context.commit('ADD_TRANSACTION', transaction)
  }

  @Action
  public listTransactions(){
    this.context.commit('LIST_TRANSACTIONS')
  }



  public get $transactions() {
    return this.transactions
  }


}