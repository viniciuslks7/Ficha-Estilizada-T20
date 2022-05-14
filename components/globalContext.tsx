import { ChangeEvent, useContext, useEffect } from "react";
import { createContext, useState } from "react";
import { fichaAdjustAttr } from "../utils/fichaAdjustAttr";
import { keyFromText } from "../utils/keyFromText";
import { simplyName } from "../utils/simplyName";
import { TFicha } from "./types/TFicha";

const MEMORY_FICHA_ID = 'memorydata579415weq687';

function setMemoryFicha(ficha: { [key: string]: any }) {
    localStorage.setItem(MEMORY_FICHA_ID, JSON.stringify(ficha))
}

function getMemoryFicha() {
    try {
        return JSON.parse(localStorage.getItem(MEMORY_FICHA_ID) || '{}')
    } catch (e) {
        return {}
    }
}

let TIME_MEMORY;
const TIME_MEMORY_TIME = 1000 * 1;

type TDefault = {
    ficha: TFicha, setFicha: (ficha: TFicha) => void,
    salvarFicha: () => void,
    carregarFicha: (e: ChangeEvent<HTMLInputElement>) => void,
}

const GlobalContext = createContext({} as TDefault)

export function GlabalProvider({ children }) {

    let [ficha, setFicha] = useState<TFicha>({});

    ficha = fichaAdjustAttr(ficha);

    function salvarFicha() {
        const strFicha = JSON.stringify(ficha);
        const data = {
            key: keyFromText(strFicha),
            ficha: ficha
        }
        const strData = JSON.stringify(data);
        const a = document.createElement('a');
        a.href = 'data:text/plain,' + encodeURIComponent(strData);
        a.download = simplyName(`${ficha?.jogador} - ${ficha?.personagem}`) + '.fc'
        a.click();
    }

    function carregarFicha(e: ChangeEvent<HTMLInputElement>) {
        const reader = new FileReader();
        reader.onload = e => {
            const str = e.target.result + '';
            try {
                const data = JSON.parse(str);
                const key = data.key;
                const fc = data.ficha;
                const strFicha = JSON.stringify(fc);
                if (keyFromText(strFicha) !== key || !key)
                    throw new Error(`O arquivo não pode ser carregado por ter sido adulterado`);
                console.log('fc :>> ', fc);
                setFicha(fc);
            } catch (e) {
                window.alert(`${e}`);
            }
        }
        reader.onerror = e => console.info('ERROR:', e);
        reader.readAsText(e.target.files[0]);
    }

    useEffect(() => {
        setFicha(getMemoryFicha())
    }, [])

    useEffect(() => {
        if (TIME_MEMORY) clearTimeout(TIME_MEMORY);
        TIME_MEMORY = setTimeout(() => {
            setMemoryFicha(ficha)
        }, TIME_MEMORY_TIME)
    }, [ficha])

    return <GlobalContext.Provider
        value={{
            ficha, setFicha, salvarFicha, carregarFicha
        }}
    >
        {children}
    </GlobalContext.Provider>

}

function useGlobal() {
    return useContext(GlobalContext)
}

export default useGlobal;