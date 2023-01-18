import { defineStore } from 'pinia'
import { Transaction } from '@/models'
import { api as axios } from '@/services/api'


interface DashboardData {
  description : string, ico: string, amount : number
}

interface Toastify {
  type : 'error' | 'success',
  show : boolean,
  message : 'string'
}

export const useTransactionStore = defineStore('transactions', {
  state: () => ({
    transactions: [] as Transaction[],
    cardsData: [
      {description : 'Entradas', ico: 'recipe', amount: 0},
      {description : 'Saídas', ico: 'expense', amount: 0},
      {description : 'Total', ico: 'money', amount: 0},
    ] as DashboardData[],

    loading : false,
    modalOpen : false,

    toastNotification : {
      type : 'succes',
      show : false,
      message : ''
    }
  }),
  actions: {
    async loadTransactions() {
      this.loading = true
      await axios.get('/transactions')
      .then(response => {
        this.transactions = response.data
        this.loadDashboard()
        this.loading = false
      })
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

    async createTransaction(transaction : Transaction){
      this.loading = true
      await axios.post('/transactions', transaction)
      .then(response => {
        if(response.status === 200){
          this.loading = false
          this.toggleModal()
          this.transactions.push(transaction)

          this.toastNotification.message = 'Transação cadastrada com sucesso'
          this.toastNotification.type = 'success'
          this.toastNotification.show = true

          this.loadDashboard()

          this.showToast()
        }
      })
    },

    showToast(){
      setTimeout(() => {
        this.toastNotification.show = false
      }, 5000)
    },

    toggleModal(){
      this.modalOpen = !this.modalOpen
    }
  },
  getters: {
    $all(state):Transaction[] {
      return state.transactions
    },
    $dashboardData(state): DashboardData[] {
      return state.cardsData
    },
    $loading(state){
      return state.loading
    },
    $modalOpen(state){
      return state.modalOpen
    },

    $toast(state){
      return state.toastNotification
    }


  },
})