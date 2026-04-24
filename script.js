const heading=document.createElement("h1");
heading.id="sizeInfo";
// heading.innerHTML="<span>Width: x and Height: y</span>";
document.body.appendChild(heading);
function updatesize() {
	heading.innerHTML=`<span>Width: ${window.innerWidth} and Height: ${window.innerHeight}</span>`
}
updatesize()
window.addEventListener("resize",updatesize)