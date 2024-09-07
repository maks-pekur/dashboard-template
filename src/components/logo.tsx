import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 198.43 176.06"
        className="h-10"
      >
        <g>
          <rect
            fill="#3b82f675"
            x="0"
            y="88.03"
            width="141.73"
            height="88.03"
            rx="44.02"
            ry="44.02"
          ></rect>
          <rect
            fill="#3b82f6d0"
            x="0"
            y="44.02"
            width="170.08"
            height="88.03"
            rx="44.02"
            ry="44.02"
          ></rect>
          <rect
            fill="#3b82f6f0"
            x="0"
            y="0"
            width="198.43"
            height="88.03"
            rx="44.02"
            ry="44.02"
          ></rect>
        </g>
      </svg>
    </Link>
  );
};

export default Logo;
