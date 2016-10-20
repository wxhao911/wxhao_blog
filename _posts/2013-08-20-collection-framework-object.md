---
layout:     post
title:      "对象数组"
subtitle:   "JavaSE之集合框架"
date:       2013-08-20
author:     "Wxhao"
header-img: "img/post-bg/black-sky.jpg"
catalog:    true
tags:
    - 基础知识 
    - java
    - JAVASE
---


### 对象数组的概述和使用
* A:案例演示
	* 需求：我有5个学生，请把这个5个学生的信息存储到数组中，并遍历数组，获取得到每一个学生信息。
* 
		Student[] arr = new Student[5];					//存储学生对象
		arr[0] = new Student("张三", 23);
		arr[1] = new Student("李四", 24);
		arr[2] = new Student("王五", 25);
		arr[3] = new Student("赵六", 26);
		arr[4] = new Student("马哥", 20);
		
		for (int i = 0; i < arr.length; i++) {
			System.out.println(arr[i]);
		}
		
* B:画图演示
	* 把学生数组的案例画图讲解
	* 数组和集合存储引用数据类型,存的都是地址值

```
package com.wxhao.bean;

public class Student {
	private String name;
	private int age;
	public Student() {
		super();
		
	}
	public Student(String name, int age) {
		super();
		this.name = name;
		this.age = age;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	@Override
	public String toString() {
		return "Student [name=" + name + ", age=" + age + "]";
	}
}
```

```
package com.wxhao.collection;

import com.wxhao.bean.Student;

public class Demo1_Array {

	public static void main(String[] args) {
		//int[] arr = new int[5];		//创建基本数据类型数组
		Student[] arr = new Student[5];	//创建引用数据类型数组
		arr[0] = new Student("张三", 23);	//创建一个学生对象,存储在数组的第一个位置
		arr[1] = new Student("李四", 24);	//创建一个学生对象,存储在数组的第二个位置
		arr[2] = new Student("王五", 25);	//创建一个学生对象,存储在数组的第三个位置
		
		for(int i = 0; i < arr.length; i++) {
			System.out.println(arr[i]);
		}
	}
}
```

![数组存储引用数据类型](http://wxhao2.duapp.com/blog/post-in/20130820/szccyyle.png)

### 集合的由来及集合继承体系图 
* A:集合的由来
	* 数组长度是固定,当添加的元素超过了数组的长度时需要对数组重新定义,太麻烦,java内部给我们提供了集合类,能存储任意对象,长度是可以改变的,随着元素的增加而增加,随着元素的减少而减少 
* B:数组和集合的区别
	* 区别1 : 
		* 数组既可以存储基本数据类型,又可以存储引用数据类型,基本数据类型存储的是值,引用数据类型存储的是地址值
		* 集合只能存储引用数据类型(对象)集合中也可以存储基本数据类型,但是在存储的时候会自动装箱变成对象
	* 区别2:
		* 数组长度是固定的,不能自动增长
		* 集合的长度的是可变的,可以根据元素的增加而增长
* C:数组和集合什么时候用
		* 1,如果元素个数是固定的推荐用数组
		* 2,如果元素个数不是固定的推荐用集合
* D:集合继承体系图

![数组存储引用数据类型](http://wxhao2.duapp.com/blog/post-in/20130820/szccyysjlx.png)

### Collection集合的基本功能测试 
* A:案例演示	
* 
		基本功能演示
		
		boolean add(E e)
		boolean remove(Object o)
		void clear()
		boolean contains(Object o)
		boolean isEmpty()
		int size()

* B:注意:
* collectionXxx.java使用了未经检查或不安全的操作.
* 注意:要了解详细信息,请使用 -Xlint:unchecked重新编译.
* java编译器认为该程序存在安全隐患
* 温馨提示:这不是编译失败,所以先不用理会,等学了泛型你就知道了

```
package com.wxhao.collection;

import java.util.ArrayList;
import java.util.Collection;

import com.wxhao.bean.Student;

@SuppressWarnings({ "rawtypes", "unchecked" })
public class Demo2_Collection {

	/**
		add方法如果是List集合一直都返回true,因为List集合中是可以存储重复元素的
		如果是Set集合当存储重复元素的时候,就会返回false
		
		ArrayList的父类的父类重写toString方法,所以在打印对象的引用的时候,输出的结果不是Object类中toString的结果
	 */
	public static void main(String[] args) {
		//demo1();
		Collection c = new ArrayList();		
		c.add("a");
		c.add("b");
		c.add("c");
		c.add("d");
		
		//c.remove("b");										//删除指定元素
		//c.clear();											//清空集合
		//System.out.println(c.contains("b"));					//判断是否包含
		//System.out.println(c.isEmpty());
		System.out.println(c.size()); 							//获取元素的个数
		System.out.println(c);
	}

	public static void demo1() {
		Collection c = new ArrayList();						//父类引用指向子类对象
		boolean b1 = c.add("abc");
		boolean b2 = c.add(true);							//自动装箱new Boolean(true);
		boolean b3 = c.add(100);
		boolean b4 = c.add(new Student("张三",23));			
		boolean b5 = c.add("abc");
		
		System.out.println(b1);
		System.out.println(b2);
		System.out.println(b3);
		System.out.println(b4);
		System.out.println(b5);
		
		System.out.println(c.toString());
	}
}
```
	  
### 集合的遍历之集合转数组遍历 
* A:集合的遍历
	* 其实就是依次获取集合中的每一个元素。
* B:案例演示
	* 把集合转成数组，可以实现集合的遍历
	* toArray()
	*
		
			Collection coll = new ArrayList();
			coll.add(new Student("张三",23));		//Object obj = new Student("张三",23);
			coll.add(new Student("李四",24));
			coll.add(new Student("王五",25));
			coll.add(new Student("赵六",26));
			
			Object[] arr = coll.toArray();				//将集合转换成数组
			for (int i = 0; i < arr.length; i++) {
				Student s = (Student)arr[i];			//强转成Student
				System.out.println(s.getName() + "," + s.getAge());
			}

```
package com.wxhao.collection;

import java.util.ArrayList;
import java.util.Collection;

import com.wxhao.bean.Student;

@SuppressWarnings({ "rawtypes", "unchecked" })
public class Demo3_Collection {

	/**
	 * * A:集合的遍历
			* 其实就是依次获取集合中的每一个元素。
		* B:案例演示
			* 把集合转成数组，可以实现集合的遍历
			* toArray()
	 */
	public static void main(String[] args) {
		//demo1();
		Collection c = new ArrayList();
		c.add(new Student("张三", 23));				//Object obj = new Student("张三",23);
		c.add(new Student("李四", 24));
		c.add(new Student("王五", 25));
		c.add(new Student("赵六", 26));
		
		Object[] arr = c.toArray();					//将集合转换成数组
		for (int i = 0; i < arr.length; i++) {
			//System.out.println(arr[i]);
			Student s = (Student)arr[i];			//向下转型
			System.out.println(s.getName() + "..." + s.getAge());
		}
	}

	public static void demo1() {
		Collection c = new ArrayList();
		c.add("a");
		c.add("b");
		c.add("c");
		c.add("d");
		
		Object[] arr = c.toArray();						//将集合转换成数组
		for(int i = 0; i < arr.length; i++) {
			System.out.println(arr[i]);
		}
	}
}
```

### Collection集合的带All功能测试 
* A:案例演示
* 带All的功能演示
	```	
		
		boolean addAll(Collection c)
		boolean removeAll(Collection c)
		boolean containsAll(Collection c)
		boolean retainAll(Collection c)
```

```
package com.wxhao.collection;

import java.util.ArrayList;
import java.util.Collection;

@SuppressWarnings({ "rawtypes", "unchecked" })
public class Demo4_CollectionAll {

	public static void main(String[] args) {
		//demo1();
		//demo2();
		//demo3();
		Collection c1 = new ArrayList();
		c1.add("a");
		c1.add("b");
		c1.add("c");
		c1.add("d");
		
		Collection c2 = new ArrayList();
		c2.add("a");
		c2.add("b");
		c2.add("c");
		c2.add("d");
		c2.add("e");
		c2.add("f");
		
		//取交集,如果调用的集合改变就返回true,如果调用的集合不变就返回false
		boolean b = c1.retainAll(c2);	//取交集
		System.out.println(b);
		System.out.println(c1);
	}

	public static void demo3() {
		Collection c1 = new ArrayList();
		c1.add("a");
		c1.add("b");
		c1.add("c");
		c1.add("d");
		
		Collection c2 = new ArrayList();
		c2.add("a");
		c2.add("b");
		c2.add("z");
		
		boolean b = c1.containsAll(c2);	//判断调用的集合是否包含传入的集合
		System.out.println(b);
	}

	public static void demo2() {
		Collection c1 = new ArrayList();
		c1.add("a");
		c1.add("b");
		c1.add("c");
		c1.add("d");
		
		Collection c2 = new ArrayList();
		c2.add("a");
		c2.add("b");
		c2.add("z");
		
		boolean b = c1.removeAll(c2);//删除的是交集
		System.out.println(b);
		System.out.println(c1);
	}

	public static void demo1() {
		Collection c1 = new ArrayList();
		c1.add("a");
		c1.add("b");
		c1.add("c");
		c1.add("d");
		
		Collection c2 = new ArrayList();//alt + shift + r改名
		c2.add("a");
		c2.add("b");
		c2.add("c");
		c2.add("d");
		
		//c1.addAll(c2);		//将c2中的每一个元素添加到c1中
		c1.add(c2);				//将c2看成一个对象添加到c1中
		System.out.println(c1);
	}
}
```


### 集合的遍历之迭代器遍历 
* A:迭代器概述
	* 集合是用来存储元素,存储的元素需要查看,那么就需要迭代(遍历) 
* B:案例演示
	* 迭代器的使用
		```
			Collection c = new ArrayList();
			c.add("a");
			c.add("b");
			c.add("c");
			c.add("d");
			
			Iterator it = c.iterator();						//获取迭代器的引用
			while(it.hasNext()) {							//集合中的迭代方法(遍历)
				System.out.println(it.next());
			}
        ```
        
```
package com.wxhao.collection;

import java.util.ArrayList;
import java.util.Collection;

@SuppressWarnings({ "rawtypes", "unchecked" })
public class Demo4_CollectionAll {

	public static void main(String[] args) {
		//demo1();
		//demo2();
		//demo3();
		Collection c1 = new ArrayList();
		c1.add("a");
		c1.add("b");
		c1.add("c");
		c1.add("d");
		
		Collection c2 = new ArrayList();
		c2.add("a");
		c2.add("b");
		c2.add("c");
		c2.add("d");
		c2.add("e");
		c2.add("f");
		
		//取交集,如果调用的集合改变就返回true,如果调用的集合不变就返回false
		boolean b = c1.retainAll(c2);	//取交集
		System.out.println(b);
		System.out.println(c1);
	}

	public static void demo3() {
		Collection c1 = new ArrayList();
		c1.add("a");
		c1.add("b");
		c1.add("c");
		c1.add("d");
		
		Collection c2 = new ArrayList();
		c2.add("a");
		c2.add("b");
		c2.add("z");
		
		boolean b = c1.containsAll(c2);	//判断调用的集合是否包含传入的集合
		System.out.println(b);
	}

	public static void demo2() {
		Collection c1 = new ArrayList();
		c1.add("a");
		c1.add("b");
		c1.add("c");
		c1.add("d");
		
		Collection c2 = new ArrayList();
		c2.add("a");
		c2.add("b");
		c2.add("z");
		
		boolean b = c1.removeAll(c2);//删除的是交集
		System.out.println(b);
		System.out.println(c1);
	}

	public static void demo1() {
		Collection c1 = new ArrayList();
		c1.add("a");
		c1.add("b");
		c1.add("c");
		c1.add("d");
		
		Collection c2 = new ArrayList();//alt + shift + r改名
		c2.add("a");
		c2.add("b");
		c2.add("c");
		c2.add("d");
		
		//c1.addAll(c2);		//将c2中的每一个元素添加到c1中
		c1.add(c2);				//将c2看成一个对象添加到c1中
		System.out.println(c1);
	}
}
```
	
### Collection存储自定义对象并遍历 
* A:案例演示
	* Collection存储自定义对象并用迭代器遍历
	* 
	```
			Collection c = new ArrayList();
			
			c.add(new Student("张三",23));
			c.add(new Student("李四",24));
			c.add(new Student("王五",25));
			c.add(new Student("赵六",26));
			c.add(new Student("赵六",26));
			
			for(Iterator it = c.iterator();it.hasNext();) {
				Student s = (Student)it.next();						//向下转型
				System.out.println(s.getName() + "," + s.getAge());	//获取对象中的姓名和年龄
			}
			System.out.println("------------------------------");
			Iterator it = c.iterator();								//获取迭代器
			while(it.hasNext()) {									//判断集合中是否有元素
				//System.out.println(((Student)(it.next())).getName() + "," + ((Student)(it.next())).getAge());
				Student s = (Student)it.next();						//向下转型
				System.out.println(s.getName() + "," + s.getAge());	//获取对象中的姓名和年龄
			}
	```
	
```
package com.wxhao.collection;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Iterator;

import com.wxhao.bean.Student;

public class Demo5_Iterator {

	/**
	 * 迭代
	 * * A:迭代器概述
	 * 集合是用来存储元素,存储的元素需要查看,那么就需要迭代(遍历) 
	 */
	public static void main(String[] args) {
		//demo1();
		Collection c = new ArrayList();
		c.add(new Student("张三", 23));	//Object obj = new Student("张三",23);
		c.add(new Student("李四", 24));
		c.add(new Student("王五", 25));
		c.add(new Student("赵六", 26));
		
		//获取迭代器
		Iterator it = c.iterator();
		while(it.hasNext()) {
			//System.out.println(it.next());
			Student s = (Student)it.next();	//向下转型
			System.out.println(s.getName() + "..." + s.getAge());
		}
	
	}

	public static void demo1() {
		Collection c = new ArrayList();
		c.add("a");
		c.add("b");
		c.add("c");
		c.add("d");
		
		//对集合中的元素迭代(遍历)
		Iterator it = c.iterator();	//获取迭代器
		/*boolean b1 = it.hasNext();//判断集合中是否有元素,有就返回true
		Object obj1 = it.next();
		System.out.println(b1);
		System.out.println(obj1);
		
		boolean b2 = it.hasNext();	//判断集合中是否有元素,有就返回true
		Object obj2 = it.next();
		System.out.println(b2);
		System.out.println(obj2);*/
		
		while(it.hasNext()) {
			System.out.println(it.next());
		}
	}
}
```

### 迭代器的原理及源码解析 
* A:迭代器原理
	* 迭代器原理:迭代器是对集合进行遍历,而每一个集合内部的存储结构都是不同的,所以每一个集合存和取都是不一样,那么就需要在每一个类中定义hasNext()和next()方法,这样做是可以的,但是会让整个集合体系过于臃肿,迭代器是将这样的方法向上抽取出接口,然后在每个类的内部,定义自己迭代方式,这样做的好处有二,第一规定了整个集合体系的遍历方式都是hasNext()和next()方法,第二,代码有底层内部实现,使用者不用管怎么实现的,会用即可 
* B:迭代器源码解析
	* 1,在eclipse中ctrl + shift + t找到ArrayList类
	* 2,ctrl+o查找iterator()方法
	* 3,查看返回值类型是new Itr(),说明Itr这个类实现Iterator接口
	* 4,查找Itr这个内部类,发现重写了Iterator中的所有抽象方法 

### List集合的特有功能概述和测试 
* A:List集合的特有功能概述
	* void add(int index,E element)
	* E remove(int index)
	* E get(int index)
	* E set(int index,E element)

```
package com.wxhao.list;

import java.util.ArrayList;
import java.util.List;

public class Demo1_List {

	/**
	 * 	* void add(int index,E element)
		* E remove(int index)
		* E get(int index)
		* E set(int index,E element)
	 */
	public static void main(String[] args) {
		//demo1();
		//demo2();
		//demo3();
		//demo4();
		List list = new ArrayList();
		list.add("a");
		list.add("b");
		list.add("c");
		list.add("d");
		
		list.set(1, "z");		//将指定位置的元素修改
		System.out.println(list);
	}

	public static void demo4() {
		List list = new ArrayList();
		list.add("a");
		list.add("b");
		list.add("c");
		list.add("d");
		
		//Object obj1 = list.get(2);
		//System.out.println(obj1);
		//通过索引遍历List集合
		for(int i = 0;i < list.size(); i++) {
			System.out.println(list.get(i));
		}
	}

	public static void demo3() {
		List list = new ArrayList();
		list.add(111);
		list.add(222);
		list.add(333);
		
		list.remove(111);		//删除的时候不会自动装箱,把111当作索引
		System.out.println(list);
	}

	public static void demo2() {
		List list = new ArrayList();
		list.add("a");
		list.add("b");
		list.add("c");
		list.add("d");
		
		Object obj = list.remove(1);//通过索引删除元素,将被删除的元素返回
		System.out.println(obj);
		System.out.println(list);
	}

	public static void demo1() {
		List list = new ArrayList();
		list.add("a");
		list.add("b");
		list.add("c");
		list.add("d");
		list.add(4, "f");		//index<=size并且index>=0都不会报异常
		//list.add(1,"e");
		//list.add(10, "z");	//java.lang.IndexOutOfBoundsException,当存储时使用不存在的索引时
		System.out.println(list);
	}
}
```

### List集合存储学生对象并遍历 
* A:案例演示
	* 通过size()和get()方法结合使用遍历。
        ```
			List list = new ArrayList();
			list.add(new Student("张三", 18));
			list.add(new Student("李四", 18));
			list.add(new Student("王五", 18));
			list.add(new Student("赵六", 18));
			
			for(int i = 0; i < list.size(); i++) {
				Student s = (Student)list.get(i);
				System.out.println(s.getName() + "," + s.getAge());
			}
```

```
package com.wxhao.list;

import java.util.ArrayList;
import java.util.List;

import com.wxhao.bean.Student;

public class Demo2_List {

	/**
	 * * A:案例演示
	 * 向List集合中存储学生对象
	 * 通过size()和get()方法结合使用遍历。
	 */
	public static void main(String[] args) {
		List list = new ArrayList();
		list.add(new Student("张三", 23));					//Object obj = new Student("张三",23);
		list.add(new Student("李四", 24));
		list.add(new Student("王五", 25));
		list.add(new Student("赵六", 26));
		
		for(int i = 0; i < list.size(); i++) {
			//System.out.println(list.get(i));	 			//通过索引获取每一个元素
			Student s = (Student)list.get(i);
			System.out.println(s.getName() + "..." + s.getAge());
		}
	}
}
```

### 并发修改异常产生的原因及解决方案
* A:案例演示
	* 需求：我有一个集合，请问，我想判断里面有没有"world"这个元素，如果有，我就添加一个"javaee"元素，请写代码实现。

```
List list = new ArrayList();
list.add("a");
list.add("b");
list.add("world");
list.add("d");
list.add("e");

/*Iterator it = list.iterator();
while(it.hasNext()) {
	String str = (String)it.next();
	if(str.equals("world")) {
		list.add("javaee");			//这里会抛出ConcurrentModificationException并发修改异常
	}
}*/
```			
			
* B:ConcurrentModificationException出现
	* 迭代器遍历，集合修改集合
* C:解决方案
	* a:迭代器迭代元素，迭代器修改元素(ListIterator的特有功能add)
	* b:集合遍历元素，集合修改元素
```
			ListIterator lit = list.listIterator();		//如果想在遍历的过程中添加元素,可以用ListIterator中的add方法
			while(lit.hasNext()) {
				String str = (String)lit.next();
				if(str.equals("world")) {
					lit.add("javaee");	
					//list.add("javaee");
				}
			}
```

```
package com.wxhao.list;

import java.util.ArrayList;
import java.util.List;
import java.util.ListIterator;

public class Demo3_List {

	/**
	 ** A:案例演示
	 * 需求：我有一个集合，请问，我想判断里面有没有"world"这个元素，如果有，我就添加一个"javaee"元素，请写代码实现。
	 */
	public static void main(String[] args) {
		List list = new ArrayList();
		list.add("a");									//Object obj = new String();
		list.add("b");
		list.add("world");
		list.add("c");
		list.add("d");
		list.add("e");
		
		/*Iterator it = list.iterator();					//获取迭代器
		while(it.hasNext()) {							//判断集合中是否有元素
			String str = (String)it.next();				//向下转型
			if("world".equals(str)) {
				list.add("javaee");						//遍历的同时在增加元素,并发修改ConcurrentModificationException
			}
		}*/
		
		ListIterator lit = list.listIterator();			//获取迭代器(List集合特有的)
		while(lit.hasNext()) {
			String str = (String)lit.next();			//向下转型
			if("world".equals(str)) {
				//list.add("javaee");						//遍历的同时在增加元素,并发修改ConcurrentModificationException
				lit.add("javaee");
			}
		}
		
		System.out.println(list);
	}
}
```

### ListIterator 
* boolean hasNext()是否有下一个
* boolean hasPrevious()是否有前一个
* Object next()返回下一个元素
* Object previous();返回上一个元素

```
package com.wxhao.list;

import java.util.ArrayList;
import java.util.List;
import java.util.ListIterator;

public class Demo4_ListIterator {

	public static void main(String[] args) {
		List list = new ArrayList();
		list.add("a");									//Object obj = new String();
		list.add("b");
		list.add("world");
		list.add("c");
		list.add("d");
		list.add("e");
		
		ListIterator lit = list.listIterator();			//获取迭代器
		while(lit.hasNext()) {
			System.out.println(lit.next()); 			//获取元素并将指针向后移动
		}
		
		System.out.println("-----------------");
		
		while(lit.hasPrevious()) {
			System.out.println(lit.previous()); 		//获取元素并将指针向前移动
		}
	}
}
```

### Vector的特有功能
* A:Vector类概述
* B:Vector类特有功能
	* public void addElement(E obj)
	* public E elementAt(int index)
	* public Enumeration elements()
* C:案例演示	
	* Vector的迭代
```
Vector v = new Vector();//创建集合对象,List的子类
v.addElement("a");
v.addElement("b");
v.addElement("c");
v.addElement("d");

//Vector迭代
Enumeration en = v.elements();//获取枚举
while(en.hasMoreElements()) {//判断集合中是否有元素
	System.out.println(en.nextElement());//获取集合中的元素
}
```

### 数据结构之数组和链表 
* A:数组
	* 查询快修改也快
	* 增删慢
* B:链表
	* 查询慢,修改也慢
	* 增删快


### List的三个子类的特点 
* A:List的三个子类的特点
* 
		ArrayList:
			底层数据结构是数组，查询快，增删慢。
			线程不安全，效率高。
		Vector:
			底层数据结构是数组，查询快，增删慢。
			线程安全，效率低。
		Vector相对ArrayList查询慢(线程安全的)
		Vector相对LinkedList增删慢(数组结构)
		LinkedList:
			底层数据结构是链表，查询慢，增删快。
			线程不安全，效率高。

		Vector和ArrayList的区别
			Vector是线程安全的,效率低
			ArrayList是线程不安全的,效率高
		共同点:都是数组实现的
		ArrayList和LinkedList的区别
			ArrayList底层是数组结果,查询和修改快
			LinkedList底层是链表结构的,增和删比较快,查询和修改比较慢
		共同点:都是线程不安全的
* B:List有三个儿子，我们到底使用谁呢?
		查询多用ArrayList
		增删多用LinkedList
		如果都多ArrayList
