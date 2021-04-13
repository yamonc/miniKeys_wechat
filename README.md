# 微信小程序之miniKeys——密码管理工具

-----

## 为什么选择微信小程序

​		基于GO语言的钥匙管理工具前端显示，之所以选择微信小程序主要是便捷性，用户大多都会使用微信，而且手机也在我们生活中扮演越来越重要的角色，基本上人人都离不开手机。所以，微信小程序是作为钥匙管理工具项目的不二之选。

## 主要完成功能

用户登录：输入唯一秘钥登录系统。可以查看用户目录下的所有钥匙信息。

获得当前用户下的所有钥匙信息。

查看指定钥匙信息。

保存和更新指定钥匙信息。

删除指定钥匙信息。

## 框架

刚上手微信小程序，好多界面都是自己一步步调试的，但是自己不可能每个UI都亲力亲为，所以在微信小程序中使用了[LinUi框架](https://doc.mini.talelin.com/)，具体可以访问查看。

## 界面测试

### 首页

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210413203659861.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0ODk2MjA5,size_16,color_FFFFFF,t_70)

用户这里输入主密码，进入主页面。

### 主界面

这里展示当前用户下的所有钥匙信息。

![在这里插入图片描述](https://img-blog.csdnimg.cn/2021041320411150.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0ODk2MjA5,size_16,color_FFFFFF,t_70)

### 添加钥匙信息

点击屏幕右下方小加号，可以跳转添加钥匙信息页面：

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210413204310397.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0ODk2MjA5,size_16,color_FFFFFF,t_70)

### 修改钥匙信息

回到主页面上，然后选中要修改的钥匙信息，向左滑，即可展现更多操作：

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210413204351492.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0ODk2MjA5,size_16,color_FFFFFF,t_70)

![在这里插入图片描述](https://img-blog.csdnimg.cn/20210413204449732.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzM0ODk2MjA5,size_16,color_FFFFFF,t_70)

点击编辑，跳转修改页面，完成修改。

### 删除钥匙信息

同修改钥匙信息一样，左滑出现操作按钮，点击删除完成删除操作。

## 项目总结

- 待总结

## 待优化

1. 首页输入密码的时候是可视化的，需要修改成为类型为password。
2. 功能上，只能自己可以使用，注册功能以后可能会逐步开放。另外，首页的界面也需要修改，有可能添加TODOList等功能。
3. 可以看得出来，所有的界面都没有调过，所以会很难看，后期有时间会逐步调成理想中的样子。
4. 用户添加、修改等操作的时候，对页面元素没有进行限制，包括url等信息没有校验。
5. 缺少个人中心，待添加。
6. 为了方便用户，可以不用登录，直接使用微信小程序的登录接口实现登录。
