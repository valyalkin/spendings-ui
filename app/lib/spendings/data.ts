export type TransactionPage = {
    content: Transaction[]
    pageable: Pageable,
    totalPages: number,
    totalElements: number
}

export type Pageable = {
    pageNumber: number,
    pageSize: number,
    offset: number
}

export type Transaction = {
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

export type CreateTransactionDto = {
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

export async function fetchTransactions(
    query: string,
    page: number,
    pageSize: number = 10
): Promise<Transaction[]> {
    page = page - 1 // In backend, pagination starts with 0
    const data = await fetch(`http://localhost:8081/api/v1/transactions/pageable/by-query?query=${encodeURIComponent(query)}&page=${page}&pageSize=${pageSize}`);
    console.log(data.status)
    const transactions: TransactionPage = await data.json();
    return transactions.content;
}

export async function fetchTansactionPages(
    query: string,
    pageSize: number = 10,
): Promise<number> {

    const data = await fetch(`http://localhost:8081/api/v1/transactions/pageable/by-query?query=${encodeURIComponent(query)}&page=0&pageSize=${pageSize}`);
    const transactions: TransactionPage = await data.json();
    return transactions.totalPages
}

export async function fetchTransactionCategories(): Promise<string[]> {

    const data = await fetch(`http://localhost:8081/api/v1/transactions/categories`);

    const categories: string[] = await data.json()
    return categories

}

export async function createTransactionPost(transaction: CreateTransactionDto): Promise<Transaction> {
    const response = await fetch(`http://localhost:8081/api/v1/transactions`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(transaction),
    });

    if (!response.ok) {
        throw new Error(`Failed to create transaction: ${response.statusText}`);
    }

    const createdTransaction: Transaction = await response.json();
    return createdTransaction;
}