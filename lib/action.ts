"use server"
import {z} from "zod"

const ContactSchema = z.object({
    name : z.string().min(6),
    phone : z.string().min(11),
})
export const saveContact = async (formData: FormData) => {
    const ValidateFields = ContactSchema.safeParse(Object.fromEntries(formData.entries()));

    if(!ValidateFields.success) {
        return{
            Error : ValidateFields.error.flatten().fieldErrors
        }
    }
}