import { INSPECT_MAX_BYTES } from "buffer";
import { ChangeEvent, FC } from "react";
import useGlobal from "./globalContext";

interface Props extends React.InputHTMLAttributes<HTMLSelectElement> {
    flex?: number,
    items?: (
        string | number | [string | number][] | [string | number, string | number][] | { value: string | number, text?: string | number }
    )[]
}

const Select: FC<Props> = ({ style, name, onChange, children, items, flex = 1, ...props }) => {

    const { setFicha, ficha } = useGlobal()

    function handleChange(e: ChangeEvent<HTMLSelectElement>) {
        if (name) {
            setFicha(d => ({ ...d, [name]: e.target.value }))
        }
        if (onChange) onChange(e);
    }

    const STYLE_RESULT = {
        ...STYLE,
        ...style,
        ...(flex ? { flex } : {}),
    }

    const processValue = name ? { value: `${ficha[name]}` } : {}

    return <select
        style={STYLE_RESULT}
        onChange={handleChange}
        {...processValue}
        {...props}
    >
        {
            !items ? children :
                items.map((item, idx) => {
                    if (Array.isArray(item)) {
                        return <option key={idx} value={`${item[0]}`}>{item[1] || item[0]}</option>
                    } else if (typeof item === 'object') {
                        return <option key={idx} value={`${item.value}`}>{item.text || item.value}</option>
                    } else {
                        return <option key={idx} value={item}>{item}</option>
                    }
                })
        }
    </select>

}

const STYLE: React.CSSProperties = {
    padding: 10,
    margin: 3,
    border: 'solid 1px #ccc',
    outline: 'green',
    borderRadius: 4
}

export default Select;