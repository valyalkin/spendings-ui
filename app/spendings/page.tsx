import { lusitana } from '@/app/ui/fonts';
import SpendingsTable from '../ui/spendings/table';

export default async function Page() {
    return (
        <div className="w-full">
            <div className="flex w-full items-center justify-between">
                <h1 className={`${lusitana.className} text-2xl`}>Spendings</h1>
            </div>
            <SpendingsTable query='' currentPage={1} />
        </div>
    )
}