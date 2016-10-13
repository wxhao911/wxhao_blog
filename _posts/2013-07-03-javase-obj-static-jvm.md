---
layout:     post
title:      "static详解"
subtitle:   "JavaSE第二阶段之面向对象"
date:       2013-07-03
author:     "Wxhao"
header-img: "img/post-bg/java.jpg"
catalog:    true
tags:
    - 基础知识 
    - java
    - JAVASE
---

### static关键字及内存图
* A:代码演示
	* 通过一个案例引入static关键字。
	* 人类：Person。每个人都有国籍，中国。

```
class Demo1_Static {
	public static void main(String[] args) {
		Person p1 = new Person();	//创建对象
		p1.name = "苍老师";			//调用姓名属性并赋值
		p1.country = "日本";		//调用国籍属性并赋值
		

		Person p2 = new Person();
		p2.name = "小泽老师";		//调用姓名属性并赋值
		//p2.country = "日本";		//调用国籍属性并赋值

		p1.speak();
		p2.speak();

	}
}

class Person {
	String name;					//姓名
	static String country;					//国籍

	public void speak() {			//说话的方法
		System.out.println(name + "..." + country);
	}
}
```

* B:画图演示
	* 带有static的内存图
 
![创建对象内存图](http://wxhao2.duapp.com/blog/post-in/20130703/cjdxnct.png)

![静态内存图](http://wxhao2.duapp.com/blog/post-in/20130703/jtnct.png)

### static关键字的特点
* A:static关键字的特点
	* a:随着类的加载而加载
	* b:优先于对象存在
	* c:被类的所有对象共享
		* 举例：咱们班级的学生应该共用同一个班级编号。
		* 其实这个特点也是在告诉我们什么时候使用静态?
			* 如果某个成员变量是被所有对象共享的，那么它就应该定义为静态的。
		* 举例：
			* 饮水机(用静态修饰)
			* 水杯(不能用静态修饰)
			* 共性用静态,特性用非静态
	* d:可以通过类名调用
		* 其实它本身也可以通过对象名调用。
		* 推荐使用类名调用。
		* 静态修饰的内容一般我们称其为：与类相关的，类成员
* B:案例演示
	* static关键字的特点

```
Person.country = "日本";	//静态多了一种调用方式,可以通过类名.
System.out.println(Person.country);
```

### static的注意事项
* A:static的注意事项
	* a:在静态方法中是没有this关键字的
		* 如何理解呢?
			* 静态是随着类的加载而加载，this是随着对象的创建而存在。
			* 静态比对象先存在。
	* b:静态方法只能访问静态的成员变量和静态的成员方法
		* 静态方法：
			* 成员变量：只能访问静态变量
			* 成员方法：只能访问静态成员方法
		* 非静态方法：
			* 成员变量：可以是静态的，也可以是非静态的
			* 成员方法：可是是静态的成员方法，也可以是非静态的成员方法。
		* 简单记：
			* 静态只能访问静态。
* B:案例演示
	* static的注意事项

```
class Demo2_Static {
	public static void main(String[] args) {
		//Demo d = new Demo();
		//d.print1();

		Demo.print2();
	}
}

class Demo {
	int num1 = 10;						//非静态的成员变量
	static int num2 = 20;				//静态的成员变量

	/*public void print1() {				//非静态的成员方法,既可以访问静态的成员也可以访问非静态的
		System.out.println(num1);
		System.out.println(num2);
	}*/

	public static void print2() {		//静态的成员方法
		//System.out.println(this.num1);//静态的成员方法不能访问非静态的,错误: 无法从静态上下文中引用非静态 变量 num1
		System.out.println(num2);
	}
}
```

### 静态变量和成员变量的区别
* 静态变量也叫类变量  成员变量也叫对象变量
* A:所属不同
	* 静态变量属于类，所以也称为为类变量
	* 成员变量属于对象，所以也称为实例变量(对象变量)
* B:内存中位置不同
	* 静态变量存储于方法区的静态区
	* 成员变量存储于堆内存
* C:内存出现时间不同
	* 静态变量随着类的加载而加载，随着类的消失而消失
	* 成员变量随着对象的创建而存在，随着对象的消失而消失
* D:调用不同
	* 静态变量可以通过类名调用，也可以通过对象调用
	* 成员变量只能通过对 象名调用

### main方法的格式详细解释
* A:格式

```
public static void main(String[] args) {}
```

* B:针对格式的解释
	* public 被jvm调用，访问权限足够大。
	* static 被jvm调用，不用创建对象，直接类名访问
	* void被jvm调用，不需要给jvm返回值
	* main 一个通用的名称，虽然不是关键字，但是被jvm识别
	* String[] args 以前用于接收键盘录入的
* C:演示案例
	* 通过args接收键盘例如数据

```
class Demo_Main {
	public static void main(String[] args) {
		System.out.println(args.length);
		for (int i = 0;i < args.length ;i++ ) {
			System.out.println(args[i]);
		}
	}
}
```
* 开打cmd窗口,编译此文件
    * 输入
```
java Demo_Main haha xx heihh
```

* 将会输出

```
haha
xx
heihh
```

### 工具类中使用静态
* A:制作一个工具类
	* ArrayTool
	* 1,获取最大值
	* 2,数组的遍历
	* 3,数组的反转

```
/**
这是一个数组工具类,里面封装了查找数组最大值,打印数组,数组反转的方法
@author wxhao
@version v1.0
*/
public class ArrayTool {
	//如果一个类中所有的方法都是静态的,需要再多做一步,私有构造方法,目的是不让其他类创建本类对象
	//直接用类名.调用即可
	/**
	私有构造方法
	*/
	private ArrayTool(){}

	//1,获取最大值

	/**
	这是获取数组中最大值的方法
	@param arr 接收一个int类型数组
	@return 返回数组中最大值
	*/
	public static int getMax(int[] arr) {
		int max = arr[0];						//记录第一个元素
		for (int i = 1;i < arr.length ;i++ ) {	//从第二个元素开始遍历
			if (max < arr[i]) {					//max与数组中其他的元素比较
				max = arr[i];					//记录住较大的
			}
		}

		return max;								//将最大值返回
	}
	//2,数组的遍历
	/**
	这是遍历数组的方法
	@param arr 接收一个int类型数组
	*/
	public static void print(int[] arr) {
		for (int i = 0;i < arr.length ;i++ ) {	//遍历数组
			System.out.print(arr[i] + " ");
		}
	}
	//3,数组的反转
	/**
	这是数组反转的方法
	@param arr 接收一个int类型数组
	*/
	public static void revArray(int[] arr) {
		for (int i = 0;i < arr.length / 2 ;i++ ) {	//循环次数是元素个数的一半
			/*
			arr[0]与arr[arr.length-1-0]	交换
			arr[1]与arr[arr.length-1-1]	交换
			arr[2]与arr[arr.length-1-2] 交换
			*/
			int temp = arr[i];
			arr[i] = arr[arr.length-1-i];
			arr[arr.length-1-i] = temp;
		}
	}
}
```

### 说明书的制作过程
* A:对工具类加入文档注释
* B:通过javadoc命令生成说明书
	* @author(提取作者内容)
	* @version(提取版本内容)
	* javadoc -d 指定的文件目录 -author -version ArrayTool.java
	* @param 参数名称//形式参数的变量名称@return 函数运行完返回的数据

* 开打cmd窗口,输入

```
javadoc -d api -version -author ArrayTool.java
```

* 类要是public,将会生产对应文档目录,点击index.html

### 如何使用JDK提供的帮助文档
* A:找到文档，打开文档
* B:点击显示，找到索引，出现输入框
* C:你应该知道你找谁?举例：Scanner
* D:看这个类的结构(需不需要导包)
	* 成员变量	字段
	* 构造方法	构造方法
	* 成员方法	方法

[JDK1.6中文版 百度云链接](http://pan.baidu.com/s/1eRPemjw)

### 学习Math类的随机数功能
* 打开JDK提供的帮助文档学习
* A:Math类概述
	* 类包含用于执行基本数学运算的方法
* B:Math类特点
	* 由于Math类在java.lang包下，所以不需要导包。
	* 因为它的成员全部是静态的,所以私有了构造方法
* C:获取随机数的方法
	* public static double random():返回带正号的 double 值，该值大于等于 0.0 且小于 1.0。
* D:我要获取一个1-100之间的随机数，肿么办?
	* int number = (int)(Math.random()*100)+1;

```
class Demo2_Math {
	public static void main(String[] args) {
		//double d = Math.random();
		//System.out.println(d);
		
		//Math.random()会生成大于等于0.0并且小于1.0的伪随机数
		for (int i = 0;i < 10 ;i++ ) {
			System.out.println(Math.random());
		}

		//生成1-100的随机数
		//Math.random()0.0000000 - 0.999999999
		//Math.random() * 100 ====> 0.00000 - 99.999999999
		//(int)(Math.random() * 100) ====> 0 - 99
		//(int)(Math.random() * 100) + 1

		for (int i = 0;i < 10 ;i++ ) {
			System.out.println((int)(Math.random() * 100) + 1);
		}
	}
}
```	

### 猜数字小游戏案例
* A:案例演示
	* 需求：猜数字小游戏(数据在1-100之间)

```
import java.util.Scanner;
class Test_GuessNum {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);				//创建键盘录入对象
		System.out.println("请输入一个整数,范围在1-100之间");
		int guessNum = (int)(Math.random() * 100) + 1;		//心里想的随机数
		while (true) {										//因为需要猜很多次,所以用无限循环
			int result = sc.nextInt();						//大家猜的数
			if (result > guessNum) {						//如果你们猜的数大于了我心里想的数
				System.out.println("大了");					//提示大了
			} else if (result < guessNum) {					//如果你们猜的数小于了我心里想的数
				System.out.println("小了");					//提示小了
			} else {										//如果既不大也不小
				System.out.println("中了");					//中了
				break;
			}
		}
	}
}

```

### static方法本类调用

```
class Demo_Static {
	public static void main(String[] args) {
		//method();								//错误: 无法从静态上下文中引用非静态 方法 method()
		Demo3_Static.print();					//在主方法中调用本类的静态方法,可以省略类名.,系统会默认加上
		Demo3_Static d = new Demo3_Static();	//非静态方法在调用的时候必须创建对象调用
		d.method();
	}

	public void method() {					
		System.out.println("Hello World!");		
	}

	public static void print() {
		System.out.println("Hello World!");
	}
}

```