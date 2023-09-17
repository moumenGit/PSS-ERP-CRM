import React from 'react'
import SidebarNavigation from '.'
import Layout from '@/layout'

export default function OpenNotify({open}) {
  return (
    <div className='hidden'>
        <Layout open={open}/>
    </div>
  )
}
