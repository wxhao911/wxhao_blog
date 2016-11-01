---
layout:     post
title:      "异常"
subtitle:   "JavaSE之异常"
date:       2013-09-13
author:     "Wxhao"
header-img: "img/post-bg/black-sky.jpg"
catalog:    true
tags:
    - 基础知识 
    - java
    - JAVASE
---


### 异常的概述和分类 
* A:异常的概述
	* 异常就是Java程序在运行过程中出现的错误。
* B:异常的分类
	* 通过API查看Throwable
	* Error
		* 服务器宕机,数据库崩溃等
	* Exception
C:异常的继承体系
	* Throwable
		* Error	
		* Exception
			* RuntimeException

```
int[] arr = {11,22,33,44,55};
		//arr = null;					//NullPointerException				空指针异常
		System.out.println(arr[10]);	//ArrayIndexOutOfBoundsException	数组索引越界异常
```

### JVM默认是如何处理异常的 
* A:JVM默认是如何处理异常的
	* main函数收到这个问题时,有两种处理方式:
	* a:自己将该问题处理,然后继续运行
	* b:自己没有针对的处理方式,只有交给调用main的jvm来处理
	* jvm有一个默认的异常处理机制,就将该异常进行处理.
	* 并将该异常的名称,异常的信息.异常出现的位置打印在了控制台上,同时将程序停止运行
* B:案例演示
	* JVM默认如何处理异常

```
class Demo {
	/*
	 * 除法运算
	 */
	public int div(int a,int b) {		//a = 10,b = 0
		return a / b;					// 10 / 0  被除数是10,除数是0当除数是0的时候违背了算数运算法则,抛出异常
										//new ArithmeticException("/ by zero");
	}
} 
```

```
public static void main(String[] args) {
	Demo d = new Demo();
	int x = d.div(10, 0);
	System.out.println(x);
}
```

###  try...catch的方式处理异常1 
* A:异常处理的两种方式
	* a:try…catch…finally
		* try catch
		* try catch finally
		* try finally 
	* b:throws
* B:try...catch处理异常的基本格式
	* try…catch…finally
* C:案例演示
	* try...catch的方式处理1个异常

```
package com.wxhao.exception;

public class Demo2_Exception {
	/**
		try:用来检测异常的
		catch:用来捕获异常的
		finally:释放资源
		
		世界上最真情的相依就是你在try我在catch,无论你发神马脾气,我都静静接受,默默处理
		当通过trycatch将问题处理了,程序会继续执行
	 */
	public static void main(String[] args) {
		Demo2 d = new Demo2();
		try{
			int x = d.div(10, 0);
			System.out.println(x);
		}catch(ArithmeticException a) {		//ArithmeticException a = new ArithmeticException();
			System.out.println("出错了,除数为零了");
		}
		
		System.out.println("1111111111111111");
	}

}

class Demo2 {
	/*
	 * 除法运算
	 */
	public int div(int a,int b) {		//a = 10,b = 0
		return a / b;					// 10 / 0  被除数是10,除数是0当除数是0的时候违背了算数运算法则,抛出异常
										//new ArithmeticException("/ by zero");
	}
} 
```

### try...catch的方式处理异常2 
* A:案例演示
	* try...catch的方式处理多个异常
	* JDK7以后处理多个异常的方式及注意事项

```
/**
 * 
 * 安卓,客户端开发,如何处理异常?try{}catch(Exception e){}
 * ee,服务端开发,一般都是底层开发,从底层向上抛
 * 
 * try后面如果跟多个catch,那么小的异常放前面,大的异常放后面,根据多态的原理,如果大的放前面,就会将所有的子类对象接收
 * 后面的catch就没有意义了
 */
public static void main(String[] args) {
	//demo1();
	int a = 10;
	int b = 0;
	int[] arr = {11,22,33,44,55};
	
	//JDK7如何处理多个异常
	try {
		System.out.println(a / b);
		System.out.println(arr[10]);
	} catch (ArithmeticException | ArrayIndexOutOfBoundsException e) {
		System.out.println("出错了");
	} 
}

public static void demo1() {
	int a = 10;
	int b = 0;
	int[] arr = {11,22,33,44,55};
	
	try {
		System.out.println(a / b);
		System.out.println(arr[10]);
		arr = null;
		System.out.println(arr[0]);
	} catch (ArithmeticException e) {
		System.out.println("除数不能为零");
	} catch (ArrayIndexOutOfBoundsException e) {
		System.out.println("索引越界了");
	} catch (Exception e) {				//Exception e = new NullPointerException();
		System.out.println("出错了");
	}
	
	System.out.println("over");
}
```

### 编译期异常和运行期异常的区别 
* A:编译期异常和运行期异常的区别
	* Java中的异常被分为两大类：编译时异常和运行时异常。
	* 所有的RuntimeException类及其子类的实例被称为运行时异常，其他的异常就是编译时异常
	
	* 编译时异常
		* Java程序必须显示处理，否则程序就会发生错误，无法通过编译
	* 运行时异常
		* 无需显示处理，也可以和编译时异常一样处理
* B:案例演示
	* 编译期异常和运行期异常的区别

```
/**
	编译时异常也叫做未雨绸缪异常(老师自己定义的)
	未雨绸缪:在做某些事情的时候要做某些准备
	编译时异常:在编译某个程序的时候,有可能会有这样那样的事情发生,比如文件找不到,这样的异常就必须在编译的时候处理
	如果不处理编译通不过
	
	运行时异常:就是程序员所犯得错误,需要回来修改代码
 */
public static void main(String[] args) {
	try {
		FileInputStream fis = new FileInputStream("xxx.txt");
	} catch(Exception e) {
		
	}
}
```

### Throwable的几个常见方法 
* A:Throwable的几个常见方法
	* a:getMessage()
		* 获取异常信息，返回字符串。
	* b:toString()
		* 获取异常类名和异常信息，返回字符串。
	* c:printStackTrace()
		* 获取异常类名和异常信息，以及异常出现在程序中的位置。返回值void。
* B:案例演示
	* Throwable的几个常见方法的基本使用



###  throws的方式处理异常 
* A:throws的方式处理异常
	* 定义功能方法时，需要把出现的问题暴露出来让调用者去处理。
	* 那么就通过throws在方法上标识。
* B:案例演示
	* 举例分别演示编译时异常和运行时异常的抛出

### throw的概述以及和throws的区别 
* A:throw的概述
	* 在功能方法内部出现某种情况，程序不能继续运行，需要进行跳转时，就用throw把异常对象抛出。
* B:案例演示	
	* 分别演示编译时异常对象和运行时异常对象的抛出
* C:throws和throw的区别
	* a:throws
		* 用在方法声明后面，跟的是异常类名
		* 可以跟多个异常类名，用逗号隔开
		* 表示抛出异常，由该方法的调用者来处理
	* b:throw
		* 用在方法体内，跟的是异常对象名
		* 只能抛出一个异常对象名
		* 表示抛出异常，由方法体内的语句处理

### finally关键字的特点及作用 
* A:finally的特点
	* 被finally控制的语句体一定会执行
	* 特殊情况：在执行到finally之前jvm退出了(比如System.exit(0))
* B:finally的作用
	* 用于释放资源，在IO流操作和数据库操作中会见到
* C:案例演示
	* finally关键字的特点及作用

```
/**
	return语句相当于是方法的最后一口气,那么在他将死之前会看一看有没有finally帮其完成遗愿,如果有就将finally执行
	后在彻底返回
 */
public static void main(String[] args) {
	try {
		System.out.println(10/0);
	} catch (Exception e) {
		System.out.println("除数为零了");
		System.exit(0);			//退出jvm虚拟机
		return;
	} finally {
		System.out.println("看看我执行了吗");
	}
}

```

### finally关键字的面试题 
* A:面试题1
	* final,finally和finalize的区别
	    * final,finally和finalize的区别
	        * final可以修饰类,不能被继承
			* 修饰方法,不能被重写
			* 修饰变量,只能赋值一次
			* finally是try语句中的一个语句体,不能单独使用,用来释放资源
			* finalize是一个方法,当垃圾回收器确定不存在对该对象的更多引用时，由对象的垃圾回收器调用此方法。 

* B:面试题2
	* 如果catch里面有return语句，请问finally的代码还会执行吗?如果会，请问是在return前还是return后。

```
public int method() {
	int x = 10;
	try {
		x = 20;
		System.out.println(1/0);
		return x;
	} catch (Exception e) {
		x = 30;
		return x;
	} finally {
		x = 40;
		//return x;					千万不要在finally里面写返回语句,因为finally的作用是为了释放资源,是肯定会执行的
									//如果在这里面写返回语句,那么try和catch的结果都会被改变,所以这么写就是犯罪
	}
}
```

输出30,return先把返回路径建立起来了,然后判断有没有finally,在执行return

### 自定义异常概述和基本使用 
* A:为什么需要自定义异常
	* 举例：人的年龄
	* 通过名字区分到底是神马异常,有针对的解决办法 
* B:自定义异常概述
	* 继承自Exception
	* 继承自RuntimeException
* C:案例演示
	* 自定义异常的基本使用

```
class AgeOutOfBoundsException extends Exception {

	public AgeOutOfBoundsException() {
		super();
	}

	public AgeOutOfBoundsException(String message) {
		super(message);
	}
}
```

### 异常的注意事项及如何使用异常处理 
* A:异常注意事项
	* a:子类重写父类方法时，子类的方法必须抛出相同的异常或父类异常的子类。(父亲坏了,儿子不能比父亲更坏)
	* b:如果父类抛出了多个异常,子类重写父类时,只能抛出相同的异常或者是他的子集,子类不能抛出父类没有的异常
	* c:如果被重写的方法没有异常抛出,那么子类的方法绝对不可以抛出异常,如果子类方法内有异常发生,那么子类只能try,不能throws
* B:如何使用异常处理
	* 原则:如果该功能内部可以将问题处理,用try,如果处理不了,交由调用者处理,这是用throws
	* 区别:
		* 后续程序需要继续运行就try
		* 后续程序不需要继续运行就throws
		
	* 如果JDK没有提供对应的异常，需要自定义异常。

###  异常(练习)
* 键盘录入一个int类型的整数,对其求二进制表现形式
	 * 如果录入的整数过大,给予提示,录入的整数过大请重新录入一个整数BigInteger
	 * 如果录入的是小数,给予提示,录入的是小数,请重新录入一个整数
	 * 如果录入的是其他字符,给予提示,录入的是非法字符,请重新录入一个整数

```
/**
 * 分析:
 * 1,创建键盘录入对象
 * 2,将键盘录入的结果存储在String类型的字符串中,存储int类型中如果有不符合条件的直接报错,无法进行后续判断
 * 3,键盘录入的结果转换成int类型的数据,是正确的还是错误的
 * 4,正确的直接转换
 * 5,错误的要进行对应判断
 */
public static void main(String[] args) {
	Scanner sc = new Scanner(System.in);
	System.out.println("请输入一个整数:");
	
	
	while(true) {
		String line = sc.nextLine();					//将键盘录入的结果存储在line中
		try {
			int num = Integer.parseInt(line);				//将字符串转换为整数
			System.out.println(Integer.toBinaryString(num));//将整数转换为二进制
			break;											//跳出循环
		}catch(Exception e) {
			try {
				new BigInteger(line);
				System.out.println("录入错误,您录入的是一个过大整数,请重新输入一个整数:");
			}catch (Exception e2) {							//alt + shif + z (try catch快捷键)
				try {
					new BigDecimal(line);
					System.out.println("录入错误,您录入的是一个小数,请重新输入一个整数:");
				} catch (Exception e1) {
					System.out.println("录入错误,您录入的是非法字符,请重新输入一个整数:");
				}
			}
		}
	}
}
```

19.14_File类(


### File类的概述和构造方法
* A:File类的概述
	* File更应该叫做一个路径
		* 文件路径或者文件夹路径  
		* 路径分为绝对路径和相对路径
		* 绝对路径是一个固定的路径,从盘符开始
		* 相对路径相对于某个位置,在eclipse下是指当前项目下,在dos下指的是当前路径
	* 查看API指的是当前路径
	* 文件和目录路径名的抽象表示形式
* B:构造方法
	* File(String pathname)：根据一个路径得到File对象
	* File(String parent, String child):根据一个目录和一个子文件/目录得到File对象
	* File(File parent, String child):根据一个父File对象和一个子文件/目录得到File对象
* C:案例演示
	* File类的构造方法

```
// File(String pathname)：根据一个路径得到File对象
File file2 = new File("xxx.txt");
System.out.println(file2.exists());//判断文件是否存在
```

```
 // File(String parent, String child):根据一个目录和一个子文件/目录得到File对象
String parent = "F:\\xxx";
String child = "xxx.txt";
File file = new File(parent,child);
System.out.println(file.exists());
```

```
 // File(File parent, String child):根据一个父File对象和一个子文件/目录得到File对象
File parent = new File("F:\\xxx");
String child = "xxx.txt";
File file = new File(parent, child);
System.out.println(file.exists());
System.out.println(parent.exists());
```


### File类的创建功能 
* A:创建功能
	* public boolean createNewFile():创建文件 如果存在这样的文件，就不创建了
	* public boolean mkdir():创建文件夹 如果存在这样的文件夹，就不创建了
	* public boolean mkdirs():创建文件夹,如果父文件夹不存在，会帮你创建出来
* B:案例演示
	* File类的创建功能

	* 注意事项：
		* 如果你创建文件或者文件夹忘了写盘符路径，那么，默认在项目路径下。


```
//创建文件
public static void demo1() throws IOException {
	File file = new File("yyy.txt");
	System.out.println(file.createNewFile());//如果没有就创建,返回true
	
	File file2 = new File("zzz");
	System.out.println(file2.createNewFile());
}
```

```
//创建文件夹
public static void main(String[] args) throws IOException {
	//demo1();
	File dir1 = new File("aaa");
	System.out.println(dir1.mkdir());
	
	File dir2 = new File("bbb.txt");	//这样写是可以的,文件夹也是可以有后缀的
	System.out.println(dir2.mkdir());
	
	File dir3 = new File("ccc\\ddd");
	System.out.println(dir3.mkdirs()); 	//创建多级目录
}
```
		
### File类的重命名和删除功能 
* A:重命名和删除功能
	* public boolean renameTo(File dest):把文件重命名为指定的文件路径
	* public boolean delete():删除文件或者文件夹
* B:重命名注意事项
	* 如果路径名相同，就是改名。
	* 如果路径名不同，就是改名并剪切。
* C:删除注意事项：
	* Java中的删除不走回收站。
	* 要删除一个文件夹，请注意该文件夹内不能包含文件或者文件夹

```
//renameTo
File file1 = new File("ooo.txt");
File file2 = new File("D:\\xxx.txt");
System.out.println(file1.renameTo(file2));
```

```
//delete
File file1 = new File("yyy.txt");
System.out.println(file1.delete());

File file2 = new File("aaa");
System.out.println(file2.delete());

File file3 = new File("ccc");	//如果删除一个文件夹,那么文件夹必须是空的
System.out.println(file3.delete());
```

### File类的判断功能 
* A:判断功能
	* public boolean isDirectory():判断是否是目录
	* public boolean isFile():判断是否是文件
	* public boolean exists():判断是否存在
	* public boolean canRead():判断是否可读
	* public boolean canWrite():判断是否可写
	* public boolean isHidden():判断是否隐藏
* B:案例演示
	* File类的判断功能

```
File dir = new File("zzz");
System.out.println(dir.isDirectory()); //判断是否是文件夹
System.out.println(dir.isFile());		//判断是否是文件
```

```
File file = new File("zzz");
file.setReadable(false);
System.out.println(file.canRead());  //windows系统认为所有的文件都是可读的
file.setWritable(true);
System.out.println(file.canWrite()); //windows系统可以设置为不可写

File file2 = new File("aaa.txt");
System.out.println(file2.isHidden()); //判断是否是隐藏文件
System.out.println(file.isHidden());
```
	
### File类的获取功能 
* A:获取功能
	* public String getAbsolutePath()：获取绝对路径
	* public String getPath():获取路径
	* public String getName():获取名称
	* public long length():获取长度。字节数
	* public long lastModified():获取最后一次的修改时间，毫秒值
	* public String[] list():获取指定目录下的所有文件或者文件夹的名称数组
	* public File[] listFiles():获取指定目录下的所有文件或者文件夹的File数组 
* B:案例演示
	* File类的获取功能

```
File file1 = new File("ccc.txt");
File file2 = new File("D:\\xxx\\ccc.txt");
//System.out.println(file1.getAbsolutePath()); //获取绝对路径
//System.out.println(file2.getAbsolutePath());

//System.out.println(file1.getPath());	 //获取构造方法中传入路径
//System.out.println(file2.getPath());

//		System.out.println(file1.getName());	 //获取文件或者文件的名字
//		System.out.println(file2.getName());
//		
//		System.out.println(file1.length());	//获取文件字节个数

Date d = new Date(file1.lastModified()); //文件的最后修改时间
SimpleDateFormat sdf = new SimpleDateFormat("yyyy年MM月dd日 HH:mm:ss");
System.out.println(sdf.format(d));
```

```
File dir = new File("F:/config");
String[] arr = dir.list();		//仅为了获取文件名

for (String string : arr) {
	System.out.println(string);
}

File[] subFiles = dir.listFiles();

for (File file : subFiles) {	//获取文件对象
	System.out.println(file);
}
```

### 输出指定目录下指定后缀的文件名 
* A:案例演示
	* 需求：判断E盘目录下是否有后缀名为.jpg的文件，如果有，就输出该文件名称

```
File dir = new File("E:\\");

//		String[] arr = dir.list();		 //获取e盘下所有的文件或文件夹
//		for (String string : arr) {
//			if(string.endsWith(".jpg")) {
//				System.out.println(string);
//			}
//		}

File[] subFiles = dir.listFiles(); //获取e盘下所有的文件或文件夹对象

for (File subFile : subFiles) {
	if(subFile.isFile() && subFile.getName().endsWith(".jpg")) {
		System.out.println(subFile);
	}
}
```

### 文件名称过滤器的概述及使用 
* A:文件名称过滤器的概述
	* public String[] list(FilenameFilter filter)
	* public File[] listFiles(FileFilter filter)
* B:文件名称过滤器的使用
	* 需求：判断E盘目录下是否有后缀名为.jpg的文件，如果有，就输出该文件名称
* C:源码分析
	* 带文件名称过滤器的list()方法的源码

```
File dir = new File("E:\\");
File[] subFiles = dir.listFiles(); //获取e盘下所有的文件或文件夹对象

for (File subFile : subFiles) {
	if(subFile.isFile() && subFile.getName().endsWith(".jpg")) {
		System.out.println(subFile);
	}
}

String[] arr = dir.list(new FilenameFilter() {
	
	@Override
	public boolean accept(File dir, String name) {
		//System.out.println(dir);
		//System.out.println(name);
		File file = new File(dir, name);
		return file.isFile() && file.getName().endsWith(".jpg");
	}
});

for (String string : arr) {
	System.out.println(string);
}
```

### File类(递归)
* 5的阶乘		