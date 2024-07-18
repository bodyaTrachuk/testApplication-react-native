import * as React from "react";
import Svg, { Circle, G, Rect, Path } from "react-native-svg";

function SvgComponent() {
  return (
    <Svg width={104} height={49} viewBox="0 0 104 49" fill="none">
      <Circle cx={54.0002} cy={25} r={24} fill="#fff" />
      <G opacity={0.64}>
        <Rect
          x={60.0002}
          y={2}
          width={43.9999}
          height={43.9999}
          rx={22}
          fill="#617DEA"
        />
        <Rect
          x={60.0002}
          y={2}
          width={43.9999}
          height={43.9999}
          rx={22}
          fill="#49C1B5"
        />
        <Path
          d="M84.05 20.945v-2.471h5.652v-3.766h-15.39v3.766h5.653v2.469c-4.594.21-8.048 1.12-8.048 2.21 0 1.09 3.456 2 8.047 2.212v7.917h4.087v-7.917c4.586-.212 8.033-1.121 8.033-2.21s-3.447-1.998-8.033-2.21zm.001 3.75v-.003c-.115.008-.707.043-2.026.043-1.055 0-1.797-.03-2.059-.043v.003c-4.058-.18-7.087-.887-7.087-1.732 0-.846 3.03-1.552 7.087-1.732v2.76c.266.018 1.027.063 2.076.063 1.26 0 1.894-.053 2.01-.063v-2.76c4.05.18 7.073.888 7.073 1.73 0 .843-3.024 1.551-7.073 1.732"
          fill="#fff"
        />
      </G>
      <G opacity={0.63}>
        <Rect
          x={0.000244141}
          y={2}
          width={44.0001}
          height={44.0001}
          rx={22}
          fill="#617DEA"
        />
        <Path
          d="M21.71 11.167v9.15l7.733 3.456-7.733-12.606z"
          fill="#fff"
          fillOpacity={0.602}
        />
        <Path d="M21.713 11.167l-7.734 12.606 7.734-3.456v-9.15z" fill="#fff" />
        <Path
          d="M21.71 29.7v6.216l7.738-10.706-7.738 4.49z"
          fill="#fff"
          fillOpacity={0.602}
        />
        <Path d="M21.713 35.916V29.7l-7.734-4.489 7.734 10.706z" fill="#fff" />
        <Path
          d="M21.71 28.261l7.733-4.49-7.733-3.455v7.945z"
          fill="#fff"
          fillOpacity={0.2}
        />
        <Path
          d="M13.98 23.772l7.733 4.49v-7.946l-7.734 3.456z"
          fill="#fff"
          fillOpacity={0.602}
        />
      </G>
      <Rect x={28} width={47.9999} height={47.9999} rx={24} fill="#FA8A34" />
      <Path
        d="M60.207 21.844c.343-2.311-1.404-3.554-3.793-4.383l.775-3.131-1.893-.476-.754 3.05a78.327 78.327 0 00-1.516-.36l.76-3.069L51.894 13l-.775 3.13a63.69 63.69 0 01-1.209-.286l.003-.01-2.61-.656-.503 2.036s1.404.324 1.374.344c.766.193.905.704.882 1.109l-.883 3.567c.053.014.121.033.197.064l-.2-.05-1.238 4.997c-.094.235-.331.586-.867.453.019.028-1.376-.346-1.376-.346l-.939 2.182 2.462.618c.459.116.908.237 1.35.351l-.783 3.167 1.89.475.775-3.133c.517.141 1.018.271 1.508.394l-.773 3.119 1.893.475.783-3.161c3.227.615 5.653.367 6.674-2.573.823-2.367-.04-3.733-1.738-4.623 1.236-.287 2.167-1.106 2.416-2.799zm-4.324 6.107c-.585 2.368-4.541 1.088-5.824.767l1.04-4.196c1.282.323 5.396.96 4.784 3.43zm.586-6.14c-.534 2.152-3.827 1.058-4.895.79l.942-3.805c1.068.268 4.508.768 3.953 3.014z"
        fill="#fff"
      />
    </Svg>
  );
}

export default SvgComponent;
