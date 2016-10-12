---
layout:     post
title:      "JavaSE之循环结构及控制跳转"
subtitle:   "HelloWorld"
date:       2013-06-17
author:     "Wxhao"
header-img: "img/post-bg/java.jpg"
catalog:    true
tags:
    - 基础知识 
    - java
    - JAVASE
---

### 循环结构概述和for语句的格式及其使用
* A:循环结构的分类
	* for,while,do...while 
* B:循环结构for语句的格式：
* 
		for(初始化表达式;条件表达式;循环后的操作表达式) {
			循环体;
		}
* C执行流程：
	* a:执行初始化语句
	* b:执行判断条件语句,看其返回值是true还是false
		* 如果是true，就继续执行
		* 如果是false，就结束循环
	* c:执行循环体语句;
	* d:执行循环后的操作表达式
	* e:回到B继续。
* D:代码演示
	* 在控制台输出10次"helloworld"

```
//在控制输出10次helloworld,这样做不推荐,因为复用性太差
/*System.out.println("helloworld");
System.out.println("helloworld");
System.out.println("helloworld");
System.out.println("helloworld");
System.out.println("helloworld");
System.out.println("helloworld");
System.out.println("helloworld");
System.out.println("helloworld");
System.out.println("helloworld");
System.out.println("helloworld");*/

for (int i = 1;i <= 10 ;i++ ) {
	System.out.println("helloworld");
}
```
	
### 循环结构for语句的练习
###### 获取数据
* A:代码演示
	* 需求：请在控制台输出数据1-10
	* 需求：请在控制台输出数据10-1
* B:注意事项
	* a:判断条件语句无论简单还是复杂结果是boolean类型。
	* b:循环体语句如果是一条语句，大括号可以省略；如果是多条语句，大括号不能省略。建议永远不要省略。
	* c:一般来说：有左大括号就没有分号，有分号就没有左大括号

```
for (int i = 1;i <= 10 ;i++ ){
	System.out.println("i = " + i);
}
System.out.println("-----------------------");

for (int i = 10;i >= 1 ;i-- ) {
	System.out.println("i = " + i);
}
```

###### 求和思想
* A:代码演示
	* 需求：求出1-10之间数据之和

```
//1-10的和
int sum = 0;
for (int i = 1;i <= 10 ;i++ ) {
	sum = sum + i;
}

System.out.println("sum = " + sum);
```

* B:练习
	* 需求：求出1-100之间偶数和
	* 需求：求出1-100之间奇数和

```
//1-100的偶数和
/*int sum = 0;
for (int i = 1;i <= 100 ;i++ ) {
	if (i % 2 == 0) {
		sum = sum + i;
	}
}

System.out.println("sum = " + sum);*/

//1-100的奇数和
int sum = 0;
for (int i = 1;i <= 100 ;i+=2 ) {
	/*if (i % 2 != 0) {
		sum = sum + i;
	}*/
	sum = sum + i;
}

System.out.println("sum = " + sum);
```

###### 水仙花
* A:代码演示
	* 需求：在控制台输出所有的”水仙花数”

	* 所谓的水仙花数是指一个三位数，其各位数字的立方和等于该数本身。
	* 举例：153就是一个水仙花数。
	* 153 = 1*1*1 + 5*5*5 + 3*3*3 = 1 + 125 + 27 = 153

```
//三位数是100到999之间
for(int i = 100;i < 1000 ;i++){
    int ge = i % 10;//个位
    int shi = i / 10 % 10;//十位
    int bai = i / 100 ;//百位
    if(ge * ge * ge + shi * shi * shi + bai * bai * bai == i){
        System.out.println(i);
    }
}
```
	
###### 统计思想
* A:代码演示
	* 需求：统计”水仙花数”共有多少个

```
int count = 0;
for(int i = 100;i < 1000 ;i++){
    int ge = i % 10;//个位
    int shi = i / 10 % 10;//十位
    int bai = i / 100 ;//百位
    if(ge * ge * ge + shi * shi * shi + bai * bai * bai == i){
        count++;//满足条件自增,计数器思想
    }
    System.out.println(count);
}
```

### 循环结构while语句
###### 格式和基本使用
* A:循环结构while语句的格式：
* 		
		while循环的基本格式：
		while(判断条件语句) {
			循环体语句;
		}
		
		完整格式：
		
		初始化语句;
	    while(判断条件语句) {
			 循环体语句;
			 控制条件语句;
		}
* B:执行流程：
	* a:执行初始化语句
	* b:执行判断条件语句,看其返回值是true还是false
		* 如果是true，就继续执行
		* 如果是false，就结束循环
	* c:执行循环体语句;
	* d:执行控制条件语句
	* e:回到b继续。
* C:代码演示
	* 需求：请在控制台输出数据1-10

```
int x = 1;
while (x <= 10) {
	System.out.println("x = " +  x);
	x++;
}
```

###### 练习
* A:求和思想
	* 求1-100之和

```
int sum = 0;
int i = 1;
while (i <= 100) {
	sum += i;//sum = sum + i;
	i++;//让变量i自增
}   
```

* B:统计思想
	* 统计”水仙花数”共有多少个

```
int count = 0;//计数器
int i = 100;
while (i <= 999) {
	int ge = i % 10;
	int shi = i / 10 % 10;
	int bai = i / 100;

	if (i == ge * ge * ge + shi * shi * shi + bai * bai * bai) {
		count ++;
	}
	i++;
}

System.out.println("count =" + count);
```

* 问题:某屌丝为了追求女神,写了一段代码示爱,但是女神也会java,改动一下把屌丝拒绝
    * while (j <= 10000) ; //加分号
```
int j = 1;
while (j <= 10000) {
	System.out.println("I Love You!!!");
	j++;
}
```


### 循环结构do...while语句的格式和基本使用
* A:循环结构do...while语句的格式：
* 
		do {
			循环体语句;
		}while(判断条件语句);
		
		完整格式；
		初始化语句;
		do {
			循环体语句;
			控制条件语句;
		}while(判断条件语句);
* B:执行流程：
	* a:执行初始化语句
	* b:执行循环体语句;
	* c:执行控制条件语句
	* d:执行判断条件语句,看其返回值是true还是false
		* 如果是true，就继续执行
		* 如果是false，就结束循环
	* e:回到b继续。
* C:代码演示
	* 需求：请在控制台输出数据1-10

```
int i = 11;
do {
	System.out.println("i = " + i);
	i++;
}
while (i <= 10);
```

### 循环结构三种循环语句的区别
* A:代码演示
	* 三种循环语句的区别:
	* do...while循环至少执行一次循环体。
	* 而for,while循环必须先判断条件是否成立，然后决定是否执行循环体语句。

```
int i = 11;
do {
	System.out.println("i = " + i);
	i++;
}
while (i <= 10);
//↑dowhile---↓while
int j = 11;
while (j <= 10) {
	System.out.println("j = " + j);
	j++;
}
```

* B:代码演示
	* for循环和while循环的区别：
		* A:如果你想在循环结束后，继续使用控制条件的那个变量，用while循环，否则用for循环。不知道用谁就用for循环。因为变量及早的从内存中消失，可以提高内存的使用效率。

```
for (int i = 1;i <= 10 ;i++ ) {
	System.out.println("i = " + i);
}
//for语句执行后变量会被释放,不能再使用
//System.out.println("i = " + i);			
//-----------
int i = 1;
while (i <= 10) {
	System.out.println("i = " + i);
	i++;
}
//while语句执行后,初始化变量还可以继续使用
System.out.println("i = " + i);				
```

### 循环结构注意事项之死循环
* A:一定要注意控制条件语句控制的那个变量的问题，不要弄丢了，否则就容易死循环。
* B:两种最简单的死循环格式
	* while(true){...}
	* for(;;){...}

```
//while语句的无限循环
while (true) {
	System.out.println("hello world");
	
//for语句的无限循环
for (; ; ) {
	System.out.println("hello world");
}
```

### 循环结构循环嵌套
###### 输出4行5列的星星
* A:代码演示
	* 需求：请输出一个4行5列的星星(*)图案。
	* 注意：System.out.println("*");和System.out.print("*");的区别
	* 如图：
```        
	*****
	*****
	*****
	*****
```			

* B:结论：
	* 外循环控制行数，内循环控制列数

```
for (int i = 1;i <= 4 ;i++ ) {					//外循环决定的是行数
	for (int j = 1;j <= 5 ;j++ ) {				//内循环决定的是列数
		System.out.print("*");
	}
	System.out.println();
}
```

###### 正三角形
* A:代码演示
    * 需求：请输出下列的形状
```
    *
	**
	***
	****
	*****
```

```
for (int i = 1;i <= 5 ; i++) {			//外循环决定行数
	for (int j = 1;j <= i ;j++ ) {			//内循环决定列数
		System.out.print("*");
	}
	System.out.println();				//将光标换到下一行的行首
}
```

### 循环结构九九乘法表
* A:代码演示
	* 需求：在控制台输出九九乘法表。

```
for (int i = 1;i <= 9 ;i++ ) {					//行数
	for (int j = 1;j <= i ;j++ ) {				//列数
		System.out.print(j + "*" + i + "=" + (i * j) + "\t" );
	}
    System.out.println();
}	
```

* B:代码优化
* 
		注意：
		'\x' x表示任意，\是转义符号,这种做法叫转移字符。
		
		'\t'	tab键的位置
		'\r'	回车
		'\n'	换行
		'\"'
		'\''

> windows \r\n 回车换行
  mac \r 回车换行
  Linux \n 回车换行

```
System.out.println("\"");//转义双引号
System.out.println('\'');//转义单引号
```
	
### 控制跳转语句
###### break语句
* break的使用场景
	* 只能在switch和循环中 

```
for (int x = 1;x <= 10 ;x++ ) {
	if (x == 4) {
		break;//跳出循环
	}
	System.out.println("x = " + x);
}
```

###### continue语句
* continue的使用场景
	* 只能在循环中 

```
for (int x = 1;x <= 10 ;x++ ) {
	if (x == 4) {
		continue;//终止本次循环,继续下次循环
	}

	System.out.println("x = " + x);
}
```

###### 标号
* 标号:标记某个循环对其控制
* 标号组成规则:其实就是合法的标识符

```
outer: for (int i = 1;i <= 10 ;i++ ) {		//outer就是标号,只要是合法的标识符即可
	System.out.print("i = " + i);
	inner: for (int j = 1;j <= 10 ;j++ ) {
		System.out.println("j = " + j);
		break outer;//标号一般用于跳出外层循环
	}
	
	System.out.println();
	//以下代码是否会报错
	http://blog.wxhao2.com
	//不会,前面是标号,后面是注释
```
###### 练习
* 练习题
* 
		for(int x=1; x<=10; x++) {
			if(x%3==0) {
				//在此处填写代码
			}
			System.out.println(“Java基础班”);
		}
		
		我想在控制台输出2次:“Java基础班“
		我想在控制台输出7次:“Java基础班“
		我想在控制台输出13次:“Java基础班“	

```
break;//2次

continue;//7次

System.out.println(“Java基础班”);//13次
```

###### return语句
* A:return的作用
	* 返回
	* 其实它的作用不是结束循环的，而是结束方法的。
* B:代码演示
	* return和break以及continue的区别?
	* return是结束方法
	* break是跳出循环
	* continue是终止本次循环继续下次循环

```
for (int i = 1;i <= 10 ;i++ ) {
	if (i == 4) {				
		//break;//停止循环
		return;//返回的意思,用来返回方法
	}
}

System.out.println("循环结束了");
```