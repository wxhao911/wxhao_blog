---
layout:     post
title:      "util包基本常用类"
subtitle:   "JavaSE之常见对象"
date:       2013-08-12
author:     "Wxhao"
header-img: "img/post-bg/black-sky.jpg"
catalog:    true
tags:
    - 基础知识 
    - java
    - JAVASE
---

### Math类概述和方法使用
* A:Math类概述
	* Math 类包含用于执行基本数学运算的方法，如初等指数、对数、平方根和三角函数。 
* B:成员方法
	* public static int abs(int a)
	* public static double ceil(double a)
	* public static double floor(double a)
	* public static int max(int a,int b) min自学
	* public static double pow(double a,double b)
	* public static double random()
	* public static int round(float a) 参数为double的自学
	* public static double sqrt(double a)

```
package com.wxhao.otherclass;

public class Demo1_Math {

	public static void main(String[] args) {
		System.out.println(Math.PI);
		System.out.println(Math.abs(-10));  //取绝对值
		
		//ceil天花板
		/*
		 * 13.0
		 * 12.3
		 * 12.0
		 */
		System.out.println(Math.ceil(12.3));//向上取整,但是结果是一个double
		System.out.println(Math.ceil(12.99));
		
		System.out.println("-----------");
		//floor地板
		/*
		 * 13.0
		 * 12.3
		 * 12.0
		 */
		System.out.println(Math.floor(12.3));//向下取整,但是结果是一个double
		System.out.println(Math.floor(12.99));
		
		//获取两个值中的最大值
		System.out.println(Math.max(20, 30));
		
		//前面的数是底数,后面的数是指数
		System.out.println(Math.pow(2, 3));	//2.0 ^ 3.0
		
		//生成0.0到1.0之间的所以小数,包括0.0,不包括1.0
		System.out.println(Math.random());
		
		//四舍五入
		System.out.println(Math.round(12.3f));
		System.out.println(Math.round(12.9f));
		
		//开平方
		System.out.println(Math.sqrt(4));
		System.out.println(Math.sqrt(2));
		System.out.println(Math.sqrt(3));
	}
}
```

### Random类的概述和方法使用 
* A:Random类的概述
	* 此类用于产生随机数如果用相同的种子创建两个 Random 实例，
	* 则对每个实例进行相同的方法调用序列，它们将生成并返回相同的数字序列。
* B:构造方法
	* public Random()
	* public Random(long seed)
* C:成员方法
	* public int nextInt()
	* public int nextInt(int n)(重点掌握)
        * 生成在0到n范围内的随机数,包含0不包含n
```
package com.wxhao.otherclass;

import java.util.Random;

public class Demo2_Random {

	public static void main(String[] args) {
		Random r = new Random();
		/*int x = r.nextInt();
		
		System.out.println(x);*/
		
		for(int i = 0; i < 10; i++) {
			//System.out.println(r.nextInt());
			System.out.println(r.nextInt(100));			//要求掌握,生成在0到n范围内的随机数,包含0不包含n
		}
		
		/*
		 * -1244746321
			1060493871
			
			-1244746321
			1060493871

		 */
		/*Random r2 = new Random(1001);
		
		int a = r2.nextInt();
		int b = r2.nextInt();
		
		System.out.println(a);
		System.out.println(b);*/
	}
}
```

### System类的概述和方法使用
* A:System类的概述
	* System 类包含一些有用的类字段和方法。它不能被实例化。 
* B:成员方法
	* public static void gc()//清理垃圾
	* public static void exit(int status)//退出虚拟机,非0表示异常退出JVM
	* public static long currentTimeMillis()//当前时间毫秒值
	* pubiic static void arraycopy(Object src, int srcPos, Object dest, int destPos, int length) 
* C:案例演示
	* System类的成员方法使用

```
package com.wxhao.otherclass;

public class Demo3_System {

	public static void main(String[] args) {
		//demo1();
		//demo2();
		//demo3();
		
		int[] src = {11,22,33,44,55};
		int[] dest = new int[8];
		for (int i = 0; i < dest.length; i++) {
			System.out.println(dest[i]);
		}
		
		System.out.println("--------------------------");
		System.arraycopy(src, 0, dest, 0, src.length);//将数组内容拷贝
		
		for (int i = 0; i < dest.length; i++) {
			System.out.println(dest[i]);
		}
	}

	public static void demo3() {
		long start = System.currentTimeMillis();//1秒等于1000毫秒
		for(int i = 0; i < 1000; i++) {
			System.out.println("*");
		}
		long end = System.currentTimeMillis();	//获取当前时间的毫秒值
		
		System.out.println(end - start);
	}

	public static void demo2() {
		System.exit(1);	//非0状态是异常终止,退出jvm
		System.out.println("11111111111");
	}

	public static void demo1() {
		for(int i = 0; i < 100; i++) {
			new Demo();
			System.gc();//运行垃圾回收器,相当于呼喊保洁阿姨
		}
	}
}

class Demo {	//在一个源文件中不允许定义两个用public修饰的类

	@Override
	public void finalize() {
		System.out.println("垃圾被清扫了");
	}							
}
```

### BigInteger类的概述和方法使用
* A:BigInteger的概述
	* 可以让超过Integer范围内的数据进行运算
* B:构造方法
	* public BigInteger(String val)
* C:成员方法
	* public BigInteger add(BigInteger val)
	* public BigInteger subtract(BigInteger val)
	* public BigInteger multiply(BigInteger val)
	* public BigInteger divide(BigInteger val)
	* public BigInteger[] divideAndRemainder(BigInteger val)

```
package com.wxhao.otherclass;

import java.math.BigInteger;

public class Demo4_BigInteger {

	public static void main(String[] args) {
		//long num = 123456789098765432123L;
		//String s = "123456789098765432123";
		
		BigInteger bi1 = new BigInteger("100");
		BigInteger bi2 = new BigInteger("2");
		
		System.out.println(bi1.add(bi2)); 				//+
		System.out.println(bi1.subtract(bi2));			//-
		System.out.println(bi1.multiply(bi2)); 			//*
		System.out.println(bi1.divide(bi2));    		///(除)
		
		BigInteger[] arr = bi1.divideAndRemainder(bi2);	//取除数和余数
		
		for (int i = 0; i < arr.length; i++) {
			System.out.println(arr[i]);
		}
	}
}
```

### BigDecimal类的概述和方法使用
* A:BigDecimal的概述
	* 由于在运算的时候，float类型和double很容易丢失精度，演示案例。
	* 所以，为了能精确的表示、计算浮点数，Java提供了BigDecimal

	* 不可变的、任意精度的有符号十进制数。
* B:构造方法
	* public BigDecimal(String val)
* C:成员方法
	* public BigDecimal add(BigDecimal augend)
	* public BigDecimal subtract(BigDecimal subtrahend)
	* public BigDecimal multiply(BigDecimal multiplicand)
	* public BigDecimal divide(BigDecimal divisor)
* D:案例演示
	* BigDecimal类的构造方法和成员方法使用

```
package com.wxhao.otherclass;

import java.math.BigDecimal;

public class Demo5_BigDecimal {

	/**
		十进制表示1/3
		0.3333333333333333333333333333333333333333 
			 */
	public static void main(String[] args) {
		//System.out.println(2.0 - 1.1);
		/*BigDecimal bd1 = new BigDecimal(2.0);		//这种方式在开发中不推荐,因为不够精确
		BigDecimal bd2 = new BigDecimal(1.1);
		
		System.out.println(bd1.subtract(bd2));*/
		
		/*BigDecimal bd1 = new BigDecimal("2.0");		//通过构造中传入字符串的方式,开发时推荐
		BigDecimal bd2 = new BigDecimal("1.1");
		
		System.out.println(bd1.subtract(bd2));*/
		
		BigDecimal bd1 = BigDecimal.valueOf(2.0);	//这种方式在开发中也是推荐的
		BigDecimal bd2 = BigDecimal.valueOf(1.1);
		
		System.out.println(bd1.subtract(bd2));
	}
}
```

### Date类的概述和方法使用 
* A:Date类的概述
	* 类 Date 表示特定的瞬间，精确到毫秒。 
* B:构造方法
	* public Date()
	* public Date(long date)
* C:成员方法
	* public long getTime()
	* public void setTime(long time)

```
package com.wxhao.otherclass;

import java.util.Date;

public class Demo6_Date {

	public static void main(String[] args) {
		//demo1();
		//demo2();
		Date d1 = new Date();	
		d1.setTime(1000);		//设置毫秒值,改变时间对象
		System.out.println(d1);
	}

	public static void demo2() {
		Date d1 = new Date();	
		System.out.println(d1.getTime());//通过时间对象获取毫秒值
		System.out.println(System.currentTimeMillis());	//通过系统类的方法获取当前时间毫秒值
	}

	public static void demo1() {
		Date d1 = new Date();//如果没有传参数代表的是当前时间
		System.out.println(d1);
		
		Date d2 = new Date(0);//如果构造方法中参数传为0代表的是1970年1月1日
		System.out.println(d2);//通过毫秒值创建时间对象
	}
}
```

### SimpleDateFormat类实现日期和字符串的相互转换 
* A:DateFormat类的概述
	* DateFormat 是日期/时间格式化子类的抽象类，它以与语言无关的方式格式化并解析日期或时间。是抽象类，所以使用其子类SimpleDateFormat
* B:SimpleDateFormat构造方法
	* public SimpleDateFormat()
	* public SimpleDateFormat(String pattern)
* C:成员方法
	* public final String format(Date date)
	* public Date parse(String source)

![模式字母](http://wxhao2.duapp.com/blog/post-in/20130812/simpledateformat.png)

```
package com.wxhao.otherclass;

import java.text.DateFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class Demo7_SimpleDateFormat {

	/**
	 * @throws ParseException 
	 */
	public static void main(String[] args) throws ParseException {
		//demo1();
		//demo2();
		//demo3();
		
		//将时间字符串转换成日期对象
		String str = "2000年08月08日 08:08:08";
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy年MM月dd日 HH:mm:ss");
		Date d = sdf.parse(str);		//将时间字符串转换成日期对象
		System.out.println(d);
	}

	public static void demo3() {
		Date d = new Date();					//获取当前时间对象
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");//创建日期格式化类对象
		System.out.println(sdf.format(d));		//将日期对象转换为字符串
	}

	public static void demo2() {
		Date d = new Date();			//获取当前时间对象
		SimpleDateFormat sdf = new SimpleDateFormat();//创建日期格式化类对象
		System.out.println(sdf.format(d));	 	//88-6-6 下午9:31
	}

	public static void demo1() {
		//DateFormat df = new DateFormat();		//DateFormat是抽象类,不允许实例化
		//DateFormat df1 = new SimpleDateFormat();
		DateFormat df1 = DateFormat.getDateInstance();//相当于父类引用指向子类对象,右边的方法返回一个子类对象
	}
}
```

### 你来到这个世界多少天案例 
* A:案例演示
	* 需求：算一下你来到这个世界多少天?

```
package com.wxhao.test;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class Test2 {

	/**
	 * 分析:
	 * 1,将生日字符串和今天字符串存在String类型的变量中
	 * 2,定义日期格式化对象
	 * 3,将日期字符串转换成日期对象
	 * 4,通过日期对象后期时间毫秒值
	 * 5,将两个时间毫秒值相减除以1000,再除以60,再除以60,再除以24得到天
	 * @throws ParseException 
	 */
	public static void main(String[] args) throws ParseException {
		//1,将生日字符串和今天字符串存在String类型的变量中
		String birthday = "1993年09月11日";
		String today = "2013年7月30日";
		//2,定义日期格式化对象
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy年MM月dd日");
		//3,将日期字符串转换成日期对象
		Date d1 = sdf.parse(birthday);
		Date d2 = sdf.parse(today);
		//4,通过日期对象后期时间毫秒值
		long time = d2.getTime() - d1.getTime();
		//5,将两个时间毫秒值相减除以1000,再除以60,再除以60,再除以24得到天
		System.out.println(time / 1000 / 60 / 60 / 24 );
	}
}
```

### Calendar类的概述和获取日期的方法 
* A:Calendar类的概述
	* Calendar 类是一个抽象类，它为特定瞬间与一组诸如 YEAR、MONTH、DAY_OF_MONTH、HOUR 等日历字段之间的转换提供了一些方法，并为操作日历字段（例如获得下星期的日期）提供了一些方法。
* B:成员方法
	* public static Calendar getInstance()
	* public int get(int field)

```
package com.wxhao.otherclass;

import java.util.Calendar;

public class Demo8_Calendar {

	public static void main(String[] args) {
		Calendar c = Calendar.getInstance();		//父类引用指向子类对象
		//System.out.println(c);					//证明重写了toString方法打印了对象中所有的属性
		System.out.println(c.get(Calendar.YEAR));  	//通过字段获取对应的值
		System.out.println(c.get(Calendar.MONTH));
	}
}
```

### Calendar类的add()和set()方法 
* A:成员方法
	* public void add(int field,int amount)
	* public final void set(int year,int month,int date)
* B:案例演示
	* Calendar类的成员方法使用

```
package com.wxhao.otherclass;

import java.util.Calendar;

public class Demo9_Calendar {

	/**
	 * * A:Calendar类的概述
			* Calendar 类是一个抽象类，它为特定瞬间与一组诸如 YEAR、MONTH、DAY_OF_MONTH、HOUR 等日历字段之间的转换提供了一些方法，并为操作日历字段（例如获得下星期的日期）提供了一些方法。
		* B:成员方法
			* public static Calendar getInstance()
			* public int get(int field)
		* C:成员方法
			* public void add(int field,int amount)
			* public final void set(int year,int month,int date)
		* D:案例演示
			* Calendar类的成员方法使用
	 */
	public static void main(String[] args) {
		//demo1();
		Calendar c = Calendar.getInstance();			//父类引用指向子类对象
		//c.add(Calendar.MONTH, -1);					//对指定的字段进行向前减或向后加
		//c.set(Calendar.YEAR, 2000);					//修改指定字段
		c.set(2000, 7, 8);
		
		System.out.println(c.get(Calendar.YEAR) + "年" + getNum((c.get(Calendar.MONTH)+1)) 
				+ "月" + getNum(c.get(Calendar.DAY_OF_MONTH)) + "日" + getWeek(c.get(Calendar.DAY_OF_WEEK)));
	}

	public static void demo1() {
		Calendar c = Calendar.getInstance();			//父类引用指向子类对象
		//System.out.println(c);
		System.out.println(c.get(Calendar.YEAR));		//通过字段获取年
		System.out.println(c.get(Calendar.MONTH));		//通过字段后期月,但是月是从0开始编号的
		System.out.println(c.get(Calendar.DAY_OF_MONTH));//月中的第几天
		System.out.println(c.get(Calendar.DAY_OF_WEEK));//周日是第一天,周六是最后一天
		
		System.out.println(c.get(Calendar.YEAR) + "年" + getNum((c.get(Calendar.MONTH)+1)) 
				+ "月" + getNum(c.get(Calendar.DAY_OF_MONTH)) + "日" + getWeek(c.get(Calendar.DAY_OF_WEEK)));
	}
	
	/*
	 * 将星期存储表中进行查表
	 * 1,返回值类型String
	 * 2,参数列表int week
	 */
	
	public static String getWeek(int week) {
		String[] arr = {"","星期日","星期一","星期二","星期三","星期四","星期五","星期六"};
		
		return arr[week];
	}
	
	/*
	 * 如果是个数数字前面补0
	 * 1,返回值类型String类型
	 * 2,参数列表,int num
	 */
	public static String getNum(int num) {
		/*if(num > 9) {
			return "" + num;
		}else {
			return "0" + num;
		}*/
		return num > 9 ? "" + num : "0" + num;
	}
}

```

[1970的由来](http://pan.baidu.com/s/1nvddxjF)

### 如何获取任意年份是平年还是闰年 
* A:案例演示
	* 需求：键盘录入任意一个年份，判断该年是闰年还是平年

```
package com.wxhao.test;

import java.util.Calendar;
import java.util.Scanner;

public class Test3 {

	/**
	 * 分析:
	 * 1,键盘录入年Scanner
	 * 2,创建Calendar c = Calendar.getInstance();
	 * 3,通过set方法设置为那一年的3月1日
	 * 4,将日向前减去1
	 * 5,判断日是多少天,如果是29天返回true否则返回false
	 */
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		System.out.println("请输入年份,判断该年份是闰年还是平年:");
		//int year = sc.nextInt();
		
		String line = sc.nextLine();				//录入数字字符串
		int year = Integer.parseInt(line);			//将数字字符串转换成数字
		boolean b = getYear(year);
		System.out.println(b);
	}

	private static boolean getYear(int year) {
		//2,创建Calendar c = Calendar.getInstance();
		Calendar c = Calendar.getInstance();
		//设置为那一年的3月1日
		c.set(year, 2, 1);
		//将日向前减去1
		c.add(Calendar.DAY_OF_MONTH, -1);
		//判断是否是29天
		return c.get(Calendar.DAY_OF_MONTH) == 29;
	}
}
```