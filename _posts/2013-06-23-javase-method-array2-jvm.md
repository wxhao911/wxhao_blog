---
layout:     post
title:      "JavaSE之二维数组及内存分配"
subtitle:   "HelloWorld"
date:       2013-06-23
author:     "Wxhao"
header-img: "img/post-bg/java.jpg"
catalog:    true
tags:
    - 基础知识 
    - java
    - JAVASE
---

### 二维数组概述和格式1的讲解
* A:二维数组概述
* B:二维数组格式1
	* int[][] arr = new int[3][2]; 
* C:二维数组格式1的解释
* D:注意事项
	* a:以下格式也可以表示二维数组
		* 1:数据类型 数组名[][] = new 数据类型[m][n];
		* 2:数据类型[] 数组名[] = new 数据类型[m][n];
	* B:注意下面定义的区别

```
int x;//申明变量x
int y;//申明变量y
int x,y;//申明变量x,y

int[] x;//申明一维数组x
int[] y[];//申明二维数组x

int[] x,y[];//x是一维数组,y是二维数组
```

* E:案例演示
	* 定义二维数组，输出二维数组名称，一维数组名称，一个元素

```
/*
这是一个二维数组
这个二维数组中有3个一维数组
每个一维数组中有2个元素

[[I@19bb25a									//二维数组的地址值
[I@da6bf4									//一维数组的地址值
0											//元素值
*/
System.out.println(arr);					//二维数组
System.out.println(arr[0]);					//二维数组中的第一个一维数组
System.out.println(arr[0][0]);				//二维数组中的第一个一维数组的第一个元素
```


### 二维数组格式1的内存图解
* A:画图演示
	* 画图讲解上面的二维数组名称，一维数组名称，一个元素的值的问题

```
System.out.println(arr);					//打印二维数组
System.out.println(arr[0]);					//打印二维数组中的第一个一维数组
System.out.println(arr[0][0]);				//打印二维数组中的第一个一维数组中的第一个元素
```

![二维数组内存图](http://wxhao2.duapp.com/blog/post-in/20130623/ewsznct1.png);

### 二维数组格式2的讲解及其内存图解
* A:二维数组格式2
	* int[][] arr = new int[3][]; 
* B:二维数组格式2的解释
* C:案例演示
	* 讲解格式，输出数据，并画内存图

```
int[][] arr = new int[3][];				//这是一个二维数组,这个二维数组中有三个一维数组,三个一维数组都没有被赋值

System.out.println(arr[0]);
System.out.println(arr[1]);
System.out.println(arr[2]);
arr[0] = new int[3];					//第一个一维数组中可以存储三个int值
arr[1] = new int[5];					//第二个一维数组中可以存储五个int值
System.out.println("------------------");
System.out.println(arr[0]);
System.out.println(arr[1]);
System.out.println(arr[2]);
```

![二维数组内存图](http://wxhao2.duapp.com/blog/post-in/20130623/ewsznct2.png)

### 二维数组格式3的讲解及其内存图解
* A:二维数组格式3
	* int[][] arr = {{1,2,3},{4,5},{6,7,8,9}}; 
* B:二维数组格式3的解释
* C:案例演示
	* 讲解格式，输出数据，并画内存图

```
int[][] arr = {{1,2,3},{4,5},{6,7,8,9}}; //这是一个二维数组,这个二维数组中每个大括号都代表一个一维数组
System.out.println(arr);				//[[I@19bb25a,二维数组的地址值
System.out.println(arr[0]);				//[I@da6bf4,一维数组的地址值
System.out.println(arr[0][0]);			//1,一维数组中的元素值
```

![二维数组内存图](http://wxhao2.duapp.com/blog/post-in/20130623/ewsznct3.png)

### 二维数组练习1遍历
* A:案例演示
	* 需求：二维数组遍历
	* 外循环控制的是二维数组的长度，其实就是一维数组的个数。
	* 内循环控制的是一维数组的长度。

```
int[][] arr = {{1,2,3},{4,5},{6,7,8,9}};

for (int i = 0;i < arr.length ;i++ ) {			//获取到每个二维数组中的一维数组
	for (int j = 0;j < arr[i].length ;j++ ) {	//获取每个一维数组中的元素
		System.out.print(arr[i][j] + " ");
	}
	System.out.println();
}
```

### 二维数组练习2求和
* A:案例演示

```
		需求：公司年销售额求和
		某公司按照季度和月份统计的数据如下：单位(万元)
		第一季度：22,66,44
		第二季度：77,33,88
		第三季度：25,45,65
		第四季度：11,66,99
```

``` 
int[][] arr = {{22,66,44},{77,33,88},{25,45,65},{11,66,99}};

int sum = 0;									//定义变量,记录每次相加的结果
for (int i = 0;i < arr.length ;i++ ) {			//获取每一个一维数组
	for (int j = 0;j < arr[i].length ;j++ ) {	//获取每一个一维数组中的元素
		sum = sum + arr[i][j];					//累加
	}
}

System.out.println(sum);
```


