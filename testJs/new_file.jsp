<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page import="java.io.*,java.util.*" %>
<%
Date createTime = new Date(session.getCreationTime());
Date lastTime = new Date(session.getLastAccessedTime());
String title = "再次访问session实例";
int visitCount = 0;
String visitCountKey = new String("visitCount");
String userIdKey = new String("userID");
String userID = new String("wjh");
if(session.isNew()) {
	title = "session新实例";
	session.setAttribute(userIdKey, userID);
	session.setAttribute(visitCountKey, visitCount);
}
else {
	visitCount = (int)session.getAttribute(visitCountKey);
	userID = (String)session.getAttribute(userIdKey);
	session.setAttribute(userIdKey, userID);
}

/* else {
	visitCount = (int)session.getAttribute(visitCountKey);
	visitCount++;
	session.setAttribute(visitCountKey, visitCountKey);
} */
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Session track</title>
</head>
<body>
<h1>Session 跟踪</h1>

<table border="1" align="center"> 
<tr bgcolor="#949494">
   <th>Session 信息</th>
   <th>值</th>
</tr> 
<tr>
   <td>id</td>
   <td><% out.print( session.getId()); %></td>
</tr> 
<tr>
   <td>创建时间</td>
   <td><% out.print(createTime); %></td>
</tr> 
<tr>
   <td>最后访问时间</td>
   <td><% out.print(lastTime); %></td>
</tr> 
<tr>
   <td>用户 ID</td>
   <td><% out.print(userID); %></td>
</tr> 
<tr>
   <td>访问次数</td>
   <td><% out.print(visitCount); %></td>
</tr> 
</table> 
</body>
</html>