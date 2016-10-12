---
layout:     post
title:      "JavaSE之方法"
subtitle:   "HelloWorld"
date:       2013-06-19
author:     "Wxhao"
header-img: "img/post-bg/java.jpg"
catalog:    true
tags:
    - 基础知识 
    - java
    - JAVASE
---

### 方法概述和格式说明
* A:为什么要有方法
	* 提高代码的复用性 
* B:什么是方法
	* 完成特定功能的代码块。 
* C:方法的格式
* 
		修饰符 返回值类型 方法名(参数类型 参数名1,参数类型 参数名2...) {
			方法体语句;
			return 返回值; 
		} 
* D:方法的格式说明
	* 修饰符：目前就用 public static。后面我们再详细的讲解其他的修饰符。
	* 返回值类型：就是功能结果的数据类型。
	* 方法名：符合命名规则即可。方便我们的调用。
	* 参数：
		* 实际参数：就是实际参与运算的。
		* 形式参数；就是方法定义上的，用于接收实际参数的。
	* 参数类型：就是参数的数据类型
	* 参数名：就是变量名
	* 方法体语句：就是完成功能的代码。
	* return：结束方法的。
	* 返回值：就是功能的结果，由return带给调用者。 

### 方法之求和案例及其调用
* A:如何写一个方法
	* 1,明确返回值类型
	* 2,明确参数列表 
* B:代码演示
	* 需求：求两个数据之和的案例

```
class Test {
	public static void main(String[] args) {
		/*int a = 10;
		int b = 20;
		int sum = a + b;
		System.out.println(sum);

		int c = 30;
		int d = 40;
		int sum2 = c + d;
		System.out.println(sum2);*/

		int sum = add(10,20);
		System.out.println(sum);

	}

	/*
	求两个整数的和
	1,整数的和结果应该还是整数
	2,有两个未知内容参与运算

	如何写方法
	1,明确返回值类型
	2,明确参数列表

	* 修饰符：目前就用 public static。后面我们再详细的讲解其他的修饰符。
		* 返回值类型：就是功能结果的数据类型。
		* 方法名：符合命名规则即可。方便我们的调用。
		* 参数：
			* 实际参数：就是实际参与运算的。
			* 形式参数；就是方法定义上的，用于接收实际参数的。
		* 参数类型：就是参数的数据类型
		* 参数名：就是变量名
		* 方法体语句：就是完成功能的代码。
		* return：结束方法的。
		* 返回值：就是功能的结果，由return带给调用者。
	*/
	public static int add(int a,int b) {			//int a = 10,int b = 20
		int sum = a + b;
		return sum;									//如果有返回值必须用return语句带回
	}

```

* C:方法调用图解

```
class Test {
	public static void main(String[] args) {
	    int sum = add(10,20);//1.调用add,把 10和20分别传递给a和b
	    //5.讲方法返回值返回给sum
		System.out.println(sum);
		
		//盘子 = 炒菜(地沟油,苏丹红,镉大米,烂白菜);
	}
	
	public static int add(int a,int b) {//2.赋值a=10,b=20			
		int sum = a + b;//3.执行语句
		return sum;//4.通过return 将sum结果返回
	}
}


/* 厨师 有 炒菜功能
	盘子 炒菜(油,调料,米,菜) {
		炒菜的动作
		return 一盘菜;
	}
	*/
```

### 方法的注意事项
* A:方法调用(有具体返回值)
	* a:单独调用,一般来说没有意义，所以不推荐。
	* b:输出调用,但是不够好。因为我们可能需要针对结果进行进一步的操作。
	* c:赋值调用,推荐方案。
* B:注意事项
	* a:方法不调用不执行
	* b:方法与方法是平级关系，不能**嵌套定义**
	* c:方法定义的时候参数之间用逗号隔开
	* d:方法调用的时候不用在传递数据类型
	* e:如果方法有明确的返回值，一定要有return带回一个值

```
add(30,40);//有返回值方法的单独调用,没有意义
System.out.println(add(30,40));//这样调用是可以,but如果需要用这个结果不推荐这样调用
```

### 方法的练习1

* 需求A：键盘录入两个数据，返回两个数中的较大值

* 需求B：键盘录入两个数据，比较两个数是否相等     

```
import java.util.Scanner;
class Test {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);				//创建键盘录入对象
		System.out.println("请输入第一个整数:");
		int x = sc.nextInt();								//将键盘录入的整数存储在x中
		System.out.println("请输入第二个整数:");
		int y = sc.nextInt();								//将键盘录入的整数存储在y中

		int max = getMax(x,y);
		System.out.println(max);

		boolean b = isEquals(x,y);
		System.out.println(b);
	}

	/*
	返回连个整数的较大值
	1,明确返回值类型 int
	2,明确参数列表 int a,int b
	*/
	public static int getMax(int a,int b) {
		return a > b ? a : b;
	}

	/*
	判断两个整数是否相等
	1,明确返回值类型 boolean
	2,明确参数列表 int a,int b
	*/
	public static boolean isEquals(int a,int b) {		//isEquals 是否相等
		return a == b;
	}
}
```

### 方法之输出星形及其调用
* A:代码演示
	* 需求：根据键盘录入的行数和列数，在控制台输出星形
* B:方法调用：(无返回值,void)
	* 单独调用
	* 输出调用(错误)
	* 赋值调用(错误)

```
import java.util.Scanner;
class Test {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);			//创建键盘录入对象
		System.out.println("请输入行数:");
		int row = sc.nextInt();							//将键盘录入的行数存储在row中
		System.out.println("请输入列数:");
		int column = sc.nextInt();						//将键盘录入的列数存储在column中
		
		//System.out.println(print(row,column));		//错误: 此处不允许使用 '空' 类型,返回值是void的方法不能输出调用
		//返回值是void的方法只能单独调用
		print(row,column);
	}

	/*
	在控制台输出矩形星形
	1,明确返回值类型,经分析没有具体的返回值类型,void
	2,明确参数列表int a,int b
	*/

	public static void print(int a,int b) {
		for (int i = 1;i <= a ;i++ ) {					//行数
			for (int j = 1;j <= b ;j++ ) {				//列数
				System.out.print("*");
			}
			System.out.println();
		}

		//return ;										//如果返回值类型是void,return可以省略,即使省略系统也会默认给加上,形式是return;
	}
}

```

### 方法的练习2
* 需求：根据键盘录入的数据输出对应的乘法表

```
import java.util.Scanner;
class Test {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);		//创建键盘录入对象
		System.out.println("请录入一个整数,范围在1-9之间");
		int num = sc.nextInt();						//将键盘录入的整数存储在num中
		print99(num);
	}

	/*
	打印99乘法表
	1,返回值类型void
	2,参数列表,int a
	*/

	public static void print99(int a) {
		for (int i = 1;i <= a ;i++ ) {					//行数
			for (int j = 1;j <= i ;j++ ) {				//列数
				System.out.print(j + "*" + i + "=" + (i * j) + "\t" );
			}
			System.out.println();
		}
	}
}
```

### 方法重载概述和基本使用
* A:方法重载概述
	* 求和案例
		* 2个整数
		* 3个整数
		* 4个整数
* B:方法重载：
	* 在同一个类中，方法名相同，参数列表不同。与返回值类型无关。
	
	* 参数列表不同：
		* A:参数个数不同
		* B:参数类型不同
		* C:参数的顺序不同(算重载,但是在开发中不用)

```
/*
重载:方法名相同,参数列表不同,与返回值类型无关
重载的分类
1,参数个数不同
2,参数类型不同
	顺序不同
*/
class Demo4_Overload {						//overload重载
	public static void main(String[] args) {
		double sum1 = add(10,20.1);
		System.out.println(sum1);

		int sum2 = add(10,20,30);
		System.out.println(sum2);

		double sum3 = add(12.3,13);
		System.out.println(sum3);
	}

	/*
	求两个整数的和
	1,返回值类型int
	2,参数列表 int a,int b
	*/

	public static double add(int a,double b) {
		return a + b;
	}

	/*
	求三个整数的和
	1,返回值类型int
	2,参数列表 int a,int b,int c
	*/

	public static int add(int a,int b,int c) {
		return a + b + c;
	}

	/*
	求两个小数的和
	1,返回值类型double
	2,参数列表 double a,double b
	*/

	public static double add(double a,int b) {
		return a + b;
	}
}
```

### 方法重载练习比较数据是否相等
* 需求：比较两个数据是否相等。
* 参数类型分别为两个int类型，两个double类型，并在main方法中进行测试

```
class Test_Overload {
	public static void main(String[] args) {
		boolean b1 = isEquals(10,10);
		System.out.println(b1);

		boolean b2 = isEquals(10.5,10.5);
		System.out.println(b2);
	}

	/*
	比较两个数据是否相等
	1,返回值类型boolean
	2,参数列表int a,int b
	*/
	public static boolean isEquals(int a,int b) {
		return a == b;
	}

	/*
	比较两个数据是否相等
	1,返回值类型boolean
	2,参数列表double a,double b
	*/
	public static boolean isEquals(double a,double b) {
		return a == b;
	}
}
```