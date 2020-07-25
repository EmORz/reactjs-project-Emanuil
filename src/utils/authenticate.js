
const authenticate = async (url, body, onSuccess, onFailure)=>{

    try{
        const promise =  await fetch(url, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
           
          });

          const authToken = promise.headers.get('Authorization')
          document.cookie = `x-auth-token=${authToken}`

          const response = await promise.json()

          if(response.username && authToken){
              onSuccess()
          }


    }catch(e){
        onFailure(e)

    }
}

export default authenticate