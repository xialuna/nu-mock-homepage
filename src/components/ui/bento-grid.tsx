import { cn } from '@/lib/utils'

export const BentoGrid = ({ className, children }: { className?: string; children?: React.ReactNode }) => {
  return (
    <div className={cn('mx-auto grid grid-cols-1 gap-4 md:auto-rows-[20rem] md:grid-cols-3', className)}>
      {children}
    </div>
  )
}

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon
}: {
  className?: string
  title?: string | React.ReactNode
  description?: string | React.ReactNode
  header?: string
  icon?: React.ReactNode
}) => {
  return (
    <div
      className={cn(
        'group/bento shadow-input row-span-1 flex flex-col overflow-hidden rounded-xl border border-transparent transition duration-200 hover:shadow-xl',
        'relative bg-[url("/grid-bg.svg")] bg-cover bg-center',
        className
      )}
    >
      <div className='min-h-32 px-[24px] py-6 transition duration-200 group-hover/bento:translate-x-2'>
        {icon && <div className='mb-2'>{icon}</div>}
        <div className='absolute z-10 flex flex-col gap-2'>
          <div className='text-[27px] font-semibold leading-none text-brand'>{title}</div>
          <div className=''>{description}</div>
        </div>
      </div>
      {header && (
        <div className='h-48 w-full overflow-hidden'>
          <img src={header} alt='Header' className='absolute top-[110px] h-full w-full object-cover opacity-50' />
        </div>
      )}
    </div>
  )
}
