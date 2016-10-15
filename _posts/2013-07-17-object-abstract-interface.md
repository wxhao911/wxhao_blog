---
layout:     post
title:      "抽象类与接口"
subtitle:   "JavaSE第二阶段之面向对象"
date:       2013-07-17
author:     "Wxhao"
header-img: "img/post-bg/black-sky.jpg"
catalog:    true
tags:
    - 基础知识 
    - java
    - JAVASE
---

### 抽象类的概述及其特点
* 抽象类概述
    * 抽象就是看不懂的
* 抽象类特点
    * 抽象类和抽象方法必须用abstract关键字修饰
        * abstract class 类名 {}
        * public abstract void 方法名();
    * 抽象类不一定有抽象方法,有抽象方法的类一定是抽象类或者接口
    * 抽象类不能实例化,抽象类如何实例化呢
        * 按照多态的方式,由具体的子类实例化,其实这也是多态的一种,抽象类多态
    * 抽象类的子类
        * 要么是抽象类
        * 要么重写抽象类中的所有抽象方法
* 代码演示

```

public class Demo1_Abstract {

	public static void main(String[] args) {
		//Animal a= Animal(); //Animal是抽象的,无法实例化
		Animal a= new Cat(); //父类引用子类对象
		a.eat();
	}

}

abstract class Animal{//抽象类
	public abstract void eat();//抽象方法
}

class Cat extends Animal{
	public void eat() {
		System.out.println("猫吃鱼");
	}
	
}
```


### 抽象类的成员特点

* 抽象类的成员特点
    * 成员变量:既可以是变量,也可以是常量
    * abstract是否可以修饰成员变量
        * 不能修饰成员变量
    * 构造方法:有
        * 用于子类访问父类数据的初始化
    * 成员方法:既可以是抽象的,也可以是非抽象的
* 代码演示抽象类的特点
    * 抽象方法,强制要求子类做的事情
    * 非抽象方法,子类继承的事情,提高代码复用性

```

public class Demo2_Abstract {

	public static void main(String[] args) {

	}

}

abstract class Demo{
	int num = 10;
	final int num2=20;
	
	public Demo(){}
	
	public void print(){
		System.out.println("111");
	}
	
	public abstract void method();
}

class Test extends Demo{
	public void method() {
	}
}
```


### 抽象类中的面试题
1. 一个抽象类如果没有抽象方法,可以不可以定义为抽象类?
    * 可以,这么做目的只有一个,就是不让其它的创建本类对象,交给子类完成 
2. abstract不能和哪些关键字共存
    * static 可以被类名调用,但类名.抽象方法没有意义
        * abstract 方法没有方法体
    * final 不让子类重写
        * abstract 强制子类重写
    * private 修饰不让子类访问,所以他俩是矛盾的
        * abstract 为了让子类看到,并强制子类重写



### 接口的概述及其特点
* 接口概述
    * 从狭义的角度讲就是java中的interface
    * 从广义的角度讲对外提供规则的都是接口

* 接口特点
    * 接口用关键字interface表示
        * interface 接口名{}
    * 类实现接口用implements表示
        * class 类名 implements 接口名{}
    * 接口不能实例化
        * 接口如何实例化?
        * 按照多态的方式来实例化
    * 接口的子类
        * 可以是抽象类,但是意义不大
        * 可以是具体类,要重写接口中的所有抽象方法(推荐方案)

* 代码演示

```

public class Demo1_Interface {

	public static void main(String[] args) {
		//Inter i=new Inter(); 接口不能被实例化,因为调用抽象方法没有意义
		Inter i =new Demo();
		i.print();
	}

}

interface Inter{
	public abstract void print(); //接口中的方法都是抽象的
}

class Demo implements Inter{
	public void print() {
		System.out.println("print");
	}
}
```

### 接口成员特点
* 成员变量:只能是常量,冰倩是静态的并公共的
    * 默认修饰符:public static final
    * 建议:自己手动给出
* 构造方法:接口没有构造方法
* 成员方法: 只能是抽象方法
    * 默认修饰符:public abstract
    * 建议:自己手动给出
* 代码演示

```

public class Demo2_Interface {

	public static void main(String[] args) {
		Demo d=new Demo();
		d.print();
		System.out.println(Inter.num);
	}

}

interface Inter{
	static final int num = 10; //默认加public static final修饰符 
	//public Inter(){} //没有构造方法
	
	void print(); //默认public abstract
}

class Demo /*extends Object */implements Inter {//默认继承Object类
	public void print() {
		System.out.println(num);
	}
}
```

### 类与类,类与接口,接口与接口的关系
    
* 类与类,类与接口,接口与接口的关系
    * 类与类:
        * 继承关系,只能单继承,不能多层继承
    * 类与接口
        * 实现关系,可以 单实现,也可以多实现
        * 并且还可以在继承一个类的同事实现多个接口
    * 接口与接口
        * 继承关系,可以单继承,也可以多继承

```
interface InterA{
	void printA();
}

interface InterB{
	void printB(); 
}

interface InterC extends InterA,InterB{//可以多继承
}

class Demo implements InterA ,InterB {//多接口用,(逗号)分割

	public void printA() {
		System.out.println("printA");
	}

	public void printB() {
		System.out.println("printB");
	}
}
```

### 类与类,类与接口,接口与接口的区别

* 成员区别
    * 抽象类:
        * 成员变量:可以变量,也可以常量
        * 构造方法:有
        * 成员方法:可以抽象,也可以非抽象
    * 接口:
        * 成员变量:只可以常量
        * 成员方法:只可以抽象
        
* 关系区别
    * 类与类:
        * 继承,单继承
    * 类与接口
        * 实现,单实现,多实现
    * 接口与接口
        * 继承,单继承,多继承
        
* 设计理念区别
    * 抽象类 被继承体现的是"is a"的关系,抽象类中定义的是该继承体系的共性功能
    * 接口 被实现体现的是:"like a"的关系.接口中定义的是该继承体系的扩展功能
    
