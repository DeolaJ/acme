import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    className?: string;
}

function BareButton({ children, className, ...props }: ButtonProps) {
    return (
        <button
            className={twMerge(
                `font-medium bg-transparent cursor-pointer px-4.5 py-2.5 text-brand-blue-900 ease-in duration-200 hover:scale-105 ${className}`,
            )}
            {...props}
        >
            {children}
        </button>
    );
}

export default BareButton;
