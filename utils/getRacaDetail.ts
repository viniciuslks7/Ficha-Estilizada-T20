import { RACAS_DETAIL } from "../components/consts/racas";

export function getRacaDetail(raca: string) {
    return RACAS_DETAIL.find(rc =>
        rc.name.toLowerCase() === (raca || '').trim().toLowerCase()
    ) || null;
}