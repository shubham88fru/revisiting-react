import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY; //not dangerous to do this.

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
