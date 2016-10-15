---
layout:     post
title:      "package关键字及访问修饰符"
subtitle:   "JavaSE第二阶段之面向对象"
date:       2013-07-19
author:     "Wxhao"
header-img: "img/post-bg/black-sky.jpg"
catalog:    true
tags:
    - 基础知识 
    - java
    - JAVASE
---

### package关键字的概述及作用
* A:为什么要有包
	* 将字节码(.class)进行分类存放 
	* 包其实就是文件夹
* B:包的概述
* 
	举例：
		学生：增加，删除，修改，查询
		老师：增加，删除，修改，查询
		...
		
		方案1：按照功能分
			com.heima.add
				AddStudent
				AddTeacher
			com.heima.delete
				DeleteStudent
				DeleteTeacher
			com.heima.update
				UpdateStudent
				UpdateTeacher
			com.heima.find
				FindStudent
				FindTeacher
		
		方案2：按照模块分
			com.heima.teacher
				AddTeacher
				DeleteTeacher
				UpdateTeacher
				FindTeacher
			com.heima.student
				AddStudent
				DeleteStudent
				UpdateStudent
				FindStudent


### 包的定义及注意事项 
* A:定义包的格式
	* package 包名;
	* 多级包用.分开即可
* B:定义包的注意事项
	* A:package语句必须是程序的第一条可执行的代码
	* B:package语句在一个java文件中只能有一个
	* C:如果没有package，默认表示无包名
* C:案例演示
	* 包的定义及注意事项
	
### 带包的类编译和运行 
* A:如何编译运行带包的类(cmd)
	* a:javac编译的时候带上-d即可
		* javac -d . HelloWorld.java
	* b:通过java命令执行。
		* java 包名.HellWord

```
javac -d . HelloWorld.java
java 包名.HellWord
```

### 不同包下类之间的访问 
* A:案例演示
	* 不同包下类之间的访问

```
package com.baidu;
public class Person {
	private String name;
	private int age;

	public Person(){}

	public Person(String name,int age) {
		this.name = name;
		this.age = age;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getName() {
		return name;
	}

	public void setAge(int age) {
		this.age = age;
	}

	public int getAge() {
		return age;
	}

	protected void print() {
		System.out.println("print");
	}
}

```

```
package com.heima;

class Demo1_Package {
	public static void main(String[] args) {
		com.baidu.Person p = new com.baidu.Person("张三",23);
		System.out.println(p.getName() + "..." + p.getAge());
	}
}
```

### import关键字的概述和使用 
* A:案例演示
	* 为什么要有import
		* 其实就是让有包的类对调用者可见,不用写全类名了 
* B:导包格式
	* import 包名;
	* 注意：
	* 这种方式导入是到类的名称。
	* 虽然可以最后写*，但是不建议。
* C:package,import,class有没有顺序关系(面试题)
    * 有,依次是package,import,class

```
package com.heima;
import com.baidu.Person;
//import java.util.Scanner;		//在开发中我们用的都是导入具体的类
import java.util.*;				//*代表通配符,他会到该包下挨个匹配,匹配上就导入
class Demo1_Package {
	public static void main(String[] args) {
		Person p = new Person("张三",23);
		System.out.println(p.getName() + "..." + p.getAge());
		//p.print();			//在不同包下的无关类,不允许访问,因为是protected修饰的

		Scanner sc = new Scanner(System.in);
		int x = sc.nextInt();
		System.out.println(x);

	}
}
```

### 四种权限修饰符的测试 
* A:案例演示
	* 四种权限修饰符
* B:结论
* 
| 修饰符 | 本类 | 同一个包下(子类和无关类) | 不同包下(子类) | 不同包下(无关类) |
|--|--|--|--|
| private | Y | | |	|	
| 默认 | Y | Y | | |
| protected | Y | Y | Y | |
| public | Y | Y | Y | Y |

```
package com.xxx;
import com.baidu.Person;
public class Student extends Person {
	public Student(){}

	public Student(String name,int age) {
		super(name,age);
	}

	public void method() {
		print();
	}
}
```

```
package com.heima;
import com.baidu.Person;
import com.xxx.Student;
//import java.util.Scanner;		//在开发中我们用的都是导入具体的类
import java.util.*;				//*代表通配符,他会到该包下挨个匹配,匹配上就导入
class Demo1_Package {
	public static void main(String[] args) {
		Person p = new Person("张三",23);
		System.out.println(p.getName() + "..." + p.getAge());
		//p.print();			//在不同包下的无关类,不允许访问,因为是protected修饰的

		/*Scanner sc = new Scanner(System.in);
		int x = sc.nextInt();
		System.out.println(x);*/
		
		Student s = new Student("李四",24);
		System.out.println(s.getName() + "..." + s.getAge());
		s.method();
	}
}
```

### 类及其组成所使用的常见修饰符 
* A:修饰符：
	* 权限修饰符：private，默认的，protected，public
	* 状态修饰符：static，final
	* 抽象修饰符：abstract
* B:类：
	* 权限修饰符：默认修饰符，public
	* 状态修饰符：final
	* 抽象修饰符：abstract
	
	* 用的最多的就是：public
	
* C:成员变量：
	* 权限修饰符：private，默认的，protected，public
	* 状态修饰符：static，final
	
	* 用的最多的就是：private
	
* D:构造方法：
	* 权限修饰符：private，默认的，protected，public
	
	* 用的最多的就是：public
	
* E:成员方法：
	* 权限修饰符：private，默认的，protected，public
	* 状态修饰符：static，final
	* 抽象修饰符：abstract
	
	* 用的最多的就是：public
	
* F:除此以外的组合规则：
	* 成员变量：public static final
	* 成员方法：
		* public static 
	    * public abstract
		* public final