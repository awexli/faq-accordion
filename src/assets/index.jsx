export const ArrowDown = ({ isExpand }) => (
  <svg
    width="10"
    height="7"
    xmlns="http://www.w3.org/2000/svg"
    transform={isExpand ? 'rotate(180)' : ''}
  >
    <path
      d="M1 .799l4 4 4-4"
      stroke="#F47B56"
      strokeWidth="2"
      fill="none"
      fillRule="evenodd"
    />
  </svg>
);
