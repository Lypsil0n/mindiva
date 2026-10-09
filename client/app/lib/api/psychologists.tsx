export async function getPsychologistByVerbalId(verbalId: string) {
    const res = await fetch(`${process.env.API_URL}/api/v1/psychologists/${verbalId}`, {
        headers: {
            'Content-Type': 'application/json'
        }
    })

    if (!res.ok) {
        if (res.status == 404) {
            return {
                "error": res.status
            }
        }
    }

    return res.json()
}