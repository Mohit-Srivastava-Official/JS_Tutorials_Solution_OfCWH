//4.JavaScript code to change background of all <li> tags to cyan
var x= document.querySelectorAll("li");
for(let i=0;i<x.length;i++)
{
    x[i].style.backgroundColor="cyan";
}
//5.Which of the following is used to look for the farthest ancestor that matched a given css selector
//Ans:The :host-context() pseudo-class selector is used to look for the farthest ancestor that matched a given CSS selector
