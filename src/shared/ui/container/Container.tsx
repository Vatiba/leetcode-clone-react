import { ReactNode } from "react";
import clsx from 'clsx';


type ContainerProps = {
   children: ReactNode
   className?: string
}

const Container = (props: ContainerProps) => {
   const {
      children,
      className
   } = props;

   return (
      <div className={clsx("max-w-6xl mx-auto px-4", className)}>
         {children}
      </div>
   )
}

export default Container;
