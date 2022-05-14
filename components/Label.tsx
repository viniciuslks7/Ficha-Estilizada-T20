import React, { FC } from "react";
import DivFlex from "./DivFlex";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
    caption: string,
    flex?: number
}

const Label: FC<Props> = ({ children, caption, flex = 1 }) => {

    const CONTAINER_STYLE = {
        ...STYLE_CONTAINER,
        ...(flex ? { flex } : {})
    }

    return <div style={CONTAINER_STYLE}>
        <div style={STYLE_TITLE}>{caption}:</div>
        <div style={STYLE_CHILDREN}>{children}</div>
    </div>

}

const STYLE_CONTAINER: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: 3
}
const STYLE_TITLE: React.CSSProperties = {
    fontSize: 12,
    color: '#ccc'
}
const STYLE_CHILDREN: React.CSSProperties = {
    display: 'flex'
}

export default Label;