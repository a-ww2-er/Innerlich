import Spinner from '@/components/global/loader/spinner'
import React from 'react'

type props ={}

const AuthLoading = (props:props) => {
    return <div className='flex h-screen w-full items-center justify-center'><Spinner/></div>
}