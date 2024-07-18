import * as React from "react";
import Svg, { Ellipse, Path } from "react-native-svg";

function SvgComponent() {
  return (
    <Svg width={50} height={54} viewBox="0 0 50 54" fill="none">
      <Ellipse
        cx={25}
        cy={26.8278}
        rx={24}
        ry={25.8278}
        fill="#F2FAF7"
        stroke="#E9F7F2"
      />
      <Path
        d="M16 35.437l.135-.937c.175-1.205.872-2.28 1.994-2.754 1.305-.55 3.218-1.165 5.256-1.165 2.037 0 3.95.614 5.255 1.165 1.122.474 1.82 1.55 1.994 2.754l.135.937"
        stroke="#00A385"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M32.204 24.32v4.315M34.25 26.477h-4.09"
        stroke="#00A385"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M23.385 27.049c2.266 0 4.102-1.977 4.102-4.415 0-2.439-1.836-4.416-4.102-4.416s-4.103 1.977-4.103 4.416c0 2.438 1.837 4.415 4.103 4.415z"
        stroke="#00A385"
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SvgComponent;
