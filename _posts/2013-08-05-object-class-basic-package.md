---
layout:     post
title:      "基本包装类"
subtitle:   "JavaSE之常见对象"
date:       2013-08-05
author:     "Wxhao"
header-img: "img/post-bg/black-sky.jpg"
catalog:    true
tags:
    - 基础知识 
    - java
    - JAVASE
---

### Integer类的概述和构造方法 
* A:Integer类概述
	* 通过JDK提供的API，查看Integer类的说明

	* Integer 类在对象中包装了一个基本类型 int 的值,
	* 该类提供了多个方法，能在 int 类型和 String 类型之间互相转换，
	* 还提供了处理 int 类型时非常有用的其他一些常量和方法
* B:构造方法
	* public Integer(int value)
	* public Integer(String s)
* C:案例演示
	* 使用构造方法创建对象

```
package com.wxhao.wrapclass;

public class Demo2_Integer {

	public static void main(String[] args) {
		System.out.println(Integer.MAX_VALUE);
		System.out.println(Integer.MIN_VALUE);
		
		Integer i1 = new Integer(100);
		System.out.println(i1);
		
		//Integer i2 = new Integer("abc");//java.lang.NumberFormatException数字格式异常
		//System.out.println(i2);		//因为abc不是数字字符串,所以转换会报错
		
		Integer i3 = new Integer("100");
		System.out.println(i3);
	}
}
```

### String和int类型的相互转换 
* A:int -- String
	* a:和""进行拼接
	* b:public static String valueOf(int i)
	* c:int -- Integer -- String(Integer类的toString方法())
	* d:public static String toString(int i)(Integer类的静态方法)
* B:String -- int
	* a:String -- Integer -- int
	* public static int parseInt(String s)

```
package com.wxhao.wrapclass;

public class Demo3_Integer {

	/**
		基本数据类型包装类有八种,其中七种都有parseXxx的方法,可以将这七种的字符串表现形式转换成基本数据类型
	 */
	public static void main(String[] args) {
		
		//demo1();
		String s1 = "true";
		boolean b = Boolean.parseBoolean(s1);
		System.out.println(b);
		
		//String s2 = "abc";
		//char c = Character.p		//char的包装类Character中没有pareseXxx的方法
									//字符串到字符的转换通过toCharArray()就可以把字符串转换为字符数组
	}

	private static void demo1() {
		//int ----> String int转换成String
		int i = 100;
		String s1 = i + "";			//推荐用
		String s2 = String.valueOf(i);//推荐用
		
		Integer i2 = new Integer(i);
		String s3 = i2.toString();
		
		String s4 = Integer.toString(i);
		System.out.println(s1);
		
		//String----> int String 转换int
		String s = "200";
		Integer i3 = new Integer(s);
		int i4 = i3.intValue();		//将Integer转换成了int数
		
		int i5 = Integer.parseInt(s);//将String转换为int,推荐用这种
	}
}
```

### JDK5的新特性自动装箱和拆箱 
* A:JDK5的新特性
	* 自动装箱：把基本类型转换为包装类类型
	* 自动拆箱：把包装类类型转换为基本类型
* B:案例演示
	* JDK5的新特性自动装箱和拆箱
	
	* Integer ii = 100;
	* ii += 200;
* C:注意事项
	* 在使用时，Integer  x = null;代码就会出现NullPointerException。
	* 建议先判断是否为null，然后再使用。

```
package com.wxhao.wrapclass;

public class Demo4_JDK5 {
	public static void main(String[] args) {
//		int x = 100;
//		Integer i1 = new Integer(x);//将基本数据类型包装成对象,手动装箱
//		
//		int y = i1.intValue();		//将对象转换为基本数据类型,手动拆箱
		
		Integer i2 = 100;			//自动装箱,把基本数据类型转换成对象
		int z = i2 + 200;			//自动拆箱,把对象转换为基本数据类型
		System.out.println(z);
		
		Integer i3 = null;
		int a = i3 + 100;			//底层用i3调用intValue,但是i3是null,null调用方法就会出现
		System.out.println(a);		//空指针异常java.lang.NullPointerException
	}
}
```

### Integer的面试题 
* A:Integer的面试题
* 
		看程序写结果

```		
		Integer i1 = new Integer(97);
		Integer i2 = new Integer(97);
		System.out.println(i1 == i2);
		System.out.println(i1.equals(i2));
		System.out.println("-----------");
	
		Integer i3 = new Integer(197);
		Integer i4 = new Integer(197);
		System.out.println(i3 == i4);
		System.out.println(i3.equals(i4));
		System.out.println("-----------");
	
		Integer i5 = 97;
		Integer i6 = 97;
		System.out.println(i5 == i6);
		System.out.println(i5.equals(i6));
		System.out.println("-----------");
	
		Integer i7 = 197;
		Integer i8 = 197;
		System.out.println(i7 == i8);
		System.out.println(i7.equals(i8));
```

```
package com.wxhao.wrapclass;

public class Demo5_Integer {
	/**
	 * @param args
	 */
	public static void main(String[] args) {
		Integer i1 = new Integer(97);
		Integer i2 = new Integer(97);
		System.out.println(i1 == i2);	  //false
		System.out.println(i1.equals(i2));//true
		System.out.println("-----------");
	
		Integer i3 = new Integer(197);
		Integer i4 = new Integer(197);
		System.out.println(i3 == i4);		//false
		System.out.println(i3.equals(i4));	//true
		System.out.println("-----------");
	
		Integer i5 = 127;
		Integer i6 = 127;
		System.out.println(i5 == i6);	  //true
		System.out.println(i5.equals(i6));//true
		System.out.println("-----------");
	
		Integer i7 = 128;
		Integer i8 = 128;
		System.out.println(i7 == i8);
		System.out.println(i7.equals(i8));//true
		
		/*
		 * -128到127是byte的取值范围,如果在这个取值范围内,自动装箱就不会新创建对象,而是从常量池中获取
		 * 如果超过了byte取值范围就会再新创建对象
		 * 
		 * public static Integer valueOf(int i) {
		        assert IntegerCache.high >= 127;
		        if (i >= IntegerCache.low && i <= IntegerCache.high)			//i>= -128 && i <= 127
		            return IntegerCache.cache[i + (-IntegerCache.low)];
		        return new Integer(i);
		    }
		 */
	}
}
```