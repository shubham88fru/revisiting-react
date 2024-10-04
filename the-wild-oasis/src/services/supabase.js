import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://wjgldbngaxfwacpqquyw.supabase.co";
const supabaseKey = //not dangerous to do this.
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndqZ2xkYm5nYXhmd2FjcHFxdXl3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjcyMTM1MDMsImV4cCI6MjA0Mjc4OTUwM30.DMctVrjvrz76AD8KJAodu-8dPZVdiJ6ylvsOK9WR3Rk";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
