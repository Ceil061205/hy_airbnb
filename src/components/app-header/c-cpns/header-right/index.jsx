import React, { memo } from 'react'
import { RightWrapper } from './style'
import Icon_global from '@/assets/svg/icon_global'
import Icon_menu from '@/assets/svg/icon_menu'

const HeaderRight = memo(() => {
  return (
    <RightWrapper>
      <div className="btns">
        <span className='btn'>登录</span>
        <span className='btn'>注册</span>
        <span className='btn'><Icon_global /></span>
      </div>

      <div className="profile">
        <Icon_menu /> <Icon_menu />
        <div className="panel">
          <div className='top'>
            <div className='item register'>注册</div>
            <div className='item login'>登录</div>
          </div>
          <div className='bottom'>
            <div className='item info'>房源信息</div>
            <div className='item experience'>开展体验</div>
            <div className='item help'>帮助</div>
          </div>
        </div>
      </div>
    </RightWrapper>
  )
})

export default HeaderRight