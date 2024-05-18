import { getContacts } from "@/lib/data"
import { formadDate } from "@/lib/utils"; 
import { EditButton, DeleteButton } from "@/components/button";

const ContactTable = async () => {
  const contacts = await getContacts();
  return (
    <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-sm text-left text-gray-700 upercase bg-gray-50">
            <tr>
                <th className="py-3 px-6">Number</th>
                <th className="py-3 px-6">Name</th>
                <th className="py-3 px-6">Phone Number</th>
                <th className="py-3 px-6">Created At</th>
                 <th className="py-3 px-6 text-center">Action</th>
            </tr>
        </thead>
        <tbody>
            {contacts.map((contact,index) => (
                <tr key={contact.id} className="bg-wite border-b">
                    <td className="py-3 px-6">{index + 1}</td>
                    <td className="py-3 px-6">{contact.name}</td>
                    <td className="py-3 px-6">{contact.phone}</td>
                    <td className="py-3 px-6">{formadDate(contact.createdAt.toString())}</td>
                    <td className="flex justify-ceneter gap-1 py-3">
                        <EditButton/>
                        <DeleteButton/>
                    </td>
                 </tr>
            ))}
            
        </tbody>
    </table>
  )
}

export default ContactTable