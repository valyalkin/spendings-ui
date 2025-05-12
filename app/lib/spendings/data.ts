export type TransactionDTO = {
    id: string; // UUID as a string
    account: string;
    category: SpendingCategory;
    amount: number; // BigDecimal as a number
    currency: string;
    date: string; // LocalDate as an ISO string 
    merchant: string;
    details: string;
    type: TransactionType;
};

export enum SpendingCategory {
    UNKNOWN = "UNKNOWN",
    EATING_OUT = "EATING_OUT",
    SOCIAL_LIFE = "SOCIAL_LIFE",
    PETS = "PETS",
    TRANSPORT_PUBLIC = "TRANSPORT_PUBLIC",
    TRANSPORT_TAXI = "TRANSPORT_TAXI",
    TRANSPORT_VEHICLE = "TRANSPORT_VEHICLE",
    APPAREL = "APPAREL",
    HEALTH = "HEALTH",
    EDUCATION = "EDUCATION",
    GROCERIES = "GROCERIES",
    HOUSEHOLD = "HOUSEHOLD",
    BILLS = "BILLS",
    SPORT = "SPORT",
    TRAVEL = "TRAVEL",
    OTHER = "OTHER",
}

export enum TransactionType {
    INCOME = "INCOME",
    EXPENSE = "EXPENSE",
}

export default async function fetchTransactions(): Promise<TransactionDTO[]> {
    const data = await fetch("http://localhost:8081/api/v1/transactions");
    const transactions: TransactionDTO[] = await data.json();
    return transactions;
}