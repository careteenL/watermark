## 生成水印

### 前言

其一：在PC端，对内部系统的截图应该考虑安全问题，截图内容不管是否敏感不可泄露，安全问题也不容忽视。

为整个系统页面增加水印，对于内部人员的截图等敏感操作能够起到一定的提示作用。

其二：对于移动端，类似于渣浪微博在**发布动态**后会为图片添加带有个人标记的水印。

本库基于`canvas`提供以上两种添加水印的方式。

### Usage

```bash
npm install ct-watermark --save-dev
```
then
```js
import waterMark from 'ct-watermark'

waterMark({
  type: 'page',
  content: 'careteen'
})
// or
waterMark({
  type: 'image',
  url: 'http://localhost:3000/imgs/google.png',
  content: 'careteen',
  cb: (base64Url) => {
    document.querySelector('img').src = base64Url
  }
})
```

### API

- `type`为`page`时，为整个网页添加水印，其他属性默认值如下：
  - width = '300px'
  - height = '200px'
  - textAlign = 'center'
  - textBaseline = 'middle'
  - font = "20px Microsoft Yahei"
  - fillStyle = 'rgba(184, 184, 184, 0.6)'
  - content = '请勿外传'
  - rotate = '30'
  - zIndex = 1000
- `type`为`image`时，为特定图片添加水印，其他属性默认值如下：
  - url = ''
  - textAlign = 'center'
  - textBaseline = 'middle'
  - font = "20px Microsoft Yahei"
  - fillStyle = 'rgba(184, 184, 184, 0.8)'
  - content = '请勿外传'
  - cb = null
  - textX = 100
  - textY = 30
### TODO

- svg 生成水印
- NodeJs 生成水印
### 引用
