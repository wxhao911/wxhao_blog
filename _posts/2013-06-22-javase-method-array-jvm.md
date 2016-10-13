---
layout:     post
title:      "JavaSE之数组及其循环和内存分配"
subtitle:   "HelloWorld"
date:       2013-06-22
author:     "Wxhao"
header-img: "img/post-bg/java.jpg"
catalog:    true
tags:
    - 基础知识 
    - java
    - JAVASE
---

### 数组概述和定义格式说明
* A:为什么要有数组(容器)
	* 为了存储同种数据类型的多个值
* B:数组概念
	* 数组是存储同一种数据类型多个元素的集合。也可以看成是一个容器。
	* 数组既可以存储基本数据类型，也可以存储引用数据类型。

* C:数组定义格式
	数据类型[] 数组名 = new 数据类型[数组的长度];

```
//数据类型[] 数组名 = new 数据类型[数组的长度];
int[] arr = new int[5];				//可以存储五个int类型的数据

/*
左边:
int:数据类型
[]:代表的数组,几个中括号就代表几维数组
arr:合法的标识符

右边:
new:创建新的实体或对象
int:数据类型
[]:代表的数组
5:代表数组的长度
```

### 数组的初始化动态初始化
* A:什么是数组的初始化
	* 就是为数组开辟连续的内存空间，并为每个数组元素赋予值 
* B:如何对数组进行初始化
	* a:动态初始化 只指定长度，由系统给出初始化值
		* int[] arr = new int[5]; 	
	* b:静态初始化 给出初始化值，由系统决定长度	
* C:动态初始化的格式：
	* 数据类型[] 数组名 = new 数据类型[数组长度];
* D:代码演示
	* 输出数组名称和数组元素

```
int[] arr = new int[5];//动态初始化,在内存中开辟连续的5块空间
System.out.println(arr[0]);//系统给出默认初始化值,整数类型的都是0
arr[0] = 10;

System.out.println(arr[0]);	

System.out.println(arr);//[I@19bb25a
```

* 整数类型:byte,short,int,long默认初始化值都是0
* 浮点类型:float,double默认初始化值都是0.0
* 布尔类型:boolean默认初始化值false
* 字符类型:char默认初始化值'\u0000'
    * char在内存中占的两个字节,是16个二进制位
    * \u0000,每一个0其实代表的是16进制的0,那么四个0就是代表16个二进制位

* [I@19bb25a的意思
    * [代表是数组,几个就代表几维
    * I代表是int类型
    * @是固定的
    * 19bb25a代表的是数组的地址值

### Java中的内存分配以及栈和堆的区别
* A:栈
	* 存储局部变量 
	    * 局部变量:定义在方法声明上和方法中的变量
* B:堆
	* 存储new出来的数组或对象 
* C:方法区
	* 面向对象部分讲解 
* D:本地方法区
	* 和系统相关 
* E:寄存器
	* 给CPU使用

### 数组的内存图解1一个数组
* A:画图演示
	* 一个数组

```
int[] arr = new int[3];						//动态初始化,创建3块连续的空间
System.out.println(arr);
arr[0] = 10;
arr[1] = 20;

System.out.println(arr[0]);
System.out.println(arr[1]);
```

![数组内存图](http://wxhao2.duapp.com/blog/post-in/20130622/sznct.png)


### 数组的内存图解2二个数组
* A:画图演示
	* 二个不同的数组

```
int[] arr1 = new int[3];//创建数组,长度为3
int[] arr2 = new int[3];//创建数组,长度为3

System.out.println(arr1);//打印数组的地址值
System.out.println(arr2);

arr1[0] = 10;//给第一个数组中第一个元素赋值
arr2[1] = 20;//给第二个数组中第二个元素赋值

System.out.println(arr1[0]);
System.out.println(arr1[1]);
System.out.println(arr1[2]);

System.out.println("--------------------------------------");

System.out.println(arr2[0]);
System.out.println(arr2[1]);
System.out.println(arr2[2]);
```

![两个数组内存图](http://wxhao2.duapp.com/blog/post-in/20130622/lgsznct.png)

### 数组的内存图解3三个引用两个数组
* A:画图演示
	* 三个引用，有两个数组的引用指向同一个地址

```
int[] arr1 = new int[3];
int[] arr2 = new int[5];
int[] arr3 = arr2;

System.out.println(arr1);
System.out.println(arr2);
System.out.println(arr3);

arr1[0] = 10;
arr1[1] = 20;

arr2[1] = 30;
arr3[1] = 40;
arr3[2] = 50;

System.out.println(arr1[0]);
System.out.println(arr1[1]);
System.out.println(arr1[2]);
System.out.println("-------------------------------");
System.out.println(arr2[0]);
System.out.println(arr2[1]);
System.out.println(arr2[2]);
System.out.println(arr2[3]);
System.out.println(arr2[4]);
System.out.println("-------------------------------");
System.out.println(arr3[0]);
System.out.println(arr3[1]);
System.out.println(arr3[2]);
System.out.println(arr3[3]);
System.out.println(arr3[4]);
```

![三个引用两个数组](http://wxhao2.duapp.com/blog/post-in/20130622/sgyylgsz.png)

### 数组的初始化静态初始化及内存图
* A:静态初始化的格式：
	* 格式：数据类型[] 数组名 = new 数据类型[]{元素1,元素2,…};
	* 简化格式：
		* 数据类型[] 数组名 = {元素1,元素2,…};
* B:案例演示
	* 对数组的解释
	* 输出数组名称和数组元素
* C:画图演示
	* 一个数组

```
//数据类型[] 数组名 = new 数据类型[]{元素1,元素2,…};
//int[] arr = new int[5]{11,22,33,44,55};	//不允许动静结合
int[] arr2 = {11,22,33,44,55};			//静态初始化的简写形式

//int[] arr;								//声明数组引用
//arr = new int[]{11,22,33,44,55};

//int[] arr2;
//arr2 = {11,22,33,44,55};				//简写形式声明和赋值在同一行

System.out.println(arr2);
System.out.println(arr2[4]);
```

![数组的静态初始化](http://wxhao2.duapp.com/blog/post-in/20130622/szjtcsh.png)

都会默认初始化为0在赋值

### 数组操作的两个常见小问题越界和空指针
* A:案例演示
	* a:ArrayIndexOutOfBoundsException:数组索引越界异常
		* 原因：你访问了不存在的索引。
	* b:NullPointerException:空指针异常
		* 原因：数组已经不在指向堆内存了。而你还用数组名去访问元素。
		* int[] arr = {1,2,3};
		* arr = null;
		* System.out.println(arr[0]);

```
int[] arr = new int[5];//0x0011
//System.out.println(arr[-1]);//当访问数组中不存在的索引,会出现索引越界异常

arr = null;
System.out.println(arr[0]);	//当数组引用赋值为null,再去调用数组中的元素就会出现空指针异常
```

### 数组的操作1遍历
* A:案例演示
	* 数组遍历：就是依次输出数组中的每一个元素。
	* 数组的属性:arr.length数组的长度
	* 数组的最大索引:arr.length - 1;

```
class Demo_Array {
	public static void main(String[] args) {
		int[] arr = {11,22,33,44,55};

		/*System.out.println(arr[0]);
		System.out.println(arr[1]);
		System.out.println(arr[2]);
		System.out.println(arr[3]);
		System.out.println(arr[4]);*/
		
		for (int i = 0;i < 5 ;i++ ) {
			System.out.println(arr[i]);
		}
		System.out.println("---------------");
		//arr.length 代表的是数组的长度
		System.out.println(arr.length);
		for (int i = 0;i < arr.length ;i++ ) {
			System.out.println(arr[i]);
		}

		int[] arr2 = {3,4,5};
		print(arr2);
	}

	/*
	数组的遍历
	1,返回值类型void
	2,参数列表int[] arr
	*/

	public static void print(int[] arr) {
		for (int i = 0;i < arr.length ;i++ ) {
			System.out.print(arr[i] + " ");
		}
	}
}

```

### 数组的操作2获取最值
* A:案例演示
	* 数组获取最值(获取数组中的最大值最小值)

```
class Demo_Array {
	public static void main(String[] args) {
		int[] arr = {33,77,22,44,55};
		int max = getMax(arr);
		System.out.println(max);
	}

	/*
	获取数组中最大值
	1,返回值类型int
	2,参数列表int[] arr
	*/

	public static int getMax(int[] arr) {
		int max = arr[0];
		for (int i = 1;i < arr.length ;i++ ) {//从数组的第二个元素开始遍历
			if (max < arr[i]) {//如果max记录的值小于的数组中的元素
				max = arr[i];//max记录住较大的
			}
		}
		return max;
	}
}
```

### 数组的操作3反转
* A:案例演示
	* 数组元素反转(就是把元素对调)

```
class Demo_Array {
	public static void main(String[] args) {
		int[] arr = {11,22,33,44,55};
		reverseArray(arr);
		print(arr);
	}

	/*
	数组元素反转
	1,明确返回值类型void
	2,明确参数列表int[] arr
	*/

	public static void reverseArray(int[] arr) {
		for (int i = 0;i < arr.length / 2 ; i++) {
			//arr[0]和arr[arr.length-1-0]交换
			//arr[1]和arr[arr.length-1-1]交换
			//arr[2]和arr[arr.lentth-1-2]
			//...

			int temp = arr[i];
			arr[i] = arr[arr.length-1-i];
			arr[arr.length-1-i] = temp;
		}
	}

	/*
	数组遍历
	1,明确返回值类型void
	2,明确参数列表int[] arr
	*/

	public static void print(int[] arr) {
		for (int i = 0;i < arr.length ;i++ ) {				//遍历数组中的每一个元素
			System.out.print(arr[i] + " ");					//打印在控制台
		}
	}
}
```

### 数组的操作4查表法
* A:案例演示
	* 数组查表法(根据键盘录入索引,查找对应星期)

```
import java.util.Scanner;
class Demo_Array {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		System.out.println("请输入对应的星期范围在1-7");
		int week = sc.nextInt();

		System.out.println("星期" + getWeek(week));
	}

	/*
	根据索引返回对应的星期
	1,返回值类型char
	2,参数列表int week
	*/

	public static char getWeek(int week) {
		char[] arr = {' ','一','二','三','四','五','六','日'};		//定义了一张星期表
		return arr[week];											//通过索引获取表中的元素
	}
```

### 数组的操作5基本查找
* A:案例演示
	* 数组元素查找(查找指定元素第一次在数组中出现的索引)

```
class Demo_Array {
	public static void main(String[] args) {
		int[] arr = {11,22,33,44,55,66,77};
		int index = getIndex(arr,88);
		System.out.println(index);
	}

	/*
	查找元素索引
	1,返回值类型int
	2,明确参数列表,int[] arr,int value
	*/

	public static int getIndex(int[] arr,int value) {
		for (int i = 0;i < arr.length ;i++ ) {				//数组的遍历
			if (arr[i] == value) {							//如果数组中的元素与查找的元素匹配
				return i;
			}

		}
		return -1;
		
	}
}

```