import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

const textVariants = cva('text-gray-300', {
  variants: {
    variant: {
      body: 'text-base',
      small: 'text-sm leading-snug text-gray-300',
      caption: 'text-xs leading-tight opacity-80',
      overline: 'text-[11px] uppercase tracking-widest font-semibold opacity-70',
      code: 'font-mono text-sm bg-gray-800 px-1 py-0.5 rounded',
    },
  },
  defaultVariants: {
    variant: 'body',
  },
});

interface TextProps extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof textVariants> {
  as?: keyof HTMLElementTagNameMap;
}

export const Text = ({ as: Tag = 'p', children, variant, className, ...props }: TextProps) => {
  return (
    <Tag className={cn(textVariants({ variant }), className)} {...props}>
      {children}
    </Tag>
  );
};
