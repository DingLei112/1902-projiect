<?php
	require "conn.php";//引入数据库连接的文件
	
	//1.获取前端传来的做唯一匹配的值
	//判断是否传过来了

	//isset($_POST['submit']):为了提交表单数据到数据同时做检测.
	if(isset($_POST['username']) || isset($_POST['submit'])){
		$username=@$_POST['username'];
	}else{
		exit('非法操作');
	}
	
	$query="select * from login where username='$username'";
	$result=mysql_query($query);
	if(mysql_fetch_array($result)){//如果有值代表用户名存在。
		echo 'false';//有重复
	}else{

		echo 'true';//没有重复
	}
	//2.如果单击注册按钮,按钮的值为注册,将表单的值添加到数据库.
	if(isset($_POST['submit']) && $_POST['submit']=="注册"){
		$user=$_POST['username'];//username：表单的名称
		$pass=md5($_POST['password']);
		$iphone=$_POST['iphone'];
		//添加语句
		$query="insert login(uid,username,password,iphone,regdate) values(null,'$user','$pass','$iphone',NOW())";
		mysql_query($query);
		header('location:../src/login.html');//页面的跳转
	}
?>