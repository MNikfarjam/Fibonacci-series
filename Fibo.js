do{
		N=prompt("Enter final Number Of Series",1);
		}while(N<0)
		A=0;
		B=1;
		C=1;
		document.write("<div>")
		while(C<=N){
			document.write("<span>"+B+"</span>");
			C=A+B;
			A=B;
			B=C;	
		}
		document.write("</div>")
		