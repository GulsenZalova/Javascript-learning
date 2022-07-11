
class JokeApi{
    constructor(){
        this.baseURL= "https://api.chucknorris.io";
        this.axiosnesne=axios.create({
          baseURL: this.baseURL
        })

    }
    async randomMelumatGetir(){
         const melumatresponse=await this.axiosnesne.get("/jokes/random")  
         console.log(melumatresponse.data.value)
         return melumatresponse.data.value
    }

}
