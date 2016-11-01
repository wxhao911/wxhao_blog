---
layout:     post
title:      "Collection集合"
subtitle:   "JavaSE之集合框架"
date:       2013-08-25
author:     "Wxhao"
header-img: "img/post-bg/black-sky.jpg"
catalog:    true
tags:
    - 基础知识 
    - java
    - JAVASE
---


### 去除ArrayList中重复字符串元素方式
* A:案例演示
	* 需求：ArrayList去除集合中字符串的重复值(字符串的内容相同)
	* 思路：创建新集合方式
```
public static void main(String[] args) {
	ArrayList list = new ArrayList();
	list.add("a");
	list.add("a");
	list.add("b");
	list.add("b");
	list.add("b");
	list.add("c");
	list.add("c");
	list.add("c");
	list.add("c");
	
	System.out.println(list);
	ArrayList newList = getSingle(list);
	System.out.println(newList);
}

/*
 * 去除重复
 * 1,返回ArrayList
 * 2,参数列表ArrayList
 */
public static ArrayList getSingle(ArrayList list) {
	ArrayList newList = new ArrayList();			//创建一个新集合
	Iterator it = list.iterator();					//获取迭代器
	while(it.hasNext()) {							//判断老集合中是否有元素
		String temp = (String)it.next();			//将每一个元素临时记录住
		if(!newList.contains(temp)) {				//如果新集合中不包含该元素
			newList.add(temp);						//将该元素添加到新集合中
		}
	}
	return newList;									//将新集合返回
}
```			

### 去除ArrayList中重复自定义对象元素 
* A:案例演示
	* 需求：ArrayList去除集合中自定义对象元素的重复值(对象的成员变量值相同)
* B:注意事项
	* 重写equals()方法的

```
package com.wxhao.list;

import java.util.ArrayList;
import java.util.Iterator;

import com.wxhao.bean.Person;


@SuppressWarnings({ "rawtypes", "unchecked" })
public class Demo2_ArrayList {

	/**
	 * * 
		contains方法判断是否包含,底层依赖的是equals方法
		remove方法判断是否删除,底层依赖的是equals方法
	 */
	public static void main(String[] args) {
		ArrayList list = new ArrayList();				//创建集合对象
		list.add(new Person("张三", 23));
		list.add(new Person("张三", 23));
		list.add(new Person("李四", 24));
		list.add(new Person("李四", 24));
		list.add(new Person("李四", 24));
		list.add(new Person("李四", 24));
		
		//ArrayList newList = getSingle(list);			//调用方法去除重复
		//System.out.println(newList);
		list.remove(new Person("张三", 23));
		System.out.println(list);
	}

	/*
	 * 创建新集合将重复元素去掉
	 * 1,明确返回值类型,返回ArrayList
	 * 2,明确参数列表ArrayList
	 * 
	 * 分析:
	 * 1,创建新集合
	 * 2,根据传入的集合(老集合)获取迭代器
	 * 3,遍历老集合
	 * 4,通过新集合判断是否包含老集合中的元素,如果包含就不添加,如果不包含就添加
	 */
	public static ArrayList getSingle(ArrayList list) {
		ArrayList newList = new ArrayList<>();					//1,创建新集合
		Iterator it = list.iterator();							//2,根据传入的集合(老集合)获取迭代器
		
		while(it.hasNext()) {									//3,遍历老集合
			Object obj = it.next();								//记录住每一个元素
			if(!newList.contains(obj)) {						//如果新集合中不包含老集合中的元素
				newList.add(obj);								//将该元素添加
			}
		}
		
		return newList;
	}
}
```

```
package com.wxhao.bean;

public class Person {
	private String name;
	private int age;
	public Person() {
		super();
		
	}
	public Person(String name, int age) {
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
		return "Person [name=" + name + ", age=" + age + "]";
	}
	/*@Override
	public boolean equals(Object obj) {
		Person p = (Person)obj;
		return this.name.equals(p.name) && this.age == p.age;
	}*/
}
```

### LinkedList的特有功能 
* A:LinkedList类概述
* B:LinkedList类特有功能
	* public void addFirst(E e)及addLast(E e)
	* public E getFirst()及getLast()
	* public E removeFirst()及public E removeLast()
	* public E get(int index);

```
package com.wxhao.list;

import java.util.LinkedList;

public class Demo3_LinkedList {

	public static void main(String[] args) {
		LinkedList list = new LinkedList();
		list.addFirst("a");
		list.addFirst("b");
		list.addFirst("c");
		list.addFirst("d");
		list.addLast("e");
		
		//System.out.println(list.getFirst());//d
		//System.out.println(list.getLast());//e
		//System.out.println(list.removeFirst());//cbea
		//System.out.println(list.removeLast());//dcba
		
		System.out.println(list.get(1));//c
		System.out.println(list);//dcbae
	}
}
```
	
### 栈和队列数据结构 
* 栈
	* 先进后出 
* 队列
	* 先进先出

### 用LinkedList模拟栈数据结构的集合并测试 
* A:案例演示
	* 需求：请用LinkedList模拟栈数据结构的集合，并测试
	* 创建一个类将Linked中的方法封装
	* 
```
public class Stack {
private LinkedList list = new LinkedList();		//创建LinkedList对象

public void in(Object obj) {
	list.addLast(obj);							//封装addLast()方法
}

public Object out() {
	return list.removeLast();					//封装removeLast()方法
}

public boolean isEmpty() {
	return list.isEmpty();						//封装isEmpty()方法
}
}
```	

### 泛型概述和基本使用 
* A:泛型概述
* B:泛型好处
	* 提高安全性(将运行期的错误转换到编译期) 
	* 省去强转的麻烦
* C:泛型基本使用
	* <>中放的必须是引用数据类型 
* D:泛型使用注意事项
	* 前后的泛型必须一致,或者后面的泛型可以省略不写(1.7的新特性菱形泛型)  

```
package com.wxhao.generic;

import java.util.ArrayList;
import java.util.Iterator;

import com.wxhao.bean.Person;

public class Demo1_Generic {

	public static void main(String[] args) {
		//demo1();
		//int[] arr = new byte[5];							//数组要保证前后的数据类型一致
		//ArrayList<Object> list = new ArrayList<Person>();	//集合的泛型要保证前后的数据类型一致
		//ArrayList<Object> list = new ArrayList<>();		//1.7版本的新特性,菱形泛型
		ArrayList<Object> list = new ArrayList<>();			//泛型最好不要定义成Object,没有意义
		list.add("aaa");
		list.add(true);
	}

	public static void demo1() {
		ArrayList<Person> list = new ArrayList<Person>();
	//	list.add(110);
	//	list.add(true);
		list.add(new Person("张三", 23));
		list.add(new Person("李四", 24));
		
		Iterator<Person> it = list.iterator();
		while(it.hasNext()) {
			//System.out.println(it.next());
			
			//System.out.println(it.next().getName() + "..." + it.next().getAge());//next方法只能调用一次,如果调用多次会将指针向后移动多次
			Person p = it.next();			
			System.out.println(p.getName() + "..." + p.getAge());
		}
	}
}
```

### ArrayList存储字符串和自定义对象并遍历泛型版 
* A:案例演示
	* ArrayList存储字符串并遍历泛型版

```
package com.wxhao.generic;

import java.util.ArrayList;
import java.util.Iterator;

import com.wxhao.bean.Person;

public class Demo2_Generic {
	public static void main(String[] args) {
		// demo1();
		ArrayList<Person> list = new ArrayList<>();
		list.add(new Person("张三", 23));
		list.add(new Person("李四", 24));
		list.add(new Person("王五", 25));
		list.add(new Person("赵六", 26));

		Iterator<Person> it = list.iterator();
		while (it.hasNext()) {
			Person p = it.next(); // 将集合中的每一个元素用Person记录
			System.out.println(p.getName() + "..." + p.getAge());
		}
	}

	public static void demo1() {
		ArrayList<String> list = new ArrayList<>(); // 创建集合对象
		list.add("a");
		list.add("b");
		list.add("c");
		list.add("d");

		Iterator<String> it = list.iterator();
		while (it.hasNext()) {
			System.out.println(it.next());
		}
	}
}
```

### 泛型的由来 
* A:案例演示
	* 泛型的由来:通过Object转型问题引入
	* 早期的Object类型可以接收任意的对象类型，但是在实际的使用中，会有类型转换的问题。也就存在这隐患，所以Java提供了泛型来解决这个安全问题。

### 泛型类的概述及使用 
* A:泛型类概述<T>
	* 把泛型定义在类上
* B:定义格式
	* public class 类名<泛型类型1,…>
* C:注意事项	
	* 泛型类型必须是引用类型
* D:案例演示
	* 泛型类的使用

```
package com.wxhao.bean;

public class Tool<Q> {
	private Q q;

	public Q getObj() {
		return q;
	}

	public void setObj(Q q) {
		this.q = q;
	}
```

```
package com.wxhao.bean;

public class Student extends Person {

	public Student() {
	}

	public Student(String name, int age) {
		super(name, age);

	}

}

```

```
package com.wxhao.bean;

public class Worker extends Person {

	public Worker() {
	}

	public Worker(String name, int age) {
		super(name, age);

	}

}
```

### 泛型方法的概述和使用 
* A:泛型方法概述
	* 把泛型定义在方法上
* B:定义格式	
	* public <泛型类型> 返回类型 方法名(泛型类型 变量名)
* C:案例演示
	* 泛型方法的使用

```
package com.wxhao.bean;

public class Tool<Q> {
	private Q q;

	public Q getObj() {
		return q;
	}

	public void setObj(Q q) {
		this.q = q;
	}
	
	public<T> void show(T t) {		//方法泛型最好与类的泛型一致
		System.out.println(t);		//如果不一致,需要在方法上声明该泛型
	}
	
	public static<W> void print(W w) {	//静态方法必须声明自己的泛型
		System.out.println(w);
	}
}
```

```
package com.wxhao.generic;

import com.wxhao.bean.Student;
import com.wxhao.bean.Tool;

public class Demo3_Generic {

	public static void main(String[] args) {
		//demo1();
		Tool<String> t = new Tool<>();
		//t.show("abc");
		t.show(true);
	}

	public static void demo1() {
		Tool<Student> t = new Tool<>();		//创建工具类对象
		t.setObj(new Student("张三",23));
		
		//Worker w = (Worker) t.getObj();	//向下转型
		//System.out.println(w);
	}
}

```

### 泛型接口的概述和使用 
* A:泛型接口概述
	* 把泛型定义在接口上
* B:定义格式	
	* public interface 接口名<泛型类型>
* C:案例演示
	* 泛型接口的使用

```
package com.wxhao.generic;

public class Demo4_Generic {

}

interface Inter<T> {
	public void show(T t);
}

/*class Demo implements Inter<String> {	//推荐用这种
	@Override
	public void show(String t) {
		System.out.println(t);
	}
	
}*/

class Demo<T> implements Inter<T> {			//没有必要在实现接口的时候给自己类加泛型

	@Override
	public void show(T t) {
		System.out.println(t);
	}
}
```

### 泛型高级之通配符 
* A:泛型通配符<?>
	* 任意类型，如果没有明确，那么就是Object以及任意的Java类了
* B:? extends E
	* 向下限定，E及其子类
* C:? super E
	* 向上限定，E及其父类

```
package com.wxhao.generic;

import java.util.ArrayList;

import com.wxhao.bean.Person;
import com.wxhao.bean.Student;

public class Demo5_Generic {

	public static void main(String[] args) {
		//List<?> list = new ArrayList<Integer>();	//当右边的泛型是不确定时,左边可以指定为?
		ArrayList<Person> list1 = new ArrayList<>();
		list1.add(new Person("张三", 23));
		list1.add(new Person("李四", 24));
		list1.add(new Person("王五", 25));
		
		ArrayList<Student> list2 = new ArrayList<>();
		list2.add(new Student("赵六", 26));
		list2.add(new Student("周七", 27));
		//子类自动提升为父类 
		list1.addAll(list2);// java.util.ArrayList.addAll(Collection<? extends Person> c)
		System.out.println(list1);
	}
}
```

### 增强for的概述和使用 
* A:增强for概述
	* 简化数组和Collection集合的遍历
* B:格式：
* 
		for(元素数据类型 变量 : 数组或者Collection集合) {
			使用变量即可，该变量就是元素
		}
* C:案例演示
	* 数组，集合存储元素用增强for遍历
* D:好处
	* 简化遍历

```
int[] arr = {11,22,33,44,55};
		for (int i : arr) {
			System.out.println(i);
		}
		
		ArrayList<String> list = new ArrayList<>();
		list.add("a");
		list.add("b");
		list.add("c");
		list.add("d");
		
		for (String string : list) {
			System.out.println(string);
		}
```

**增强for循环底层依赖的是迭代器(Iterator)**

### ArrayList存储字符串和自定义对象并遍历增强for版 (JDK1.5)
* A:案例演示
	* ArrayList存储字符串并遍历增强for版
	* 
```
ArrayList<Person> list = new ArrayList<>();
list.add(new Person("张三", 23));
list.add(new Person("李四", 24));
list.add(new Person("王五", 25));
list.add(new Person("赵六", 26));

for (Person person : list) {
System.out.println(person);
}
```

### 三种迭代的能否删除 
* 普通for循环,可以删除,但是索引要--
* 迭代器,可以删除,但是必须使用迭代器自身的remove方法,否则会出现并发修改异常
* 增强for循环不能删除

```
ArrayList<String> list = new ArrayList<>();
list.add("a");
list.add("b");
list.add("b");
list.add("c");
list.add("d");

//1,普通for循环删除,索引要--
/*for(int i = 0; i < list.size(); i++) {
	if("b".equals(list.get(i))) {
		list.remove(i--);							//通过索引删除元素
	}
}*/

//2,迭代器删除
/*Iterator<String> it = list.iterator();
while(it.hasNext()) {
	if("b".equals(it.next())) {
		//list.remove("b");							//不能用集合的删除方法,因为迭代过程中如果集合修改会出现并发修改异常
		it.remove();
	}
}*/

/*for(Iterator<String> it2 = list.iterator(); it2.hasNext();) {
	if("b".equals(it2.next())) {
		//list.remove("b");							//不能用集合的删除方法,因为迭代过程中如果集合修改会出现并发修改异常
		it2.remove();
	}
}*/
//3,增强for循环,增强for循环不能删除,只能遍历
for (String string : list) {
	if("b".equals(string)) {
		list.remove("b");
	}
}
System.out.println(list);
```

### 静态导入的概述和使用 (JDK1.5)
* A:静态导入概述
* B:格式：
	* import static 包名….类名.方法名;
	* 可以直接导入到方法的级别
* C:注意事项
	* 方法必须是静态的,如果有多个同名的静态方法，容易不知道使用谁?这个时候要使用，必须加前缀。由此可见，意义不大，所以一般不用，但是要能看懂。

```
package com.wxhao.jdk5;

import static java.util.Arrays.sort;			//静态导入
import static java.util.Arrays.toString;			//静态导入

public class Demo2_StaticImport {

	public static void main(String[] args) {
		int[] arr = {55,22,33,44,11};
		sort(arr);							//排序
		//System.out.println(toString(arr));//toString冲突
	}
}
```

### 可变参数的概述和使用  (JDK1.5)
* A:可变参数概述
	* 定义方法的时候不知道该定义多少个参数
* B:格式
	* 修饰符 返回值类型 方法名(数据类型…  变量名){}
* C:注意事项：
	* 这里的变量其实是一个数组
	* 如果一个方法有可变参数，并且有多个参数，那么，可变参数肯定是最后一个

```
package com.wxhao.jdk5;

public class Demo3_ChangeableArgs {

	public static void main(String[] args) {
		int[] arr = {11,22,33,44,55};
		//print(arr);
		print(11,22,33,44,55,66);
		System.out.println("---------------");
		//print();
	}
	
	/*public static void print(int[] arr) {
		for (int i = 0; i < arr.length; i++) {
			System.out.println(arr[i]);
		}
	}*/
	
	
	public static void print(int i ,int ... arr) {			//可变参数其实是一个数组
		for (int i = 0; i < arr.length; i++) {
			System.out.println(arr[i]);
		}
	}
}
```

### Arrays工具类的asList()方法的使用 (JDK1.5)
* A:案例演示
	* Arrays工具类的asList()方法的使用
	* Collection中toArray(T[] a)泛型版的集合转数组

```
package com.wxhao.jdk5;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Demo4_AsList {

	/**
	 * 数组转换成集合
	 * 数组转换成集合虽然不能增加或减少元素,但是可以用集合的思想操作数组,也就是说可以使用其他集合中的方法
	 */
	public static void main(String[] args) {
		//demo1();
		//demo2();
		//集合转数组,加泛型的
		ArrayList<String> list = new ArrayList<>();
		list.add("a");
		list.add("b");
		list.add("c");
		list.add("d");
		
//		String[] arr = list.toArray(new String[1]);//当集合转换数组时,数组长度如果是小于等于集合的size时,转换后的数组长度等于集合的size
		String[] arr = list.toArray(new String[10]);//如果数组的长度大于了size,分配的数组长度就和你指定的长度一样
		for (String string : arr) {
			System.out.println(string);
		}
	}

	public static void demo2() {
		//int[] arr = {11,22,33,44,55};			
		//List<int[]> list = Arrays.asList(arr);	基本数据类型的数组转换成集合,会将整个数组当作一个对象转换
		//System.out.println(list);
		Integer[] arr = {11,22,33,44,55};			//将数组转换成集合,数组必须是引用数据类型
		List<Integer> list = Arrays.asList(arr);
		System.out.println(list);
	}

	public static void demo1() {
		String[] arr = {"a","b","c"};
		List<String> list = Arrays.asList(arr);		//将数组转换成集合
		//list.add("d");							//不能添加
		System.out.println(list);
	}
}
```

### 集合嵌套之ArrayList嵌套ArrayList 
* A:案例演示
	* 集合嵌套之ArrayList嵌套ArrayList

```
package com.wxhao.list;

import java.util.ArrayList;

import com.wxhao.bean.Person;

public class Demo5_ArrayListArrayList {

	/**
	 * 案例:
	 * 我们学科,学科又分为若个班级
	 * 整个学科一个大集合
	 * 若干个班级分为每一个小集合
	 */
	public static void main(String[] args) {
		ArrayList<ArrayList<Person>> list = new ArrayList<>();
		
		ArrayList<Person> first = new ArrayList<>();	//创建第一个班级
		first.add(new Person("杨幂", 30));
		first.add(new Person("李冰冰", 33));
		first.add(new Person("范冰冰", 20));
		
		ArrayList<Person> second = new ArrayList<>();
		second.add(new Person("黄晓明", 31));
		second.add(new Person("赵薇", 33));
		second.add(new Person("陈坤", 32));
		
		//将班级添加到学科集合中
		list.add(first);
		list.add(second);
		
		//遍历学科集合
		for(ArrayList<Person> a : list) {
			for(Person p : a) {
				System.out.println(p);
			}
		}
	}
}
```