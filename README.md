# 组件原理
[微信小程序-自定义导航栏](https://www.cnblogs.com/sese/p/9761713.html)

# 使用方法
## 引入该组件
```
{
  "usingComponents": {
    "navbar": "/components/navbar/index"
  }
}
```

## 使用该组件
```
<view class='view-page'>
  <navbar page-name="你当前页面的名字"></navbar>
  <view class='page-content'>
    <!--这里放你的内容-->
  </view>
</view>
```

# 参数说明
参数 | 说明 | 类型 | 默认值
----| ---| ---| ---
page-name | 当前页面名称 | `String`| --
show-nav | 是否显示左侧的导航 | `Boolean`| `true`
bg-color | 导航背景颜色 | `String`| `#fff`
icon-color | 左侧图标颜色 | `String`| `#000`
custom-class  | 导航样式 | | 
