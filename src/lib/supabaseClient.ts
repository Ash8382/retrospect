import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://nkaeeruvtutlshycjvhl.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5rYWVlcnV2dHV0bHNoeWNqdmhsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc3MzMxNjIsImV4cCI6MjA2MzMwOTE2Mn0.9XUR7zshJyMJWIF32kmTY6kK_b5yUVf2wId7PiJYk40";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
