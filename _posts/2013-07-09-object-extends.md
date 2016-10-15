---
layout:     post
title:      "继承(重点)"
subtitle:   "JavaSE第二阶段之面向对象"
date:       2013-07-09
author:     "Wxhao"
header-img: "img/post-bg/black-sky.jpg"
catalog:    true
tags:
    - 基础知识 
    - java
    - JAVASE
---

### 继承案例演示
* A:继承(extends)
	* 让类与类之间产生关系,子父类关系 
* B:继承案例演示：
	* 动物类,猫类,狗类
	* 定义两个属性(颜色,腿的个数)两个功能(吃饭，睡觉)
* C:案例演示
	* 使用继承前
* D:案例演示
	* 使用继承后

```
class Demo1_Extends {
	public static void main(String[] args) {
		Cat c = new Cat();
		c.color = "花";
		c.leg = 4;
		c.eat();
		c.sleep();

		System.out.println(c.leg  + "..." + c.color);
	}
}
/*
* A:继承(extends)
	* 让类与类之间产生关系,子父类关系 
* B:继承案例演示：
	* 动物类,猫类,狗类
	* 定义两个属性(颜色,腿的个数)两个功能(吃饭，睡觉)
* C:案例演示
	* 使用继承前
* D:案例演示
	* 使用继承后
*/
class Animal {
	String color;					//动物的颜色
	int leg;						//动物腿的个数

	public void eat() {				//吃饭的功能
		System.out.println("吃饭");
	}

	public void sleep() {			//睡觉的功能
		System.out.println("睡觉");
	}
}

class Cat extends Animal {
	
}

class Dog extends Animal {
	
}

/*
extends是继承的意思
Animal是父类
Cat和Dog都是子类
*/
```

### 继承的好处和弊端
* A:继承的好处
	* a:提高了代码的复用性
	* b:提高了代码的维护性
	* c:让类与类之间产生了关系，是多态的前提
* B:继承的弊端
	* 类的耦合性增强了。
    	* 开发的原则：高内聚，低耦合。
	* 耦合：类与类的关系
	* 内聚：就是自己完成某件事情的能力



### Java中类的继承特点
* A:Java中类的继承特点
	* a:Java只支持单继承，不支持多继承。(一个儿子只能有一个爹)
		* 有些语言是支持多继承，格式：extends 类1,类2,...
	* b:Java支持多层继承(继承体系)
* B:案例演示
	* Java中类的继承特点
		* 如果想用这个体系的所有功能用最底层的类创建对象
		* 如果想看这个体系的共性功能,看最顶层的类 

```
class Demo2_Extends {
	public static void main(String[] args) {
		DemoC d = new DemoC();
		d.show();
	}
}

class DemoA {
	public void show() {
		System.out.println("DemoA");
	}
}

class DemoB extends DemoA {
	public void method() {
		System.out.println("DemoB");
	}
}

class DemoC extends DemoB {
	public void print() {
		System.out.println("DemoC");
	}
}
```

### 继承的注意事项和什么时候使用继承
* A:继承的注意事项
	* a:子类只能继承父类所有非私有的成员(成员方法和成员变量)
	* b:子类不能继承父类的构造方法，但是可以通过super(马上讲)关键字去访问父类构造方法。
	* c:不要为了部分功能而去继承
	* 项目经理 姓名 工号 工资 奖金
	* 程序员	姓名 工号 工资
* B:什么时候使用继承
	* 继承其实体现的是一种关系："is a"。
	
```
		Person
			Student
			Teacher
		水果
			苹果
			香蕉
			橘子
```

> 采用假设法。
	如果有两个类A,B。只有他们符合A是B的一种，或者B是A的一种，就可以考虑使用继承。

```
class Demo3_Extends {
	public static void main(String[] args) {
		Son s = new Son();
		s.show();
	}
}

class Father {
	private String name;
	private void show() {
		System.out.println("Hello World!");
	}
}

class Son extends Father {
} 
```

### 继承中成员变量的关系 
* A:案例演示
	* a:不同名的变量
	* b:同名的变量

```
class Demo4_Extends {
	public static void main(String[] args) {
		Son s = new Son();
		s.print();
	}
}
/*
* A:案例演示
	* a:不同名的变量
	* b:同名的变量
		子父类出现同名的变量只是在讲课中举例子有,在开发中是不会出现这种情况的
		子类继承父类就是为了使用父类的成员,那么如果定义了同名的成员变量没有意义了
*/

class Father {
	int num1 = 10;
	int num2 = 30;
}

class Son extends Father {
	int num2 = 20;

	public void print() {
		System.out.println(num1);//10	
		System.out.println(num2);//20,就近原则,子类有就不用父类的了
	}
}
```

### this和super的区别和应用 
* A:this和super都代表什么
	* this:代表当前对象的引用,谁来调用我,我就代表谁
	* super:代表当前对象父类的引用
* B:this和super的使用区别
	* a:调用成员变量
		* this.成员变量 调用本类的成员变量,也可以调用父类的成员变量
		* super.成员变量 调用父类的成员变量
	* b:调用构造方法
		* this(...)	调用本类的构造方法
		* super(...)	调用父类的构造方法
	* c:调用成员方法
		* this.成员方法 调用本类的成员方法,也可以调用父类的方法
		* super.成员方法 调用父类的成员方法

```
class Father {
	int num1 = 10;
	int num2 = 30;
}

class Son extends Father {
	int num2 = 20;

	public void print() {
		System.out.println(this.num1);				//this既可以调用本类的,也可以调用父类的(本类没有的情况下)
		System.out.println(this.num2);				//就近原则,子类有就不用父类的了
		System.out.println(super.num2);
	}
}
```

### 继承中构造方法的关系 
* A:案例演示
	* 子类中所有的构造方法默认都会访问父类中空参数的构造方法
* B:为什么呢?
	* 因为子类会继承父类中的数据，可能还会使用父类的数据。
	* 所以，子类初始化之前，一定要先完成父类数据的初始化。
	
	* 其实：
		* 每一个构造方法的第一条语句默认都是：super() Object类最顶层的父类。

```
class Demo5_Extends {
	public static void main(String[] args) {
		Son s = new Son();
	}
}

class Father extends Object {
	public Father() {
		super();
		System.out.println("Father 的构造方法");
	}
}

class Son extends Father {
	public Son() {
		super();							//这是一条语句,如果不写,系统会默认加上,用来访问父类中的空参构造
		System.out.println("Son 的构造方法");
	}
}
```

### 继承中构造方法的注意事项
* A:案例演示
	* 父类没有无参构造方法,子类怎么办?
	* super解决
	* this解决
* B:注意事项
	* super(…)或者this(….)必须出现在构造方法的第一条语句上

```
class Demo6_Extends {
	public static void main(String[] args) {
		Son s1 = new Son();
		System.out.println(s1.getName() + "..." + s1.getAge());
		System.out.println("--------------------");
		Son s2 = new Son("张三",23);
		System.out.println(s2.getName() + "..." + s2.getAge());
	}
}

class Father {
	private String name;			//姓名
	private int age;				//年龄

	public Father() {				//空参构造
		System.out.println("Father 空参构造");
	}

	public Father(String name,int age) {	//有参构造
		this.name = name;
		this.age = age;
		System.out.println("Father 有参构造");
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

class Son extends Father {
	public Son() {						//空参构造
		this("王五",25);				//本类中的构造方法
		//super("李四",24);				//调用父类中的构造方法
		
		System.out.println("Son 空参构造");
	}

	public Son(String name,int age) {	//有参构造
		super(name,age);
		System.out.println("Son 有参构造");
	}
}
```

### 继承中的面试题

* A:案例演示
* 		
		看程序写结果1

```
class Fu{
	public int num = 10;
	public Fu(){
		System.out.println("fu");
	}
}
class Zi extends Fu{
	public int num = 20;
	public Zi(){
		System.out.println("zi");
	}
	public void show(){
		int num = 30;
		System.out.println(num);
		System.out.println(this.num);
		System.out.println(super.num);
	}
}
class Test1_Extends {
	public static void main(String[] args) {
		Zi z = new Zi();
		z.show();
	}
}
```

* 输出
    1. fu
    2. zi
    3. 30
    4. 20
    5. 10

* 		看程序写结果2
		
```		
class Fu {
	static {
		System.out.println("静态代码块Fu");
	}

	{
		System.out.println("构造代码块Fu");
	}

	public Fu() {
		System.out.println("构造方法Fu");
	}
}

class Zi extends Fu {
	static {
		System.out.println("静态代码块Zi");
	}

	{
		System.out.println("构造代码块Zi");
	}

	public Zi() {
		System.out.println("构造方法Zi");
	}
}

Zi z = new Zi();
```

* 输出
    1. 静态代码块Fu
    2. 静态代码块Zi
    3. 构造代码块Fu
    4. 构造方法Fu
    5. 构造代码块Zi
    6. 构造方法Zi

* 请执行结果。
	1. jvm调用了main方法,main进栈
	2. 遇到Zi z = new Zi();会先将Fu.class和Zi.class分别加载进内存,再创建对象,当Fu.class加载进内存
	父类的静态代码块会随着Fu.class一起加载,当Zi.class加载进内存,子类的静态代码块会随着Zi.class一起加载
	第一个输出,静态代码块Fu,第二个输出静态代码块Zi
	3. 走Zi类的构造方法,因为java中是分层初始化的,先初始化父类,再初始化子类,所以先走的父类构造,但是在执行
	父类构造时,发现父类有构造代码块,构造代码块是优先于构造方法执行的所以
	第三个输出构造代码块Fu,第四个输出构造方法Fu
	4. Fu类初始化结束,子类初始化,第五个输出的是构造代码块Zi,构造方法Zi
	


### 继承中成员方法关系 
* A:案例演示
	* a:不同名的方法
	* b:同名的方法

```
class Demo7_Extends {
	public static void main(String[] args) {
		Son s = new Son();
		s.print();
		s.method();
	}
}
/*
* a:不同名的方法
* b:同名的方法
*/

class Father {
	public void print() {
		System.out.println("Fu print");
	}
}

class Son extends Father {
	public void method() {
		System.out.println("Zi Method");
	}

	public void print() {
		super.print();							//super可以调用父类的成员方法
		System.out.println("Zi print");
	}
}
```

### 方法重写概述及其应用
* A:什么是方法重写
	* 重写:子父类出现了一模一样的方法(注意:返回值类型可以是子父类,这个我们学完面向对象讲) 
* B:方法重写的应用：
	* 当子类需要父类的功能，而功能主体子类有自己特有内容时，可以重写父类中的方法。这样，即沿袭了父类的功能，又定义了子类特有的内容。
* C:案例演示
	* a:定义一个手机类。

```
class Demo7_Phone {
	public static void main(String[] args) {
		Ios8 i = new Ios8();
		i.siri();
		i.call();
	}
}

/*
B:方法重写的应用：
	* 当子类需要父类的功能，而功能主体子类有自己特有内容时，可以重写父类中的方法。这样，即沿袭了父类的功能，又定义了子类特有的内容。
	ios7系统 siri speak English
	ios8系统 siri 说中文
*/

class Ios7 {
	public void call() {
		System.out.println("打电话");
	}

	public void siri() {
		System.out.println("speak English");
	}
}

class Ios8 extends Ios7 {
	public void siri() {
		System.out.println("说中文");
		super.siri();
	}
}
```

### 方法重写的注意事项
* A:方法重写注意事项
	* a:父类中私有方法不能被重写
		* 因为父类私有方法子类根本就无法继承
	* b:子类重写父类方法时，访问权限不能更低
		* 最好就一致
	* c:父类静态方法，子类也必须通过静态方法进行重写
		* 其实这个算不上方法重写，但是现象确实如此，至于为什么算不上方法重写，多态中我会讲解(静态只能覆盖静态)
		
	* 子类重写父类方法的时候，最好声明一模一样。
* B:案例演示
	* 方法重写注意事项

```
class Demo8_双桨 {
	public static void main(String[] args) {
		DayOne d = new DayOne();
		d.泡妞();
		d.print();
	}
}

class 双桨 {
	public void sing() {
		System.out.println("唱红歌");
	}

	public void 泡妞() {
		System.out.println("唱红歌搞定林夕合鸟女士");
	}

	public static void print() {
		System.out.println("Fu print");
	}
}

class DayOne extends 双桨 {
	public void 泡妞() {
		System.out.println("霸王硬上弓");
	}

	public static void print() {				//静态只能覆盖静态,其实不算重写,多态时候详细讲解
		System.out.println("Zi print");
	}
}
```

### 面向对象(方法重写的面试题)
* A:方法重写的面试题
	* Override和Overload的区别?Overload能改变返回值类型吗?
	* overload可以改变返回值类型,只看参数列表
	* 方法重写：子类中出现了和父类中方法声明一模一样的方法。与返回值类型有关,返回值是一致(或者是子父类)的
	
	* 方法重载：本类中出现的方法名一样，参数列表不同的方法。与返回值类型无关。

	* 子类对象调用方法的时候：
		* 先找子类本身，再找父类。



### 使用继承前的学生和老师案例 
* A:案例演示
	* 使用继承前的学生和老师案例
	* 属性:姓名,年龄
	* 行为:吃饭
	* 老师有特有的方法:讲课
	* 学生有特有的方法:学习

```
class Test3_Person {
	public static void main(String[] args) {
		System.out.println("Hello World!");
	}
}

class Student {
	private String name;					//姓名
	private int age;						//年龄

	public Student() {}						//空参构造

	public Student(String name,int age) {	//有参构造
		this.name = name;
		this.age = age;
	}

	public void setName(String name) {		//设置姓名
		this.name = name;
	}

	public String getName() {				//获取姓名
		return name;
	}

	public void setAge(int age) {			//设置年龄
		this.age = age;
	}

	public int getAge() {					//获取年龄
		return age;
	}

	public void eat() {						//吃饭
		System.out.println("学生吃饭");
	}

	public void study() {					//学习
		System.out.println("学生学习");
	}
}

class Teacher {
	private String name;					//姓名
	private int age;						//年龄

	public Teacher() {}						//空参构造

	public Teacher(String name,int age) {	//有参构造
		this.name = name;
		this.age = age;
	}

	public void setName(String name) {		//设置姓名
		this.name = name;
	}

	public String getName() {				//获取姓名
		return name;
	}

	public void setAge(int age) {			//设置年龄
		this.age = age;
	}

	public int getAge() {					//获取年龄
		return age;
	}

	public void eat() {						//吃饭
		System.out.println("老师吃饭");
	}

	public void teach() {					//学习
		System.out.println("老师讲课");
	}
}
```

### 使用继承后的学生和老师案例 
* A:案例演示
	* 使用继承后的学生和老师案例

```
class Test4_Person {
	public static void main(String[] args) {
		Student s1 = new Student();
		s1.setName("张三");
		s1.setAge(23);
		System.out.println(s1.getName() + "..." + s1.getAge());
		s1.eat();
		s1.study();

		System.out.println("------------------");
		Student s2 = new Student("李四",24);
		System.out.println(s2.getName() + "..." + s2.getAge());
		s2.eat();
		s2.study();
	}
}
/*
* 使用继承后的学生和老师案例
*/

class Person {
	private String name;					//姓名
	private int age;						//年龄

	public Person() {}						//空参构造

	public Person(String name,int age) {	//有参构造
		this.name = name;
		this.age = age;
	}

	public void setName(String name) {		//设置姓名
		this.name = name;
	}

	public String getName() {				//获取姓名
		return name;
	}

	public void setAge(int age) {			//设置年龄
		this.age = age;
	}

	public int getAge() {					//获取年龄
		return age;
	}

	public void eat() {						//吃饭
		System.out.println(name  + "吃饭");
	}
}

class Student extends Person {
	public Student() {}						//空参构造

	public Student(String name,int age) {
		super(name,age);
	}

	public void study() {
		System.out.println(this.getName() + "学习");
	}
}

class Teacher extends Person {
	public Teacher() {}						//空参构造

	public Teacher(String name,int age) {
		super(name,age);
	}

	public void teach() {
		System.out.println(this.getName() + "讲课");
	}
}
```

### 猫狗案例分析,实现及测试 
* A:猫狗案例分析
* B:案例演示
	* 猫狗案例继承版
	* 属性:毛的颜色,腿的个数
	* 行为:吃饭
	* 猫特有行为:抓老鼠catchMouse
	* 狗特有行为:看家lookHome

```
class Test5_Animal {
	public static void main(String[] args) {
		Cat c1 = new Cat("花",4);
		System.out.println(c1.getColor() + "..." + c1.getLeg());
		c1.eat();
		c1.catchMouse();

		Dog d1 = new Dog("黑",2);
		System.out.println(d1.getColor() + "..." + d1.getLeg());
		d1.eat();
		d1.lookHome();
	}
}

class Animal {
	private String color;					//毛的颜色
	private int leg;						//腿的个数

	public Animal(){}

	public Animal(String color,int leg) {
		this.color = color;
		this.leg = leg;
	}

	public void setColor(String color) {	//设置颜色
		this.color = color;
	}

	public String getColor() {				//获取颜色
		return color;
	}

	public void setLeg(int leg) {			//设置腿的个数
		this.leg = leg;
	}

	public int getLeg() {					//获取腿的个数
		return leg;
	}

	public void eat() {						//吃饭
		System.out.println("吃饭");
	}
}

class Cat extends Animal {
	public Cat() {}							//空参构造

	public Cat(String color,int leg) {		//有参构造
		super(color,leg);
	}

	public void eat() {						//吃鱼
		System.out.println("猫吃鱼");
	}

	public void catchMouse() {				//抓老鼠
		System.out.println("抓老鼠");
	}
}

class Dog extends Animal {
	public Dog() {}							//空参构造

	public Dog(String color,int leg) {		//有参构造
		super(color,leg);
	}

	public void eat() {						//吃肉
		System.out.println("狗吃肉");
	}

	public void lookHome() {				//看家
		System.out.println("看家");
	}
}
```