var a=parseInt(prompt("count number"));
			var c=0;
			
			for(i=0;a!=0;i++){
				b=a%10;
				a=(a-b)/10;
				c=c*10+b;
			}
				document.write(c)