import { lusitana } from '@/app/ui/fonts';
import SpendingsTable from '../ui/spendings/table';
import Search from '../ui/spendings/search';
import { fetchTansactionPages } from '../lib/spendings/data';
import Pagination from '../ui/spendings/pagination';

export default async function Page(props: {
    searchParams?: Promise<{
        query?: string;
        page?: string;
    }>;
}) {

    const searchParams = await props.searchParams;
    const query = searchParams?.query || '';
    const currentPage = Number(searchParams?.page) || 1;
    const totalPages = await fetchTansactionPages(query)

    return (
        <div className="w-full">
            <div className="flex w-full items-center justify-between">
                <h1 className={`${lusitana.className} text-2xl`}>Spendings</h1>
            </div>
            <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
                <Search placeholder="Search..." />
                {/* <CreateInvoice /> */}
            </div>
            <SpendingsTable query={query} currentPage={currentPage} />
            <div className="mt-5 flex w-full justify-center">
                <Pagination totalPages={totalPages} />
            </div>
        </div>
    )
}