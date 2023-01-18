export interface Transaction {
    description : string
    amount : number
    category : string
    type : 'recipe' | 'expense'
    date? : string
}