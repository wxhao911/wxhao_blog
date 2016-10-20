---
layout:     post
title:      "Object类"
subtitle:   "JavaSE之常见对象"
date:       2013-07-25
author:     "Wxhao"
header-img: "img/post-bg/black-sky.jpg"
catalog:    true
tags:
    - 基础知识 
    - java
    - JAVASE
---

### API概述 
* A:API(Application Programming Interface) 
	* 应用程序编程接口
* B:Java API
	* 就是Java提供给我们使用的类，这些类将底层的实现封装了起来，
	* 我们不需要关心这些类是如何实现的，只需要学习这些类如何使用。

### Object类的概述 
* A:Object类概述
	* 类层次结构的根类
	* 所有类都直接或者间接的继承自该类
* B:构造方法
	* public Object()
	* 回想面向对象中为什么说：
	* 子类的构造方法默认访问的是父类的无参构造方法

### Object类的hashCode()方法 
* A:案例演示
	* public int hashCode()
	* a:返回该对象的哈希码值。默认情况下，该方法会根据对象的地址来计算。
	* b:不同对象的，hashCode()一般来说不会相同。但是，同一个对象的hashCode()值肯定相同。

### Object类的getClass()方法(在反射的时候掌握)
* A:案例演示
	* public final Class getClass()
	* a:返回此 Object 的运行时类。
	* b:可以通过Class类中的一个方法，获取对象的真实类的全名称。	
		* public String getName()

### Object类的toString()方法 
* A:案例演示
	* public String toString()
	* a:返回该对象的字符串表示。
        * ```
        public Stirng toString() {
        	return name + "," + age;
        }
        		
         ```

	* b:它的值等于： 
		* getClass().getName() + "@" + Integer.toHexString(hashCode()) 
	* c:由于默认情况下的数据对我们来说没有意义，一般建议重写该方法。
* B:最终版
	* 自动生成

### Object类的equals()方法 
* A:案例演示
	* a:指示其他某个对象是否与此对象“相等”。 
	* b:默认情况下比较的是对象的引用是否相同。
	* c:由于比较对象的引用没有意义，一般建议重写该方法。

### ==号和equals方法的区别 
* ==是一个比较运算符号,既可以比较基本数据类型,也可以比较引用数据类型,基本数据类型比较的是值,引用数据类型比较的是地址值
* equals方法是一个方法,只能比较引用数据类型,所有的对象都会继承Object类中的方法,如果没有重写Object类中的equals方法,equals方法和==号比较引用数据类型无区别,重写后的equals方法比较的是对象中的属性

