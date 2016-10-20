---
layout:     post
title:      "StringBuffer类与StringBuilder类"
subtitle:   "JavaSE之常见对象"
date:       2013-08-01
author:     "Wxhao"
header-img: "img/post-bg/black-sky.jpg"
catalog:    true
tags:
    - 基础知识 
    - java
    - JAVASE
---

### StringBuffer类的概述
* A:StringBuffer类概述
	* 通过JDK提供的API，查看StringBuffer类的说明
	* 线程安全的可变字符序列 
* B:StringBuffer和String的区别
	* String是一个不可变的字符序列
	* StringBuffer是一个可变的字符序列 

### StringBuffer类的构造方法
* A:StringBuffer的构造方法：
	* public StringBuffer():无参构造方法
	* public StringBuffer(int capacity):指定容量的字符串缓冲区对象
	* public StringBuffer(String str):指定字符串内容的字符串缓冲区对象
* B:StringBuffer的方法：
	* public int capacity()：返回当前容量。	理论值(不掌握)
	* public int length():返回长度（字符数）。 实际值
* C:代码演示
	* 构造方法和长度方法的使用

```
package com.wxhao.stringbuffer;

public class Demo1_StringBuffer {

	public static void main(String[] args) {
		StringBuffer sb = new StringBuffer();
		System.out.println(sb.length());		//容器中的字符个数,实际值
		System.out.println(sb.capacity());		//容器的初始容量,理论值
		
		StringBuffer sb2 = new StringBuffer(10);
		System.out.println(sb2.length());
		System.out.println(sb2.capacity());
		
		StringBuffer sb3 = new StringBuffer("heima");
		System.out.println(sb3.length());		//实际字符的个数
		System.out.println(sb3.capacity());		//字符串的length + 初始容量
		
	}
}
```
    
### StringBuffer的添加功能
* A:StringBuffer的添加功能
	* public StringBuffer append(String str):
		* 可以把任意类型数据添加到字符串缓冲区里面,并返回字符串缓冲区本身
	* public StringBuffer insert(int offset,String str):
		* 在指定位置把任意类型的数据插入到字符串缓冲区里面,并返回字符串缓冲区本身

```
package com.wxhao.stringbuffer;

public class Demo2_StringBuffer {
	/*
		StringBuffer是字符串缓冲区,当new的时候是在堆内存创建了一个对象,底层是一个长度为16的字符数组
		当调用添加的方法时,不会再重新创建对象,在不断向原缓冲区添加字符
	 */
	public static void main(String[] args) {
		//demo1();
		StringBuffer sb = new StringBuffer("1234");
		sb.insert(3, "wxhao");//在指定位置添加元素,如果没有指定位置的索引就会报索引越界异常
		
		System.out.println(sb);
	}

	private static void demo1() {
		StringBuffer sb = new StringBuffer();
		StringBuffer sb2 = sb.append(true);
		StringBuffer sb3 = sb.append("wxhao");
		StringBuffer sb4 = sb.append(100);
		
		
		System.out.println(sb.toString());//StringBuffer类中重写了toString方法,显示的是对象中的属性值
		System.out.println(sb2.toString());
		System.out.println(sb3.toString());
		System.out.println(sb4.toString());
	}
}
```

**StringBuffer是字符串缓冲区,当new的时候是在堆内存创建了一个对象,底层是一个长度为16的字符数组
		当调用添加的方法时,不会再重新创建对象,在不断向原缓冲区添加字符**

### StringBuffer的删除功能 
* A:StringBuffer的删除功能
	* public StringBuffer deleteCharAt(int index):
		* 删除指定位置的字符，并返回本身
	* public StringBuffer delete(int start,int end):
		* 删除从指定位置开始指定位置结束的内容，并返回本身

```
package com.wxhao.stringbuffer;

public class Demo3_StringBuffer {

	public static void main(String[] args) {
		StringBuffer sb = new StringBuffer();
		//sb.deleteCharAt(5);//当缓冲区中这个索引上没有元素的时候就会报StringIndexOutOfBoundsException
		sb.append("wxhao");
		//sb.deleteCharAt(4);//根据索引删除掉索引位置上对应的字符
		//sb.delete(0, 2);	//删除的时候是包含头,不包含尾
		//System.out.println(sb);
		//sb.delete(0, sb.length());//清空缓冲区
		//System.out.println(sb);
		
		sb = new StringBuffer();//不要用这种方式清空缓冲区,原来的会变成垃圾,浪费内存
		System.out.println(sb);
	}

}
```

### StringBuffer的替换和反转功能 
* A:StringBuffer的替换功能
	* public StringBuffer replace(int start,int end,String str):
		* 从start开始到end用str替换
* B:StringBuffer的反转功能
	* public StringBuffer reverse():
		* 字符串反转

```
package com.wxhao.stringbuffer;

public class Demo4_StringBufferMethod {

	public static void main(String[] args) {
		StringBuffer sb = new StringBuffer("我爱总复习");
		//sb.replace(0, 3, "bai");					//替换
		//System.out.println(sb);
		
		sb.reverse();
		System.out.println(sb);
	}
}
```

### StringBuffer的截取功能及注意事项
* A:StringBuffer的截取功能
	* public String substring(int start):
		* 从指定位置截取到末尾
	* public String substring(int start,int end):
		* 截取从指定位置开始到结束位置，包括开始位置，不包括结束位置
* B:注意事项
	* 注意:返回值类型不再是StringBuffer本身

```
package com.wxhao.stringbuffer;

public class Demo5_StringBufferMethod {

	public static void main(String[] args) {
		StringBuffer sb = new StringBuffer("woaiwxhao");
		//String str = sb.substring(4);
		//System.out.println(str);//wxhao
		
		//System.out.println(sb);//woaiwxhao
		
		String str3 = sb.substring(4, 7);
		System.out.println(str3);
	}
}
```

### StringBuffer和String的相互转换
* A:String -- StringBuffer
	* a:通过构造方法
	* b:通过append()方法
* B:StringBuffer -- String
	* a:通过构造方法
	* b:通过toString()方法
	* c:通过subString(0,length);

```
package com.wxhao.stringbuffer;

public class Demo6_StringBuffer {

	public static void main(String[] args) {
		//demo1();
		StringBuffer sb = new StringBuffer("wxhao");
		
		String s1 = new String(sb);//通过构造将StringBuffer转换为String
		System.out.println(s1);
		
		String s2 = sb.toString();//通过toString方法将StringBuffer转换为String
		System.out.println(s2);
		
		String s3 = sb.substring(0, sb.length());//通过截取子字符串将StringBuffer转换为String
		System.out.println(s3);
	}

	private static void demo1() {
		StringBuffer sb1 = new StringBuffer("wxhao");//通过构造方法将字符串转换为StringBuffer对象
		System.out.println(sb1);
		
		StringBuffer sb2 = new StringBuffer();
		sb2.append("wxhao");	//通过append方法将字符串转换为StringBuffer对象
		System.out.println(sb2);
	}
}
```

### 把数组转成字符串
* A:代码演示
	* 需求：把数组中的数据按照指定个格式拼接成一个字符串

```
举例：
int[] arr = {1,2,3};	
输出结果：
"[1, 2, 3]"
用StringBuffer的功能实现
```

```
package com.wxhao.test;

public class Test1 {

	public static void main(String[] args) {
		int[] arr = {1,2,3};
		System.out.println(arrayToString(arr));
	}

	/*
	 * 将数组转换为字符串
	 * 1,返回值类型String
	 * 2,参数列表int[]
	 * 
	 * arrayToString 将数组转换为字符串
	 * array2String		2与to的发音一样就用2替换了to,后来演变成了一种书写习惯
	 * dom4j  domForJ
	 */
	
	public static String arrayToString(int[] arr) {
		StringBuffer sb = new StringBuffer();//创建字符串缓冲区对象
		sb.append("[");	//将[添加到缓冲区
		
		
		//{1,2,3}
		for (int i = 0; i < arr.length; i++) {//遍历数组
			//sb.append(arr[i] + ", ");//这样做没有]
			if(i == arr.length - 1) {
				sb.append(arr[i]).append("]");//[1, 2, 3]
			}else {
				sb.append(arr[i]).append(", ");//[1, 2,
			}
		}
		return sb.toString();
	}
}
```

### 字符串反转
* A:案例演示
* 
		需求：把字符串反转
			举例：键盘录入"abc"		
			输出结果："cba"
			
		用StringBuffer的功能实现	

```
package com.wxhao.test;

import java.util.Scanner;

public class Test2 {

	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);//创建键盘录入对象
		String line = sc.nextLine();//将键盘录入的字符串存储在line中
		
		/*StringBuffer sb = new StringBuffer(line);	//将字符串转换为StringBuffer对象
		sb.reverse();	//将缓冲区的内容反转
		
		System.out.println(sb.toString());*/
		
		System.out.println(revString(line));
	}

	/*
	 * 将字符串反转
	 * 1,返回值类型String
	 * 2,参数列表String line
	 */
	
	public static String revString(String line) {
		StringBuffer sb = new StringBuffer(line);//将字符串转换为StringBuffer对象
		sb.reverse();	//将缓冲区的内容反转
		
		return sb.toString();
	}
}
```

### StringBuffer和StringBuilder的区别
* A:StringBuilder的概述
	* 通过查看API了解一下StringBuilder类
* B:面试题
	* String,StringBuffer,StringBuilder的区别
	* StringBuffer和StringBuilder的区别
	* StringBuffer是jdk1.0版本的,是线程安全的,效率低
	* StringBuilder是jdk1.5版本的,是线程不安全的,效率高

	* String和StringBuffer,StringBuilder的区别
	* String是一个不可变的字符序列
	* StringBuffer,StringBuilder是可变的字符序列

### String和StringBuffer分别作为参数传递
* A:形式参数问题
	* String作为参数传递
	* StringBuffer作为参数传递 
* B:案例演示
	* String和StringBuffer分别作为参数传递问题

```
package com.wxhao.stringbuffer;

public class Demo7_StringBuffer {

	/**
	基本数据类型的值传递,不改变其值
	引用数据类型的值传递,改变其值
	
	String类虽然是引用数据类型,但是他当作参数传递时和基本数据类型是一样的
	 */
	public static void main(String[] args) {
		String s = "wxhao";
		System.out.println(s);
		change(s);
		System.out.println(s);
		
		
		System.out.println("---------------------");
		StringBuffer sb = new StringBuffer();
		sb.append("wxhao");
		System.out.println(sb);
		change(sb);
		System.out.println(sb);
	}

	public static void change(StringBuffer sb) {
		sb.append("itcast");
	}

	public static void change(String s) {
		s += "itcast";
	}
}
```