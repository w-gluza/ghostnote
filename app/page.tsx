import { createClient } from "@/utils/supabase/client";

export default async function Instruments() {
  const supabase = createClient();
  const { data: instruments, error } = await supabase
    .from("instruments")
    .select();

  if (error) return <p>Error loading instruments: {error.message}</p>;
  if (!instruments) return <p>No instruments found.</p>;

  return <pre>{JSON.stringify(instruments, null, 2)}</pre>;
}
