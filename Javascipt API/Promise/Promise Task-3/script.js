
function getUser(id){
    console.log(`${id}li istifadəçinin məlumatları gətirilir.`)
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve ({name:"Gülşən", id:id})
        },3000)
    })
}

function getCourse(userName){
    console.log(`${userName} adlı istifadəçinin məlumatları gətirilir.`)

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve (["HTML","CSS","Javascript"])
        },3000)
    })
}


function getComment(kursadı){
    console.log(`${kursadı} adlı kursun rəyləri gətirilir.`)
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            // resolve ("Kurs əladır")
            reject ("Problem var")
        })
    })
}


getUser(123).then(user=>{
    getCourse(user.name).then(kurslar=>{
        getComment(kurslar[0]).then(comment=>{
            console.log(comment)
        })
    })
})


getUser(123)
            .then(user=>getCourse(user.name))
            .then(kurslar=>getComment(kurslar[0]))
            .then(comment=>console.log(comment))
            .catch(error=>console.log(error))


async function commentShow(){
   try{
    const nameobj = await getUser(1222)
    const kurslar= await getCourse(nameobj.name)
    const comment= await getComment(kurslar[0])
    console.log(comment)
   }
   catch(error){
    console.log(error)
   }

}     

commentShow()