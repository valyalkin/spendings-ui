import Image from 'next/image';
import { UpdateInvoice, DeleteInvoice } from '@/app/ui/invoices/buttons';
import InvoiceStatus from '@/app/ui/invoices/status';
import { formatDateToLocal, formatCurrency } from '@/app/lib/utils';
import { fetchFilteredInvoices } from '@/app/lib/data';
import { fetchTransactions, fetchTransactionCategories } from '@/app/lib/spendings/data';
import { DeleteTransaction, UpdateTransaction } from './buttons';
import TransactionType from './status';

export default async function SpendingsTable({
    query,
    currentPage,
}: {
    query: string;
    currentPage: number;
}) {
    // const invoices = await fetchFilteredInvoices(query, currentPage);
    console.log(`Query ${query}`)
    console.log(`Current page ${currentPage}`)
    const transactions = await fetchTransactions(
        query = query,
        currentPage = currentPage
    );
    console.log(transactions);

    const categories = await fetchTransactionCategories()
    console.log(categories)

    return (
        <div className='mt-6 flow-root'>
            <div className="inline-block min-w-full align-middle">
                <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
                    {/* <div className="md:hidden"></div>
                    {
                        transactions?.map(
                            (transaction) => (
                                <div key={transaction.id} className="mb-2 w-full rounded-md bg-white p-4">
                                    <div className="flex items-center justify-between border-b pb-4">
                                        <div>
                                            <div className="mb-2 flex items-center">
                                                <p>{transaction.account}</p>
                                            </div>
                                            <p className="text-sm text-gray-500">{transaction.amount}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        )
                    } */}
                    <table className="hidden min-w-full text-gray-900 md:table">
                        <thead className="rounded-lg text-left text-sm font-normal">
                            <tr>
                                <th scope="col" className="px-3 py-4 font-medium">
                                    Date
                                </th>
                                <th scope="col" className="px-3 py-4 font-medium">
                                    Amount
                                </th>
                                <th scope="col" className="px-3 py-4 font-medium">
                                    Account
                                </th>
                                <th scope="col" className="px-3 py-4 font-medium">
                                    Currency
                                </th>
                                <th scope="col" className="px-3 py-4 font-medium">
                                    Merchant
                                </th>
                                <th scope="col" className="px-3 py-4 font-medium">
                                    Category
                                </th>
                                {/* <th scope="col" className="px-3 py-4 font-medium">
                                    Details
                                </th> */}
                                <th scope="col" className="px-3 py-4 font-medium">
                                    Type
                                </th>
                                {/* <th scope="col" className="relative py-3 pl-6 pr-3">
                                    <span className="sr-only">Edit</span>
                                </th> */}
                            </tr>
                        </thead>
                        <tbody className="bg-white">
                            {transactions?.map((transaction) => (
                                <tr
                                    key={transaction.id}
                                    className="w-full border-b py-3 text-sm last-of-type:border-none [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                                >
                                    <td className="whitespace-nowrap py-2 pl-3 pr-3">
                                        {transaction.date}
                                    </td>
                                    <td className="whitespace-nowrap px-3 py-2">
                                        {transaction.amount}
                                    </td>
                                    <td className="whitespace-nowrap px-3 py-2">
                                        {transaction.account}
                                    </td>
                                    <td className="whitespace-nowrap px-3 py-2">
                                        {transaction.currency}
                                    </td>
                                    <td className="whitespace-nowrap px-3 py-2">
                                        {transaction.merchant}
                                    </td>
                                    <td className="whitespace-nowrap px-3 py-2">
                                        <select
                                            defaultValue={transaction.category}
                                            className="whitespace-nowrap text-sm px-3 py-2"
                                        >
                                            {categories.map((category) => (
                                                <option key={category} value={category}>
                                                    {category}
                                                </option>
                                            ))}
                                        </select>
                                    </td>
                                    {/* <td className="whitespace-nowrap px-3 py-2">
                                        {transaction.details}
                                    </td> */}
                                    <td className="whitespace-nowrap px-3 py-2">
                                        <TransactionType type={transaction.type} />
                                    </td>
                                    {/* <td className="whitespace-nowrap py-3 pl-6 pr-3"> */}
                                    {/* <div className="flex justify-end gap-3"> */}
                                    {/* <UpdateTransaction id={transaction.id} /> */}
                                    {/* <DeleteTransaction id={transaction.id} /> */}
                                    {/* </div> */}
                                    {/* </td> */}
                                </tr>
                            ))}
                        </tbody>
                    </table>

                </div>
            </div>
        </div>


    )
}
