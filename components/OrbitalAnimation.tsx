import * as React from 'react'
import Orbit from "./Orbit";
import OrbitalFigure from "./OrbitalFigure";

type OrbitalAnimationProps = {
    idx: number,
    radius: number,
    figureSize: number,
    translateX?: number,
    translateY?: number,
    orbitProps: {
        width?: number,
        color: string
    },
    figureProps: {
        x?: number,
        y?: number,
        translateZ?: number,
        type: string,
        color: string
    }
}
const OrbitalAnimation: React.FunctionComponent<OrbitalAnimationProps>
    = props => (
    <div>
        <Orbit idx={props.idx} {...props.orbitProps} radius={props.radius} translateX={props.translateX} translateY={props.translateY}/>
        <OrbitalFigure
            idx={props.idx}
            {...props.figureProps}
            figureSize={props.figureSize}
            radius={props.radius + (props.figureSize/2)}
            translateX={props.translateX-(props.figureSize/2)}
            translateY={props.translateY+(props.radius-(props.figureSize/2))}
        />
    </div>
)
export default OrbitalAnimation