    "use server";

    import { supabase } from "../utils/supabase/client";

    export const addClient = async (formData) => {
    try {
        const { data, error } = await supabase
        .from("consultations")
        .insert([
            {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            business_name: formData.businessName || null, 
            service_type: formData.serviceType, 
            },
        ])
        .select();

        if (error) throw error;

        return { success: true, data };
    } catch (err) {
        console.error("Error inserting consultation:", err.message);
        return { success: false, error: err.message };
    }
    };
