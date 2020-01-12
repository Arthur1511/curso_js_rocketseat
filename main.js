axios.get('https://api.github.com/users/Arthur1511')
    .then(function(response){
        console.log(response);
    })
    .catch(function(error){
        console.warn(error);
    })

