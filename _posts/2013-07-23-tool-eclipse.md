---
layout:     post
title:      "Java开发工具"
subtitle:   "JavaSE之开发工具"
date:       2013-07-23
author:     "Wxhao"
header-img: "img/post-bg/black-sky.jpg"
catalog:    true
tags:
    - 基础知识 
    - java
    - JAVASE
    - tool
---

### 常见开发工具介绍 
* A:操作系统自带的记事本软件
* B:高级记事本软件
* C:集成开发环境 IDE
	* (Integrated Development Environment)
* D:Eclipse和MyEclipse的区别
	* a:Eclipse是一种可扩展的开放源代码的IDE。
	* b:Eclipse的特点描述
		* 免费
		* 纯Java语言编写
		* 免安装
		* 扩展性强
	* c:MyEclipse
		* 在Eclipse基础上追加的功能性插件，对插件收费
		* 在WEB开发中提供强大的系统架构平台
* E:下载 http://eclipse.org/
	* org是非盈利团体 
* F:安装
	* 绿色版	解压就可以使用(Eclipse)
	* 安装版   双击运行,一路next即可(JDK)
* G:卸载
	* 绿色版	直接删除文件夹即可
	* 安装版 专业卸载软件或者控制面板添加删除程序

### Eclipse中HelloWorld案例以及汉化 
* A:选择工作空间
	* 工作空间  其实就是我们写的源代码所在的目录
* B:用Eclipse来完成一个HelloWorld案例
	* 代码以项目为基本单位
	* 创建项目
	* 创建包
	* 创建类
	* 编写代码
* C:编译和运行
* D:Eclipse的汉化
	* 从Eclipse3.5开始，安装目录下就多了一个dropins目录,只要将插件解压后放到到该目录即可。
	* 同理，这种方式卸载插件也是特别的方便，推荐这种方式
* E:语法检查提示
	* 红色波浪线
		* 必须处理,否则编译通不过
	* 黄色波浪线	
		* 可以不搭理他 

[eclipse3.7百度云下载](http://pan.baidu.com/s/1nvjOYnB)

### Eclipse的视窗和视图概述 
* A:视窗  每一个基本的窗体被称为视窗
	* PackageExplorer  显示项目结构，包，类，及资源
	* Outline   显示类的结构，方便查找，识别，修改
	* Console  程序运行的结果在该窗口显示
	* Hierarchy 显示Java继承层次结构，选中类后F4
* B:视图  是由某些视窗的组合而成的
	* Java视图
	* Debug视图

### Eclipse工作空间的基本配置 
* A:程序的编译和运行的环境配置(一般不改)
	* window -- Preferences -- Java
	* 编译环境：Compiler	默认选中的就是最高版本。
	* 运行环境：Installed JREs	默认会找你安装的那个JDK。建议配置了Java的环境变量。
	* 问题：
		* 低编译，高运行。可以。
		* 高编译，低运行。不可以。
		* 建议，编译和运行的版本一致。
* B:如何去掉默认注释?
	* window -- Preferences -- Java -- Code Style -- Code Templates
	* 选择你不想要的内容，通过右边Edit编辑。
	* 注意：请只删除注释部分，不是注释部分的不要删除。
* C:行号的显示和隐藏
	* 显示：在代码区域的最左边的空白区域，右键 -- Show Line Numbers即可。
	* 隐藏：把上面的动作再做一次。
* D:字体大小及颜色
	* a:Java代码区域的字体大小和颜色：
		* window -- Preferences -- General -- Appearance -- Colors And Fonts --Java修改 -- Java Edit Text Font
	* b:控制台
		* window -- Preferences -- General -- Appearance -- Colors And Fonts -- Debug -- Console font
	* c:其他文件
		* window -- Preferences -- General -- Appearance -- Colors And Fonts -- Basic -- Text Font
* E:窗体给弄乱了，怎么办?
	* window -- Reset Perspective
* F:控制台找不到了，怎么办?
	* Window--Show View—Console
* G:取消悬浮提示
	* window -- Preferences -- Java--Editor--Hovers。右边将Combined Hover勾去掉。
	* 这样代码的悬浮框就不会自动出现了。如果想看提示，将光标悬浮在代码上，按F2即可。
 


### Eclipse中内容辅助键的使用 
* A:Alt+/ 起提示作用
* B:main+alt+/,syso+alt+/,给出其他提示
* C:补充输出语句,选中需要输出的部分,alt+/选择最后一项即可
* C:定义自己的alt + /
	* windows--perference-Java-Editor-Templates--New

### Eclipse中快捷键的使用 
* A:新建 ctrl + n
* B:格式化  ctrl+shift+f
* C:导入包  ctrl+shift+o 
* D:注释  ctrl+/,ctrl+shift+/,ctrl+shift+\
* E:代码上下移动 选中代码alt+上/下箭头
* F:查看源码  选中类名(F3或者Ctrl+鼠标点击)
* G:查找具体的类 ctrl + shift + t
* H:查找具体类的具体方法 ctrl + o
* I:给建议 ctrl+1,根据右边生成左边的数据类型,生成方法
* J:删除代码 ctrl + d
* K:抽取方法alt + shift + m 
* L:改名alt + shift + r 


### Eclipse中如何提高开发效率
* alt + shift + s
* A:自动生成构造方法
* B:自动生成get/set方法

### Eclipse中一个标准学生类及其测试 
* A:案例演示
	* 用Eclipse实现标准学生类及其测试

### Eclipse中接口抽象类具体类代码体现
* A:案例演示
	* 用Eclipse实现接口抽象类具体类代码

### Eclipse中如何生成jar包并导入到项目中 
* A:jar是什么?
	* jar是多个class文件的压缩包。
* B:jar有什么用?
	* 用别人写好的东西	
* C:打jar包
	* 选中项目--右键--Export--Java--Jar--自己指定一个路径和一个名称--Finish
* D:导入jar包
	* 复制到项目路径下并添加至构建路径。


### Eclipse中如何删除项目和导入项目)
* A:删除项目
	* 选中项目 – 右键 – 删除
		* 从项目区域中删除
		* 从硬盘上删除
* B:导入项目
	* 在项目区域右键找到import
	* 找到General，展开，并找到
	* Existing Projects into Workspace
	* 点击next,然后选择你要导入的项目
	* 注意：这里选择的是项目名称

### Eclipse中断点调试的基本使用
* A:Debug的作用
	* 调试程序
	* 查看程序执行流程
* B:如何查看程序执行流程		
	* 什么是断点：
		* 就是一个标记，从哪里开始。
		
	* 如何设置断点：
		* 你想看哪里的程序，你就在那个有效程序的左边双击即可。
		
	* 在哪里设置断点：
		* 哪里不会点哪里。
		* 目前：我们就在每个方法的第一条有效语句上都加。
		
	* 如何运行设置断点后的程序：
		* 右键 -- Debug as -- Java Application
		
	* 看哪些地方：
		* Debug：断点测试的地方
			* 在这个地方，记住F6，或者点击也可以。一次看一行的执行过程。
		* Variables：查看程序的变量变化
		* ForDemo：被查看的源文件
		* Console：控制台
		
	* 如何去断点：
		* a:再次双击即可
		* b:找到Debug视图，Variables界面，找到Breakpoints，并点击，然后看到所有的断点，最后点击那个双叉。

### Eclipse查看Java中参数传递问题
* A:断点演示
	* 断点查看Java中参数传递问题