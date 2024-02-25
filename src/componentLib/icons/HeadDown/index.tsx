import { twMerge } from 'tailwind-merge';

interface IProps{
  className?: string;
}
export const HeadDown =({ className }: IProps)=> {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={twMerge('w-20 h-20', className)} style={{transform: 'rotate(180deg)'}}>
      <g>
      <path
        d="M12 15a1 1 0 01-.707-.293l-4-4a1 1 0 111.414-1.414L12 12.586l3.293-3.293a1 1 0 011.414 1.414l-4 4A1 1 0 0112 15z"
      ></path>
      </g>
    </svg>
  );
}
