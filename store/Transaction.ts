import { defineStore } from 'pinia'
import { Transaction } from '@/models'


interface DashboardData {
  description : string, ico: string, amount : number
}

export const useTransactionStore = defineStore('transactions', {
  state: () => ({
    transactions: [] as Transaction[],
    cardsData: [
      {description : 'Entradas', ico: 'recipe', amount: 0},
      {description : 'Saídas', ico: 'expense', amount: 0},
      {description : 'Total', ico: 'money', amount: 0},
    ] as DashboardData[]
  }),
  actions: {
    loadTransactions() {
      this.transactions = [{description: 'Criação de site', amount: 15000, category: 'Venda', type: 'recipe', date: '12-04-2022'}]
    },

    loadDashboard() {
      let recipe = 0
      let expenses = 0

      this.transactions.map(transaction => {
          if(transaction.type === 'expense'){
            expenses += transaction.amount
          } else if (transaction.type === 'recipe'){
            recipe += transaction.amount
          }
      })

      const total = recipe - expenses

     this.cardsData[0].amount = recipe
     this.cardsData[1].amount = expenses
     this.cardsData[2].amount = total
    },

    createTransaction(transaction : Transaction){
      this.transactions.push(transaction)
    }

  },
  getters: {
    all(state):Transaction[] {
      return state.transactions
    },
    dashboardData(state): DashboardData[] {
      return state.cardsData
    },


  },
})