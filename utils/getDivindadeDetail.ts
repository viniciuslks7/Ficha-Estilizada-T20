import { DIVINDADES_DETAILS } from "../components/consts/divindades";


export function getDivindadeDetail(divin: string) {
    return DIVINDADES_DETAILS.find(dv =>
        dv.name.toLowerCase() === (divin || '').trim().toLowerCase()
    ) || null;
}