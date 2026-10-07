import { getPsychologistByVerbalId } from "@/app/lib/api/psychologists";

export default async function Psykolog({params,}: {
        params: Promise<{ verbalId: string }>;
    }) {
    const { verbalId } = await params;

    const psychologist = await getPsychologistByVerbalId(verbalId)

    return (
        <div className="min-h-screen bg-gray-100 px-4 py-12">
            <h2 className="text-2xl mt-2 text-gray-900">
                {psychologist.psycName}
            </h2>

        <h2 className="text-2xl mt-2 text-gray-900">
                {psychologist.streetAddress}
            </h2>

        <h2 className="text-2xl mt-2 text-gray-900">
                {psychologist.postalCode} {psychologist.city}
            </h2>
            
        </div>
    )
}