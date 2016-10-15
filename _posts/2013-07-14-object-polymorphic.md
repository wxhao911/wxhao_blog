---
layout:     post
title:      "多态(重点)"
subtitle:   "JavaSE第二阶段之面向对象"
date:       2013-07-14
author:     "Wxhao"
header-img: "img/post-bg/black-sky.jpg"
catalog:    true
tags:
    - 基础知识 
    - java
    - JAVASE
---


### 多态的概述及其代码体现
* 多态(polymorphic)概述
    * 事物存在的多种形态
* 多态的前提
    1. 要的是有继承关系
    2. 要有方法重写
    3. 要有父类引用指向子类对象
* 代码体现多态    

```
public class Demo_polymorphic {

	public static void main(String[] args) {
		Cat c=new Cat();
		c.eat();
		
		Animal a=new Cat();//父类引用指向子类对象
		a.eat();//猫吃鱼
		
	}

}
class Animal{
    public void eat(){
    	System.out.println("动物吃饭");
    }
}

class Cat extends Animal{
	public void eat(){
		System.out.println("猫吃鱼");
	}
}
```


### 多态中的成员访问特点
* a:成员变量(左边子类,右边父类)
    * 编译看左边,运行看左边
* b:成员方法
    * 编译看左边,运行看右边,动态绑定
* c:静态方法
    * 编译看左边,运行看左边
    * 静态和类相关,算不上重写,所以,访问还是左边的
* 总结:只有非静态的成员方法,编译看左边,运行看右边

* 代码演示

```

public class Demo_polymorphic2 {

	public static void main(String[] args) {
		Father f=new Son();
		System.out.println(f.num);
		
		Son s=new Son();
		System.out.println(s.num);
		
		f.print();//Son
		
		//Father.method()
		f.method();//method static Father
		
		Son.method();//method static Son
	}

}

class Father{
	int num = 10;
	 public void print(){
    	System.out.println("Father");
    }
    
    public static void method(){
    	System.out.println("method static Father");
    }
}

class Son extends Father{
	int num = 20;
	 public void print(){
    	System.out.println("Son");
    }
     public static void method(){
    	System.out.println("method static Son");
    }
}
```

![多态中的成员访问特点](http://wxhao2.duapp.com/blog/post-in/20130714/dtzdcyfwtd.png)

![多态中的成员访问特点成员方法](http://wxhao2.duapp.com/blog/post-in/20130714/cyff.png)


### 面向对象(超人的故事)
* 代码演示

```

public class Demo3_SuperMan {

	public static void main(String[] args) {
		Person p=new SuperMan();//父类引用指向子类对象,超人伪装成人
		System.out.println(p.name);//谈生意不能说自己是超人,而说自己的人名
		p.谈生意();//动作是超人做的,所以谈的是几个亿的大单子
		
		//假如有人要跳楼,超人要去救人
		//p.fly();//现在是普通人不能去救人
		
	}

}

class Person {
	String name = "John";
	public void 谈生意(){
		System.out.println("谈生意");
	}
}

class SuperMan extends Person{
	
	String name = "SuperMan";
	public void 谈生意(){
		System.out.println("谈几个亿的大生意");
	}
	
	public void fly(){
		System.out.println("飞出去救人");
	}
}

```

### 多态中向上转型和向下转型

* 父类引用指向子类对象就是向上转型,就像超人伪装成了人

```
Person p=new SuperMan();//向上转型
```

* 向下转型(必须先有向上转型才有向下转型)

```
SuperMan sm = (SuperMan)p;//向下转型
sm.fly();//现在就可以飞出去救人
```

![向上转型和向下转型](http://wxhao2.duapp.com/blog/post-in/20130714/xszxhxxzx.png)
    
### 多态的好处和弊端
* 多态的好处
    1. 提高了代码的维护性(继承保证)
    2. 提高了代码的扩展性(由多态保证)
* 代码演示
    1. 多态的好处
    2. 可以当做形式参数,可以接受任意子对象
* 多态的弊端
    * 不能使用子类特有属性和行为
* 关键字 instanceof 判断前边的引用是否是后边的数据类型

 * 代码演示

```

public class Demo4_Animal {

	public static void main(String[] args) {
		method(new Cat());
		//method(new Dog());
		method(new Dog());
		
//		Animal a=new Cat();//开发的时候很少在创建对象的时候用父类引用指向子类对象,直接创建子类对象更方便,可以使用子类中的特有属性和行为
	}
	
	//Cat c= new Dog();狗是一只猫,这是错误的
	/*public static void method(Cat c){
		c.eat();
	}
	public static void method(Dog d){
		d.eat();
	}*/
	
	public static void method(Animal a){//当作参数的时候用多态最好,因为拓展性强
		
//		a.catchMouse();
		
		//关键字 instanceof 判断前边的引用是否是后边的数据类型
		if(a instanceof Cat){
			Cat c=(Cat)a;
			c.eat();
			c.catchMouse();
		}else if(a instanceof Cat){
			Dog d=(Dog)a;
			d.eat();
			d.lookHome();;
		}else{
			a.eat();
		}
	}

}

class Animal{
    public void eat(){
    	System.out.println("动物吃饭");
    }
}

class Cat extends Animal{
	public void eat(){
		System.out.println("猫吃鱼");
	}
	
	public void catchMouse(){
		System.out.println("抓老鼠");
	}
}

class Dog extends Animal{
	public void eat(){
		System.out.println("狗吃肉");
	}
	
	public void lookHome(){
		System.out.println("看家");
	}
}


```