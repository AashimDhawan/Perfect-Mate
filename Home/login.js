function f1()
{
	var a="as20@gmail.com";
	var b=12345678;
	var x="abc@gmail.com";
	var y=123456789;
	var u=document.getElementById('user').value;
	var p=document.getElementById('pass').value;
	if((a==u)&&(b==p))
	{
		window.open("main.html","_self");
	}
	else if((x==u)&&(y==p))
	{
		window.open("main2.html","_self");
	}
	else
	{
		alert("Username or password invalid");
		console.log("yo");
	}
}
