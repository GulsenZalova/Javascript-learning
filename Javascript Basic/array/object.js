

// function assignt(selector, _props){
//     item=document.querySelector(selector);
//    for(let prop in _props){
//        item.style[prop]=_props[prop]
//    }
// }

// assignt('.box',{
//     width:"200px",
//     height:"200px",
//     background:"red",
// })
// assignt('.box2',{
//     width:"300px",
//     height:"300px",
//     background:"green",
// })
// assignt('.box3',{
//     width:"100px",
//     height:"100px",
//     background:"violet",
// })



a={
    prop1:"200px",
    prop2:"200px",
}

b={
    prop3:"red",
}

c={
    prop4:"200px",
}

b.__proto__ = a
c.__proto__= a