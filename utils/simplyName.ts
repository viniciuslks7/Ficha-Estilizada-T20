export function simplyName(text: string) {
    return text.replace(/[^a-zA-Z0-p]/g, '_')
}