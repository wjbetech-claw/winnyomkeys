import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { getPreferredLocale, localeCookieName } from "@/i18n/config";

export default async function Home() {
  const cookieStore = await cookies();
  const locale = getPreferredLocale(cookieStore.get(localeCookieName)?.value);

  redirect(`/${locale}`);
}
