import { CustomerField } from '@/app/lib/definitions';
import Link from 'next/link';
import {
  CheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import { Button } from '@/app/ui/button';
import { createTransaction } from '@/app/lib/spendings/actions';
import { randomUUID } from 'crypto';
import { SpendingCategory } from '@/app/lib/spendings/data';

export default function Form({ customers }: { customers: CustomerField[] }) {


  const accounts = [
    "DBS",
    "SC",
    "CITI"
  ]

  const currencies = [
    "SGD",
    "USD"
  ]

  const categories = Object.values(SpendingCategory);

  const types = [
    "EXPENSE",
    "INCOME"
  ]

  return (
    <form action={createTransaction}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* Transaction Date */}
        <div className="mb-4">
          <label htmlFor="date" className="mb-2 block text-sm font-medium">
            Transaction Date
          </label>
          <input
            id="date"
            name="date"
            type="date"
            className="block w-full rounded-md border border-gray-200 py-2 px-3 text-sm outline-2 placeholder:text-gray-500"
          />
        </div>

        {/* Amount */}
        <div className="mb-4">
          <label htmlFor="amount" className="mb-2 block text-sm font-medium">
            Amount
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="amount"
                name="amount"
                type="number"
                step="0.01"
                placeholder="Enter amount"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>

        {/* Account */}
        <div className="mb-4">
          <label htmlFor="account" className="mb-2 block text-sm font-medium">
            Account
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <select
                id="account"
                name="account"
                className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                defaultValue=""
              >
                <option value="" disabled>
                  Select the account
                </option>
                {accounts.map((account) => (
                  <option key={randomUUID()}>
                    {account}
                  </option>
                ))}
              </select>
              <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>


        {/* Currency */}
        <div className="mb-4">
          <label htmlFor="currency" className="mb-2 block text-sm font-medium">
            Currency
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <select
                id="currency"
                name="currency"
                className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                defaultValue="SGD"
              >
                <option value="" disabled>
                  Select the currency
                </option>
                {currencies.map((account) => (
                  <option key={randomUUID()}>
                    {account}
                  </option>
                ))}
              </select>
              <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>

        {/* Merchant */}
        <div className="mb-4">
          <label htmlFor="merchant" className="mb-2 block text-sm font-medium">
            Merchant
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="merchant"
                name="merchant"
                type="text"
                placeholder="Enter merchant"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              />
              <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>


        {/* Category */}
        <div className="mb-4">
          <label htmlFor="category" className="mb-2 block text-sm font-medium">
            Category
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <select
                id="category"
                name="category"
                className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                defaultValue="UNKNOWN"
              >
                <option value="" disabled>
                  Select the currency
                </option>
                {categories.map((category) => (
                  <option key={randomUUID()}>
                    {category}
                  </option>
                ))}
              </select>
              <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>

        {/* Type */}
        <div className="mb-4">
          <label htmlFor="type" className="mb-2 block text-sm font-medium">
            Type
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <select
                id="type"
                name="type"
                className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                defaultValue="EXPENSE"
              >
                <option value="" disabled>
                  Select the type of transaction
                </option>
                {types.map((type) => (
                  <option key={randomUUID()}>
                    {type}
                  </option>
                ))}
              </select>
              <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/spendings"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Create Transaction</Button>
      </div>
    </form>
  );
}
