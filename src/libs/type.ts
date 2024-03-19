




export type tOperation = {
  date: string, 
  description: string, 
  amount: number,
  counter?: number,
}

export type tAccount = {
  name: string,
  balance: number, 
  color: string, 
  operations: tOperation[],
}