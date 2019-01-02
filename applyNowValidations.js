var sname=document.getElementById('sname');
	var smail=document.getElementById('smail');
	var sname_error=document.getElementById('sname_error');
	var smail_error=document.getElementById('smail_error');
function applyFunc(){
	var alphaReg=/^[A-Za-z\s]+$/;
	var emailReg=/^\w+.@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
	if(sname.value==""){
		sname.style.border= "1px solid red";
		sname_error.textContent= "Candidate Name required";
		sname_error.style.margin= "0px 0px 0px 62px";
		sname_error.style.visibility= "visible";
		sname.focus();
		return false;
	}else if(!sname.value.match(alphaReg)){
		sname.style.border= "1px solid red";
		sname_error.innerHTML= "Enter a valid Candidate Name";
		sname_error.style.margin= "0px 0px 0px 77px";	
		sname_error.style.visibility= "visible";
		sname.focus();
		return false;
	}else if(smail.value==""){
		smail.style.border= "1px solid red";
		smail_error.innerHTML="EmailId required";
		smail_error.style.visibility= "visible";
		smail_error.style.margin= "0px 0px 0px 38px";
		smail.focus();
		return false;
	}else if(!smail.value.match(emailReg)){
		smail.style.border= "1px solid red";
		smail_error.innerHTML= "Enter a valid EmailId";
		smail_error.style.margin= "0px 0px 0px 50px";	
		smail_error.style.visibility= "visible";
		smail.focus();
		return false;
	}
}

function changeBorder(a){
	a.style.border = "none";
        smail_error.style.visibility= "hidden";
        sname_error.style.visibility= "hidden";
}
