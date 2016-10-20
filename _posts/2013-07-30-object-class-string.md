---
layout:     post
title:      "String类"
subtitle:   "JavaSE之常见对象"
date:       2013-07-30
author:     "Wxhao"
header-img: "img/post-bg/black-sky.jpg"
catalog:    true
tags:
    - 基础知识 
    - java
    - JAVASE
---

### String类的概述
* String类的概述
    * 通过JDK提供的API,查看String类的说明

    * 可以看到这样两句话
        * 字符串字面值"abc"也可以看成一个字符串对象
        * 字符串是常量,一旦被赋值,就不能被改变
        
```
package com.wxhao.string;

public class Demo1_String {

	public static void main(String[] args) {
		String str = "abc"; 	//"abc"可以看诚意个字符串对象
		str = "def";			//当把"def"复制给str,原来的"abc"就变成了垃圾
		System.out.println(str);//String类重写toString房里返回的是该对象本身
	}

}
```

### String类的构造方法

* 常见构造方法
    * public String();空构造
    * public String(byte[] bytes);把字节数组转成字符串
    * public String(byte[] bytes,int index,int length);把字节数组转成一部分字符串
    * public String(char[] value);把字符数组转成字符串
    * public String(char[] value,int index,int count);把字符数组转成一部分字符串
    * public String(String original);把字符串常量值转成字符串

```
package com.wxhao.string;

public class Demo2_String {

	public static void main(String[] args) {
		String s = new String();
		System.out.println(s);//空白
		
		byte[] arr1 = {97, 98 ,99};
		String s1 = new String(arr1);//解码,奖计算机读得懂得转成我们读得懂得
		System.out.println(s1);//默认项目解码(GBK),
		
		byte[] arr2 = {97, 98 ,99,100,101,102};
		String s2 = new String(arr2,2,3);
		System.out.println(s2);
		
		char[] arr3 = {'a','b','c','d','e'};
		String s3 = new String(arr3);
		System.out.println(s3);
		
		String s4 = new String(arr2,2,3);
		System.out.println(s4);
		
		String s5=new String ("wxhao");
		System.out.println(s5);
	}

}
```

### String类的常见面试题
1. 判断定义为String类型的s1和s2是否相等
    
    ``` 
    String s1 = " abc";
    String s2 = " abc";
    System.out.println(s1==s2);//true
    System.out.println(s1.equals(s2));//true
    ```
    
    ![String面试题1图解](http://wxhao2.duapp.com/blog/post-in/20130730/strmst1.png)
    
2. 下面这句话在内存中传建几个对象

    ``` 
    String s1 = new String("abc");
    ```
    
    ![String面试题2图解](http://wxhao2.duapp.com/blog/post-in/20130730/strmst2.png)
    
3. 判断定义为String类型的s1和s2是否相等

    ``` 
    String s1 = new String("abc");
    String s2 = "abc";
    System.out.println(s1==s2);
    System.out.println(s1.equals(s2));
    ```
    
4. 判断定义为String类型的s1和s2是否相等

    ``` 
    String s1 = "a"+"b"+"c";
    String s2 = " abc";
    System.out.println(s1==s2);
    System.out.println(s1.equals(s2));
    ```

5. 判断定义为String类型的s1和s2是否相等

    ``` 
    String s1 = "ab";
    String s2 = "abc";
    String s3 = s1+"c";
    System.out.println(s3==s2);
    System.out.println(s3.equals(s2));
    ```

    ![String面试题5图解](http://wxhao2.duapp.com/blog/post-in/20130730/strmst5.png)

```
package com.wxhao.string;

public class Demo3_String {
	public static void main(String[] args) {
		//demo1();
		//demo2();
		//demo3();
		//demo4();
		String s1 = "ab";
	    String s2 = "abc";
	    String s3 = s1+"c";
	    System.out.println(s3==s2);//false
	    System.out.println(s3.equals(s2));//true
	}

	private static void demo4() {
		String s1 = "a"+"b"+"c";//常量优化
	    String s2 = "abc";
	    System.out.println(s1==s2);//true
	    System.out.println(s1.equals(s2));//true
	}

	private static void demo3() {
		String s1 = new String("abc");
	    String s2 = "abc";
	    System.out.println(s1==s2);//false
	    System.out.println(s1.equals(s2));//true
	}

	private static void demo2() {
		// 创建了两个对象,一个在常量池中,一个在堆内存中
		String s1 = new String("abc");
	}

	private static void demo1() {
		String s1 = " abc";
		String s2 = " abc";
		System.out.println(s1 == s2);
		System.out.println(s1.equals(s2));
	}
}

```


### String类的判断功能

* boolean equals(Object obj);比较字符串的内容是否相容,区分大小写
* boolean equalsIngnoreCase(String str);比较字符串的内容是否相容,忽略大小写
* boolean contains(String str);判断大字符串中是否包含小字符串
* boolean startsWith(String str);判断字符串是否以某个指定的字符串开头
* boolean endsWith(String str);判断字符串是否以某个指定的字符串结尾
* boolean isEmpty(String str);判断字符串是否为空

```
package com.wxhao.string;

public class Demo4_String {

	public static void main(String[] args) {
//		demo1();
//		demo2();
		String s1 = "wxhao";
		String s2 = "";
		String s3 = null;
		
		System.out.println(s1.isEmpty());
		System.out.println(s2.isEmpty());
		//System.out.println(s3.isEmpty());//空对象,并不是空字符串
	}

	private static void demo2() {
		String s1 = "我是wxhao,嘿嘿";
		String s2 = "wxhao";
		String s3 = "sb";
		String s4 = "我是";
		String s5 = "嘿嘿";

		System.out.println(s1.concat(s2));// 判断是否包含字符串
		System.out.println(s1.concat(s3));
		System.out.println("---------");
		
		System.out.println(s1.startsWith(s4));//判断是否以传入字符串开头
		System.out.println(s1.startsWith(s5));
		System.out.println("---------");
		
		System.out.println(s1.endsWith(s4));//判断是否以传入字符串结尾
		System.out.println(s1.endsWith(s5));
	}

	private static void demo1() {
		String s1 = "wxhao";
		String s2 = "wxhao";
		String s3 = "Wxhao";

		System.out.println(s1.equals(s2));
		System.out.println(s1.equals(s3));
		System.out.println("------------");

		System.out.println(s1.equalsIgnoreCase(s2));
		System.out.println(s1.equalsIgnoreCase(s3));
		System.out.println("------------");
	}

}

```

### 模拟用户登录

* 需求:摸你登录,给三次机会,并提示还有几次
* 用户名和密码都是admin

```
package com.wxhao.test;

import java.util.Scanner;

public class Test1 {


	public static void main(String[] args) {
		
		Scanner sc = new Scanner(System.in);
		
		final String USERNAME= "admin";
		final String PASSWORD= "admin";
		
		String usernameIn=null;
		String passwordIn=null;
		
		for(int i = 0 ; i < 3 ; i++){
			System.out.println("请输入用户名:");
			usernameIn = sc.nextLine();
			System.out.println("请输入密码:");
			passwordIn = sc.nextLine();
			if(USERNAME.equals(usernameIn)&&PASSWORD.equals(passwordIn)){
				System.out.println("登录成功");
				break;
			}else{
				System.out.println("登录失败");
				if(i==2){
					System.out.println("你的错误次数已到到上限,请明天再来");
				}else{
					System.out.println("还有"+(2-i)+"次机会");
				}
			}
		}
	}

}

```

### String类的获取功能

* int length();获取字符串长度
* char charAt(int index);获取指定索引位置的字符
* int indexOf(int ch);返回指定字符在此字符串中第一次出现处的索引
* int indexOf(String str);返回指定字符在此字符串中第一次出现处的索引
* int indexOf(int ch ,int fromIndex);返回指定字符在此字符串中从指定位置后第一次出现处的索引
* int indexOf(String str,int fromIndex);返回指定字符在此字符串中从指定位置后第一次出现处的索引
* lastIndexOf
* String substring(int start);从指定位置开始截取字符串,默认到尾数
* String substring(int start,int end);从指定位置开始到指定位置结束截取字符串


### 字符串的遍历

```
package com.wxhao.test;

public class Test2 {

	public static void main(String[] args) {
		String s= "wxhao";
		for (int i = 0; i < s.length(); i++) {
			char c=s.charAt(i);//通过索引获取每一个字符
			System.out.println(c);
		}
	}

}
```

### 统计不同类型字符个数

* 需求:统计一个字符串中大写字母字符,小写字母字符,数字字符出现的次数,其他字符出现的次数
* ABCDEabcd123456!@#$%^

```
package com.wxhao.test;

public class Test3 {
	/**
	 * 分析:字符串是由字符组成的,而字符的值都是有范围的 通过范围来判断是否包含该字符
	 */
	public static void main(String[] args) {
		String s = "ABCDEabcd123456!@#$%^";
		int big = 0;
		int small = 0;
		int num = 0;
		int other = 0;
		for (int i = 0; i < s.length(); i++) {
			char c = s.charAt(i);
			if (c >= 'A' && c <= 'Z') {
				big++;
			} else if (c >= 'a' && c <= 'z') {
				small++;
			} else if (c >= '0' && c <= '9') {
				num++;
			} else {
				other++;
			}
		}
		System.out.println(big);
		System.out.println(small);
		System.out.println(num);
		System.out.println(other);
	}
}

```

### String类的转换功能

* String的转换功能:
    * byte[] getBytes();把字符串转换为字节数组
    * GBK码表一个中文代表两个字节,第一个字节为负数
    * char[] toCharArray();把字符串转换为字符数组
    * static String valueOf(char[] chs);吧字符数组专程字符串
    * static String valueOf(int i);把int类型的数据转成字符串
        * 注意:String 类的valueOf可以把任意类型的数据转成字符串
    * String toLowerCase();把字符串转成小写
    * String toUpperCase();把字符串转成大写
    * String concat(String str);把字符串拼接

### 按需求转换字符

* 需求
    * 把一个字符串的首字母转成大写,其余为小写

```
package com.wxhao.test;

public class Test4 {
	/**
	 * 链式编程:只要保证每次调用完成方法返回的是对象,就可以继续调用
	 */
	public static void main(String[] args) {
		String s = "woshiYIGEDASHUAIBI";
		String str = s.substring(0, 1).toUpperCase().concat(s.substring(1).toLowerCase());
		System.out.println(str);
	}
}

```

### String 类的其他功能

```
package com.wxhao.string;

public class Demo7_StringMethod {

	public static void main(String[] args) {

		String s1 = "a";
		String s2 = "aaaa";

		int num = s1.compareTo(s2);// 码表值比较
		System.out.println(num);

		String s3 = "吴";
		String s4 = "浩";

		int num2 = s3.compareTo(s4);
		System.out.println(num2);

		System.out.println('吴' + 0);// 查找的是Unicode码表值
		System.out.println('浩' + 0);

		
		String s5="wxhao";
		String s6="WXHAO";
		
		int num3=s5.compareTo(s6);
		System.out.println(num3);
		int num4=s5.compareToIgnoreCase(s6);
		System.out.println(num4);
	}
}

```

### 字符串反转

* 举例:输入"abc",输出"cba"

```
package com.wxhao.test;

import java.util.Scanner;

public class Test6 {

	public static void main(String[] args) {
		Scanner sc=new Scanner(System.in);
		String str=sc.nextLine();
		char[] cs=str.toCharArray();
		int length=cs.length;
		char[] newCs=new char[length];
		for (int i = 0; i < length; i++) {
			newCs[length-i-1]=cs[i];
		}
		System.out.println(String.valueOf(newCs));
	}

}

```

### 在大串中查找小串出现的次数代码实现

```
package com.wxhao.test;

public class Test7_String {

	public static void main(String[] args) {
		String s="woshiwxhao,woailyy,hahaah,wxhao,lyyheihh lyy";
		String value="lyy";
		int count=0;
		int i=-1;
		do {
			i=s.indexOf(value);
			s=s.substring(i+value.length());
//			System.out.println(i);
//			System.out.println(s);
			count++;
		} while (i>-1&&!s.isEmpty());
		System.out.println(count);
	}
}

```


