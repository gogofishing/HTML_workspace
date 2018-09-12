<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>GET&POST METHOD</title>
</head>
<body>
<h1>使用GET方法</h1>
<form action="method.jsp" method="get">
用户名:<input type="text" name="username"><br />
Email:<input type="text" name="email"><br />
<input type="submit" value="GET提交">
</form>
<form action="method.jsp" method="post">
用户名:<input type="text" name="username"><br />
Email:<input type="text" name="email"><br />
<input type="submit" value="POST提交">
</form>
<h1>复选框数据处理实例</h1>
<form action="checkbox.jsp" method="post">
<input type="checkbox" name="maths" checked="checked" />数学 <br />
<input type="checkbox" name="physics" checked="checked" />物理 <br />
<input type="checkbox" name="chemistry" checked="checked" />化学 <br />
<input type="submit" value="提交">
</form>
</body>
</html>