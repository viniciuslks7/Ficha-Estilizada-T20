import { FC } from "react"

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    flexDirection?: 'row' | 'column',
    gap?: number | string,
    flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse'
}

const DivFlex: FC<Props> = ({ style, flexDirection = 'row', gap = 10, flexWrap = 'wrap', ...props }) => {

    const STYLE_RESULT = { ...STYLE, ...style, flexDirection, gap, flexWrap }

    return <div
        style={STYLE_RESULT}
        {...props}
    />

}

const STYLE: React.CSSProperties = {
    display: 'flex',
}

export default DivFlex;