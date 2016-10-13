---
layout:     post
title:      "构造方法和面向对象练习"
subtitle:   "JavaSE第二阶段之面向对象"
date:       2013-07-01
author:     "Wxhao"
header-img: "img/post-bg/java.jpg"
catalog:    true
tags:
    - 基础知识 
    - java
    - JAVASE
---

### 构造方法Constructor概述和格式
* A:构造方法概述和作用
	* 给对象的数据(属性)进行初始化
* B:构造方法格式特点
	* a:方法名与类名相同(大小也要与类名一致)
	* b:没有返回值类型，连void都没有
	* c:没有具体的返回值return;

```
class Demo1_Constructor {						//Constructor构造
	public static void main(String[] args) {
		Person p = new Person();				//在一创建对象的时候,系统就帮我调用了构造方法
		//p.Person();							//构造方法不能用对象调用
		p.show();

		Person p2 = new Person();				//再次创建对象
	
		p2.show();
	}
}

class Person {
	private String name;
	private int age;

	//构造方法
	public Person() {
		//System.out.println("Hello World!");
		//return;								//构造方法也是有return语句的,格式是return;
		name = "张三";
		age = 23;
	}

	public void show() {
		System.out.println(name + "..." + age);
	}
}

```

### 构造方法的重载及注意事项
* A:案例演示
	* 构造方法的重载
	* 重载:方法名相同,与返回值类型无关(构造方法没有返回值),只看参数列表
* B:构造方法注意事项
	* a:如果我们没有给出构造方法，系统将自动提供一个无参构造方法。
	* b:如果我们给出了构造方法，系统将不再提供默认的无参构造方法。
		* 注意：这个时候，如果我们还想使用无参构造方法，就必须自己给出。建议永远自己给出无参构造方法

```
class Demo2_Person {
	public static void main(String[] args) {
		Person p1 = new Person();
		p1.show();

		System.out.println("---------------------");

		Person p2 = new Person("张三",23);
		p2.show();

		System.out.println("---------------------");

		Person p3 = new Person("李四",24);
		p3.show();
	}
}

class Person {
	private String name;			//姓名
	private int age;				//年龄

	public Person() {				//空参构造
		System.out.println("空参的构造");
	}

	public Person(String name,int age) {
		this.name = name;
		this.age = age;
		System.out.println("有参的构造");
	}
	
	public void show() {
		System.out.println(name + "..." + age);
	}
}
```
		
### 给成员变量赋值的两种方式的区别
* A:setXxx()方法
	* 修改属性值 
* B:构造方法
	* 给对象中属性进行初始化 

```
class Demo3_Person {
	public static void main(String[] args) {
		Person p1 = new Person("张三",23);
		//p1 = new Person("张天一",23);	//这种方式看运行结果貌似是改名了,其实是将原对象变成垃圾
		System.out.println(p1.getName() + "..." + p1.getAge());

		System.out.println("--------------------");
		Person p2 = new Person();		//空参构造创建对象
		p2.setName("李四");
		p2.setAge(24);

		p2.setName("李鬼");
		System.out.println(p2.getName() + "..." + p2.getAge());
	}
}
/*
构造方法
	给属性进行初始化
setXxx方法
	修改属性值
	这两种方式,在开发中用setXxx更多一些,因为比较灵活
*/
class Person {
	private String name;				//姓名
	private int age;					//年龄

	public Person() {					//空参构造
	}

	public Person(String name,int age) {//有参构造
		this.name = name;
		this.age = age;
	}
	
	public void setName(String name) {	//设置姓名
		this.name = name;
	}

	public String getName() {			//获取姓名
		return name;
	}

	public void setAge(int age) {		//设置年龄
		this.age = age;
	}

	public int getAge() {				//获取年龄
		return age;
	}
}
```

### 学生类的代码及测试
* A:案例演示
	* 学生类：
		* 成员变量：
			* name，age
		* 构造方法：
			* 无参，带两个参
		* 成员方法：
			* getXxx()/setXxx()
			* show()：输出该类的所有成员变量值
* B:给成员变量赋值：
	* a:setXxx()方法
	* b:构造方法
	
* C:输出成员变量值的方式：
	* a:通过getXxx()分别获取然后拼接
	* b:通过调用show()方法搞定

```
class Student {
	private String name;							//姓名
	private int age;								//年龄

	public Student(){}								//空参构造

	public Student(String name,int age) {			//有参构造
		this.name = name;
		this.age = age;
	}

	public void setName(String name) {				//设置姓名
		this.name = name;
	}

	public String getName() {						//获取姓名
		return name;
	}

	public void setAge(int age) {					//设置年龄
		this.age = age;
	}

	public int getAge() {							//获取年龄
		return age;
	}

	public void show() {
		System.out.println("我的姓名是:" + name +  ",我的年龄是:" +  age);
	}
}
```

### 手机类的代码及测试
* A:案例演示
	* 模仿学生类，完成手机类代码

```
class Demo5_Phone {
	public static void main(String[] args) {
		Phone p1 = new Phone();
		p1.setBrand("苹果");
		p1.setPrice(1500);
		System.out.println(p1.getBrand() + "..." + p1.getPrice());

		Phone p2 = new Phone("小米",98);
		p2.show();
	}
}
/*
手机类:
	成员变量:
		品牌brand,价格price
	构造方法
		无参,有参
	成员方法
		setXxx和getXxx
		show
*/
class Phone {
	private String brand;						//品牌
	private int price;							//价格

	public Phone(){}							//空参构造

	public Phone(String brand,int price) {		//有参构造
		this.brand = brand;
		this.price = price;
	}

	public void setBrand(String brand) {		//设置品牌
		this.brand = brand;
	}

	public String getBrand() {					//获取品牌
		return brand;
	}

	public void setPrice(int price) {			//设置价格
		this.price = price;
	}

	public int getPrice() {						//获取价格
		return price;
	}

	public void show() {
		System.out.println(brand + "..." + price);
	}
}
```

### 创建一个对象的步骤
* A:画图演示
	* 画图说明一个对象的创建过程做了哪些事情?
	* Student s = new Student();
	* 1,Student.class加载进内存
	* 2,声明一个Student类型引用s
	* 3,在堆内存创建对象,
	* 4,给对象中属性默认初始化值
	* 5,属性进行显示初始化
	* 6,构造方法进栈,对对象中的属性赋值,构造方法弹栈
	* 7,将对象的地址值赋值给s

```
class Demo1_Student {
	public static void main(String[] args) {
		Student s = new Student();
		s.show();
	}
}

class Student {
	private String name = "张三";
	private int age = 23;

	public Student() {
		name = "李四";
		age = 24;
	}

	public void show() {
		System.out.println(name + "..." + age);
	}
}
```

![创建对象的步骤](http://wxhao2.duapp.com/blog/post-in/20130701/cjdxdbz.png)

### 长方形案例练习 
* A:案例演示
	* 需求：
		* 定义一个长方形类,定义 求周长和面积的方法，
		* 然后定义一个测试类进行测试。

```
class Test1_Rectangle {							//Rectangle矩形
	public static void main(String[] args) {
		Rectangle r = new Rectangle(10,20);
		System.out.println(r.getLength());		//周长
		System.out.println(r.getArea());		//面积
	}
}
/** 
		成员变量:
			宽width,高high
		空参有参构造
		成员方法:
			setXxx和getXxx
			求周长:getLength()
			求面积:getArea()
*/
class Rectangle {
	private int width;				//宽
	private int high;				//高

	public Rectangle(){}			//空参构造

	public Rectangle(int width,int high) {
		this.width = width;			//有参构造
		this.high = high;
	}

	public void setWidth(int width) {//设置宽
		this.width = width;
	}

	public int getWidth() {			//获取宽
		return width;
	}

	public void setHigh(int high) {	//设置高
		this.high = high;
	}

	public int getHigh() {			//获取高
		return high;
	}

	public int getLength() {		//获取周长
		return 2 * (width + high);
	}

	public int getArea() {			//获取面积
		return width * high;
	}
}
```

### 员工类案例练习
* A:案例演示
	* 需求：定义一个员工类Employee
	* 自己分析出几个成员，然后给出成员变量
		* 姓名name,工号id,工资salary 
	* 构造方法，
		* 空参和有参的
	* getXxx()setXxx()方法，
	* 以及一个显示所有成员信息的方法。并测试。
		* work 

```
class Test2_Employee {						//employee员工
	public static void main(String[] args) {
		Employee e = new Employee("令狐冲","9527",20000);
		e.work();
	}
}

class Employee {
	private String name;					//姓名
	private String id;						//工号
	private double salary;					//工资

	public Employee() {}					//空参构造

	public Employee(String name, String id, double salary) {//有参构造
		this.name = name;
		this.id = id;
		this.salary = salary;
	}

	public void setName(String name) {		//设置姓名
		this.name = name;
	}

	public String getName() {				//获取姓名
		return name;
	}

	public void setId(String id) {			//设置id
		this.id = id;
	}

	public String getId() {					//获取id
		return id;
	}

	public void setSalary(double salary) {	//设置工资
		this.salary = salary;
	}
	
	public double getSalary() {				//获取工资
		return salary;
	}

	public void work() {
		System.out.println("我的姓名是:" + name + ",我的工号是:" + id + ",我的工资是:" + salary 
			+ ",我的工作内容是敲代码");
	}
}
	
```