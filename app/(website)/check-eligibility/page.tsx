import CheckEligibility from "@/components/CheckEligibility";
import { getEnrollmentData } from "@/sanity/lib/fetch"

export default async function Page() {
  const data = await getEnrollmentData({ slug: "check-eligibility", lang: 'en' });

  return (
    <main>
      <div className="bg-cream rounded-b-2xl text-green">
        <CheckEligibility {...data} />
      </div>
    </main>
  )
}