import React, { memo } from 'react'
import { HeaderWrapper } from './style'
import HeaderRight from './c-cpns/header-right'
import HeaderLeft from './c-cpns/header-left'
import HeaderCenter from './c-cpns/header-center'

const AppHeader = memo(() => {
  return (
    <HeaderWrapper>
      <HeaderLeft />
      <HeaderCenter />
      <HeaderRight />
    </HeaderWrapper>
  )
})

export default AppHeader