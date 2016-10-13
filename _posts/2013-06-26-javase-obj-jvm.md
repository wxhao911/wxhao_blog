---
layout:     post
title:      "面向对象思想及其内存分配"
subtitle:   "JavaSE第二阶段之面向对象"
date:       2013-06-26
author:     "Wxhao"
header-img: "img/post-bg/java.jpg"
catalog:    true
tags:
    - 基础知识 
    - java
    - JAVASE
---

### 面向对象思想概述
* A:面向过程思想概述
	* 第一步
	* 第二步 
* B:面向对象思想概述
	* 找对象(第一步,第二步) 
* C:举例
	* 买煎饼果子
	* 洗衣服 

![买煎饼果子](http://wxhao2.duapp.com/blog/post-in/20130626/mjbgz.png)

* D:面向对象思想特点
	* a:是一种更符合我们思想习惯的思想
	* b:可以将复杂的事情简单化
	* c:将我们从执行者变成了指挥者
		* 角色发生了转换
* E:面向对象开发
	* 就是不断的创建对象，使用对象，指挥对象做事情。
* F:面向对象设计
	* 其实就是在管理和维护对象之间的关系。
* G:面向对象特征
	* 封装(encapsulation)
	* 继承(inheritance)
	* 多态(polymorphism)



### 类与对象概述
* A:我们学习编程是为了什么
	* 为了把我们日常生活中实物用学习语言描述出来
* B:我们如何描述现实世界事物
	* 属性	就是该事物的描述信息(事物身上的名词)
	* 行为	就是该事物能够做什么(事物身上的动词)
* C:Java中最基本的单位是类,Java中用class描述事物也是如此
	* 成员变量	就是事物的属性
	* 成员方法	就是事物的行为
* D:定义类其实就是定义类的成员(成员变量和成员方法)
	* a:成员变量	和以前定义变量是一样的，只不过位置发生了改变。在类中，方法外。
	* b:成员方法	和以前定义方法是一样的，只不过把static去掉，后面在详细讲解static的作用。
* E:类和对象的概念
	* a:类：是一组相关的属性和行为的集合
	* b:对象：是该类事物的具体体现
	* c:举例：
		* 类	 学生
		* 对象	具体的某个学生就是一个对象



### 学生类的定义 
* A:学生事物
* B:学生类
* C:代码演示
	* 属性:姓名,年龄,性别
	* 行为:学习,睡觉

```
class Student {
	String name;						//姓名
	int age;							//年龄
	String gender;						//性别

	public void study() {				//定义学习的方法
		System.out.println("学生学习");
	}

	public void sleep() {				//定义睡觉的方法
		System.out.println("学生睡觉");
	}
}
```

### 手机类的定义 
* 模仿学生类，让学生自己完成
	* 属性:品牌(brand)价格(price)
	* 行为:打电话(call),发信息(sendMessage)玩游戏(playGame)

```
class Phone {
	String brand;					//品牌
	int price;						//价格

	public void call() {			//打电话
		System.out.println("打电话");
	}

	public void sendMessage() {		//发信息
		System.out.println("发信息");
	}

	public void playGame() {		//玩游戏
		System.out.println("玩游戏");
	}
}
```

### 学生类的使用 
* A:文件名问题
	* 在一个java文件中写两个类：一个基本的类，一个测试类。
	* 建议：文件名称和测试类名称一致。
* B:如何使用对象?
	* 创建对象并使用
	* 格式：类名 对象名 = new 类名();
* D:如何使用成员变量呢?
	* 对象名.变量名
* E:如何使用成员方法呢?
	* 对象名.方法名(...)

```
class Demo_Student {//测试类
	public static void main(String[] args) {
		//创建对象的格式:类名 对象名 = new 类名();
		//对象名:其实就是合法的标识符,如果是一个单词所有字母小写,如果是多个单词,从第二个单词开始首字母大写
		Student s = new Student();
		//* D:如何使用成员变量呢?
		//* 对象名.变量名
		s.name = "张三";
		s.age = 23;

		System.out.println(s.name + "..." + s.age);
		//* E:如何使用成员方法呢?
		//* 对象名.方法名(...)
		s.study();
		s.sleep();
	}
}
```

### 手机类的使用
* A:学生自己完成
	* 模仿学生类，让学生自己完成

```
class Demo_Phone {//测试类
	public static void main(String[] args) {
		//创建对象
		Phone p = new Phone();
		//调用对象中的属性并赋值
		p.brand = "锤子";
		p.price = 998;

		System.out.println(p.brand + "..."  + p.price);

		//调用成员方法
		p.call();
		p.sendMessage();
		p.playGame();
	}
}
```
	
### 一个对象的内存图
* A:画图演示
	* 一个对象
* 按上节所述,↓java文件应该起名为Demo_Car.java

```
class Demo_Car {
	public static void main(String[] args) {
		Car c1 = new Car();				//创建对象

		//调用属性并赋值
		c1.color = "red";				//为车的颜色赋值
		c1.num = 8;						//为车的轮胎数赋值

		//调用行为
		c1.run();
	}
}
class Car {
	//成员变量
	String color;						//车的颜色
	int num;							//车的轮胎数

	public void run() {					//车运行
		System.out.println(color + "..." + num);
	}
}
```

![一个对象的内存图](http://wxhao2.duapp.com/blog/post-in/20130626/ygdxnct.png)

### 二个对象的内存图
* A:画图演示
	* 二个不同的对象
* 在上方main方法中增加如下代码

```
		Car c2 = new Car();				//创建对象
		c2.color = "black";				//为车的颜色赋值
		c2.num = 4;						//为车的轮胎数赋值
		c2.run();

		//c2 = null;						//用null把原来的地址值覆盖掉了

		//c2.run();						//c2里面记录的是null,所以报出空指针异常

```

![两个对象的内存图](http://wxhao2.duapp.com/blog/post-in/20130626/lgdxnct.png)

* 如果没有任何引用指向该对象,那么该对象就会变成垃圾,java中有完善的垃圾回收机制,会在不定时进行回收

### 三个引用两个对象的内存图
* A:画图演示
	* 三个引用，有两个对象的引用指向同一个地址
* 在上方main方法中增加如下代码

```
		Car c3 = c2;
		c3.run();
```

![三个引用两个对象内存图](http://wxhao2.duapp.com/blog/post-in/20130626/sgyylgnct.png)

### 成员变量和局部变量的区别
* A:在类中的位置不同
	* 成员变量：在类中方法外
	* 局部变量：在方法定义中或者方法声明上
* B:在内存中的位置不同
	* 成员变量：在堆内存(成员变量属于对象,对象进堆内存)
	* 局部变量：在栈内存(局部变量属于方法,方法进栈内存)
* C:生命周期不同
	* 成员变量：随着对象的创建而存在，随着对象的消失而消失
	* 局部变量：随着方法的调用而存在，随着方法的调用完毕而消失
* D:初始化值不同
	* 成员变量：有默认初始化值
	* 局部变量：没有默认初始化值，必须定义，赋值，然后才能使用。
	
* 注意事项：
	* 局部变量名称可以和成员变量名称一样，在方法中使用的时候，采用的是就近原则。
	* 基本数据类型变量包括哪些:byte,short,int,long,float,double,boolean,char
	* 引用数据类型变量包括哪些:数组,类,接口,枚举

```
class Demo2_Person {
	public static void main(String[] args) {
		Person p = new Person();
		p.speak();
	}
}

class Person {
	String name;						//成员变量
	int num;

	public void speak() {
		int num = 10;						//x和num都是局部变量
		System.out.println(name);
	
		System.out.println(num);
	}
}
```

### 思考题Java中的参数传递问题及图解
* A:案例演示
* 看程序写结果，并画内存图解释

```
/*
基本数据类型的值传递,不改变原值,因为调用后就会弹栈,局部变量随之消失
引用数据类型的值传递,改变原值,因为即使方法弹栈,但是堆内存数组对象还在,可以通过地址继续访问

*/
class Test_Array {
	public static void main(String[] args) {
		/*int a = 10;
		int b = 20;
		System.out.println("a:"+a+",b:"+b);			//a = 10,b = 20
		change(a,b);
		System.out.println("a:"+a+",b:"+b);			//?*/

		int[] arr = {1,2,3,4,5};
		change(arr);
		System.out.println(arr[1]);
	}

	public static void change(int a,int b) {		//a = 10, b= 20
		System.out.println("a:"+a+",b:"+b);			//a = 10,b = 20
		a = b;										//a = 20
		b = a + b;									//b = 40
		System.out.println("a:"+a+",b:"+b);			//a = 20, b = 40
	}

	public static void change(int[] arr) {			//1,4,3,8,5
		for(int x=0; x<arr.length; x++) {
			if(arr[x]%2==0) {
				arr[x]*=2;
			}
		}
	}
}

```

![基本数据类型的值传递](http://wxhao2.duapp.com/blog/post-in/20130626/jbsjlxdzcd.png)

![引用数据类型的值传递](http://wxhao2.duapp.com/blog/post-in/20130626/yysjlxdzcd.png)

* Java中到底是传值还是传址
    1. 既是传值,也是传地址,基本数据类型传递的值,引用数据类型传递的地址
    2. java中只有传值,因为地址值也是值(出去面试都说这种,支持者是高斯林(java之父))


[java虚拟机详解.docx百度云链接](http://pan.baidu.com/s/1mh5pf9Q)
