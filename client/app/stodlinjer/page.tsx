import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stödlinjer - Mindiva"
};

export default function Stodlinjer() {
    return(
    <div className="min-h-screen bg-gray-100 px-4 text-center">
        <h1 className="text-3xl mt-2 font-bold text-gray-900">
          Stödlinjer
        </h1>

        <h2 className="text-2xl mt-2 text-gray-900">
          Det finns hjälp att få.
        </h2>
        
        <h2 className="text-2xl mt-2 font-bold text-gray-900">
          Om du mår så dåligt att det känns outhärdligt eller har planer på att ta ditt liv, sök genast vård på en <a className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600" href='https://www.1177.se/hitta-vard/?caretype=Akutverksamhet+vid+sjukhus,+vuxenpsykiatri&q=' target="_blank">akutpsykiatrisk mottagning</a> eller ring 112.
        </h2>
    </div>
    )
}