import {serve} from "inngest/next";
import {inngest} from "@/lib/inngest/client";
import {sendDailyNewsSummary, sendSignUpEmail} from "@/lib/inngest/functions";
// ✅ Force Node runtime (important for Inngest)
export const runtime = "nodejs";


export const { GET, POST, PUT } = serve({
    client: inngest,
    functions: [sendSignUpEmail , sendDailyNewsSummary],
})