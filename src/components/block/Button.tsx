
import React from 'react';

type Variant = "primary" | "secondary" | "danger" | "whiteBtn" | "greyBtn";
type Size = "small" | "medium" | "large";

 type ButtonProps = {

    text?: string; 
    url?: string;
    variant?: "primary" | "secondary" | "danger";
    size?: "small" | "medium" | "large"; 
    type?: "button" | "submit" | "reset";
    className?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    isLoading?: boolean;
  
} & React.ButtonHTMLAttributes<HTMLButtonElement>;


const Button: React.FC<ButtonProps> = ({
    text,
    url,
    variant = "primary",
    size = "medium",
    type = "button",
    isLoading = false,
    onClick,
    className = "",
    children,
    ...rest
}) => {

    // Define base styles
    const baseStyles = "rounded-[6px] focus:ring transition duration-300";

    // Define variant styles
    const variantStyles: Record<Variant, string> = {
        primary: "bg-brandBlue text-absoluteWhite hover:bg-brandDarkBlue",
        secondary: "bg-absoluteWhite border-[1px] border-absoluteWhite hover:text-brandBlue hover:border-brandBlue ease-in-out duration-500",
        danger: "bg-red-500 text-absoluteWhite hover:bg-red-600 focus:ring-red-300",
        whiteBtn: "bg-absoluteWhite hover:bg-white95 text-brandBlack text-[15px] font-medium inline-block",
        greyBtn: "bg-white97 border-[2px] border-white95 rounded-[6px] w-[100%] text-center",
    }

    // Define size styles
    const sizeStyles: Record<Size, string> = {
        small: "py-[8px] laptop:py-[10px] px-[14px] laptop:px-[16px] font-medium",
        medium: "py-[14px] laptop:py-[18px] px-[20px] laptop:px-[24px] font-semibold",
        large: "py-[14px] laptop:py-[18px] px-[24px] laptop:px-[34px] font-semibold",
    }

    // combine styles
    const styles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  return (
    <>
    <a href={url}>
        <button type={type} onClick={onClick} className={styles} disabled={isLoading} {...rest}> 
            {isLoading ? "Loading..." : children || text} 
        </button>
    </a>
  </>
  )
}

export default Button