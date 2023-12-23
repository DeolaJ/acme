import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    size?: ButtonSize;
    className?: string;
}

function getSize(size: ButtonSize) {
    if (size === "sm") {
        return "h-12 px-5 py-3";
    }

    if (size === "lg") {
        return "h-12 px-5 py-3 md:h-15 md:px-7 md:py-4";
    }

    return "px-4.5 py-2.5";
}

function Button({ children, size = "md", className, ...props }: ButtonProps) {
    return (
        <button
            className={twMerge(
                `flex items-center justify-center font-medium bg-brand-purple-500 cursor-pointer rounded-lg text-white ease-in duration-200 hover:scale-105 ${getSize(
                    size,
                )} ${className}`,
            )}
            {...props}
        >
            {children}
        </button>
    );
}

export default Button;
