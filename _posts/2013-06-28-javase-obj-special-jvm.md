---
layout:     post
title:      "面向对象的特点及其使用"
subtitle:   "JavaSE第二阶段之面向对象"
date:       2013-06-28
author:     "Wxhao"
header-img: "img/post-bg/java.jpg"
catalog:    true
tags:
    - 基础知识 
    - java
    - JAVASE
---
	
### 方法的形式参数是类名的时候如何调用 
* A:方法的参数是类名

```
public void print(Student s){}//print(new Student());
```

	* 如果你看到了一个方法的形式参数是一个类类型(引用类型)，这里其实需要的是该类的对象。

```
class Demo1_Student {
	public static void main(String[] args) {
		print(10);

		Student s = new Student();					//创建对象,并将对象的地址值赋值给s
		print(s);
	}

	public static void print(int x) {				//基本数据类型当作形式参数
		System.out.println(x);
	}

	public static void print(Student stu) {			//引用数据类型当作形式参数
		stu.name = "张三";
		stu.age = 23;
		stu.speak();
	}
}


class Student {
	String name;					//姓名
	int age;						//年龄

	public void speak() {
		System.out.println(name + "..." + age);
	}
}
```

### 匿名对象的概述和应用
* A:什么是匿名对象
	* 没有名字的对象 
* B:匿名对象应用场景
	* a:调用方法，仅仅只调用一次的时候。
		* 那么，这种匿名调用有什么好处吗?
			* 节省代码 
		* 注意：调用多次的时候，不适合。匿名对象调用完毕就是垃圾。可以被垃圾回收器回收。
	* b:匿名对象可以作为实际参数传递
* C:案例演示
	* 匿名对象应用场景

```
class Demo2_Car {
	public static void main(String[] args) {
		/*Car c1 = new Car();			//创建有名字的对象
		c1.run();
		c1.run();

		new Car().run();			//匿名对象调用方法
		new Car().run();	*/		//匿名对象只适合对方法的一次调用,因为调用多次就会产生多个对象,不如用有名字的对象	
	
		//匿名对象是否可以调用属性并赋值?有什么意义?
		/*
		匿名对象可以调用属性,但是没有意义,因为调用后就变成垃圾
		如果需要赋值还是用有名字对象
		*/
		new Car().color = "red";
		new Car().num = 8;
		new Car().run();
	}
}

class Car {
	String color;			//颜色
	int num;				//轮胎数

	public void run() {
		System.out.println(color + "..." + num);
	}
}
```

![匿名对象内存图](http://wxhao2.duapp.com/blog/post-in/20130628/nmdxnc.png)

```
class Demo3_Car {
	public static void main(String[] args) {
		//Car c1 = new Car();
		/*c1.color = "red";
		c1.num = 8;
		c1.run();*/
		//method(c1);

		method(new Car());

		//Car c2 = new Car();
		//method(c2);
		method(new Car());				//匿名对象可以当作参数传递
	}

	//抽取方法提高代码的复用性
	public static void method(Car cc) {	//Car cc = new Car();
		cc.color = "red";
		cc.num = 8;
		cc.run();
	}
}

class Car {
	String color;			//颜色
	int num;				//轮胎数

	public void run() {
		System.out.println(color + "..." + num);
	}
}

```

### 封装的概述 
* A:封装概述
	* 是指隐藏对象的属性和实现细节，仅对外提供公共访问方式。

* B:封装好处
	* 隐藏实现细节，提供公共的访问方式
	* 提高了代码的复用性
	* 提高安全性。
* C:封装原则
	* 将不需要对外提供的内容都隐藏起来。
	* 把属性隐藏，提供公共方法对其访问。

### private关键字的概述和特点
* A:人类赋值年龄的问题
* B:private关键字特点
	* a:是一个权限修饰符
	* b:可以修饰成员变量和成员方法
	* c:被其修饰的成员只能在本类中被访问
* C:案例演示
	* 封装和private的应用：
	* A:把成员变量用private修饰
	* B:提供对应的getXxx()和setXxx()方法
	* private仅仅是封装的一种体现形式,不能说封装就是私有

```
//年龄不能为负数,可是测试类不能保证都是正数,所以不安全
class Demo1_Person {
	public static void main(String[] args) {
		Person p1 = new Person();
		p1.name = "张三";			//调用姓名属性并赋值
		//p1.age = -17;				//调用年龄属性并赋值
		//p1.speak();					//调用行为

		p1.setAge(-17);

		System.out.println(p1.getAge());
	}
}

class Person {
	String name;					//姓名
	private int age;				//年龄
	
	public void setAge(int a) {		//设置年龄
		if (a > 0 && a < 200) {
			age = a;
		}else {
			System.out.println("请回火星吧,地球不适合你");
		}
		
	}

	public int getAge() {			//获取年龄
		return age;
	}

	public void speak() {
		System.out.println(name + "..." + age);
	}
}
```


## this关键字的概述和应用 
* A:this关键字特点
	* 代表当前对象的引用 
* B:代码演示
	* this的应用场景
	* 用来区分成员变量和局部变量重名

```
class Demo1_This {
	public static void main(String[] args) {
		Person p1 = new Person();
		p1.setName("张三");
		p1.setAge(23);
		System.out.println(p1.getName() + "..." + p1.getAge());

		Person p2 = new Person();
		p2.setName("李四");
		p2.setAge(24);
		System.out.println(p2.getName() + "..." + p2.getAge());
	}
}

class Person {
	private String name;			//姓名
	private int age;				//年龄
	
	public void setAge(int age) {		//设置年龄
		if (age > 0 && age < 200) {
			this.age = age;
			//System.out.println(age);
		}else {
			System.out.println("请回火星吧,地球不适合你");
		}
		
	}

	public int getAge() {			//获取年龄
		return age;
	}

	public void setName(String name) {	//设置姓名
		this.name = name;
		//System.out.println(name);
	}

	public String getName() {
		return name;
	}
}
```

* this关键字用来规避就近原则

### 手机类代码及其测试
* 练习
	* 请把手机类写成一个标准类，然后创建对象测试功能。

```
手机类
	属性:品牌brand,价格price
	行为:打电话call,发短信sendMessage,玩游戏,playGame
```

```
class Demo2_Phone {
	public static void main(String[] args) {
		Phone p1 = new Phone();
		p1.setBrand("三星");
		p1.setPrice(5288);

		System.out.println(p1.getBrand() + "..." + p1.getPrice());
		p1.call();
		p1.sendMessage();
		p1.playGame();
	}
}

class Phone {								//java bean
	private String brand;					//品牌
	private int price;						//价格

	public void setBrand(String brand) {	//设置品牌
		this.brand = brand;
	}

	public String getBrand() {				//获取品牌
		return this.brand;					//this.可以省略,你不加系统会默认给你加
	}

	public void setPrice(int price) {		//设置价格
		this.price = price;
	}

	public int getPrice() {					//获取价格
		return price;
	}

	public void call() {					//打电话
		System.out.println("打电话");
	}

	public void sendMessage() {				//发短信
		System.out.println("发短信");
	}

	public void playGame() {				//玩游戏
		System.out.println("玩游戏");
	}
}
```

