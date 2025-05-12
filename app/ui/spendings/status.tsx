import { ArrowDownTrayIcon, ArrowUpIcon, ArrowUpTrayIcon, CheckIcon, ClockIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';

export default function TransactionType({ type }: { type: string }) {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full px-2 py-1 text-xs',
        {
          'bg-gray-100 text-gray-500': type === 'EXPENSE',
          'bg-green-400 text-white': type === 'INCOME',
        },
      )}
    >
      {type === 'EXPENSE' ? (
        <>
          Expense
          <ArrowUpTrayIcon className="ml-1 w-4 text-gray-500" />
        </>
      ) : null}
      {type === 'INCOME' ? (
        <>
          Income
          <ArrowDownTrayIcon className="ml-1 w-4 text-white" />
        </>
      ) : null}
    </span>
  );
}
