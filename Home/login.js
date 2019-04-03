function f1()
{
	var a="as20@gmail.com";
	var b=12345678;
	var c=parseInt(b);
	var u=document.getElementById('user').value;
	var p=document.getElementById('pass').value;
	var p1=parseInt(p);
	if((a==u)&&(c==p1))
	{
		window.open("main.html","_self");
	}
	else
	{
		alert("Username or password invalid");
		console.log("yo");
	}
}
