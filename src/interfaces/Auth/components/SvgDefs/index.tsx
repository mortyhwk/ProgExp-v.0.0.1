import React, {useEffect} from 'react'
import './styles.sass'

const SvgDefs: React.FC = () => {
    useEffect(() => {
        const polygon = document.getElementById('tick') as SVGElement;

        if (polygon instanceof SVGGeometryElement) {
            const length = polygon.getTotalLength();
            console.log(`Длина контура полигона: ${length}`);
        } else {
            console.error('Элемент не является геометрическим элементом SVG.');
        }
    }, []);

    return (
        <div className="SvgDefs">
            <svg xmlns="http://www.w3.org/2000/svg" width="70.54" height="46.63">
                <defs>
                    <linearGradient id="gradient-4" x1="29.1" y1=".18" x2="29.1" y2="30.16"
                                    gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor="#00bfff"/>
                        <stop offset="1" stopColor="#4da4c1"/>
                    </linearGradient>
                    <linearGradient id="gradient-1" x1="42.3" y1="30.34" x2="42.3" y2="8.72" xlinkHref="#gradient-4"/>
                    <linearGradient id="gradient-5" x1="22.2" y1="30.54" x2="22.2" y2="0"
                                    gradientTransform="translate(45.43 28.36) rotate(175)"
                                    gradientUnits="userSpaceOnUse">
                        <stop offset="0" stopColor="#8a2be2"/>
                        <stop offset="1" stopColor="#ff0e54"/>
                    </linearGradient>
                    <linearGradient id="gradient-3" x1="35.45" y1="30.34" x2="35.45" y2="8.54"
                                    gradientTransform="translate(72.46 35.71) rotate(175)" xlinkHref="#gradient-5"/>
                    <linearGradient id="gradient-2" x1="49.03" y1="30.37" x2="49.03" y2="15.17"
                                    gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlinkHref="#gradient-5"/>
                </defs>
                <g id="logotype-black">
                    <g>
                        <polygon className="cls-4"
                                 points="21.61 2.46 26.76 .18 36.59 27.62 31.16 30.16 21.61 2.46"/>
                        <polygon className="cls-1"
                                 points="34.95 11.76 39.75 8.72 49.66 27.31 45.16 30.34 34.95 11.76"/>
                        <path className="cls-5"
                              d="m21.16-.17h1.87c1.33,0,2.41,1.08,2.41,2.41v23.45c0,2.66-2.16,4.82-4.82,4.82h-1.87V2.24c0-1.33,1.08-2.41,2.41-2.41Z"
                              transform="translate(42.79 32.21) rotate(-175)"/>
                        <path className="cls-3"
                              d="m36.93,8.38h1.87v17.29c0,2.66-2.16,4.82-4.82,4.82h-1.87V13.2c0-2.66,2.16-4.82,4.82-4.82Z"
                              transform="translate(69.07 41.89) rotate(-175)"/>
                        <path className="cls-2"
                              d="m49.84,15.18h.08c1.81.17,3.13,1.74,2.97,3.53-.14,1.61-.32,3.63-.49,5.56-.32,3.68-3.57,6.4-7.25,6.08h0s.66-7.58,1.05-12.12c.16-1.84,1.78-3.2,3.63-3.04Z"/>
                    </g>
                    <text className="cls-6" transform="translate(0 44.11)">
                        <tspan x="0" y="0">ProgExp</tspan>
                    </text>
                </g>
                <polyline id="arrow" points="4 40.52 24 22.26 4 4"/>
                {/*<polygon id="tick"*/}
                {/*         points="6.88 0 2.82 4.06 1.2 2.44 0 3.63 1.63 5.26 1.62 5.26 2.82 6.45 8.08 1.2 6.88 0"/>*/}
                <polyline id="tick" points="4 17.49 18.11 33.33 45.96 4"/>
            </svg>
        </div>
    )
}

export default SvgDefs
