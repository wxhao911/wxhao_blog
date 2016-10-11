---
layout:     post
title:      "markdown基本语法"
subtitle:   "Markdown——入门指南"
date:       2013-06-05
author:     "Wxhao"
header-img: "img/post-bg/table-rubber.jpg"
catalog:    true
tags:
    - 基础知识 
    - markdown
---

## 概述
> [Markdown](https://zh.wikipedia.org/wiki/Markdown) 是一种轻量级的**标记语言**，它的优点很多，目前也被越来越多的写作爱好者，撰稿者广泛使用。看到这里请不要被「标记」、「语言」所迷惑，Markdown 的语法十分简单。常用的标记符号也不超过十个，这种相对于更为复杂的 HTML 标记语言来说，Markdown 可谓是十分轻量的，学习成本也不需要太多，且一旦熟悉这种语法规则，会有一劳永逸的效果。

## 认识 Markdown

在刚才的导语里提到，Markdown 是一种用来写作的轻量级「标记语言」，它用简洁的语法代替排版，而不像一般我们用的字处理软件 Word 或 Pages 有大量的排版、字体设置。它使我们专心于码字，用「标记」语法，来代替常见的排版格式。例如此文从内容到格式，甚至插图，键盘就可以通通搞定了。目前来看，支持 Markdown 语法的编辑器有很多，包括很多网站也支持了 Markdown 的文字录入。Markdown 从写作到完成，导出格式随心所欲，你可以导出 HTML 格式的文件用来网站发布，也可以十分方便的导出 PDF 格式，这种格式写出的简历更能得到 HR 的好感。甚至可以利用 CloudApp 这种云服务工具直接上传至网页用来分享你的文章，全球最大的轻博客平台 Tumblr，也支持 Mou 这类 Markdown 工具的直接上传。

## 使用 Markdown 的优点
* 专注你的文字内容而不是排版样式，安心写作。
* 轻松的导出 HTML、PDF 和本身的 .md 文件。
* 纯文本内容，兼容所有的文本编辑器与字处理软件。
* 随时修改你的文章版本，不必像字处理软件生成若干文件版本导致混乱。
* 可读、直观、学习成本低。
* Markdown 旨在简洁、高效，也由于 Markdown 的易读易写，人们用不同的编程语言实现了多个版本的解析器和生成器，这就导致了目前不同的 Markdown 工具集成了不同的功能（基础功能大致相同），例如流程图与时序图，复杂表格与复杂公式的呈现，虽然功能的丰富并没有什么本质的缺点，但终归有些背离初衷，何况在编写的过程中很费神，不如使用专业的工具撰写来的更有效率，所以如果你需实现复杂功能，专业的图形界面工具会更加方便。

## 我该用什么工具？
* Windows 下的 Markdown，有两款还算不错，一款叫做 [MarkdownPad](http://www.markdownpad.com/) ，另一款叫做 [MarkPad](http://code52.org/DownmarkerWPF/)。
	* 其中win10下使用MarkdownPad,需要下载一个插件[百度云链接](http://pan.baidu.com/s/1cab8oI)

* iOS 端很多 app 早已经支持了 Markdown 录入，例如 Drafts，Day One，iA writer 等，另外 Ulysses for iPad 现在已经上架，可以说是 iOS 平台最好的编辑器了。

* 在 Web端，我强烈推荐[cmd markdown](https://www.zybuluo.com/)产品，上面有无数热爱文字的人在不停的创造，分享。在 Web 端使用 Markdown(也有客户端,笔者就用的这款和MarkdownPad) ，同样支持左右两栏的实时预览，字体优雅，简洁。

## Markdown 语法的简要规则

### 标题

```
# 标题
## 标题
### 标题
#### 标题
##### 标题
###### 标题
```

![标题](http://wxhao2.duapp.com/blog/post-in/20130605/biaoti.png)

### 列表

```
## 有序
 1. 有序列表
 2. 有序列表
 3. 有序列表
 4. 有序列表
 5. 有序列表
## 无序
 - 无序列表
 - 无序列表
 - 无序列表
 - 无序列表
 - 无序列表
```

![列表](http://wxhao2.duapp.com/blog/post-in/20130605/liebiao.png)

### 引用

```

> 这里是引用

要注意符号和文本之间的空格

```

![引用](http://wxhao2.duapp.com/blog/post-in/20130605/yinyong.png)

### 图片与链接

```

[插入链接](http://blog.wxhao2.com/)

![帅气的我,哈哈](http://blog.wxhao2.com/img/avatar-wxhao.jpg)

```

![图片与链接](http://wxhao2.duapp.com/blog/post-in/20130605/tupianyulianjie.png)


### 粗体与斜体

```

**这里是粗体** 

*这里是斜体*
```

![粗体与斜体](http://wxhao2.duapp.com/blog/post-in/20130605/cutiyuxieti.png)

### 代码块


```
 无行号代码块
        
    public static void main (String[] args){
        Sysout.out.print("HelloWorld");
    }
    
    
有行号代码块    
 ```
	//上面的```前面的空格需要去掉
    public static void main (String[] args){
        Sysout.out.print("HelloWorld");
    }
 ```
```

![daimakuai](http://wxhao2.duapp.com/blog/post-in/20130605/daimakuai.png)






