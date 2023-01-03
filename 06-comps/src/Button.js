import React from "react";
// PropTypes müsste hier nicht importiert werden
import PropTypes from "prop-types";
import className from "classnames";


function Button({
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded,
  }
  ) {
    return <button className="px-3 py-1.5 border border-blue-600 bg-blue-500 text-white">{children}</button>
};

Button.propTypes = {
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    const count =
    Number(!!primary) +
    Number(!!secondary) +
    Number(!!warning) +
    Number(!!success) +
    Number(!!danger);
    // console.log(count);

    if (count > 1) {
      return new Error('Only one of primary, secondary, success, warning, danger can be true')
    };
  }
};

export default Button;
