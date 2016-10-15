---
layout:     post
title:      "内部类"
subtitle:   "JavaSE第二阶段之面向对象"
date:       2013-07-21
author:     "Wxhao"
header-img: "img/post-bg/black-sky.jpg"
catalog:    true
tags:
    - 基础知识 
    - java
    - JAVASE
---

### 内部类概述和访问特点 
* A:内部类概述
* B:内部类访问特点
	* a:内部类可以直接访问外部类的成员，包括私有。
	* b:外部类要访问内部类的成员，必须创建对象。
	* 外部类名.内部类名 对象名 = 外部类对象.内部类对象;
* C:案例演示
	* 内部类极其访问特点

```
class Demo1_InnerClass {
	public static void main(String[] args) {
		//Inner i = new Inner();
		//i.method();
		//外部类名.内部类名 = 外部类对象.内部类对象
		Outer.Inner oi = new Outer().new Inner();			//创建内部类对象
		oi.method();

	}
}

class Outer {
	private int num = 10;
	class Inner {
		public void method() {
			System.out.println(num);
		}
	}
}
```
	
### 成员内部类私有使用 
* private

```
class Demo2_InnerClass {
	public static void main(String[] args) {
		//Outer.Inner oi = new Outer().new Inner();
		//oi.method();

		Outer o = new Outer();
		o.print();
	}
}

class Outer {
	private int num = 10;
	private class Inner {
		public void method() {
			System.out.println(num);
		}
	}

	public void print() {
		Inner i = new Inner();
		i.method();
	}
}
```

### 静态成员内部类 
* static
* B:成员内部类被静态修饰后的访问方式是:
	* 外部类名.内部类名 对象名 = 外部类名.内部类对象;

```
class Demo1_InnerClass {
	public static void main(String[] args) {
		//外部类名.内部类名 对象名 = 外部类名.内部类对象;
		Outer.Inner oi = new Outer.Inner();
		oi.method();

		Outer.Inner2.print();
	}
}

class Outer {
	static class Inner {
		public void method() {
			System.out.println("method");
		}
	}

	static class Inner2 {
		public static void print() {
			System.out.println("print");
		}
	}
}
```

### 成员内部类的面试题 
* A:面试题
* 
		要求：使用已知的变量，在控制台输出30，20，10。

```		
class Outer {
	public int num = 10;
	class Inner {
		public int num = 20;
		public void show() {
			int num = 30;
			System.out.println(?);
			System.out.println(??);
			System.out.println(???);
		}
	}
}
class InnerClassTest {
	public static void main(String[] args) {
		Outer.Inner oi = new Outer().new Inner();
		oi.show();
	}	
}
```

```
class Test1_InnerClass {
	public static void main(String[] args) {
		Outer.Inner oi = new Outer().new Inner();
		oi.show();
	}
}
//要求：使用已知的变量，在控制台输出30，20，10。
//内部类之所以能获取到外部类的成员,是因为他能获取到外部类的引用外部类名.this
class Outer {
	public int num = 10;
	class Inner {
		public int num = 20;
		public void show() {
			int num = 30;
			System.out.println(num);
			System.out.println(this.num);
			System.out.println(Outer.this.num);
		}
	}
}
```

### 局部内部类访问局部变量的问题 
* A:案例演示
	* 局部内部类访问局部变量必须用final修饰
	* 局部内部类在访问他所在方法中的局部变量必须用final修饰,为什么?
		因为当调用这个方法时,局部变量如果没有用final修饰,他的生命周期和方法的生命周期是一样的,当方法弹栈,这个局部变量也会消失,那么如果局部内部类对象还没有马上消失想用这个局部变量,就没有了,如果用final修饰会在类加载的时候进入常量池,即使方法弹栈,常量池的常量还在,也可以继续使用
		但是jdk1.8取消了这个事情,所以我认为这是个bug

```
class Demo1_InnerClass {
	public static void main(String[] args) {
		Outer o = new Outer();
		o.method();
	}
}
//局部内部类
class Outer {
	public void method() {
		final int num = 10;
		class Inner {
			public void print() {
				System.out.println(num);
			}
		}

		Inner i = new Inner();
		i.print();
	}

	/*public void run() {
		Inner i = new Inner();				//局部内部类,只能在其所在的方法中访问
		i.print();
	}*/
}
```

![局部内部类内存图](http://wxhao2.duapp.com/blog/post-in/20130721/jbnblnct.png)

### 匿名内部类的格式和理解 
* A:匿名内部类
	* 就是内部类的简化写法。
* B:前提：存在一个类或者接口
	* 这里的类可以是具体类也可以是抽象类。
* C:格式：
		new 类名或者接口名(){
			重写方法;
		}
* D:本质是什么呢?
	* 是一个继承了该类或者实现了该接口的子类匿名对象。
* E:案例演示
	* 按照要求来一个匿名内部类

```
interface Inter {
	public void print();
}

class Outer {
	class Inner implements Inter {
		public void print() {
			System.out.println("print");
		}
	}

	public void method(){
		//Inner i = new Inner();
		//i.print();
		//new Inner().print();
		//Inter i = new Inner();			//父类引用指向子类对象
		
		new Inter() {						//实现Inter接口
			public void print() {			//重写抽象方法
				System.out.println("print");
			}
		}.print();
	}
}

class Demo1_NoNameInnerClass {
	public static void main(String[] args) {
		Outer o = new Outer();
		o.method();
	}
}
```
		
###10.14_面向对象(匿名内部类重写多个方法调用)
* A:案例演示
	* 匿名内部类的方法调用

```
class Demo2_NoNameInnerClass {
	public static void main(String[] args) {
		Outer o = new Outer();
		o.method();
	}
}

interface Inter {
	public void show1();
	public void show2();
}
//匿名内部类只针对重写一个方法时候使用
class Outer {
	public void method() {
		/*new Inter(){
			public void show1() {
				System.out.println("show1");
			}

			public void show2() {
				System.out.println("show2");
			}
		}.show1();

		new Inter(){
			public void show1() {
				System.out.println("show1");
			}

			public void show2() {
				System.out.println("show2");
			}
		}.show2();*/

		Inter i = new Inter(){
			public void show1() {
				System.out.println("show1");
			}

			public void show2() {
				System.out.println("show2");
			}

			/*public void show3() {
				System.out.println("show3");
			}*/
		};

		i.show1();
		i.show2();
		//i.show3();						//匿名内部类是不能向下转型的,因为没有子类类名
	}
}
```

###10.15_面向对象(匿名内部类在开发中的应用)

* A:代码如下

```
//这里写抽象类，接口都行
abstract class Person {
	public abstract void show();
}

class PersonDemo {
	public void method(Person p) {
		p.show();
	}
}

class PersonTest {
	public static void main(String[] args) {
		//如何调用PersonDemo中的method方法呢?
		PersonDemo pd = new PersonDemo ();
		
	}
}
```

```
class Test1_NoNameInnerClass {
	public static void main(String[] args) {
		//如何调用PersonDemo中的method方法呢?
		PersonDemo pd = new PersonDemo ();
		//pd.method(new Student());
		pd.method(new Person() {
			public void show() {
				System.out.println("show");
			}
		});
	}
}
//这里写抽象类，接口都行
abstract class Person {
	public abstract void show();
}

class PersonDemo {
	
	//public void method(Person p) {		//Person p = new Student();		//父类引用指向子类对象
	/*
	Person p = new Person(){
		public void show() {
			System.out.println("show");
		}
	};
	*/
	public void method(Person p) {
		p.show();
	}
}

class Student extends Person {
	public void show() {
		System.out.println("show");
	}
}
```

###10.16_面向对象(匿名内部类的面试题)
* A:面试题

```
按照要求，补齐代码
interface Inter { void show(); }
class Outer { //补齐代码 }
class OuterDemo {
	public static void main(String[] args) {
		  Outer.method().show();
	  }
}
要求在控制台输出”HelloWorld”
```

```
class Test2_NoNameInnerClass {
	public static void main(String[] args) {
		//Outer.method().show();			//链式编程,每次调用方法后还能继续调用方法,证明调用方法返回的是对象
		Inter i = Outer.method();
		i.show();
	}
}
//按照要求，补齐代码
interface Inter { 
	void show(); 
}

class Outer { 
	//补齐代码 
	public static Inter method() {
		return new Inter() {
			public void show() {
				System.out.println("show");
			}
		};
	}
}

```
