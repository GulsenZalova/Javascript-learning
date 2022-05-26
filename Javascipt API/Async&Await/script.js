function fn(){
    return new Promise.resolve("hello")
}

fn()
.then(res => console.log(res))