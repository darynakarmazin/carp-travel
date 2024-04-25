import React, { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

function Container({ children }: ContainerProps) {
  return (
    <div className="container mx-auto min-w-[320px] px-5 sm:w-[480px] md:w-[768px] md:px-8 xl:px-6 xl:w-[1280px]">
      {children}
    </div>
  );
}

export default Container;
