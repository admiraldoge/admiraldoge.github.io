import * as React from 'react'
import styles from '../styles/Triangle.module.scss'
import 'antd/dist/antd.css';
type TriangleProps = {
    size: number,
    color: string,
    opacity?: number,
    style?: object
}
const Triangle: React.FunctionComponent<TriangleProps> = ({size,style={}, color,opacity=1}) => (
    <svg style={style} height={size} width={size}>
        <circle cx={size/2} cy={size/2} r={size/2} fill={color} fillOpacity={opacity}/>
    </svg>
)
export default Triangle