import { ChangeEvent, FC } from "react";
import useGlobal from "./globalContext";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    flex?: number,
    width?: string | number
}

const Input: FC<Props> = ({ style, name, onChange, flex = 1, value, width, ...props }) => {

    const { setFicha, ficha } = useGlobal()

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        if (name) {
            setFicha(d => ({ ...d, [name]: e.target.value }))
        }
        if (onChange) onChange(e);
    }

    const STYLE_RESULT = {
        ...STYLE,
        ...style,
        ...(flex ? { flex } : {}),
        ...(width ? { width } : {}),
    }

    const processValue = (value !== undefined) ? { value } :
        name ? { value: `${ficha[name] || ''}` } :
            {}

    return <input
        style={STYLE_RESULT}
        onChange={handleChange}
        {...processValue}
        {...props}
    />

}

const STYLE: React.CSSProperties = {
    padding: 10,
    margin: 3,
    border: 'solid 1px #cfcfcf',
    outline: 'green',
    borderRadius: 4
}

export default Input;