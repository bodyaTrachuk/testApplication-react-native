import * as React from "react";
import Svg, { G, Rect, Path } from "react-native-svg";

function SvgComponent() {
  return (
    <Svg width={104} height={48} viewBox="0 0 104 48" fill="none">
      <G opacity={0.64}>
        <Rect
          x={60.0002}
          y={1.99988}
          width={44.0001}
          height={44.0001}
          rx={22}
          fill="#E2ED5C"
        />
        <Path
          d="M83.41 13.458h-3.748a.917.917 0 00-.869.626l-3.3 9.848a.917.917 0 00.87 1.208h2.725c.59 0 1.026.55.893 1.124l-1.728 7.438c-.227.978 1.057 1.557 1.64.74L88.3 22.649a.917.917 0 00-.746-1.448H83.08a.917.917 0 01-.854-1.25l2.039-5.244a.917.917 0 00-.854-1.249z"
          fill="#06070A"
        />
      </G>
      <G opacity={0.63}>
        <Rect
          x={0.000244141}
          y={2}
          width={43.9999}
          height={43.9999}
          rx={22}
          fill="#F7D16D"
        />
        <Path
          d="M29.677 25.869c0-6.723-7.47-11.952-7.47-11.952s-7.47 5.229-7.47 11.952a7.47 7.47 0 1014.94 0z"
          fill="#606773"
        />
        <Path
          d="M26.69 25.869a4.482 4.482 0 01-4.483 4.482"
          stroke="#C1C4CB"
          strokeWidth={1.375}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Rect
        x={28}
        y={-0.0000610352}
        width={47.9999}
        height={47.9999}
        rx={24}
        fill="#CB9655"
      />
      <Path
        d="M54.382 15.5h-4.764a1 1 0 00-.894.553l-2.5 5a1 1 0 00.894 1.447h9.764a1 1 0 00.894-1.447l-2.5-5a1 1 0 00-.894-.553zM47.382 25h-4.764a1 1 0 00-.894.553l-2.5 5A1 1 0 0040.118 32h9.764a1 1 0 00.894-1.447l-2.5-5a1 1 0 00-.894-.553zM61.382 25h-4.764a1 1 0 00-.894.553l-2.5 5A1 1 0 0054.118 32h9.764a1 1 0 00.894-1.447l-2.5-5a1 1 0 00-.894-.553z"
        fill="#fff"
      />
    </Svg>
  );
}

export default SvgComponent;