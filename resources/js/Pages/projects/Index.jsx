import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Index({projects}){
    return(
        <AuthenticatedLayout

        header={
            <h2 className="text-xl font-semibold leading-tight text-gray-800">
                Projects
            </h2>
        }
        >
            <Head title="Projects" />

<div className="py-12">
    <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900">
             <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
             <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2 border-gray-500 ">
                <tr>
                    <th></th>
                </tr>
             </thead>
             <tbody>
                <tr>
                    <td></td>
                </tr>
             </tbody>
             </table>
            </div>
        </div>
    </div>
</div>

        </AuthenticatedLayout>
    )
}