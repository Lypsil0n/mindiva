import bcrypt from 'bcrypt'

function generateIdentificationString() {
    let identifcationString = "";
    const stringLength = 6
    const chars = [
        '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
        'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
    ];

    for (let i = 0; i < stringLength; i++) {
        const index = Math.floor(Math.random() * chars.length);
        const chosenChar = chars[index]

        identifcationString += chosenChar
    }

    return identifcationString
}

const hashPassword = async (password) => {
    const saltRounds = 10;
    return await bcrypt.hash(password, saltRounds);
};

const comparePassword = async (password, hashed) => {
    return await bcrypt.compare(password, hashed);
};

export {hashPassword, comparePassword, generateIdentificationString}