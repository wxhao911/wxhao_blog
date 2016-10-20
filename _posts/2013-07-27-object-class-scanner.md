---
layout:     post
title:      "Scanner"
subtitle:   "JavaSE之常见对象"
date:       2013-07-27
author:     "Wxhao"
header-img: "img/post-bg/black-sky.jpg"
catalog:    true
tags:
    - 基础知识 
    - java
    - JAVASE
---

### Scanner的概述和方法介绍
* scanner的构造方法原理
    * scanner(inputstream source)
    * system类下有一个静态的字段
        * public static final inputstream in:标准的输入流,对应着键盘录入

* 一般方法
    * hashNextXxx() 判断是否还有下一个输入项,其中Xxx可以是Int,Double等,如果需要判断是否包含下一个字符串,则可以省略Xxx
    * nextXxx() 获取下一个输入项,Xxx的含义和上个方法中的相同,默认情况下,scanner用空格,回车等作分隔符

```
package com.wxhao.bean;

import java.util.Scanner;

public class Demo_Scanner {

	public static void main(String[] args) {
		Scanner sc=new Scanner(System.in);
//		int i =sc.nextInt();
//		System.out.println(i);
		
		if(sc.hasNextInt()){
			int i =sc.nextInt();
			System.out.println(i);
		}else{
			System.out.println("输入类型错误");
		}
	}
}

```
    
### Scanner获取数据出现的小问题及解决方案

* 两个常用的方法

    * public int nextInt();获取一个int类型的值
    * public int nextString();获取一个String类型的值
* 代码演示
    * 获取多个int值,多个String值
    * 先获取int,然后获取string值出现问题
    * 解决问题办法
        * 第一种:现获取一个数之后在创建一个新的键盘录入对象获取字符串
        * 第二种:把所有的数据都先按照字符串获取,然后要什么,你就对应的转换为什么

```
package com.wxhao.bean;

import java.util.Scanner;

public class Demo2_Scanner {

	public static void main(String[] args) {
		Scanner sc=new Scanner(System.in);
		
//		System.out.println("请输入第一个数字");
//		int i = sc.nextInt();
//		System.out.println("请输入第二个数字");
//		int j = sc.nextInt();
		
//		System.out.println("i="+i+",j="+j);
		
//		System.out.println("请输入第一个字符串");
//		String x = sc.nextLine();
//		System.out.println("请输入第二个字符串");
//		String y = sc.nextLine();
//		System.out.println("x="+x+",y="+y);
		
		/**
		 * nextInt()是键盘录入整数的方法,当我们录入10的时候
		 * 其实在键盘上录入的是10和\r\n,nextInt()方法只获取10就结束了
		 * nextLine()是键盘录入字符串的方法,可以接受任意类型,但是他为什么能获取一行呢?
		 * 通过\r\n,只要遇到\r\n就证明是一行结束
		 */
//		System.out.println("请输入第一个数字");
//		int a = sc.nextInt();
//		System.out.println("请输入第二个字符串");
//		String b = sc.nextLine();
//		System.out.println("a="+a+",b="+b);//输入10 敲回车只会输出10,为什么?
		
		/**
		 * 解决方案
		 * 1.创建两次对象,但是浪费空间
		 * 2.键盘录入的都是字符串,都用nextLine方法
		 */
	}

}

```