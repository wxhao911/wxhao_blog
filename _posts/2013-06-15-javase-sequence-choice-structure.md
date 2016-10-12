---
layout:     post
title:      "JavaSE之顺序结构与选择结构"
subtitle:   "HelloWorld"
date:       2013-06-15
author:     "Wxhao"
header-img: "img/post-bg/java.jpg"
catalog:    true
tags:
    - 基础知识 
    - java
    - JAVASE
---

### 顺序结构语句
* A:什么是流程控制语句
	* 流程控制语句：可以控制程序的执行流程。
* B:流程控制语句的分类
	* 顺序结构
	* 选择结构
	* 循环结构
* C:执行流程：
	* 从上往下，依次执行。
* D:代码演示

```
System.out.println("Hello World!11111");
System.out.println("Hello World!3333");
System.out.println("Hello World!22222");
System.out.println("Hello World!44444");
```

### 选择结构if语句格式1及其使用
* A:选择结构的分类
	* if语句
	* switch语句
* B:if语句有几种格式
	* 格式1
	* 格式2
	* 格式3
* C:if语句的格式1
* 
		if(比较表达式) {
			语句体;
		}
* D:执行流程：
	* 先计算比较表达式的值，看其返回值是true还是false。
	* 如果是true，就执行语句体；
	* 如果是false，就不执行语句体；

```
int age = 17;

if (age >= 18) {
	System.out.println("可以浏览本网站");
}

System.out.println("完了");

```

### 选择结构if语句注意事项
###### 注意事项1
* A:代码演示
	* a:比较表达式无论简单还是复杂，结果必须是boolean类型
	* b:if语句控制的语句体如果是一条语句，大括号可以省略；
	  * 如果是多条语句，就不能省略。建议永远不要省略。
	* c:一般来说：有左大括号就没有分号，有分号就没有左大括号

```
int age = 17;

if (age >= 18 && age <= 60) {
	System.out.println("可以浏览本网站");
	//int x = 10;				是两句话,int x声明是一句,x = 10 赋值是一句
}
System.out.println("完了");
```

###### 注意事项2
* A:if语句的格式2
* 
		if(比较表达式) {
			语句体1;
		}else {
			语句体2;
		}
* B:执行流程：
	* 首先计算比较表达式的值，看其返回值是true还是false。
	* 如果是true，就执行语句体1；
	* 如果是false，就执行语句体2；
* C:代码演示
	* a:获取两个数据中较大的值
	* b:判断一个数据是奇数还是偶数,并输出是奇数还是偶数

	* 注意事项：else后面是没有比较表达式的，只有if后面有。

```
/*int x = 0;
if (x == 1) {
	System.out.println("男厕所欢迎您");
}else {
	System.out.println("女厕所欢迎您");
}*/

//a:获取两个数据中较大的值
/*int x = 10;
int y = 20;
int z;

if (x > y) {
	z = x;
}else {
	z = y;
}

System.out.println(z);*/

//b:判断一个数据是奇数还是偶数,并输出是奇数还是偶数
int num = 11;
if (num % 2 == 0) {
	System.out.println(num + "是一个偶数");
}else {
	System.out.println(num + "是一个奇数");
}
```

### if语句的格式和三元的相互转换问题
* A:代码演示
	* if语句和三元运算符完成同一个效果
* B:代码演示
	* if语句和三元运算符的区别
	
	* 三元运算符实现的，都可以采用if语句实现。反之不成立。
	
	* 什么时候if语句实现不能用三元改进呢?
		* 当if语句控制的操作是一个输出语句的时候就不能。
		* 为什么呢?因为三元运算符是一个运算符，运算符操作完毕就应该有一个结果，而不是一个输出。

```
int x = 10;
int y = 20;
int z;

if (x > y) {
	//z = x;
	System.out.println(x + "是最大值");
}else {
	//z = y;
	System.out.println(y + "是最大值");
}

//System.out.println(z);

int a = 20;
int b = 30;

int c = (a > b)? a : b;
```

### 选择结构if使用
* A:if语句的格式3：
* 
		if(比较表达式1) {
			语句体1;
		}else if(比较表达式2) {
			语句体2;
		}else if(比较表达式3) {
			语句体3;
		}
		...
		else {
			语句体n+1;
		}
* B:执行流程：
	* 首先计算比较表达式1看其返回值是true还是false，
	* 如果是true，就执行语句体1，if语句结束。
	* 如果是false，接着计算比较表达式2看其返回值是true还是false，
	
	* 如果是true，就执行语句体2，if语句结束。
	* 如果是false，接着计算比较表达式3看其返回值是true还是false，
	
	* 如果都是false，就执行语句体n+1。
* C:注意事项:最后一个else可以省略,但是建议不要省略,可以对范围外的错误值提示 

```
int x = 2;
if (x == 1) {
	System.out.println("男厕所欢迎您");
}else if (x == 0) {
	System.out.println("女厕所欢迎您");
}else {
	System.out.println("无法识别您的性别");
}
```

### 选择结构if语句练习
* A:练习1
    * 
		需求：键盘录入一个成绩，判断并输出成绩的等级。
		90-100 优
		80-89  良
		70-79  中
		60-69  及
		0-59   差

```
import java.util.Scanner;
class Test {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);

		//需求：键盘录入一个成绩，判断并输出成绩的等级。
		System.out.println("请输入学生成绩范围在1到100之间");
		int x = sc.nextInt();

		if (x >= 90 && x <= 100) {
			System.out.println("优");
		}else if (x >= 80 && x <= 89 ) {
			System.out.println("良");
		}else if (x >= 70 && x <= 79 ) {
			System.out.println("中");
		}else if (x >= 60 && x <= 69 ) {
			System.out.println("及");
		}else if (x >= 0 && x <= 59 ) {
			System.out.println("差");
		}else {
			System.out.println("成绩录入错误");
		}
	}
}
```
		
* B:练习2
	* 需求：
		* 键盘录入x的值，计算出y的并输出。
		
		* x>=3	y = 2 * x + 1;
		* -1<x<3	y = 2 * x;
		* x<=-1	y = 2 * x - 1;

```
//需求： 键盘录入x的值，计算出y的并输出
System.out.println("请输入一个整数:");
int x = sc.nextInt();
int y = 0;//不初始化,条件不满足时会报错
if (x >= 3) {
	y = 2 * x + 1;
}else if (x > -1 && x < 3) {
	y = 2 * x;
}else if (x <= -1) {
	y = 2 * x - 1;
}
System.out.println(y);
```

### 选择结构if语句的嵌套使用
* 代码演示
	* 需求：获取三个数据中的最大值
	* if语句的嵌套使用。

```
int a = 40;
int b = 50;
int c = 30;

if (a > b) {
	if (a > c) {
		System.out.println(a + "是最大值");
	}else {
		System.out.println(c + "是最大值");
	}

}else {	//b >= a
	if (b > c) {
		System.out.println(b + "是最大值");
	}else {
		System.out.println(c + "是最大值");
	}
}
```
	
### 选择结构switch语句的格式及其解释
* A:switch语句的格式

```
switch(表达式) {		
    case 值1：		
    语句体1;
    break;
    case 值2：
    语句体2;
    break;
   // …
    default：	
    语句体n+1;
    break;
}
```

* B:面试题
	* byte可以作为switch的表达式吗?
	    * 基本数据类型可以接收byte,short,char,int
	* long可以作为switch的表达式吗?
	    * 不可以
	* String可以作为switch的表达式吗?
	    * 引用数据类型可以接收枚举(JDK1.5)String字符串(JDK1.7)
* C:执行流程
	* 先计算表达式的值
	* 然后和case后面的匹配，如果有就执行对应的语句，否则执行default控制的语句

```
String name = "rose";
String gender = "妖";
switch (gender) {
case "男士":
	System.out.println(name + "是一位" + gender + "喜欢吃饭睡觉打dota");
	break;
case "女士":
	System.out.println(name + "是一位" + gender + "喜欢逛街购物美容");
	break;
default:
	System.out.println(name + "是一位" + gender + "打雌性激素维持美貌容颜");
	break;
}
```

### 选择结构switch语句的练习
* A:整数(给定一个值,输出对应星期几)

```
int week = 1;
switch (week) {
case 1:
	System.out.println("星期一");
	break;
case 2:
	System.out.println("星期二");
	break;
case 3:
	System.out.println("星期三");
	break;
case 4:
	System.out.println("星期四");
	break;
case 5:
	System.out.println("星期五");
	break;
case 6:
	System.out.println("星期六");
	break;
case 7:
	System.out.println("星期日");
	break;
default:
	System.out.println("对不起没有对应的星期");
	break;
}
```

### 选择结构switch语句的注意事项
* A:case后面只能是常量，不能是变量，而且，多个case后面的值不能出现相同的
* B:default可以省略吗?
	* 可以省略，但是不建议，因为它的作用是对不正确的情况给出提示。
	* 特殊情况：
		* case就可以把值固定。
		* 比如:A,B,C,D
* C:break可以省略吗?
	* 最后一个可以省略,其他最好不要省略
	* 会出现一个现象：case穿透。
	* 最终建议不要省略
* D:default一定要在最后吗?
	* 不是，可以在任意位置。但是建议在最后。
* E:switch语句的结束条件
		* a:遇到break就结束了
		* b:执行到switch的右大括号就结束了


### 选择结构switch语句练习
* A:看程序写结果：
```
int x = 2;
int y = 3;
switch(x){
	default:
		y++;
		break;
	case 3:
		y++;
	case 4:
		y++;
}
System.out.println("y="+y);//4
```	
* B:看程序写结果：
```
int x = 2;
int y = 3;
switch(x){
	default:
		y++;
	case 3:
		y++;
	case 4:
		y++;
}
System.out.println("y="+y);//6
```

### 选择结构if语句和switch语句的区别
* A:总结switch语句和if语句的各自使用场景
    * 	switch建议判断固定值的时候用
    * 	if建议判断区间或范围的时候用
* B:代码演示演示
	* 分别用switch语句和if语句实现下列需求：
		* 键盘录入月份，输出对应的季节
    > 一年有四季
    3,4,5春季
	6,7,8夏季
	9,10,11秋季
	12,1,2冬季

```
import java.util.Scanner;
class Test {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);	//创建键盘录入对象
		System.out.println("请输入月份");
		int month = sc.nextInt();				//将键盘录入的结果存储在month
		/*switch (month) {
		case 3:
		case 4:
		case 5:
			System.out.println(month + "月是春季");
			break;
		case 6:
		case 7:
		case 8:
			System.out.println(month + "月是夏季");
			break;
		case 9:
		case 10:
		case 11:
			System.out.println(month + "月是秋季");
			break;
		case 12:
		case 1:
		case 2:
			System.out.println(month + "月是冬季");
			break;
		default:
			System.out.println("对不起没有对应的季节");
		break;
		}*/

		//用if语句来完成月份对应季节
		if (month > 12 || month < 1) {
			System.out.println("对不起没有对应的季节");
		}else if (month >= 3 && month <= 5) {
			System.out.println(month + "月是春季");
		}else if (month >= 6 && month <= 8) {
			System.out.println(month + "月是夏季");
		}else if (month >= 9 && month <= 11) {
			System.out.println(month + "月是秋季");
		}else {
			System.out.println(month + "月是冬季");
		}
	}
}

```