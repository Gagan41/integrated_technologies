import PropTypes from "prop-types";

const Logo = ({ className = "", align = "items-end" }) => {
  return (
    <div
      className={`flex flex-col ${align} leading-none select-none ${className}`}
    >
      <div className="flex items-center gap-[2px]">
        {/* "INTEGRA" part in white/light grey for dark mode */}
        <span className="font-sans text-2xl md:text-3xl font-normal tracking-wide text-gray-400">
          INTEGRA
        </span>
        {/* "TED" part in bright blue */}
        <span className="font-sans text-2xl md:text-3xl font-bold tracking-wide text-blue-800">
          TED
        </span>
      </div>

      {/* Underline in bright blue */}
      <div className="w-full h-[2px] bg-blue-500 mt-0.5 mb-0.5"></div>

      {/* "Technologies" part in white/light grey, aligned right */}
      <span className="font-sans text-[10px] md:text-xs font-semibold tracking-wider text-gray-400 uppercase">
        Technologies
      </span>
    </div>
  );
};

Logo.propTypes = {
  className: PropTypes.string,
  align: PropTypes.string,
};

export default Logo;
