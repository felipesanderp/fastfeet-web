export function Logo() {
  return (
    <strong className="mx-1 flex items-center gap-2 text-xl font-semibold">
      <svg
        width="40"
        height="44"
        viewBox="0 0 40 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_144_1279)">
          <path
            d="M35.4588 23.0682L39.7076 19.8363L36.8397 3.50305L31.6265 8.66548L31.8859 10.1513L36.0251 6.05535L38.3485 19.3121L34.6989 22.0921L34.0413 22.591L34.2569 23.3864L36.2479 30.7757L24.1994 36.8275L23.0486 37.4059L23.6733 38.523L26.048 42.7672H16.8636L14.8324 40.4932H13.1702L16.3047 43.9999H28.1596L24.762 37.9265L37.7129 31.4228L35.4588 23.0682Z"
            fill="#3f3f46"
          />
          <path
            d="M30.9761 27.9198L18.0289 34.4198L21.4265 40.4933H9.56793L0 29.7924L30.103 0L32.9708 16.3332L28.7221 19.5652L22.0293 24.6589L29.1349 21.0835L30.9761 27.9198Z"
            fill="#FFBE00"
          />
        </g>
        <defs>
          <clipPath id="clip0_144_1279">
            <rect width="40" height="44" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <p className="italic text-yellow-500 font-bold hidden md:flex">
        FAST<span className="text-zinc-700">FEET</span>
      </p>
    </strong>
  )
}
