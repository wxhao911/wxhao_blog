---
layout:     post
title:      "Set集合"
subtitle:   "JavaSE之集合框架"
date:       2013-08-30
author:     "Wxhao"
header-img: "img/post-bg/black-sky.jpg"
catalog:    true
tags:
    - 基础知识 
    - java
    - JAVASE
---


### HashSet存储字符串并遍历
* A:Set集合概述及特点
	* 通过API查看即可
* B:案例演示
	* HashSet存储字符串并遍历
	* 

```
HashSet<String> hs = new HashSet<>();//创建HashSet对象
boolean b1 = hs.add("a");
boolean b2 = hs.add("a");		//当向set集合中存储重复元素的时候返回为false
hs.add("b");
hs.add("c");
hs.add("d");
System.out.println(hs);			//HashSet的继承体系中有重写toString方法
System.out.println(b1);
System.out.println(b2);

for (String string : hs) {		//只要能用迭代器迭代的,就可以使用增强for循环遍历
	System.out.println(string);
}
```

**Set集合,无索引,不可以重复,无序(存取不一致)**

### HashSet存储自定义对象保证元素唯一性
* A:案例演示
	* 存储自定义对象，并保证元素唯一性。

```
HashSet<Person> hs = new HashSet<>();
hs.add(new Person("张三", 23));
hs.add(new Person("张三", 23));
hs.add(new Person("李四", 23));
hs.add(new Person("李四", 23));
hs.add(new Person("王五", 23));
hs.add(new Person("赵六", 23));
```

```
package com.wxhao.bean;

public class Person  {
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
	@Override
	public boolean equals(Object obj) {
		System.out.println("执行了吗");
		Person p = (Person)obj;
		return this.name.equals(p.name) && this.age == p.age;
	}
	@Override
	public int hashCode() {
		return 10;
	}
```

* 重写hashCode()和equals()方法
* 先调用hashCode(),如果一样,就会调用
equals()进行比较 

### HashSet存储自定义对象保证元素唯一性图解及代码优化
* A:画图演示
	* 画图说明比较过程
* B:代码优化
	* 为了减少比较，优化hashCode()代码写法。
	* 最终版就是自动生成即可。

### HashSet如何保证元素唯一性的原理 
* 1.HashSet原理
	* 我们使用Set集合都是需要去掉重复元素的, 如果在存储的时候逐个equals()比较, 效率较低,哈希算法提高了去重复的效率, 降低了使用equals()方法的次数
	* 当HashSet调用add()方法存储对象的时候, 先调用对象的hashCode()方法得到一个哈希值, 然后在集合中查找是否有哈希值相同的对象
		* 如果没有哈希值相同的对象就直接存入集合
		* 如果有哈希值相同的对象, 就和哈希值相同的对象逐个进行equals()比较,比较结果为false就存入, true则不存
* 2.将自定义类的对象存入HashSet去重复
	* 类中必须重写hashCode()和equals()方法
	* hashCode(): 属性相同的对象返回值必须相同, 属性不同的返回值尽量不同(提高效率)
	* equals(): 属性相同返回true, 属性不同返回false,返回false的时候存储

```
/*
 * 为什么是31?
 * 1. 31是一个质数,质数是能被1和自己本身整除的数
 * 2. 31这个数既不大也不小
 * 3. 31这个数好算,2的五次方-1,2向左移动5位
 */
@Override
public int hashCode() {
    final int prime = 31;
    int result = 1;
    result = prime * result + age;
    result = prime * result + ((name == null) ? 0 : name.hashCode());
    return result;
}
@Override
public boolean equals(Object obj) {
    if (this == obj)						//调用的对象和传入的对象是同一个对象
    	return true;						//直接返回true
    if (obj == null)						//传入的对象为null
    	return false;						//返回false
    if (getClass() != obj.getClass())		//判断两个对象对应的字节码文件是否是同一个字节码
    	return false;						//如果不是直接返回false
    Person other = (Person) obj;			//向下转型
    if (age != other.age)					//调用对象的年龄不等于传入对象的年龄
    	return false;						//返回false
    if (name == null) {						//调用对象的姓名为null
    	if (other.name != null)				//传入对象的姓名不为null
    		return false;					//返回false
    } else if (!name.equals(other.name))	//调用对象的姓名不等于传入对象的姓名
    	return false;						//返回false
    return true;							//返回true
}
```

### LinkedHashSet的概述和使用 
* A:LinkedHashSet的特点
* B:案例演示
	* LinkedHashSet的特点
		* 可以保证怎么存就怎么取 

```
package com.wxhao.set;

import java.util.LinkedHashSet;

public class Demo2_LinkedHashSet {

	/**
	 * @param args
	 * LinkedHashSet
	 * 底层是链表实现的,是set集合中唯一一个能保证怎么存就怎么取的集合对象
	 * 因为是HashSet的子类,所以也是保证元素唯一的,与HashSet的原理一样
	 */
	public static void main(String[] args) {
		LinkedHashSet<String> lhs = new LinkedHashSet<>();
		lhs.add("a");
		lhs.add("a");
		lhs.add("a");
		lhs.add("a");
		lhs.add("b");
		lhs.add("c");
		lhs.add("d");
		
		System.out.println(lhs);
	}
}
```

### 产生10个1-20之间的随机数要求随机数不能重复 
* A:案例演示
	* 需求：编写一个程序，获取10个1至20的随机数，要求随机数不能重复。并把最终的随机数输出到控制台。
	
```		
/**
 * 分析:
 * 1,有Random类创建随机数对象
 * 2,需要存储10个随机数,而且不能重复,所以我们用HashSet集合
 * 3,如果HashSet的size是小于10就可以不断的存储,如果大于等于10就停止存储
 * 4,通过Random类中的nextInt(n)方法获取1到20之间的随机数,并将这些随机数存储在HashSet集合中
 * 5,遍历HashSet
 */
public static void main(String[] args) {
	//1,有Random类创建随机数对象
	Random r = new Random();
	//2,需要存储10个随机数,而且不能重复,所以我们用HashSet集合
	HashSet<Integer> hs = new HashSet<>();
	//3,如果HashSet的size是小于10就可以不断的存储,如果大于等于10就停止存储
	while(hs.size() < 10) {
		//4,通过Random类中的nextInt(n)方法获取1到20之间的随机数,并将这些随机数存储在HashSet集合中
		hs.add(r.nextInt(20) + 1);
	}
	// 5,遍历HashSet
	for (Integer integer : hs) {
		System.out.println(integer);
	}
}
```

### 17.07_集合框架(练习)
* 使用Scanner从键盘读取一行输入,去掉其中重复字符, 打印出不同的那些字符
	* aaaabbbcccddd

```
/**
 * 分析:
 * 1,创建Scanner对象
 * 2,创建HashSet对象,将字符存储,去掉重复
 * 3,将字符串转换为字符数组,获取每一个字符存储在HashSet集合中,自动去除重复
 * 4,遍历HashSet,打印每一个字符
 */
public static void main(String[] args) {
	//1,创建Scanner对象
	Scanner sc = new Scanner(System.in);
	System.out.println("请输入一行字符串:");
	//2,创建HashSet对象,将字符存储,去掉重复
	HashSet<Character> hs = new HashSet<>();
	//3,将字符串转换为字符数组,获取每一个字符存储在HashSet集合中,自动去除重复
	String line = sc.nextLine();
	char[] arr = line.toCharArray();
	
	for (char c : arr) {							//遍历字符数组
		hs.add(c);
	}
	
	//4,遍历HashSet,打印每一个字符
	
	for(Character ch : hs) {
		System.out.print(ch);
	}
}			
```		
			
### 17.08_集合框架(练习)
* 将集合中的重复元素去掉
 
```
/**
 *  分析:
 *  1,创建List集合存储若干个重复元素
 *  2,单独定义方法去除重复
 *  3,打印一下List集合
 */
public static void main(String[] args) {
	//1,创建List集合存储若干个重复元素
	ArrayList<String> list = new ArrayList<>();
	list.add("a");
	list.add("a");
	list.add("a");
	list.add("b");
	list.add("b");
	list.add("b");
	list.add("c");
	list.add("c");
	list.add("c");
	list.add("c");
	
	//2,单独定义方法去除重复
	getSingle(list);
	
	//3,打印一下List集合
	System.out.println(list);
}
/*
 * 分析
 * 去除List集合中的重复元素
 * 1,创建一个LinkedHashSet集合
 * 2,将List集合中所有的元素添加到LinkedHashSet集合
 * 3,将list集合中的元素清除
 * 4,将LinkedHashSet集合中的元素添加回List集合中
 */
public static void getSingle(List<String> list) {
	//1,创建一个LinkedHashSet集合
	LinkedHashSet<String> lhs = new LinkedHashSet<>();
	//2,将List集合中所有的元素添加到LinkedHashSet集合
	lhs.addAll(list);
	//3,将list集合中的元素清除
	list.clear();
	//4,将LinkedHashSet集合中的元素添加回List集合中
	list.addAll(lhs);
}
```

### TreeSet存储Integer类型的元素并遍历 
* A:案例演示
	* TreeSet存储Integer类型的元素并遍历

 **TreeSet集合是用来对象元素进行排序的,同样他也可以保证元素的唯一**
 
```
TreeSet<Integer> ts = new TreeSet<>();
ts.add(3);
ts.add(1);
ts.add(1);
ts.add(2);
ts.add(2);
ts.add(3);
ts.add(3);

System.out.println(ts);
```

### TreeSet存储自定义对象 
* A:案例演示
	* 存储Person对象

```
TreeSet<Person> ts = new TreeSet<>();
ts.add(new Person("张三", 23));
ts.add(new Person("李四", 13));
ts.add(new Person("周七", 13));
ts.add(new Person("王五", 43));
ts.add(new Person("赵六", 33));

System.out.println(ts);
```
需要比较元素大小所以Person类要实现comparable接口

```
public int compareTo(Person o) {
		return 0;
	}
```

* 当compareTo方法返回0的时候集合中只有一个元素
* 当compareTo方法返回正数的时候集合会怎么存就怎么取
* 当compareTo方法返回负数的时候集合会倒序存储

### TreeSet保证元素唯一和自然排序的原理和图解 
* A:画图演示
	* TreeSet保证元素唯一和自然排序的原理和图解

![TreeSet自然排序]({{ site.imgwall_url }}/post-in/20130830/treesetzrpx.png)

```
@Override
//按照年龄排序
public int compareTo(Person o) {
	int num = this.age - o.age;				//年龄是比较的主要条件
	return num == 0 ? this.name.compareTo(o.name) : num;//姓名是比较的次要条件
}
```

### TreeSet存储自定义对象并遍历练习1
* A:案例演示
	* TreeSet存储自定义对象并遍历练习1(按照姓名排序)

```
@Override
//按照姓名排序
public int compareTo(Person o) {
	int num = this.name.compareTo(o.name);		//姓名是主要条件
	return num == 0 ? this.age - o.age : num;	//年龄是次要条件
}
```

### TreeSet存储自定义对象并遍历练习2 
* A:案例演示
	* TreeSet存储自定义对象并遍历练习2(按照姓名的长度排序)

```
public int compareTo(Person o) {
	int length = this.name.length() - o.name.length();				//比较长度为主要条件
	int num = length == 0 ? this.name.compareTo(o.name) : length;	//比较内容为次要条件
	return num == 0 ? this.age - o.age : num;						//比较年龄为次要条件
}
```

### TreeSet保证元素唯一和比较器排序的原理及代码实现
* A:案例演示
	* TreeSet保证元素唯一和比较器排序的原理及代码实现

```
class CompareByLen /*extends Object*/ implements Comparator<String> {

	@Override
	public int compare(String s1, String s2) {		//按照字符串的长度比较
		int num = s1.length() - s2.length();		//长度为主要条件
		return num == 0 ? s1.compareTo(s2) : num;	//内容为次要条件
	}
	
}
```

```
TreeSet<String> ts = new TreeSet<>(new CompareByLen());		//Comparator c = new CompareByLen();
		ts.add("aaaaaaaa");
		ts.add("z");
		ts.add("wc");
		ts.add("nba");
		ts.add("cba");
		
		System.out.println(ts);
```

![TreeSet比较器排序]({{ site.imgwall_url }}/post-in/20130830/treesetbjqpaixu.png)

### TreeSet原理 
* 1.特点
	* TreeSet是用来排序的, 可以指定一个顺序, 对象存入之后会按照指定的顺序排列
* 2.使用方式
	* a.自然顺序(Comparable)
		* TreeSet类的add()方法中会把存入的对象提升为Comparable类型
		* 调用对象的compareTo()方法和集合中的对象比较
		* 根据compareTo()方法返回的结果进行存储
	* b.比较器顺序(Comparator)
		* 创建TreeSet的时候可以制定 一个Comparator
		* 如果传入了Comparator的子类对象, 那么TreeSet就会按照比较器中的顺序排序
		* add()方法内部会自动调用Comparator接口中compare()方法排序
		* 调用的对象是compare方法的第一个参数,集合中的对象是compare方法的第二个参数
	* c.两种方式的区别
		* TreeSet构造函数什么都不传, 默认按照类中Comparable的顺序(没有就报错ClassCastException)
		* TreeSet如果传入Comparator, 就优先按照Comparator

### 17.16_集合框架(练习)
* 在一个集合中存储了无序并且重复的字符串,定义一个方法,让其有序(字典顺序),而且还不能去除重复

```
/**
 * 分析:
 * 1,定义一个List集合,并存储重复的无序的字符串
 * 2,定义方法对其排序保留重复
 * 3,打印List集合
 */
public static void main(String[] args) {
	//1,定义一个List集合,并存储重复的无序的字符串
	ArrayList<String> list = new ArrayList<>();
	list.add("aaa");
	list.add("aaa");
	list.add("ccc");
	list.add("ddd");
	list.add("fffffffffff");
	list.add("wxhao");
	list.add("itcast");
	list.add("bbbb");
	list.add("aaa");
	list.add("aaa");
	
	//2,定义方法对其排序保留重复
	sort(list);
	
	//3,打印list
	System.out.println(list);
}

/*
 * 定义方法,排序并保留重复
 * 分析:
 * 1,创建TreeSet集合对象,因为String本身就具备比较功能,但是重复不会保留,所以我们用比较器
 * 2,将list集合中所有的元素添加到TrreSet集合中,对其排序,保留重复
 * 3,清空list集合
 * 4,将TreeSet集合中排好序的元素添加到list中
 */
public static void sort(List<String> list) {
	//1,创建TreeSet集合对象,因为String本身就具备比较功能,但是重复不会保留,所以我们用比较器
	TreeSet<String> ts = new TreeSet<>(new Comparator<String>() {

		@Override
		public int compare(String s1, String s2) {
			int num = s1.compareTo(s2);					//比较内容为主要条件
			return num == 0 ? 1 : num;					//保留重复
		}
	});
	//2,将list集合中所有的元素添加到TrreSet集合中,对其排序,保留重复
	ts.addAll(list);
	//3,清空list集合
	list.clear();
	//4,将TreeSet集合中排好序的元素添加到list中
	list.addAll(ts);
}
```

### 17.17_集合框架(练习)
* 从键盘接收一个字符串, 程序对其中所有字符进行排序,例如键盘输入: helloitcast程序打印:acehillostt

```
/**
 * 分析:
 * 1,键盘录入字符串,Scanner
 * 2,将字符串转换为字符数组
 * 3,定义TreeSet集合,传入比较器对字符排序并保留重复
 * 4,遍历字符数组,将每一个字符存储在TreeSet集合中
 * 5,遍历TreeSet集合,打印每一个字符
 */
public static void main(String[] args) {
	//1,键盘录入字符串,Scanner
	Scanner sc = new Scanner(System.in);
	System.out.println("请输入一个字符串");
	String line = sc.nextLine();
	//2,将字符串转换为字符数组
	char[] arr = line.toCharArray();
	//3,定义TreeSet集合,传入比较器对字符排序并保留重复
	TreeSet<Character> ts = new TreeSet<>(new Comparator<Character>() {

		@Override
		public int compare(Character c1, Character c2) {
			//int num = c1 - c2;				//自动拆箱
			int num = c1.compareTo(c2);
			return num == 0 ? 1 : num;
		}
	});
	
	//4,遍历字符数组,将每一个字符存储在TreeSet集合中
	for(char c : arr) {
		ts.add(c);							//自动装箱
	}
	
	//5,遍历TreeSet集合,打印每一个字符
	for(Character c : ts) {
		System.out.print(c);
	}
}		
```

### 17.18_集合框架(练习)
* 程序启动后, 可以从键盘输入接收多个整数, 直到输入quit时结束输入. 把所有输入的整数倒序排列打印.

```
/**
 * 1,创建Scanner对象,键盘录入
 * 2,创建TreeSet集合对象,TreeSet集合中传入比较器
 * 3,无限循环不断接收整数,遇到quit退出,因为退出是quit,所以键盘录入的时候应该都以字符串的形式录入
 * 4,判断是quit就退出,不是将其转换为Integer,并添加到集合中
 * 5,遍历TreeSet集合并打印每一个元素
 */
public static void main(String[] args) {
	//1,创建Scanner对象,键盘录入
	Scanner sc = new Scanner(System.in);
	//2,创建TreeSet集合对象,TreeSet集合中传入比较器
	TreeSet<Integer> ts = new TreeSet<>(new Comparator<Integer>() {

		@Override
		public int compare(Integer i1, Integer i2) {
			//int num = i2 - i1;					//自动拆箱
			int num = i2.compareTo(i1);
			return num == 0 ? 1 : num;
		}
	});
	//3,无限循环不断接收整数,遇到quit退出,因为退出是quit,所以键盘录入的时候应该都以字符串的形式录入
	while(true) {
		String line = sc.nextLine();				//将键盘录入的字符串存储在line中
		if("quit".equals(line)) {
			break;
		}
		//4,判断是quit就退出,不是将其转换为Integer,并添加到集合中
		Integer i = Integer.parseInt(line);
		ts.add(i);
	}
	
	// 5,遍历TreeSet集合并打印每一个元素
	for (Integer integer : ts) {
		System.out.println(integer);
	}
}
```

###  键盘录入学生信息按照总分排序后输出在控制台 
* A:案例演示
	* 需求：键盘录入5个学生信息(姓名,语文成绩,数学成绩,英语成绩),按照总分从高到低输出到控制台。

```
/**
 * 分析:
 * 1,定义一个学生类
 * 		成员变量:姓名,语文成绩,数学成绩,英语成绩,总成绩
 * 		成员方法:空参,有参构造,有参构造的参数分别是姓名,语文成绩,数学成绩,英语成绩
 * 			  toString方法,在遍历集合中的Student对象打印对象引用的时候会显示属性值
 * 2,键盘录入需要Scanner,创建键盘录入对象
 * 3,创建TreeSet集合对象,在TreeSet的构造函数中传入比较器,按照总分比较
 * 4,录入五个学生,所以以集合中的学生个数为判断条件,如果size是小于5就进行存储
 * 5,将录入的字符串切割,用逗号切割,会返回一个字符串数组,将字符串数组中从二个元素转换成int数,
 * 6,将转换后的结果封装成Student对象,将Student添加到TreeSet集合中
 * 7,遍历TreeSet集合打印每一个Student对象
 */
public static void main(String[] args) {
	//2,键盘录入需要Scanner,创建键盘录入对象
	Scanner sc = new Scanner(System.in);
	System.out.println("请输入学生成绩格式是:姓名,语文成绩,数学成绩,英语成绩");
	//3,创建TreeSet集合对象,在TreeSet的构造函数中传入比较器,按照总分比较
	TreeSet<Student> ts = new TreeSet<>(new Comparator<Student>() {

		@Override
		public int compare(Student s1, Student s2) {
			int num = s2.getSum() - s1.getSum();
			return num == 0 ? 1 : num;
		}
	});
	//4,录入五个学生,所以以集合中的学生个数为判断条件,如果size是小于5就进行存储
	while(ts.size() < 5) {
		//5,将录入的字符串切割,用逗号切割,会返回一个字符串数组,将字符串数组中从二个元素转换成int数,
		String line = sc.nextLine();
		String[] arr = line.split(",");
		int chinese = Integer.parseInt(arr[1]);
		int math = Integer.parseInt(arr[2]);
		int english = Integer.parseInt(arr[3]);
		//6,将转换后的结果封装成Student对象,将Student添加到TreeSet集合中
		ts.add(new Student(arr[0], chinese, math, english));
	}
	
	//7,遍历TreeSet集合打印每一个Student对象
	System.out.println("排序后的学生信息:");
	for (Student s : ts) {
		System.out.println(s);
	}
}
```

```
package com.wxhao.bean;

public class Student {
	private String name;
	private int chinese;
	private int math;
	private int english;
	private int sum;
	
	public Student() {
		super();
		
	}
	public Student(String name, int chinese, int math, int english) {
		super();
		this.name = name;
		this.chinese = chinese;
		this.math = math;
		this.english = english;
		this.sum = this.chinese + this.math + this.english;
	}
	public int getSum() {
		return sum;
	}
	
	public String toString() {
		return name + "," + chinese + "," + math + "," + english + "," + sum;
	}
}
```

### 总结
* 1.List
	* a.普通for循环, 使用get()逐个获取
	* b.调用iterator()方法得到Iterator, 使用hasNext()和next()方法
	* c.增强for循环, 只要可以使用Iterator的类都可以用
	* d.Vector集合可以使用Enumeration的hasMoreElements()和nextElement()方法
* 2.Set
	* a.调用iterator()方法得到Iterator, 使用hasNext()和next()方法
	* b.增强for循环, 只要可以使用Iterator的类都可以用
* 3.普通for循环,迭代器,增强for循环是否可以在遍历的过程中删除 