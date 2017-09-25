window.onload=function(){
	// let small=document.querySelector('.small');
	// let big=document.querySelector('.big img');
	let small=document.getElementsByClassName('small')[0];
	let big1=document.getElementsByClassName('big')[0];
	let big=big1.getElementsByTagName('img')[0];
	let opacity=document.querySelector('.small .opacity')
	let zhezhao=document.getElementsByClassName('zhezhao')[0];

	let bili=big.offsetWidth/(small.offsetWidth);
	let sw=small.offsetWidth,
		sh=small.offsetHeight,
		zw=zhezhao.offsetWidth,
		zh=zhezhao.offsetHeight;
	opacity.onmousemove=function(e){		
		let ox=e.offsetX-zw/2;
		let oy=e.offsetY-zh/2;
		if(ox>=sw-zw){
			ox=sw-zw;
		}
		if(ox<0){
			ox=0;
		}
		if(oy>sh-zh){
			oy=sh-zh;
		}
		if(oy<0){
			oy=0;
		}
		
		zhezhao.style.left=ox+`px`;
		zhezhao.style.top=oy+`px`;
		big.style.left=`${-ox*bili}px`;
		big.style.top=`${-oy*bili}px`;
		
	}
}
