import React, { memo, useEffect, useState } from 'react'
import hyRequest from '@/services'//引入封装好的请求模块

const Home = memo(() => {
  const [highScore, setHighScore] = useState({})

  useEffect(() => {
    // 发送网络请求
    hyRequest.get({ url: '/home/highScore' }).then(res => {
      console.log(res);
      setHighScore(res)
    })
  }, [])
  
  return (
    <div>
      {/* <h2>{highScore.title}</h2>
      <h4>{highScore.subtitle}</h4>
      <ul>
        {highScore.list?.map(item => {
          return <li key={item.id}>{item.name}</li>
        })
        }
      </ul> */}
    </div>
  )
})

export default Home