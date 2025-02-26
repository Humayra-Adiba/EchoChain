import {FC, ButtonHTMLAttributes} from "react";

type IButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

export const PersonButton: FC<IButtonProps> = ({ children, ...props }) => {
    return (
        <button
            {...props}
            className="bg-primary text-sm font-medium hover:bg-secondary transition-all duration-300 text-white px-4 py-2 rounded-full active:scale-95 active:bg-gradient-to-r from-pink-500 to-purple-800 hover:scale-105"
        >
            {children}
        </button>
    )
}

export const Button: FC<IButtonProps> = ({ children, ...props }) => {
    return (
      <button
        {...props}
        className="w-full rounded-xl bg-gradient-to-r from-secondary to-primary py-3 text-lg font-semibold leading-[21.78px] tracking-[-1%] flex gap-2.5 justify-center items-center hover:scale-110 transition-all duration-300 hover:shadow-md hover:shadow-secondary hover:bg-pink-500"
      >
        {children}
      </button>
    );
}
