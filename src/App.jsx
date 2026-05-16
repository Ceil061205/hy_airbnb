import React, { memo } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from '@/router'//引入路由配置文件

const App = memo(() => {
  return (
    <div className='app'>
      <div className='header'>App Header</div>
      <div className='page'>
        {useRoutes(routes)}
      </div>
      <div className='footer'>App Footer</div>
    </div>
  )
})

export default App
