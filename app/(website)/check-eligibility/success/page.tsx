import { getEnrollmentData } from "@/sanity/lib/fetch"
import CheckEligibilitySuccess from "./CheckEligibilitySuccess";

export default async function Page() {
  const data = await getEnrollmentData({ slug: "check-eligibility", lang: 'en' });

  return (
    <main>
      <div className="bg-cream rounded-b-2xl text-green">
        <CheckEligibilitySuccess {...data} />
      </div>
    </main>
  )
}