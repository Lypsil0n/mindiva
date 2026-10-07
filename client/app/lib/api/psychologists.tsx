export async function getPsychologistByVerbalId(verbalId: string) {
    const res = await fetch(`${process.env.API_URL}/api/v1/psychologists/${verbalId}`, {
        headers: {
            'Content-Type': 'application/json'
        }
    })

    if (!res.ok) {
        console.log(res)
        throw new Error(`Failed to fetch`)
    }

    return res.json()
}