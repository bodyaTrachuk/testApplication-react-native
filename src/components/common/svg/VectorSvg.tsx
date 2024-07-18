import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgComponent() {
  return (
    <Svg width={1000} height={2} viewBox="0 0 900 2" fill="none">
      <Path d="M0 .874h374.5" stroke="#EBEFF5" />
    </Svg>
  );
}

export default SvgComponent;
