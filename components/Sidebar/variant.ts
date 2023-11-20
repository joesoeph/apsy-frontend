import { tv } from 'tailwind-variants';

export const sidebar = tv({
  base: 'top-0 w-[300px] overflow-y-auto overscroll-contain bg-background shadow-lg absolute h-auto z-[2] md:flex md:flex-col -left-[300px] p-4 md:relative md:h-auto md:z-[20] md:left-0',
  variants: {
    visibility: {
      hidden:
        '-left-[300px] p-4 md:absolute md:h-screen md:z-[2] md:-left-[300px] -pt-[calc(72px+1rem)] md:px-1 md:pb-1',
      shown:
        'left-[0px] pt-[calc(72px+1rem)] md:pt-0 md:relative md:h-auto md:z-[20] md:left-0',
    },
  },
});
