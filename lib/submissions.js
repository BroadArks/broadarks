/* Sends a website form straight into Supabase (`ba_submissions`), where
   the BroadArks admin panel (broadarks-backend) picks it up.

   Uses the public anon key: row-level security only lets it INSERT the
   form columns - it can never read submissions back. */

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

/**
 * @param {{ kind?: "contact" | "application", name: string, email: string, phone?: string,
 *   organisation?: string, topics?: string[], message?: string, position?: string,
 *   resume_url?: string, details?: Record<string, unknown>, source_page?: string }} submission
 */
export async function submitForm(submission) {
  if (!SUPABASE_URL || !ANON_KEY) {
    throw new Error("The form isn't connected yet.");
  }
  const res = await fetch(`${SUPABASE_URL}/rest/v1/ba_submissions`, {
    method: "POST",
    headers: {
      apikey: ANON_KEY,
      Authorization: `Bearer ${ANON_KEY}`,
      "Content-Type": "application/json",
      Prefer: "return=minimal",
    },
    body: JSON.stringify({
      kind: "contact",
      source_page: typeof window !== "undefined" ? window.location.pathname : null,
      ...submission,
    }),
  });
  if (!res.ok) {
    throw new Error("We couldn't send your message.");
  }
}
