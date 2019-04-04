function f1()
{
	var a="as20@gmail.com";
	var b=12345678;
	var u=document.getElementById('user').value;
	var p=document.getElementById('pass').value;
	if((a==u)&&(b==p))
	{
		window.open("main.html","_self");
	}
	else
	{
		alert("Username or password invalid");
		console.log("yo");
	}
}
