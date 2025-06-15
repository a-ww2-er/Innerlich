import React from 'react'
import Spinner from './spinner'
import { cn } from '@/lib/utils'

type Props = {
    state:boolean
className?:string
color?:string
children?:React.ReactNode
}

const Loader = (props: Props) => {
return props.state ? (<div className={cn(props.className)}><Spinner/></div>) : props.children
}

export default Loader