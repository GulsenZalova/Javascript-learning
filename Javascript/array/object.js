

function assignt(selector, _props){
    item=document.querySelector(selector);
   for(let prop in _props){
       item.style[prop]=_props[prop]
   }
}

assignt('.box',{
    width:"200px",
    height:"200px",
    background:"red",
})
assignt('.box2',{
    width:"300px",
    height:"300px",
    background:"green",
})
assignt('.box3',{
    width:"100px",
    height:"100px",
    background:"violet",
})