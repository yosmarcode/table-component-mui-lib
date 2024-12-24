import  { FC, PropsWithChildren  } from 'react'
export const Button: FC<PropsWithChildren> = ({children}) => {
  return (
    <button>
        {children}
    </button>
  )
}