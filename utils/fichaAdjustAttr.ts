import { TFicha } from "../components/types/TFicha";

function bonus(value: string = '0', value2: string = '0') {
    return (
        Math.trunc(
            (
                (Number(value) || 0) + (Number(value2) || 0)
            ) / 2
        ) - 5
    ) + ''
}

export function fichaAdjustAttr(ficha: TFicha) {
    let {
        car, car_ajust, car_bonus,
        con, con_ajust, con_bonus,
        des, des_ajust, des_bonus,
        for: forca, for_ajust, for_bonus,
        int, int_ajust, int_bonus,
        sab, sab_ajust, sab_bonus
    } = ficha;

    car_bonus = bonus(car_ajust, car);
    con_bonus = bonus(con_ajust, con);
    des_bonus = bonus(des_ajust, des);
    for_bonus = bonus(for_ajust, forca);
    int_bonus = bonus(int_ajust, int);
    sab_bonus = bonus(sab_ajust, sab);

    return {
        ...ficha,
        car_bonus, con_bonus, des_bonus, for_bonus, int_bonus, sab_bonus
    }

}