import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchCustomers } from '@/app/lib/data';
import Form from '@/app/ui/spendings/create-form';
import { fetchReferenceData } from '@/app/lib/spendings/data';

export default async function Page() {
    const customers = await fetchCustomers();

    const referenceData = await fetchReferenceData()

    return (
        <main>
            <Breadcrumbs
                breadcrumbs={[
                    { label: 'Spendings', href: '/spendings' },
                    {
                        label: 'Create Transaction',
                        href: '/spendings/create',
                        active: true,
                    },
                ]}
            />
            <Form customers={customers} referenceData={referenceData} />
        </main>
    );
}