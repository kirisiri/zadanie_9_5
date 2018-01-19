var withButtonClass = document.getElementsByClassName('button');
console.log(withButtonClass.length);
var buttonLen = withButtonClass.length;
for ( var i = 0 ; i < buttonLen ; i++ ) {
	console.log(withButtonClass[i].innerText); 
}
