window.onload=function(){
	let textarea=document.querySelector('textarea');
	let button=document.querySelector('button');
	let bottom=document.querySelector('.bottom');
	button.onclick=function(){
		let bottom1 =document.createElement('div');
		bottom1.style.cssText=`width:100%; border:1px solid skyblue;font-size:20px;color:#ff6700;`;
		bottom.appendChild(bottom1);
		bottom1.innerHTML=textarea.value;
		textarea.value=null;

	}
}
