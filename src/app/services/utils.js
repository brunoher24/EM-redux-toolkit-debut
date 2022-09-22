export const generateRandomChars = (num = 20) => {
    const chars = "AZERTYUIOPQSDFGHJKLMWXCVBNazertyuiopqsdfghjklmwxcvbn0123456789";
    let token = "_";
    for(let i = 0; i < num; i ++) {
        token += chars[Math.floor(Math.random() * chars.length)];
    }
    return token;
}