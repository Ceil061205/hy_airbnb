import React, { memo, useEffect, } from 'react'
import { HomeWrapper } from './style'
import HomeBanner from './c-cpns/home-banner'
import { fetchHomeDataAction } from '@/store/modules/home'
import { useDispatch, useSelector } from 'react-redux'
import SectionHeader from '@/components/section-header'

const Home = memo(() => {
   const dispatch = useDispatch()
  // 从Redux拿数据
  const { goodPriceInfo } = useSelector(state => state.home)

  // 组件挂载发送请求
  useEffect(() => {
    dispatch(fetchHomeDataAction())
  }, [dispatch])

  return (
    <HomeWrapper>
      <HomeBanner />
      <div className="content">
        {goodPriceInfo.list?.map(item => {
          return <div key={item.id}>{item.name}</div>
        })}
        <SectionHeader title="高性价比" subtitle="高性价比房源，精选好住" />
      </div>
    </HomeWrapper>
  )
})

export default Home