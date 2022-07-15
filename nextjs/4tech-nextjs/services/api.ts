import axios from "axios";
import ICategory from "../models/ICategory";
import { IExpenses, SaveExpenseDto } from "../models/IExpense";

export const api = axios.create({
    baseURL: "http://localhost:3333",
});

export const getCategories = async () => {
    const response = await api.get<ICategory[]>("/categories");
    return response.data;
};

export const saveExpense = async (expense: SaveExpenseDto) => {
    if(expense.id){
        //Edit 
        const response = await api.put<ICategory[]>(`/expenses/${expense.id}`, expense);
        return response.data;
    }
    const response = await api.post<ICategory[]>("/expenses", expense);
    return response.data;
};

export const deleteExpense = async (expense: IExpenses) => {
    await api.delete(`/expenses/${expense.id}`);
};

export const getExpenses = async () => {
    const response = await api.get<IExpenses[]>("/expenses");
    return response.data;
};
