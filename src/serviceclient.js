import axios from 'axios';

export function HaeKayttaja (callback){
   console.log('axios')
   //Huomioi! DummyID!
   axios.get('http://localhost:52307/api/kayttajat/2')
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

export function LisaaTehtava (item){
   console.log("axios")
   axios.post('http://localhost:52307/api/Tehtavat', item)
   .then(function (response){
       if(response.status === 200){
           console.log("Log in succeeded")
       } else if (response.status === 201) {
           console.log("Tehtävä luotu");
       }
       else {
           console.log("Something went wrong" +response.status);
       }
   })
   .catch(function (error) {
       console.log(error);
   });
}

export default {LisaaKayttaja, LisaaTehtava, HaeKayttaja};
