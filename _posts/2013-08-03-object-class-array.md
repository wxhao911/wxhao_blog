---
layout:     post
title:      "数组基本原理"
subtitle:   "JavaSE之常见对象"
date:       2013-08-03
author:     "Wxhao"
header-img: "img/post-bg/black-sky.jpg"
catalog:    true
tags:
    - 基础知识 
    - java
    - JAVASE
---


### 数组排序
#### 数组高级冒泡排序
##### 原理图解
* A:画图演示
    * ![冒泡排序](http://wxhao2.duapp.com/blog/post-in/20130803/mppx.png)
* 
		需求：
			数组元素：{24, 69, 80, 57, 13}
			请对数组元素进行排序。
			
			冒泡排序
				相邻元素两两比较，大的往后放，第一次完毕，最大值出现在了最大索引处

##### 代码实现 
* A:代码演示
	* 数组高级冒泡排序代码

#### 数组高级选择排序
##### 原理图解
* A:画图演示
	* 需求：
		* 数组元素：{24, 69, 80, 57, 13}
		* 请对数组元素进行排序。
		
		* 选择排序
			* 从0索引开始，依次和后面元素比较，小的往前放，第一次完毕，最小值出现在了最小索引处

![选择排序](http://wxhao2.duapp.com/blog/post-in/20130803/xzpx.png)

##### 代码实现 
* A:案例演示
	* 数组高级选择排序代码

```
package com.wxhao.array;

public class Demo1_Array {

	public static void main(String[] args) {
		int[] arr = {24, 69, 80, 57, 13};
		bubbleSort(arr);
		//selectSort(arr);
		print(arr);
	}
	
	/*
	 * 冒泡排序
	 * 1,返回值类型,void
	 * 2,参数列表,int[] arr
	 * 
	 * 	第一次:arr[0]与arr[1],arr[1]与arr[2],arr[2]与arr[3],arr[3]与arr[4]比较4次
		第二次:arr[0]与arr[1],arr[1]与arr[2],arr[2]与arr[3]比较3次
		第三次:arr[0]与arr[1],arr[1]与arr[2]比较2次
		第四次:arr[0]与arr[1]比较1次
	 */
	
	public static void bubbleSort(int[] arr) {
		for (int i = 0; i < arr.length - 1; i++) {				//外循环只需要比较arr.length-1次就可以了
			for (int j = 0; j < arr.length - 1 - i; j++) {		//-1为了防止索引越界,-i为了提高效率
				if(arr[j] > arr[j+1]) {
					/*int temp = arr[j];
					arr[j] = arr[j + 1];
					arr[j+1] = temp;*/
					swap(arr,j,j+1);
				}
			}
		}
	}
	
	/*
	 * 打印数组
	 * 1,返回值类型void
	 * 2,参数列表int[]arr
	 */
	
	public static void print(int[] arr) {
		for (int i = 0; i < arr.length; i++) {
			System.out.print(arr[i] + " ");
		}
	}
	
	/*
	 * 选择排序
	 * 1,返回值类型void
	 * 2,参数列表int[] arr
	 * 
	 * 	第一次:arr[0]分别与arr[1-4]比较,比较4次
		第二次:arr[1]分别与arr[2-4]比较,比较3次
		第三次:arr[2]分别与arr[3-4]比较,比较2次
		第四次:arr[3]与arr[4]比较,比较1次
	 */
	
	public static void selectSort(int[] arr) {
		for (int i = 0; i < arr.length - 1; i++) {				//只需要比较arr.length-1次
			for (int j = i + 1; j < arr.length; j++) {
				if(arr[i] > arr[j]) {
					/*int temp = arr[i];
					arr[i] = arr[j];
					arr[j] = temp;*/
					swap(arr,i,j);
				}
			}
		}
	}
	
	/*
	 * 换位操作
	 * 1,返回值类型,void
	 * 2,参数列表int[] arr.int i,int j
	 * 
	 * 如果某个方法,只针对本类使用,不想让其他类使用就可以定义成私有的
	 */
	
	private static void swap(int[] arr,int i,int j) {
		int temp = arr[i];
		arr[i] = arr[j];
		arr[j] = temp;
	}
}
```

### 数组高级二分查找原理图解 
* A:画图演示
	* 二分查找  
	* 前提：数组元素有序

![二分查找](http://wxhao2.duapp.com/blog/post-in/20130803/efcz.png)

### 数组高级二分查找代码实现及注意事项 
* A:案例演示
	* 数组高级二分查找代码
* B:注意事项
	* 如果数组无序，就不能使用二分查找。
		* 因为如果你排序了，但是你排序的时候已经改变了我最原始的元素索引。

```
package com.wxhao.array;

public class Demo2_Array {

	public static void main(String[] args) {
		int[] arr = {11,22,33,44,55,66,77};
		System.out.println(getIndex(arr, 22));
		System.out.println(getIndex(arr, 66));
		System.out.println(getIndex(arr, 88));
	}
	
	/*
	 * 二分查找
	 * 1,返回值类型,int
	 * 2,参数列表int[] arr,int value
	 */
	
	public static int getIndex(int[] arr, int value) {
		int min = 0;
		int max = arr.length - 1;
		int mid = (min + max) / 2;
		
		while(arr[mid] != value) {					//当中间值不等于要找的值,就开始循环查找
			if(arr[mid] < value) {					//当中间值小于了要找的值
				min = mid + 1;						//最小的索引改变
			}else if (arr[mid] > value){			//当中间值大于了要找的值
				max = mid - 1;						//最大的索引改变
			}
			
			mid = (min + max) / 2;					//无论最大还是最小改变,中间索引都会随之改变
			
			if(min > max) {							//如果最小索引大于了最大索引,就没有查找的可能性了
				return -1;							//返回-1
			}
		}
		return mid;
	}
}
```

### Arrays类的概述和方法使用 
* A:Arrays类概述
	* 针对数组进行操作的工具类。
	* 提供了排序，查找等功能。
* B:成员方法
	* public static String toString(int[] a)
	* public static void sort(int[] a)
	* public static int binarySearch(int[] a,int key)

### 基本类型包装类的概述 
* A:为什么会有基本类型包装类
	* 将基本数据类型封装成对象的好处在于可以在对象中定义更多的功能方法操作该数据。
* B:常用操作
	* 常用的操作之一：用于基本数据类型与字符串之间的转换。
* C:基本类型和包装类的对应
    * 基本数据类型  -   包装类
	* 	byte 	-		Byte
	* 	short	-		Short
	* 	int		-		Integer
	* 	long	-		Long
	* 	float	-		Float
	* 	double	-		Double
	* 	char	-		Character
	* 	boolean	-		Boolean

```
package com.wxhao.wrapclass;

public class Demo1_Integer {

	public static void main(String[] args) {
		System.out.println(Integer.toBinaryString(60));//2进制
		System.out.println(Integer.toOctalString(60));//8进制
		System.out.println(Integer.toHexString(60));//16进制
	}
}
```