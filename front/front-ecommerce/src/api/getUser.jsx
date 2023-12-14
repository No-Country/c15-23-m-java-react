
const getUser = async () =>{  
    try{    
        const url = 'https://shopswiftly-user-service-com.onrender.com/users/1'
        const userJson = await fetch(url)
        const user = await userJson.json()
        return user    
    }
    catch (err) {
        console.log(err);
    }
}

export { getUser }