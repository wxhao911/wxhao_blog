---
layout:     post
title:      "final 关键字"
subtitle:   "JavaSE第二阶段之面向对象"
date:       2013-07-11
author:     "Wxhao"
header-img: "img/post-bg/black-sky.jpg"
catalog:    true
tags:
    - 基础知识 
    - java
    - JAVASE
---

### final关键字修饰类,方法以及变量的特点
* A:final概述
* B:final修饰特点
	* 修饰类，类不能被继承
	* 修饰变量，变量就变成了常量，只能被赋值一次
	* 修饰方法，方法不能被重写
* C:案例演示
	* final修饰特点

```
class Demo1_Final {
	public static void main(String[] args) {
		Son s = new Son();
		s.print();
	}
}

/*final class Father {
	public void print() {
		System.out.println("访问底层数据资源");
	}
}*/

class Son /*extends Father*/ {
	final int NUM = 10;						//常量命名规范,如果是一个单词,所有字母大写,如果是多个单词,每个单词都大写,中间用下划线隔开
	public static final double PI = 3.14;	//final修饰变量叫做常量,一般会与public static共用
	public void print() {
		//NUM = 20;
		System.out.println(NUM);
	}
}
```

### final关键字修饰局部变量 
* A:代码演示
	* 方法内部或者方法声明上都试一下

	* 基本类型，是值不能被改变
	* 引用类型，是地址值不能被改变,对象中的属性可以改变

```
class Demo2_Final {
	public static void main(String[] args) {
		final int num = 10;
		//num = 20;
		System.out.println(num);

		final Person p = new Person("张三",23);
		//p = new Person("李四",24);
		p.setName("李四");
		p.setAge(24);

		System.out.println(p.getName() + "..." + p.getAge());

		method(10);
		method(20);
	}

	public static void method(final int x) {
		System.out.println(x);
	}
}

class Person {
	private String name;			//姓名
	private int age;				//年龄

	public Person(){}				//空参构造

	public Person(String name,int age) {
		this.name = name;
		this.age = age;
	}

	public void setName(String name) {	//设置姓名
		this.name = name;
	}

	public String getName() {		//获取姓名
		return name;
	}

	public void setAge(int age) {	//设置年龄
		this.age = age;
	}

	public int getAge() {			//获取年龄
		return age;
	}
}
```

### final修饰变量的初始化时机 
* A:final修饰变量的初始化时机
	* 显示初始化 
	* 在对象构造完毕前即可
	
```
class Demo3_Final {
	public static void main(String[] args) {
		Demo d = new Demo();
		d.print();
	}
}

class Demo {
	final int num;						//成员变量的默认初始化值是无效值
	
	public Demo() {
		num = 10;
	}
	public void print() {
		System.out.println(num);
	}
}
```