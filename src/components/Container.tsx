import React, { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

function Container({ children }: ContainerProps) {
  return (
    <div className="container mx-auto min-w-[320px] px-5 sm:w-[480px] md:w-[768px] md:px-8 xl:px-20 xl:min-w-[1280px] xl:w-full xl:max-w-[1440px] bg-gray-800 border border-sky-500">
      {children}
    </div>
  );
}

export default Container;
