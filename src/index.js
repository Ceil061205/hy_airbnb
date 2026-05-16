import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';//引入路由组件

import { Provider } from 'react-redux'//引入redux的Provider组件
import store from '@/store'//引入redux的store对象
import App from '@/App';//配置了路径别名，所以可以直接使用@来引入src目录下的文件 1.webpack 或者 2.craco => npm install @craco/craco@alpha -D
import 'normalize.css'//引入第三方样式文件，重置浏览器默认样式
import '@/assets/css/index.less'//引入全局样式文件

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <Suspense fallback='loading...'>
      <Provider store={store}>
        <HashRouter>
          <App />
          </HashRouter>
        </Provider>
    </Suspense>
  // </React.StrictMode>
);