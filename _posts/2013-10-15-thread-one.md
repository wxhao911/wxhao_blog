---
layout:     post
title:      "多线程"
subtitle:   "JavaSE之多线程"
date:       2013-10-15
author:     "Wxhao"
header-img: "img/post-bg/black-sky.jpg"
catalog:    true
tags:
    - 基础知识 
    - java
    - JAVASE
---


### 多线程的引入 
* 1.什么是线程
	* 线程是程序执行的一条路径, 一个进程中可以包含多条线程
	* 多线程并发执行可以提高程序的效率, 可以同时完成多项工作
* 2.多线程的应用场景
	* 红蜘蛛同时共享屏幕给多个电脑
	* 迅雷开启多条线程一起下载
	* QQ同时和多个人一起视频
	* 服务器同时处理多个客户端请求

	
### 多线程并行和并发的区别 
* 并行就是两个任务同时运行，就是甲任务进行的同时，乙任务也在进行。(需要多核CPU)
* 并发是指两个任务都请求运行，而处理器只能按受一个任务，就把这两个任务安排轮流进行，由于时间间隔较短，使人感觉两个任务都在运行。
* 比如我跟两个网友聊天，左手操作一个电脑跟甲聊，同时右手用另一台电脑跟乙聊天，这就叫并行。
* 如果用一台电脑我先给甲发个消息，然后立刻再给乙发消息，然后再跟甲聊，再跟乙聊。这就叫并发。

### Java程序运行原理和JVM的启动是多线程的吗 
* A:Java程序运行原理
	* Java命令会启动java虚拟机，启动JVM，等于启动了一个应用程序，也就是启动了一个进程。该进程会自动启动一个 “主线程” ，然后主线程去调用某个类的 main 方法。
	
* B:JVM的启动是多线程的吗
	* JVM启动至少启动了垃圾回收线程和主线程，所以是多线程的。

```
	/**
	 * @param args
	 * 证明jvm是多线程的
	 */
	public static void main(String[] args) {
		for(int i = 0; i < 100000; i++) {
			new Demo();
		}
		
		for(int i = 0; i < 10000; i++) {
			System.out.println("我是主线程的执行代码");
		}
	}

}

class Demo {

	@Override
	public void finalize() {
		System.out.println("垃圾被清扫了");
	}
	
}
```

### 多线程程序实现的方式1 
* 1.继承Thread
	* 定义类继承Thread
	* 重写run方法
	* 把新线程要做的事写在run方法中
	* 创建线程对象
	* 开启新线程, 内部会自动执行run方法

```
public class Demo2_Thread {

	public static void main(String[] args) {
		MyThread mt = new MyThread();		//4,创建Thread类的子类对象
		mt.start();							//5,开启线程
		
		for(int i = 0; i < 1000; i++) {
			System.out.println("bb");
		}
	}

}

class MyThread extends Thread {				//1,继承Thread
	public void run() {						//2,重写run方法
		for(int i = 0; i < 1000; i++) {		//3,将要执行的代码写在run方法中
			System.out.println("aaaaaaaaaaaa");
		}
	}
}
```

### 多线程程序实现的方式2 
* 2.实现Runnable
	* 定义类实现Runnable接口
	* 实现run方法
	* 把新线程要做的事写在run方法中
	* 创建自定义的Runnable的子类对象
	* 创建Thread对象, 传入Runnable
	* 调用start()开启新线程, 内部会自动调用Runnable的run()方法

```
public class Demo3_Thread {

	/**
	 * @param args
	 */
	public static void main(String[] args) {
		MyRunnable mr = new MyRunnable();	//4,创建Runnable的子类对象
		//Runnable target = mr;	mr = 0x0011
		Thread t = new Thread(mr);			//5,将其当作参数传递给Thread的构造函数
		t.start();							//6,开启线程
		
		for(int i = 0; i < 1000; i++) {			
		System.out.println("bb");
		}
	}
}

class MyRunnable implements Runnable {		//1,定义一个类实现Runnable

	@Override
	public void run() {						//2,重写run方法
		for(int i = 0; i < 1000; i++) {		//3,将要执行的代码写在run方法中
			System.out.println("aaaaaaaaaaaa");
		}
	}
}
```

### 实现Runnable的原理 
* 查看源码
	* 1,看Thread类的构造函数,传递了Runnable接口的引用 
	* 2,通过init()方法找到传递的target给成员变量的target赋值
	* 3,查看run方法,发现run方法中有判断,如果target不为null就会调用Runnable接口子类对象的run方法

### 两种方式的区别 
* 查看源码的区别:
	* a.继承Thread : 由于子类重写了Thread类的run(), 当调用start()时, 直接找子类的run()方法
	* b.实现Runnable : 构造函数中传入了Runnable的引用, 成员变量记住了它, start()调用run()方法时内部判断成员变量Runnable的引用是否为空, 不为空编译时看的是Runnable的run(),运行时执行的是子类的run()方法
	
* 继承Thread
	* 好处是:可以直接使用Thread类中的方法,代码简单
	* 弊端是:如果已经有了父类,就不能用这种方法
* 实现Runnable接口
	* 好处是:即使自己定义的线程类有了父类也没关系,因为有了父类也可以实现接口,而且接口是可以多实现的
	* 弊端是:不能直接使用Thread中的方法需要先获取到线程对象后,才能得到Thread的方法,代码复杂

### 匿名内部类实现线程的两种方式
* 继承Thread类

 ```
new Thread() {										//1,继承Thread类
public void run() {								//2,重写run方法
	for(int i = 0; i < 1000; i++) {				//3,将要执行的代码写在run方法中
		System.out.println("aaaaaaaaaaaaaa");
	}
}
}.start();											//4,开启线程
 ```
 
* 实现Runnable接口

```			
new Thread(new Runnable() {							//1,将Runnable的子类对象传递给Thread的构造方法
	public void run() {								//2,重写run方法
		for(int i = 0; i < 1000; i++) {				//3,将要执行的代码写在run方法中
			System.out.println("bb");
		}
	}
}).start();											//4,开启线程
}
```

### 获取名字和设置名字
* 1.获取名字
	* 通过getName()方法获取线程对象的名字
* 2.设置名字
* 通过构造函数可以传入String类型的名字

```
new Thread("芙蓉姐姐") {		//通过构造方法给name赋值
	public void run() {
		System.out.println(this.getName() + "....aaaaaaaaa");
	}
}.start();

new Thread("凤姐") {
	public void run() {
		System.out.println(this.getName() + "....bb");
	}
}.start();
```

* 通过setName(String)方法可以设置线程对象的名字
```
Thread t1 = new Thread() {
	public void run() {
		//this.setName("张三");
		System.out.println(this.getName() + "....aaaaaaaaaaaaa");
	}
};

Thread t2 = new Thread() {
	public void run() {
		//this.setName("李四");
		System.out.println(this.getName() + "....bb");
	}
};

t1.setName("张三");
t2.setName("李四");
t1.start();
t2.start();
```

### 获取当前线程的对象 
* Thread.currentThread(), 主线程也可以获取

```
new Thread(new Runnable() {
	public void run() {
		for(int i = 0; i < 1000; i++) {
			System.out.println(Thread.currentThread().getName() + "...aaaaaaaaaaaaaaaaaaaaa");
		}
	}
}).start();

new Thread(new Runnable() {
	public void run() {
		for(int i = 0; i < 1000; i++) {
//Thread.currentThread()获取当前正在执行的线程			System.out.println(Thread.currentThread().getName() + "...bb");
		}
	}
}).start();
Thread.currentThread().setName("我是主线程");					//获取主函数线程的引用,并改名字
System.out.println(Thread.currentThread().getName());		//获取主函数线程的引用,并获取名字
```

### 休眠线程 
* Thread.sleep(毫秒,纳秒), 控制当前线程休眠若干毫秒1秒= 1000毫秒 1秒 = 1000 * 1000 * 1000纳秒 1000000000

```
for(int i = 20; i >= 0; i--) {
	Thread.sleep(1000);
	System.out.println("倒计时第" +i + "秒");
}
```

```
new Thread() {
	public void run() {
		for(int i = 0; i < 10; i++) {
			try { //父类没抛异常,子类必须自己处理
				Thread.sleep(1000);
			} catch (InterruptedException e) {
				
				e.printStackTrace();
			}
			System.out.println(getName() + "...aaaaaaaaaa");
		}
	}
}.start();

new Thread() {
	public void run() {
		for(int i = 0; i < 10; i++) {
			try {
				Thread.sleep(1000);
			} catch (InterruptedException e) {
				
				e.printStackTrace();
			}
			System.out.println(getName() + "...bb");
		}
	}
}.start();
}
```

### 守护线程 
* setDaemon(), 设置一个线程为守护线程, 该线程不会单独执行, 当其他非守护线程都执行结束后, 自动退出

* 象棋举例,车马相士(守护线程),将帅(非守护线程)死后,其它的子也会死

```
Thread t1 = new Thread() {
	public void run() {
		for(int i = 0; i < 2; i++) {
			System.out.println(getName() + "...aaaaaaaaaaaaaaaaaaaa");
		}
	}
};

Thread t2 = new Thread() {
	public void run() {
		for(int i = 0; i < 50; i++) {
			System.out.println(getName() + "...bb");
		}
	}
};

t2.setDaemon(true);		//设置为守护线程

t1.start();
t2.start();
```

* 从输出结果可以看出,线程2并没有执行完,而是在线程1执行完后,就停止了

* QQ主界面是非守护线程,传输窗口为守护线程,关闭QQ主界面,传输窗口也会随之退出,但不会立即退出,会有一个接受关闭命令的缓冲时间

### 加入线程
* join(), 当前线程暂停, 等待指定的线程执行结束后, 当前线程再继续
* 相当于插队
* join(int), 可以等待指定的毫秒之后继续

```
final Thread t1 = new Thread() {
	public void run() {
		for(int i = 0; i < 10; i++) {
			System.out.println(getName() + "...aaaaaaaaaaaaa");
		}
	}
};

Thread t2 = new Thread() {
	public void run() {
		for(int i = 0; i < 10; i++) {
			if(i == 2) {
				try {
					//匿名内部类调用的方法对象必须要用final 修饰
					//t1.join();
					t1.join(1);	//插队指定的时间,过了指定时间后,两条线程交替执行
				} catch (InterruptedException e) {
					
					e.printStackTrace();
				}
			}
			System.out.println(getName() + "...bb");
		}
	}
};

t1.start();
t2.start();
```

### 礼让线程 
* yield让出cpu
* 实际效果不明显

```
	/**
	 * yield让出cpu礼让线程
	 */
	public static void main(String[] args) {
		new MyThread().start();
		new MyThread().start();
	}

}

class MyThread extends Thread {
	public void run() {
		for(int i = 1; i <= 1000; i++) {
			if(i % 10 == 0) {
				Thread.yield();						//让出CPU
			}
			System.out.println(getName() + "..." + i);
		}
	}
}
```

### 设置线程的优先级 
* setPriority()设置线程的优先级
* 效果不明显,看得出一点儿效果
* 优先级最大是10,最小是1,默认是5

```
Thread t1 = new Thread(){
	public void run() {
		for(int i = 0; i < 100; i++) {
			System.out.println(getName() + "...aaaaaaaaa" );
		}
	}
};

Thread t2 = new Thread(){
	public void run() {
		for(int i = 0; i < 100; i++) {
			System.out.println(getName() + "...bb" );
		}
	}
};

//t1.setPriority(10);	设置最大优先级
//t2.setPriority(1);

t1.setPriority(Thread.MIN_PRIORITY);//设置最小的线程优先级
t2.setPriority(Thread.MAX_PRIORITY);//设置最大的线程优先级

t1.start();
t2.start();
```

### 同步代码块 
* 1.什么情况下需要同步
	* 当多线程并发, 有多段代码同时执行时, 我们希望某一段代码执行的过程中CPU不要切换到其他线程工作. 这时就需要同步.
	* 如果两段代码是同步的, 那么同一时间只能执行一段, 在一段代码没执行结束之前, 不会执行另外一段代码.
* 2.同步代码块
	* 使用synchronized关键字加上一个锁对象来定义一段代码, 这就叫同步代码块
	* 多个同步代码块如果使用相同的锁对象, 那么他们就是同步的

```
	public static void main(String[] args) {
		//匿名内部调用类局部变量 要用final修饰
		final Printer p = new Printer();
		
		new Thread() {
			public void run() {
				while(true) {
					p.print1();
				}
			}
		}.start();
		
		new Thread() {
			public void run() {
				while(true) {
					p.print2();
				}
			}
		}.start();
	}

}

class Printer {
	Demo d = new Demo();
	public void print1() {
		//synchronized(new Demo()) {//同步代码块,锁机制,锁对象可以是任意的
		synchronized(d) {//为了保证输出的字符连成一句话,所以要让方法执行完前不执行另一个方法
			System.out.print("我");
			System.out.print("是");
			System.out.print("大");
			System.out.print("帅");
			System.out.print("哔");
			System.out.print("\r\n");
		}
	}
	
	public void print2() {
		//synchronized(new Demo()) {//锁对象不能用匿名对象,因为匿名对象不是同一个对象
		synchronized(d) {		
			System.out.print("吴");
			System.out.print("酷");
			System.out.print("浩");
			System.out.print("\r\n");
		}
	}
}

class Demo{}
```

* 可以先屏蔽锁的代码,查看输出内容发现,会有问题一行字可能会多字,可能会少字
* 锁就相当于门,一个人进厕所关了门,另一个人是进不去的,要等这个人结束才能进去
* 锁可以是任意同一个对象

###  同步方法 
* 使用synchronized关键字修饰一个方法, 该方法中所有的代码都是同步的

* 非静态的同步方法的锁对象是神马?
    * 非静态的同步方法的锁对象是this
* 静态的同步方法的锁对象是什么?
    * 是该类的字节码对象

```

public class Demo2_Synchronized {

	/**
	 * @param args
	 * 同步代码块
	 */
	public static void main(String[] args) {
		final Printer2 p = new Printer2();
		
		new Thread() {
			public void run() {
				while(true) {
					p.print1();
				}
			}
		}.start();
		
		new Thread() {
			public void run() {
				while(true) {
					p.print2();
				}
			}
		}.start();
	}

}

class Printer2 {
	Demo d = new Demo();
	
	public static synchronized void print1() {	//同步方法只需要在方法上加synchronized关键字即可
		System.out.print("我");
		System.out.print("是");
		System.out.print("大");
		System.out.print("帅");
		System.out.print("哔");
		System.out.print("\r\n");
	}
	
	public static void print2() {
		//synchronized(new Demo()) {	//锁对象不能用匿名对象,因为匿名对象不是同一个对象
		synchronized(Printer2.class) {		
			System.out.print("吴");
			System.out.print("嘉");
			System.out.print("图");
			System.out.print("\r\n");
		}
	}
}
```

### 线程安全问题 
* 多线程并发操作同一数据时, 就有可能出现线程安全问题
* 使用同步技术可以解决这种问题, 把操作数据的代码进行同步, 不要多个线程一起操作
	
* 需求:铁路售票,一共100张,通过四个窗口卖完.		

```
public class Demo3_Ticket {

	/**
	 * 需求:铁路售票,一共100张,通过四个窗口卖完.
	 */
	public static void main(String[] args) {
		new Ticket().start();
		new Ticket().start();
		new Ticket().start();
		new Ticket().start();
	}

}

class Ticket extends Thread {
	private static int ticket = 100;
	//private static Object obj = new Object();	//如果用引用数据类型成员变量当作锁对象,必须是静态的
	public void run() {
		while(true) {
			synchronized(Ticket.class) {
				if(ticket <= 0) {
					break;
				}
				try {
					Thread.sleep(10);	//线程1睡,线程2睡,线程3睡,线程4睡
				} catch (InterruptedException e) {
					
					e.printStackTrace();
				}
				System.out.println(getName() + "...这是第" + ticket-- + "号票");
			}
		}
	}
}
```

* 相同类的不同对象调用同一个方法使用共同值时会有问题,所以要用锁,不同对象要锁一个静态的对象,才能同步

### 火车站卖票的例子用实现Runnable接口 

```

public class Demo4_Ticket {

	/**
	 * 火车站卖票的例子用实现Runnable接口
	 */
	public static void main(String[] args) {
		MyTicket mt = new MyTicket();
		new Thread(mt).start();
		new Thread(mt).start();
		new Thread(mt).start();
		new Thread(mt).start();
		
		/*Thread t1 = new Thread(mt);	//多次启动一个线程是非法的
		t1.start();
		t1.start();
		t1.start();
		t1.start();*/
	}

}

class MyTicket implements Runnable {
	private int tickets = 100;
	@Override
	public void run() {
		while(true) {
			synchronized(this) {
				if(tickets <= 0) {
					break;
				}
				try {
					Thread.sleep(10);				//线程1睡,线程2睡,线程3睡,线程4睡
				} catch (InterruptedException e) {
					
					e.printStackTrace();
				}
				System.out.println(Thread.currentThread().getName() + "...这是第" + tickets-- + "号票");
			}
		}
	}
}
```

* 实现了Runnable接口,所以开启多线程时可以用一个对象,对象锁使用this就可以同步

### 死锁 
* 多线程同步的时候, 如果同步代码嵌套, 使用相同锁, 就有可能出现死锁
	* 尽量不要嵌套使用
		
```
	/**
	 * 哲学家们吃饭,一人只有一只筷子,都想说服别人把筷子给自己,然而谁也说不过谁,最后就被饿死了
	 */
	private static String s1 = "筷子左";
	private static String s2 = "筷子右";

	public static void main(String[] args) {
		new Thread() {
			public void run() {
				while(true) {
					synchronized(s1) {
						System.out.println(getName() + "...获取" + s1 + "等待" + s2);
						synchronized(s2) {
							System.out.println(getName() + "...拿到" + s2 + "开吃");
						}
					}
				}
			}
		}.start();
		
		new Thread() {
			public void run() {
				while(true) {
					synchronized(s2) {
						System.out.println(getName() + "...获取" + s2 + "等待" + s1);
						synchronized(s1) {
							System.out.println(getName() + "...拿到" + s1 + "开吃");
						}
					}
				}
			}
		}.start();
	}
}
```

* 以上代码,会让程序锁死

### 以前的线程安全的类回顾
* A:回顾的线程安全问题
	* 看源码：Vector,StringBuffer,Hashtable,Collections.synchroinzed(xxx)
	* Vector是线程安全的,ArrayList是线程不安全的
	* StringBuffer是线程安全的,StringBuilder是线程不安全的
	* Hashtable是线程安全的,HashMap是线程不安全的
    * Collections.synchroinzed(xxx) 可以把线程不安全的集合变成线程安全的
