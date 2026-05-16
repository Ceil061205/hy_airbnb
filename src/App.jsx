import React, { memo } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from '@/router'//引入路由配置文件
import AppHeader from '@/components/app-header'//引入公共组件
import AppFooter from '@/components/app-footer'//引入公共组件

const App = memo(() => {
  return (
    <div className='app'>
      <AppHeader />
      <div className='page'>
        {useRoutes(routes)}
      </div>
      <AppFooter />
    </div>
  )
})

export default App
