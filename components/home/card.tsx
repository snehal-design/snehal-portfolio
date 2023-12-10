import { PropsWithChildren } from "react";

export default function Card({ children }: PropsWithChildren) {
  return (
    <div
      className={'relative overflow-hidden rounded-l border border-gray-200 bg-white'}
    >
      {children}
    </div>
  );
}
