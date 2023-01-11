import React from 'react';
import classNames from 'classnames';
import useNavigation from "../hooks/use-navigation";

function Link({ to, children, className, activeClassName }) {
  const { navigate, currentPath } = useNavigation();

  const classes = classNames(
    "text-blue-500",
    className,
    currentPath === to && activeClassName,
    );

  const handleClick = (event) => {
    // Öffnet bei gedrücktem Key neues Fenster
    if (event.metaKey || event.ctrlKey) {
      return;
    }
    event.preventDefault();

    navigate(to);
  };
  return (
    <a className= {classes} href={to} onClick={handleClick}>{children}</a>
  )
}

export default Link;
