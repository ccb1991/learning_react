import React from 'react'
import { render } from 'react-dom'

import {
  HashRouter,
  Route,
  Switch,
  Redirect
} from 'react-router-dom'

import {
  Home,
  About,
  Events,
  Products,
  Contact,
  Whoops404
} from './pages'

window.React = React

render(
  //  hashrouter组件
  <HashRouter>
    <div className="main">
      {/*switch组件只会显示首个匹配的路由，这可以确保只渲染其中的一个路由
      如果没有任务路径可以和一个route组件匹配，那么显示最后一个路由*/}
      <Switch>
        {/*根路径中定义route组件*/}
        {/*每个组件都需要包含path和component属性，当路径与浏览器地址匹配
        就会渲染component里面的信息*/}
        {/*exact属性表示只有当路径和根目录精确匹配时，才会显示home组件*/}
        <Route exact path="/" component={Home} />
        {/*Redirect组件允许开发人员将用户重定向到某个特定路由*/}
        {/*此处的redirect只是为了在用户输入的url有错误时重定向*/}
        <Redirect from="/history" to="/about/history" />
        <Redirect from="/services" to="/about/services" />
        <Redirect from="/location" to="/about/location" />
        <Route path="/about" component={About} />
        <Route path="/events" component={Events} />
        <Route path="/products" component={Products} />
        <Route path="/contact" component={Contact} />
        <Route component={Whoops404} />
      </Switch>
    </div>
  </HashRouter>,
  document.getElementById('react-container')
)
