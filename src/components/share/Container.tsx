import { cn } from "@/utils/cn";
import { FC, ReactNode } from "react";

type TContainerProps = {
  children: ReactNode;
  className?: string;
  /** Renders a narrower measure — used for long-form legal and editorial copy. */
  narrow?: boolean;
};

const Container: FC<TContainerProps> = ({ children, className, narrow }) => {
  return (
    <div
      className={cn(
        "mx-auto w-full px-5 sm:px-6 lg:px-8",
        narrow ? "max-w-[920px]" : "max-w-shell",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Container;
