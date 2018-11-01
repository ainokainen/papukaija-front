import axios from 'axios';

var apiBaseUrl = 'http://localhost:52307/api/';

export function LoginController (data, callback){
    console.log('HaeKayttaja')
    console.dir(data);
    var uname = data.Email;
    var pass = data.Salasana;
    
    console.log(data);
    axios.post(apiBaseUrl+'login',  {
        Email: uname,
        Salasana: pass
    }
    ).then(function(response) {
        // console.log('Authenticated');
        // data.isLogin = true;
        // data.ID = response.data.ID;
        callback(response.data)
        // console.log(data)
    }).catch(function(error) {
  console.log('Error on Authentication' +error);
});
}

export function HaeKayttaja (id, callback){
   console.log('axios')
   //Huomioi! DummyID!
   axios.get('http://localhost:52307/api/kayttajat/'+id)
   .then(function(response){
       callback(response.data);
   });
}

export function LisaaKayttaja (item){
   console.log("axios")
   axios.post('http://localhost:52307/api/kayttajat', item)
   .then(function (response){
       if(response.status === 200){
           console.log("Log in succeeded")
       } else if (response.status === 201) {
           console.log("User created");
       }
       else {
           console.log("Something went wrong" +response.status);
       }
   })
   .catch(function (error) {
       console.log(error);
   });
}

export function LisaaTehtava (item, callback){
   console.log("axios lisää tehtävä")
   axios.post('http://localhost:52307/api/Tehtavat', item)
   .then(function (response){
      if (response.status === 201) {
           console.log("Tehtävä luotu");
       }
       else {
           console.log("Something went wrong" +response.status);
       }
   })
   .catch(function (error) {
       console.log(error);
   })
   .then(callback);
}

export function MuokkaaTehtavaa (item, callback){
    axios.put('http://localhost:52307/api/Tehtavat/' + item.TehtavaID, item)
    .then(function (response){
        if (response.status === 201) {
            console.log("Tehtävä muokattu");
        }
        else {
            console.log("Something went wrong" +response.status);
        }
    })
    .catch(function (error) {
        console.log(error);
    })
    .then(callback);
}

export default {HaeKayttaja , LoginController};
