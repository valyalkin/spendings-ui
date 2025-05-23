'use server';

import { z } from 'zod';
import postgres from 'postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { CreateTransactionDto, createTransactionPost } from './data';

// const sql = postgres('postgres://postgres:example@localhost:5432/postgres', { ssl: false });


// const FormSchema = z.object({
//     id: z.string(),
//     customerId: z.string(),
//     amount: z.coerce.number(),
//     status: z.enum(['pending', 'paid']),
//     date: z.string(),
// });

// const CreateInvoice = FormSchema.omit({ id: true, date: true });
// const UpdateInvoice = FormSchema.omit({ id: true, date: true });

const FormSchema = z.object(
    {
        id: z.string(),
        date: z.string(),
        amount: z.coerce.number(),
        account: z.string(),
        currency: z.string(),
        merchant: z.string(),
        type: z.string(),
        category: z.string()
    }
)

const CreateTransactionForm = FormSchema.omit({ id: true })


export async function createTransaction(formData: FormData) {

    console.log("form data:")
    console.log(formData)

    const {
        date,
        amount,
        account,
        currency,
        merchant,
        type,
        category
    } = CreateTransactionForm.parse({
        date: formData.get('date'),
        amount: formData.get('amount'),
        account: formData.get('account'),
        currency: formData.get('currency'),
        merchant: formData.get('merchant'),
        type: formData.get('type'),
        category: formData.get('category'),
    })

    const newTransaction: CreateTransactionDto = {
        account: account,
        category: category,
        amount: amount,
        currency: currency,
        date: date,
        merchant: merchant,
        details: "",
        type: type,
    };



    const transaction = await createTransactionPost(newTransaction)



    revalidatePath('/spendings');
    redirect('/spendings');
}


// export async function createInvoice(formData: FormData) {
//     const { customerId, amount, status } = CreateInvoice.parse({
//         customerId: formData.get('customerId'),
//         amount: formData.get('amount'),
//         status: formData.get('status'),
//     });

//     const amountInCents = amount * 100;
//     const date = new Date().toISOString().split('T')[0];

//     await sql`
//         INSERT INTO invoices (customer_id, amount, status, date)
//         VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
//     `;
//     /**
//      * 
//      * Since you're updating the data displayed in the invoices route,
//      *  you want to clear this cache and trigger a new request to the server.
//      *  You can do this with the revalidatePath function from Next.js:
//      */
//     revalidatePath('/dashboard/invoices');
//     redirect('/dashboard/invoices');
// }

// export async function updateInvoice(id: string, formData: FormData) {
//     const { customerId, amount, status } = UpdateInvoice.parse({
//         customerId: formData.get('customerId'),
//         amount: formData.get('amount'),
//         status: formData.get('status'),
//     });

//     const amountInCents = amount * 100;

//     await sql`
//       UPDATE invoices
//       SET customer_id = ${customerId}, amount = ${amountInCents}, status = ${status}
//       WHERE id = ${id}
//     `;

//     revalidatePath('/dashboard/invoices');
//     redirect('/dashboard/invoices');
// }

// export async function deleteInvoice(id: string) {
//     await sql`DELETE FROM invoices WHERE id = ${id}`;
//     revalidatePath('/dashboard/invoices');
// }