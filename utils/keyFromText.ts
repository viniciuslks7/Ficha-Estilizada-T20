const KEY = 135;
const MAX = 256 * 256 - 1;

/** gera um código de 2 bytes se baseando no texto passado */
export function keyFromText(text: string) {
    text = `${text}`
    return [...text].reduce((result, char) => {
        result = (result + char.charCodeAt(0) * KEY) & MAX;
        return result;
    }, 0)
}