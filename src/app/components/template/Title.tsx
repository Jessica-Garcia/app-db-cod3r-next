import { ElementType } from 'react';

export interface TitleProps {
  title: string;
  subtitle: string;
  icon: ElementType;
}

export default function Title(props: TitleProps) {
  return (
    <div className="flex gap-2">
      <props.icon className="" size={55} stroke={1} />
      <div className="flex flex-col">
        <h1 className="text-2xl font-black">{props.title}</h1>
        <h2 className="text-zinc-400">{props.subtitle}</h2>
      </div>
    </div>
  );
}
