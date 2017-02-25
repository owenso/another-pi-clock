     import React from 'react';     export default () => (     <svg version="1.1" id="sunsetAltFill" className="climacon climacon_sunsetAltFill" viewBox="15 15 70 70">
        <clipPath id="sunriseFillClip">
            <rect x="15" y="15" width="70" height="48.999" />
        </clipPath>
        <g className="climacon_iconWrap climacon_iconWrap-sunsetAltFill">
            <g clipPath="url(#sunriseFillClip)">
                <g className="climacon_componentWrap climacon_componentWrap-sunset climacon_componentWrap-sunsetAlt">
                    <g className="climacon_componentWrap climacon_componentWrap-sunSpoke">
                        <path className="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-east"
                            d="M72.31,77.999h-3.998c-1.104,0-2-0.896-2-1.999s0.896-2,2-2h3.998c1.104,0,2,0.896,2,2S73.416,77.999,72.31,77.999z"
                        />
                        <path className="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-northEast"
                            d="M64.455,64.688c-0.781,0.781-2.05,0.781-2.828,0c-0.781-0.78-0.781-2.047,0-2.828l2.828-2.827c0.778-0.781,2.047-0.781,2.828,0c0.778,0.78,0.778,2.047,0,2.827L64.455,64.688z"
                        />
                        <path className="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-north"
                            d="M50.313,60.002c-1.104,0-2-0.896-2-2v-3.999c0-1.104,0.896-2,2-2s2,0.896,2,2v3.999C52.313,59.105,51.416,60.002,50.313,60.002z"
                        />
                        <path className="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-northWest"
                            d="M36.172,64.688l-2.828-2.828c-0.781-0.78-0.781-2.047,0-2.827c0.781-0.781,2.047-0.781,2.828,0L39,61.859c0.781,0.781,0.781,2.048,0,2.828C38.22,65.469,36.954,65.469,36.172,64.688z"
                        />
                        <path className="climacon_component climacon_component-stroke climacon_component-stroke_sunSpoke climacon_component-stroke_sunSpoke-west"
                            d="M34.314,76c0,1.104-0.896,1.999-2,1.999h-4c-1.104,0-1.999-0.896-1.999-1.999s0.896-2,1.999-2h4C33.419,74,34.314,74.896,34.314,76z"
                        />
                    </g>
                    <g className="climacon_wrapperComponent climacon_wrapperComponent-sunBody">
                        <circle className="climacon_component climacon_component-stroke climacon_component-stroke_sunBody" cx="50.313" cy="76" r="11.999"
                        />
                        <circle className="climacon_component climacon_component-fill climacon_component-fill_sunBody" fill="#FFFFFF" cx="50.001" cy="76"
                            r="7.999" />
                    </g>
                </g>
            </g>
            <g className="climacon_wrapperComponent climacon_wrapperComponent-horizonLine">
                <path className="climacon_component climacon_component-stroke climacon_component-stroke_horizonLine" d="M40.001,63.998h19.998c1.104,0,2,0.896,2,2c0,1.105-0.896,2-2,2H40.001c-1.104,0-2-0.895-2-2C38.001,64.895,38.897,63.998,40.001,63.998z"
                />
            </g>
        </g>
    </svg>)