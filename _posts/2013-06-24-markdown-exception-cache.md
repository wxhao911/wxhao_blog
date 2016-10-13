---
layout:     post
title:      "markdown异常记录"
subtitle:   "HelloWorld"
date:       2013-06-24
author:     "Wxhao"
header-img: "img/post-bg/code.jpg"
catalog:    true
tags:
    - markdown 
    - exception
    - jekyll
---

### 花括号错误编译 

* 本来想输入下文代码
* 
```
 int[][] arr = {% raw %}{{1,2,3},{4,5},{6,7,8,9}} {% endraw %};
```

* 改成这样,记得把endraw%和}之间的空格去掉
*
```
int[][] arr = {% raw %}{% raw %}{{1,2,3},{4,5},{6,7,8,9}}{% endraw % }{% endraw %};
```

![花括号问题](http://wxhao2.duapp.com/blog/post-in/20130624/markdown-hkh.png)