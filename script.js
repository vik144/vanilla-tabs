function hideClass(className) {
	var contents = document.getElementsByClassName(className);
	console.log(contents);
	for (let i of contents){
		i.style.display = "none";
		// console.log(i);
	}
}
function showContent(id){
	hideClass('content');
	var content = document.getElementById(id);
	content.style.display = "block";
}

