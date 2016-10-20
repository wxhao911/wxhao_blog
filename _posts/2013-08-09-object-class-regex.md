---
layout:     post
title:      "正则表达式"
subtitle:   "JavaSE之常见对象"
date:       2013-08-09
author:     "Wxhao"
header-img: "img/post-bg/black-sky.jpg"
catalog:    true
tags:
    - 基础知识 
    - java
    - JAVASE
---

### 正则表达式的概述和简单使用 
* A:正则表达式
	* 是指一个用来描述或者匹配一系列符合某个语法规则的字符串的单个字符串。其实就是一种规则。有自己特殊的应用。
	* 作用:比如注册邮箱,邮箱有用户名和密码,一般会对其限制长度,这个限制长度的事情就是正则表达式做的
* B:案例演示
	* 需求：校验qq号码.
		* 1:要求必须是5-15位数字
		* 2:0不能开头
		* 3:必须都是数字
		
	* a:非正则表达式实现
	* b:正则表达式实现

```
package com.wxhao.regex;

public class Demo1_Regex {

	public static void main(String[] args) {
		System.out.println(checkQQ("012345"));
		System.out.println(checkQQ("a1b345"));
		System.out.println(checkQQ("123456"));
		System.out.println(checkQQ("1234567890987654321"));
		
		String regex = "[1-9]\\d{4,14}";
		System.out.println("2553868".matches(regex));
		System.out.println("012345".matches(regex));
		System.out.println("2553868abc".matches(regex));
	}
	
	/*
	 * 需求：校验qq号码.
	 * 1:要求必须是5-15位数字
	 * 2:0不能开头
	 * 3:必须都是数字
	 * 校验qq
	 * 1,明确返回值类型boolean
	 * 2,明确参数列表String qq
	 */
	public static boolean checkQQ(String qq) {
		boolean flag = true;					//如果校验qq不符合要求就把flag置为false,如果符合要求直接返回
		
		if(qq.length() >= 5 && qq.length() <= 15) {
			if(!qq.startsWith("0")) {
				char[] arr = qq.toCharArray();	//将字符串转换成字符数组
				for (int i = 0; i < arr.length; i++) {
					char ch = arr[i];			//记录每一个字符
					if(!(ch >= '0' && ch <= '9')) {
						flag = false;			//不是数字
						break;
					}
				}
			}else {
				flag = false;					//以0开头,不符合qq标准
			}
		}else {
			flag = false;						//长度不符合
		}
		return flag;
	}
}
```

### 字符类演示 
* A:字符类
    * []单个字符
	* [abc] a、b 或 c（简单类） 
	* [^abc] 任何字符，除了 a、b 或 c（否定） 
	* [a-zA-Z] a到 z 或 A到 Z，两头的字母包括在内（范围） 
	* [0-9] 0到9的字符都包括

```
package com.wxhao.regex;

public class Demo2_Regex {

	/**
	 * [abc] a、b 或 c（简单类） 
		[^abc] 任何字符，除了 a、b 或 c（否定） 
		[a-zA-Z] a 到 z 或 A 到 Z，两头的字母包括在内（范围） 
		[a-d[m-p]] a 到 d 或 m 到 p：[a-dm-p]（并集） 
		[a-z&&[def]] d、e 或 f（交集） 
		[a-z&&[^bc]] a 到 z，除了 b 和 c：[ad-z]（减去） 
		[a-z&&[^m-p]] a 到 z，而非 m 到 p：[a-lq-z]（减去） 

	 */
	public static void main(String[] args) {
		//demo1();
		//demo2();
		//demo3();
		//demo4();
		//demo5();
		//demo6();
		String regex = "[a-z&&[^m-p]]";
		System.out.println("m".matches(regex));
		System.out.println("a".matches(regex));
		System.out.println("z".matches(regex));
		System.out.println("n".matches(regex));
	}

	private static void demo6() {
		String regex = "[a-z&&[^bc]]";
		System.out.println("a".matches(regex));
		System.out.println("b".matches(regex));
		System.out.println("1".matches(regex));
	}

	private static void demo5() {
		String regex = "[a-z&&[def]]";						//取交集
		System.out.println("a".matches(regex));
		System.out.println("d".matches(regex));
	}

	private static void demo4() {
		String regex = "[a-d[m-p]]";
		System.out.println("a".matches(regex));
		System.out.println("m".matches(regex));
		System.out.println("n".matches(regex));
	}

	private static void demo3() {
		String regex = "[a-zA-Z]";
		System.out.println("a".matches(regex));
		System.out.println("A".matches(regex));
		System.out.println("z".matches(regex));
		System.out.println("Z".matches(regex));
		System.out.println("1".matches(regex));
		System.out.println("%".matches(regex));
	}

	private static void demo2() {
		String regex = "[^abc]";
		System.out.println("a".matches(regex));
		System.out.println("b".matches(regex));
		System.out.println("c".matches(regex));
		System.out.println("d".matches(regex));
		System.out.println("1".matches(regex));
		System.out.println("%".matches(regex));
		System.out.println("10".matches(regex));		//10代表1字符和0字符,不是单个字符
	}

	private static void demo1() {
		String regex = "[abc]";					//[]代表单个字符
		System.out.println("a".matches(regex));
		System.out.println("b".matches(regex));
		System.out.println("c".matches(regex));
		System.out.println("d".matches(regex));
		System.out.println("1".matches(regex));
		System.out.println("%".matches(regex));
	}
}
```

### 预定义字符类演示
* A:预定义字符类
	* . 任何字符。
	* \d 数字：[0-9]
	* \w 单词字符：[a-zA-Z_0-9]

```
package com.wxhao.regex;

public class Demo3_Regex {

	/**
	 * 	. 任何字符
		\d 数字：[0-9] 
		\D 非数字： [^0-9] 
		\s 空白字符：[ \t\n\x0B\f\r] 
		\S 非空白字符：[^\s] 
		\w 单词字符：[a-zA-Z_0-9] 
		\W 非单词字符：[^\w] 

	 */
	public static void main(String[] args) {
		//demo1();
		//demo2();
		//demo3();
		//demo4();
		//demo5();
		//demo6();
		String regex = "\\W";
		System.out.println("a".matches(regex));
		System.out.println("z".matches(regex));
		System.out.println("_".matches(regex));
		System.out.println("%".matches(regex));
	}

	private static void demo6() {
		String regex = "\\w";
		System.out.println("a".matches(regex));
		System.out.println("z".matches(regex));
		System.out.println("_".matches(regex));
		System.out.println("%".matches(regex));
	}

	private static void demo5() {
		String regex = "\\S";
		System.out.println(" ".matches(regex));
		System.out.println("	".matches(regex));
		System.out.println("a".matches(regex));
	}

	private static void demo4() {
		String regex = "\\s";
		System.out.println(" ".matches(regex));
		System.out.println("	".matches(regex)); 				//一个tab键
		System.out.println("    ".matches(regex)); 				//四个空格
	}

	private static void demo3() {
		String regex = "\\D";
		System.out.println("0".matches(regex));
		System.out.println("9".matches(regex));
		System.out.println("a".matches(regex));
	}

	private static void demo2() {
		String regex = "\\d";					//\代表转义字符,如果想表示\d的话,需要\\d
		System.out.println("0".matches(regex));
		System.out.println("a".matches(regex));
		System.out.println("9".matches(regex));
	}

	private static void demo1() {
		String regex = "..";
		System.out.println("a".matches(regex));
		System.out.println("ab".matches(regex));
	}
}
```

### 数量词 
* A:Greedy 数量词 
	* X? X，一次或一次也没有
	* X* X，零次或多次
	* X+ X，一次或多次
	* X{n} X，恰好 n 次 
	* X{n,} X，至少 n 次 
	* X{n,m} X，至少 n 次，但是不超过 m 次 

```
package com.wxhao.regex;

public class Demo4_Regex {

	/**
	 * Greedy 数量词 
		X? X，一次或一次也没有 
		X* X，零次或多次 
		X+ X，一次或多次 
		X{n} X，恰好 n 次 
		X{n,} X，至少 n 次 
		X{n,m} X，至少 n 次，但是不超过 m 次 
	 */
	public static void main(String[] args) {
		//demo1();
		//demo2();
		//demo3();
		//demo4();
		//demo5();
		String regex = "[abc]{5,15}";
		System.out.println("abcba".matches(regex));
		System.out.println("abcbaabcabbabab".matches(regex));
		System.out.println("abcb".matches(regex));
		System.out.println("abcbaabaabcbaaba".matches(regex));
	}

	public static void demo5() {
		String regex = "[abc]{5,}";
		System.out.println("abcba".matches(regex));
		System.out.println("abcbaabcabbabab".matches(regex));
		System.out.println("abcb".matches(regex));
		System.out.println("abcbaaba".matches(regex));
	}

	public static void demo4() {
		String regex = "[abc]{5}";
		System.out.println("abcba".matches(regex));
		System.out.println("abcbaabcabbabab".matches(regex));
		System.out.println("abcb".matches(regex));
		System.out.println("abcbaaba".matches(regex));
	}

	public static void demo3() {
		String regex = "[abc]+";
		System.out.println("".matches(regex));
		System.out.println("a".matches(regex));
		System.out.println("aaaaabbbbccccc".matches(regex));
	}

	public static void demo2() {
		String regex = "[abc]*";
		System.out.println("".matches(regex));
		System.out.println("abc".matches(regex));
		System.out.println("a".matches(regex));
	}

	public static void demo1() {
		String regex = "[abc]?";
		System.out.println("a".matches(regex));
		System.out.println("b".matches(regex));
		System.out.println("c".matches(regex));
		System.out.println("d".matches(regex));
		System.out.println("".matches(regex));
	}
}
```

### 正则表达式的分割功能 
* A:正则表达式的分割功能
	* String类的功能：public String[] split(String regex)
* B:案例演示
	* 正则表达式的分割功能

```
package com.wxhao.regex;

public class Demo5_Split {

	public static void main(String[] args) {
		String s = "金三胖.郭美美.李dayone";
		String[] arr = s.split("\\.");				//通过正则表达式切割字符串
		
		for (int i = 0; i < arr.length; i++) {
			System.out.println(arr[i]);
		}
		
		System.out.println("11111111111111111");
	}
}
```

### 把给定字符串中的数字排序 
* A:案例演示
	* 需求：我有如下一个字符串:”91 27 46 38 50”，请写代码实现最终输出结果是：”27 38 46 50 91”

```
package com.wxhao.test;

import java.util.Arrays;

public class Test1 {

	/**
	 * 分析:
	 * 1,将字符串切割成字符串数组
	 * 2,将字符串转换成数字并将其存储在一个等长度的int数组中
	 * 3,排序
	 * 4,将排序后的结果遍历并拼接成一个字符串
	 */
	public static void main(String[] args) {
		String s = "91 27 46 38 50";
		//1,将字符串切割成字符串数组
		String[] sArr = s.split(" ");
		//2,将字符串转换成数字并将其存储在一个等长度的int数组中
		int[] arr = new int[sArr.length];
		for (int i = 0; i < arr.length; i++) {
			arr[i] = Integer.parseInt(sArr[i]); 	//将数字字符串转换成数字
		}
		
		//3,排序
		Arrays.sort(arr);
		
		//4,将排序后的结果遍历并拼接成一个字符串27 38 46 50 91
		/*String str = "";
		for (int i = 0; i < arr.length; i++) {
			if(i == arr.length - 1) {
				str = str + arr[i];				//27 38 46 50 91
			}else {
				str = str + arr[i] + " ";		//27 38 46 50 
			}
		}
		
		System.out.println(str);*/
		
		StringBuilder sb = new StringBuilder();
		for (int i = 0; i < arr.length; i++) {
			if(i == arr.length - 1) {
				sb.append(arr[i]);
			}else {
				sb.append(arr[i] + " ");
			}
		}
		
		System.out.println(sb);
	}
}
```

### 正则表达式的替换功能 
* A:正则表达式的替换功能
	* String类的功能：public String replaceAll(String regex,String replacement)
* B:案例演示
	* 正则表达式的替换功能

```
package com.wxhao.regex;

public class Demo6_ReplaceAll {

	/**
	 * * A:正则表达式的替换功能
	 * String类的功能：public String replaceAll(String regex,String replacement)
	 */
	public static void main(String[] args) {
		String s = "wo111ai222wxhao";
		String regex = "\\d";			//\\d代表的是任意数字
		
		String s2 = s.replaceAll(regex, "");
		System.out.println(s2);
	}
}
```

### 正则表达式的分组功能 
* A:正则表达式的分组功能
	* 捕获组可以通过从左到右计算其开括号来编号。例如，在表达式 ((A)(B(C))) 中，存在四个这样的组： 
* 
		1     ((A)(B(C))) 
		2     (A 
		3     (B(C)) 
		4     (C) 
	
		组零始终代表整个表达式。
B:案例演示
	a:切割
		需求：请按照叠词切割： "sdqqfgkkkhjppppkl";
	b:替换
		需求：我我....我...我.要...要要...要学....学学..学.编..编编.编.程.程.程..程
		将字符串还原成:“我要学编程”。

```
package com.wxhao.regex;

public class Demo7_Regex {

	public static void main(String[] args) {
		//demo1();
		//demo2();
		
		/*
		 * 需求：我我....我...我.要...要要...要学....学学..学.编..编编.编.程.程.程..程
				将字符串还原成:“我要学编程”。
		 */
		String s = "我我....我...我.要...要要...要学....学学..学.编..编编.编.程.程.程..程";
		String s2 = s.replaceAll("\\.+", "");
		String s3 = s2.replaceAll("(.)\\1+", "$1");	//$1代表第一组中的内容
		System.out.println(s3);
	}

	public static void demo2() {
		//需求：请按照叠词切割： "sdqqfgkkkhjppppkl";
		String s = "sdqqfgkkkhjppppkl";
		String regex = "(.)\\1+";					//+代表第一组出现一次到多次
		String[] arr = s.split(regex);
		
		for (int i = 0; i < arr.length; i++) {
			System.out.println(arr[i]);
		}
	}

	public static void demo1() {
		//叠词 快快乐乐,高高兴兴
		/*String regex = "(.)\\1(.)\\2";					//\\1代表第一组又出现一次	\\2代表第二组又出现一次
		System.out.println("快快乐乐".matches(regex));
		System.out.println("快乐乐乐".matches(regex));
		System.out.println("高高兴兴".matches(regex));
		System.out.println("死啦死啦".matches(regex));*/
		
		//叠词 死啦死啦,高兴高兴
		String regex2 = "(..)\\1";
		System.out.println("死啦死啦".matches(regex2));
		System.out.println("高兴高兴".matches(regex2));
		System.out.println("快快乐乐".matches(regex2));
	}
}
```

### Pattern和Matcher的概述 
* A:Pattern和Matcher的概述
* B:模式和匹配器的典型调用顺序
	* 通过JDK提供的API，查看Pattern类的说明

	* 典型的调用顺序是 
	* Pattern p = Pattern.compile("a*b");
	* Matcher m = p.matcher("aaaaab");
	* boolean b = m.matches();

### 正则表达式的获取功能
* A:正则表达式的获取功能
	* Pattern和Matcher的结合使用
* B:案例演示
	* 需求：把一个字符串中的手机号码获取出来

```
package com.wxhao.regex;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Demo8_Pattern {

	/**
	 * Pattern p = Pattern.compile("a*b");
		 Matcher m = p.matcher("aaaaab");
		 boolean b = m.matches();
	 */
	public static void main(String[] args) {
		//demo1();
		String s = "我的手机是18988888888,我曾用过18987654321,还用过18812345678";
		String regex = "1[3578]\\d{9}";
		
		
		Pattern p = Pattern.compile(regex);
		Matcher m = p.matcher(s);
		
		/*boolean b1 = m.find();
		System.out.println(b1);
		System.out.println(m.group());
		
		boolean b2 = m.find();
		System.out.println(b2);
		System.out.println(m.group());*/
		
		while(m.find())
			System.out.println(m.group());
	}

	public static void demo1() {
		Pattern p = Pattern.compile("a*b");	//获取到正则表达式
		Matcher m = p.matcher("aaaaab");	//获取匹配器
		boolean b = m.matches();			//看是否能匹配,匹配就返回true
		
		System.out.println(b);
		
		System.out.println("aaaaab".matches("a*b")); //与上面的结果一样
	}
}
```

```
package com.wxhao.util;

public class RegexUtil {
	/**
	 * 条件字符
	 * a-z A-Z 0-9
	 * 
	 * 
	 * 预定义字符
	 * . 任何字符
	 * \d 数字：[0-9]
	 * \D 数字：[0-9]
	 * \s 空白字符: [ \t\n\x0B\f\r]
	 * \S 非空白字符: [^\s]
	 * \w 单词字符：[a-zA-Z_0-9]
	 * \W 非单词字符：[^\w]
	 * 
	 * 逻辑字符
	 * []   &&   ||   ^
	 */
	
	/**
	 *  数量词    跟在 条件字符后面
		条件字符 ? 一次或一次也没有  如:[abc]?
		条件字符 * 零次或多次 
		条件字符 + 一次或多次 
		条件字符 {n} 恰好 n 次 
		条件字符 {n,} 至少 n 次 
		条件字符 {n,m} 至少 n 次，但是不超过 m 次 
	 */
	
	/**分组
	 * (.)\\1(.)\\2    	xxyy
	 * (.)\\1+ 			.出现一次以上  1代表再来一次  +代表出现一次或多次
	 * (..)\\1   		xyxy
	 * 
	 * $1 第一组的东西
	 * $2 第二组的东西
	 */
	
	/**
	 * 纯数字
	 */
	public static final String PURE_NUMBER="[1-9]";
	/**
	 * 纯字母
	 */
	public static final String PURE_LETTER="[a-z]";
	
	public static boolean check(String str , String regex){
		boolean flag=true;
		if(str!=null&&!str.isEmpty()){
			return str.matches(regex);
		}
		return flag;
	}
	
	
	public static void main(String[] args) {
		String xx="oxs";
		System.out.println(xx.matches(""));
	}
}
```