    <!DOCTYPE html>
        <html>
        <head>
        9999乘法表
        </head>
        <body>
            <%!
		String printMultiTable() {
			String s ="";
			for(int i = 1; i <= 9; i++){
				for(int j = 1; j <= 9; j++){
					s += i + "*" + j + "=" + (i * j) + &nbsp;&nbsp;&nbsp;&nbsp;
				}
				s +="<br>";
			}
			return s;
		}
		%>
        <h1>九九乘法表</h1>
        </body>
        </html>
