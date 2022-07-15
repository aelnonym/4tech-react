export interface IExpenses {
    id: number;
    date: number;
    description: string;
    category: string;
    value: number;
}  

// Data Transfer Object
export interface SaveExpenseDto extends Omit<IExpenses, 'id'> {
    id?: number;
}