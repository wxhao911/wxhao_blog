---
layout:     post
title:      "学习Java语言前的准备"
subtitle:   "HelloWorld"
date:       2013-06-07
author:     "Wxhao"
header-img: "img/post-bg/java.jpg"
catalog:    true
tags:
    - 基础知识 
    - java
    - JAVASE
---

### 1.Java语言概述

* A:Java语言发展史
	* 詹姆斯·高斯林（James Gosling）1977年获得了加拿大卡尔加里大学计算机科学学士学位，1983年获得了美国卡内基梅隆大学计算机科学博士学位，毕业后到IBM工作，设计IBM第一代工作站NeWS系统，但不受重视。后来转至Sun公司，1990年，与Patrick，Naughton和Mike Sheridan等人合作“绿色计划”，后来发展一套语言叫做“Oak”，后改名为Java。
	* SUN(Stanford University Network，斯坦福大学网络公司) 
* B:Java语言版本
	* JDK 1.1.4		Sparkler	宝石				1997-09-12
	* JDK 1.1.5		Pumpkin		南瓜				1997-12-13
	* JDK 1.1.6		Abigail		阿比盖尔--女子名		1998-04-24
	* JDK 1.1.7		Brutus		布鲁图--古罗马政治家和将军	1998-09-28
	* JDK 1.1.8		Chelsea		切尔西--城市名			1999-04-08
	* J2SE 1.2		Playground	运动场				1998-12-04
	* J2SE 1.2.1		none		无				1999-03-30
	* J2SE 1.2.2		Cricket		蟋蟀				1999-07-08
	* J2SE 1.3		Kestrel		美洲红隼(sǔn)			2000-05-08
	* J2SE 1.3.1		Ladybird	瓢虫				2001-05-17
	* J2SE 1.4.0		Merlin		灰背隼				2002-02-13
	* J2SE 1.4.1		grasshopper	蚱蜢				2002-09-16
	* J2SE 1.4.2		Mantis		螳螂				2003-06-26
	* JAVASE 5.0 (1.5.0)	Tiger		老虎	
	* JAVASE 5.1 (1.5.1)	Dragonfly	蜻蜓	
	* JAVASE 6.0 (1.6.0)	Mustang		野马
	* JAVASE 7.0 (1.7.0)	Dolphin		海豚
* C:Java语言平台
	* J2SE(Java 2 Platform Standard Edition)标准版
		* 是为开发普通桌面和商务应用程序提供的解决方案,该技术体系是其他两者的基础，可以完成一些桌面应用程序的开发
	* J2ME(Java 2 Platform Micro Edition)小型版
		* 是为开发电子消费产品和嵌入式设备提供的解决方案
	* J2EE(Java 2 Platform Enterprise Edition)企业版
		* 是为开发企业环境下的应用程序提供的一套解决方案,该技术体系中包含的技术如 Servlet、Jsp等，主要针对于Web应用程序开发 
* D:Java语言特点
	* 简单性		
	* 解释性
	* 面向对象		
	* 高性能
	* 分布式处理	
	* 多线程
	* 健壮性		
	* 动态
	* 结构中立		
	* 安全性
	* 开源
	* 跨平台

------

### 2.Java语言跨平台原理
* A:什么是跨平台性
* B:Java语言跨平台原理
	* 只要在需要运行java应用程序的操作系统上，先安装一个Java虚拟机(JVM Java Virtual Machine)即可。由JVM来负责Java程序在该系统中的运行。
* C:Java语言跨平台图解
	* write once ,run anywhere!(一处编译,到处运行)

------

### 3.JRE和JDK的概述
* A:什么是JRE
	* 包括Java虚拟机(JVM Java Virtual Machine)和Java程序所需的核心类库等，如果想要运行一个开发好的Java程序，计算机中只需要安装JRE即可。
	* JRE:JVM+类库。 
* B:什么是JDK
	* JDK是提供给Java开发人员使用的，其中包含了java的开发工具，也包括了JRE。所以安装了JDK，就不用在单独安装JRE了。
	* 其中的开发工具：编译工具(javac.exe)  打包工具(jar.exe)等
 	* JDK:JRE+JAVA的开发工具。
* C:为什么JDK中包含一个JRE?
	* 因为写完程序需要看程序输出
* D:JDK,JRE,JVM的作用和关系?
    *JRE:JVM+类库
    *JDK:JRE+JAVA开发工具类

------

### 4.JDK的下载和安装过程图解
* A:JDK的下载
	* 官网 http://www.oracle.com
* B:JDK的安装
	* a:傻瓜式安装
		* 双击安装程序，然后一路next即可(但是不建议)
	* b:安装的推荐方式
		* 安装路径不要有中文或者特殊符号如空格等。
		* 所有和开发相关的软件最好安装目录统一。
			* 举例：我的JDK安装路径
				* D:\develop\Java\jdk1.7.0_72
		* 当提示安装JRE时，可以选择不安装。建议还是安装上。
	* c:安装流程
		* 可以先在d盘建立一个文件夹develop
		* 然后安装
* C:验证安装是否成功
	* a:通过DOS命令，切换到JDK安装的bin目录下。
		* D:\develop\Java\jdk1.7.0_72\bin
	* b:然后分别输入javac和java，如果正常显示一些内容，说明安装成功

[JDK1.7_x86_百度云下载](http://pan.baidu.com/s/1mhYvmp6)

------

### 5.JDK安装路径下的目录解释
* a:bin目录：该目录用于存放一些可执行程序。
	* 如javac.exe（java编译器）、java.exe(java运行工具)，jar.exe(打包工具)和* javadoc.exe(文档生成工具)等。
* b:db目录：db目录是一个小型的数据库。
	* 从JDK 6.0开始，Java中引用了一个新的成员JavaDB，这是一个纯Java实现、开源的数据库管理系统。这个数据库不仅轻便，而且支持JDBC 4.0所有的规范，在学习JDBC 时，不再需要额外地安装一个数据库软件，选择直接使用JavaDB即可。
* c:jre目录："jre"是 Java Runtime Environment 的缩写，意为Java程序运行时环境。此目录是Java运行时环境的根目录，它包括Java虚拟机，运行时的类包，Java应用启动器以及一个bin目录，但不包含开发环境中的开发工具。
* d:include目录：由于JDK是通过C和C++实现的，因此在启动时需要引入一些C语言的头文件，该目录就是用于存放这些头文件的。
* e:lib目录：lib是library的缩写，意为 Java 类库或库文件，是开发工具使用的归档包文件。
* f:src.zip文件：src.zip为src文件夹的压缩文件，src中放置的是JDK核心类的源代码，通过该文件可以查看Java基础类的源代码。

------

### 6.Java开发工具介绍
* A:notepad(微软操作系统自带)
* B:Editplus/Notepad++
* C:Eclipse
* D:MyEclipse

------

### 7.HelloWorld案例的编写和运行
* A:定义类
* B:写main方法
* C:写输出语句
* D:Java程序开发运行与工作原理
* E:编译和运行程序

```    
class HelloWorld {
	public static void main(String[] args) {
		System.out.println("HelloWorld");
	}
}
```	

------

### 8.HelloWorld案例常见问题
* A:找不到文件
	* a:文件扩展名隐藏导致编译失败
	* b:文件名写错了
* B:单词拼写问题
	* a:class写成Class
	* b:String写成string
	* c:System写成system
	* d:main写成mian
* C:括号匹配问题
	* a:把类体的那对大括号弄掉一个
	* b:把方法体的那对大括号弄掉一个
	* c:把输出语句的那对小括号弄掉一个
* D:中英文问题
	* a:提示信息：错误: 非法字符: \????的格式
	* 注意：java编程中需要的基本上都是英文字符

------

### 9.Java语言的书写格式(约定俗成)
* 1.大括号要对齐,并且成对写
* 2.左大括号前面有空格
* 3.遇到左大括号要缩进,Tab
* 4.方法和程序块之间加空行让程序看起来清晰
* 5.并排语句之间加空格,例如for语句
* 6.运算符两侧加空格

------

### 10.path环境变量的作用及配置方式
#### 方式1:
* A:在JDK的bin目录下开发程序容易产生的问题
	* a:如果文件过多，不方便管理
	* b:删除自己写过的不需要的文件，可能不小心把JDK自带的工具给删除了
* B:如何解决问题呢
	* notepad这样的命令为什么在任何路径下都能够执行,配置path环境变量
* C:配置方式
	* a:xp系统
		* 右键点击桌面计算机→选择属性→选择高级选项卡→点击环境变量→下方系统变量中查找path→双击path→将jdk安装目录下的bin目录添加到最左边并添加分号。
	* b:win7/win8系统
		* 右键点击桌面计算机→选择属性→选择高级系统设置→选择高级选项卡→点击环境变量→下方系统变量中查找path→双击path→将jdk安装目录下的bin目录添加到最左边并添加分号。
* path配置的是可执行的文件.exe,配置后可以在不同的盘符下访问path路径下的可执行文件

#### 方式2:
* A:先配置JAVA_HOME
* B:再修改path
* C:最后说一下path是有先后顺序关系的


------
### 11.classpath环境变量的作用及其配置
* A:为什么要配置classpath
    * 找到class文件并执行 
* B:classpath配置的原理
    * 同上
* C:如何配置classpath
    * 同上
**JDK1.5之后不需要配置,默认将当前编译路径当成classpath**
* path和classpath的区别
	* path配置的是可执行的文件.exe,配置后可以在不同的盘符下访问path路径下的可执行文件
	* classpath配置的java的类文件,就是.class文件

------

### 12.注释概述及其分类
* A:什么是注释
    * 用于解释说明程序的文字
* B:注释的分类及讲解
```java
    //1.单行注释//可以嵌套
    
	/*
	2.多行注释(不能嵌套)
	*/
```
* 注释的作用
	* A:解释说明程序
	* B:帮助我们调试错误(注释出错代码)

------

### 13.关键字的概述和使用
* A:什么是关键字
	* 被Java语言赋予特定含义的单词 
* B:关键字的特点
	* 组成关键字的字母全部小写 
* C:常见关键字
	* public static void class等 
* D:关键字的注意事项
	* goto和const作为保留字存在,目前并不使用,类似Editplus这样的高级记事本,针对关键字有特殊的颜色标记，非常直观 

![关键字](http://wxhao2.duapp.com/blog/post-in/20130607/guanjianzi.png)

------

### 14.标识符的概述和组成规则
* A:什么是标识符
	* 就是给类,接口,方法,变量等起名字时使用的字符序列 
* B:标识符的组成规则
	* 英文大小写字母
	* 数字字符
	* $和_ 
* C:标识符注意事项
	* 1,不能使用关键字
	* 2,不能数字开头 

------

### 15.标识符中常见的命名规则
* 概述:就是给类,接口,方法,变量等起名字时使用的字符序列
    * A:包
	    * 最好是域名倒过来,要求所有的字母小写 
    * B:类或者接口
    	* 如果是一个单词首字母大写
    	* 如果是多个单词每个单词首字母大写(驼峰标识) 
    * C:方法或者变量
    	* 如果是一个单词全部小写
    	* 如果是多个单词,从第二个单词首字母大写 
    * D:常量
    	* 如果是一个单词,所有字母大写
    	* 如果是多个单词,所有的单词大写,用下划线区分每个单词
* 组成规则
    * 英文大小写字母
    * 数字字符
    * $和_
* 注意事项
    * 不能以数字开头
    * 不能是JAVA关键字
    * 区分大小写

### 16.常量的概述和使用
* A:什么是常量
	* 在程序执行的过程中其值不可以发生改变 
* B:Java中常量的分类
	* 字面值常量
	* 自定义常量
* C:字面值常量的分类
	* 字符串常量	用双引号括起来的内容
	* 整数常量		所有整数
	* 小数常量		所有小数
	* 字符常量		用单引号括起来的内容,里面只能放单个数字,单个字母或单个符号
	* 布尔常量		较为特殊，只有true和false
	* 空常量		    null

```
System.out.print("abc");//字符串常量
System.out.print(123);//整数常量
System.out.print(12.3);//小数常量
System.out.print('a');//字符常量(''中必须放单个数字/字母/符号,不能为空)
System.out.print(ture);//布尔常量(true/false)
```
	
---