import { cn } from '@/lib/utils';
import { cva } from 'class-variance-authority';

const headingVariants = cva('text-white  ', {
  variants: {
    variant: {
      display: 'text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight',
      title: 'text-3xl font-bold leading-tight tracking-tight',
      heading: 'text-lg font-semibold leading-tight tracking-tight',
      subheading: 'text-base font-medium leading-snug',
      subtitle: 'text-sm text-gray-300 md:text-base font-normal leading-relaxed',
    },
    decoration: {
      default: '',
      code: 'relative before:content-["<"] before:mr-1 after:ml-1 after:content-["/>"]',
    },
  },
  defaultVariants: {
    variant: 'heading',
    decoration: 'default',
  },
});

interface HeadingProps extends React.HTMLAttributes<HTMLElement> {
  as?: keyof HTMLElementTagNameMap;
  variant?: 'display' | 'title' | 'heading' | 'subheading' | 'subtitle';
  decoration?: 'code' | 'default';
}

export const Heading = ({
  as: Tag = 'h2',
  variant,
  decoration,

  className,
  children,
  ...props
}: HeadingProps) => {
  return (
    <Tag className={cn(headingVariants({ variant, decoration }), className)} {...props}>
      {children}
    </Tag>
  );
};
