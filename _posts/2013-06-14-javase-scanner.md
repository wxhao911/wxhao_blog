---
layout:     post
title:      "JavaSE之Scanner键盘录入"
subtitle:   "HelloWorld"
date:       2013-06-14
author:     "Wxhao"
header-img: "img/post-bg/java.jpg"
catalog:    true
tags:
    - 基础知识 
    - java
    - JAVASE
---

### 键盘录入的基本格式讲解
* A:为什么要使用键盘录入数据
	* a:为了让程序的数据更符合开发的数据
	* b:让程序更灵活一下
* B:如何实现键盘录入呢?
	* 先照格式来。
	* a:导包
		* 格式：
			* import java.util.Scanner; 
		* 位置：
			* 在class上面。
	* b:创建键盘录入对象
		* 格式：
			* Scanner sc = new Scanner(System.in);
	* c:通过对象获取数据	
		* 格式：
			* int x = sc.nextInt();
* C:代码演示
	* 键盘录入1个整数，并输出到控制台。
	* 键盘录入2个整数，并输出到控制台。

```

import java.util.Scanner;
class Test {
	public static void main(String[] args) {
		/*Scanner sc = new Scanner(System.in);//创建键盘录入对象
		System.out.println("请输入一个整数:");
		int x = sc.nextInt();//将键盘录入的数据存储在x中
		System.out.println(x);*/

		//录入两个整数
		Scanner sc = new Scanner(System.in);//创建键盘录入对象
		System.out.println("请输入第一个整数:");
		int x = sc.nextInt();//将键盘录入的数据存储在x中
		System.out.println(x);

		System.out.println("请输入第二个整数:");
		int y = sc.nextInt();//将键盘录入的数据存储在y中
		System.out.println(y);
	}
}
```


### 键盘录入的练习
###### 练习1
* A:代码演示
	* 键盘录入练习：键盘录入两个数据，并对这两个数据求和，输出其结果
* B:代码演示
	* 键盘录入练习：键盘录入两个数据，获取这两个数据中的最大值

```
import java.util.Scanner;//导入包中的类Scanner
class Test {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);//创建键盘录入对象
		
		//键盘录入练习：键盘录入两个数据，并对这两个数据求和，输出其结果
		/*System.out.println("请输入第一个整数:");
		int x = sc.nextInt();//将键盘录入的数据存储在x中
		System.out.println("请输入第二个整数:");
		int y = sc.nextInt();//将键盘录入的数据存储在y中
		int sum = x + y;
		System.out.println(sum);*/

		//键盘录入练习：键盘录入两个数据，获取这两个数据中的最大值
		System.out.println("请输入第一个整数:");
		int x = sc.nextInt();//将键盘录入的数据存储在x中
		System.out.println("请输入第二个整数:");
		int y = sc.nextInt();//将键盘录入的数据存储在y中

		int max = (x > y) ? x : y;//获取x和y中的最大值
		System.out.println("max = " + max);
	}
}
```

###### 练习2

* 键盘录入练习：键盘录入两个数据，比较这两个数据是否相等
* 键盘录入练习：键盘录入三个数据，获取这三个数据中的最大值

```
import java.util.Scanner;//导包
class Test {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);//创建键盘录入对象

		//键盘录入练习：键盘录入两个数据，比较这两个数据是否相等
		/*System.out.println("请输入第一个整数:");
		int x = sc.nextInt();//将键盘录入的数据存储在x中
		System.out.println("请输入第二个整数:");
		int y = sc.nextInt();//将键盘录入的数据存储在y中

		//boolean b = (x == y)? true : false;
		boolean b = (x == y);
		System.out.println(b);*/

		//键盘录入练习：键盘录入三个数据，获取这三个数据中的最大值
		System.out.println("请输入第一个整数:");
		int x = sc.nextInt();//将键盘录入的数据存储在x中
		System.out.println("请输入第二个整数:");
		int y = sc.nextInt();//将键盘录入的数据存储在y中
		System.out.println("请输入第三个整数:");
		int z = sc.nextInt();//将键盘录入的数据存储在y中

		//定义临时变量记录住比较出前两个变量中的最大值
		int temp = (x > y) ? x : y;
		//将比较后的结果与第三个变量中的值比较,比较出三个数中的最大值
		int max = (temp > z) ? temp : z;
		System.out.println(max);
	}
}
```