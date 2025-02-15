import * as React from "react";

/**
 * BrandSvg component with dynamic size.
 * 
 * @param {Object} props - Component properties.
 * @param {'sm' | 'md' | 'lg'} [props.size="md"] - Size variant.
 * @returns {JSX.Element} A responsive SVG component.
 */
const BrandSvg = ({ size = "md", ...props }) => {
  const sizes = {
    sm: { width: 57, height: 25 },   // 50% of original
    md: { width: 114, height: 51 },  // Default size (original)
    lg: { width: 171, height: 76.5 } // 150% of original
  };

  const { width, height } = sizes[size] || sizes.md;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 114 51"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M34.0629 22.6534V22.6839C35.5293 22.6839 37.1179 23.1116 38.8286 23.9365C39.3174 24.2114 39.8368 24.5475 40.4172 24.9446C41.4254 25.8 42.1585 26.5332 42.5862 27.1747C43.2278 28.0607 43.686 28.855 43.9304 29.5576C44.5109 30.9323 44.7858 32.246 44.7858 33.4985V50.6369L0 50.6369L0 34.1095C0 30.2908 1.52748 27.1747 4.58245 24.8224C5.28509 24.3031 5.92664 23.9365 6.44598 23.6921C8.00401 23.02 9.43985 22.6839 10.7535 22.6839V22.6534C9.74535 22.6534 8.49281 22.409 7.05697 21.8896C4.15476 20.6676 2.07738 18.6208 0.824843 15.7186C0.274949 14.3744 0 12.8469 0 11.1667L0 0.291017L0.0305519 0.260468L44.7858 0.260469V11.8388C44.7858 13.3663 44.3581 14.9854 43.5027 16.7267C43.1361 17.4294 42.6473 18.132 42.0363 18.8347C41.1504 19.7512 40.6311 20.24 40.4478 20.3011C39.9284 20.7287 39.2563 21.1564 38.462 21.5536C37.5761 22.0118 36.4763 22.3479 35.1627 22.5617L34.0629 22.6534Z" fill="#FFE500" />
      <path d="M57.1097 22.6533V22.6839C55.6433 22.6839 54.0547 23.1116 52.3439 23.9364C51.8551 24.2114 51.3358 24.5474 50.7553 24.9446C49.7472 25.8 49.014 26.5331 48.5863 27.1747C47.9448 28.0606 47.4865 28.8549 47.2421 29.5576C46.6617 30.9323 46.3867 32.2459 46.3867 33.4985L46.3867 50.6368L91.1725 50.6368V34.1095C91.1725 30.2908 89.6451 27.1747 86.5901 24.8224C85.8874 24.303 85.2459 23.9364 84.7266 23.692C83.1685 23.0199 81.7327 22.6839 80.4191 22.6839V22.6533C81.4272 22.6533 82.6797 22.4089 84.1156 21.8896C87.0178 20.6676 89.0952 18.6208 90.3477 15.7186C90.8976 14.3744 91.1725 12.8469 91.1725 11.1667V0.290981L91.142 0.260433L46.3867 0.260429L46.3867 11.8388C46.3867 13.3662 46.8144 14.9854 47.6698 16.7267C48.0364 17.4293 48.5252 18.132 49.1362 18.8346C50.0221 19.7511 50.5415 20.2399 50.7248 20.301C51.2441 20.7287 51.9162 21.1564 52.7105 21.5535C53.5964 22.0118 54.6962 22.3478 56.0099 22.5617L57.1097 22.6533Z" fill="#FFE500" />
      <path d="M92.9844 50.6023L93.0155 50.6367H113.975V0.260246L92.9844 0.260246L92.9844 11.8386C92.9844 13.3661 93.4121 14.9852 94.2675 16.7265C94.6341 17.4292 95.1229 18.1318 95.7338 18.8344C96.6198 19.7509 97.1391 20.2397 97.3224 20.3008C97.8418 20.7285 98.5139 21.1562 99.3082 21.5534C100.194 22.0116 101.294 22.3477 102.608 22.5615L103.707 22.6532V22.6837C102.241 22.6837 100.652 23.1114 98.9416 23.9362C98.4528 24.2112 97.9334 24.5472 97.353 24.9444C96.3448 25.7998 95.6116 26.533 95.184 27.1745C94.5424 28.0604 94.0842 28.8547 93.8398 29.5574C93.2593 30.9321 92.9844 32.2457 92.9844 33.4983V50.6023Z" fill="#FFE500" />
    </svg>
  );
};

export default BrandSvg;
