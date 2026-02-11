import PropTypes from "prop-types";

const Logo = ({ className = "", align = "items-end" }) => {
  return (
    <div
      className={`flex flex-col ${align} leading-none select-none ${className}`}
    >
      <div className="flex items-center">
        {/* "INTEGRA" part in dark grey for light mode */}
        <span className="font-sans text-2xl md:text-3xl font-normal tracking-tight text-gray-600">
          INTEGRA
        </span>
        {/* "TED" part in bright blue */}
        <span className="font-sans text-2xl md:text-3xl font-bold tracking-tight text-blue-900">
          TED
        </span>
      </div>

      {/* Underline in bright blue */}
      <div className="w-full h-[2px] bg-blue-900 mt-1 mb-1"></div>

      {/* "Technologies" part in dark grey, aligned right */}
      <span className="font-sans text-[10px] md:text-xs font-bold tracking-wide text-gray-600">
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
