window.addEventListener('load',function(){
	// 抓取box
	let box=document.querySelector('.box');
	// 绑定鼠标按着事件
	box.addEventListener('mousedown',function(e){
		let ol=e.offsetX;
		let xl=e.offsetY;
		document.addEventListener('mousemove',fn);
		box.addEventListener('mouseup',function(){
			document.removeEventListener('mousemove',fn);
		})
		function fn(e){
			let lefts=e.clientX-ol;
			let tops=e.clientY-xl;
			box.style.left=`${lefts}px`;
			box.style.top=`${tops}px`;
		}
	})
})
