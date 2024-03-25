let luke = {}
fetch('https://swapi.dev/api/people/1/')

    .then(function (response){
        return response.json()
    })
    .then(function(res){
        console.log(res)
        luke = res
        console.log(res.films)
        const [film1,film2,film3,...otherMovies] = luke.films
        console.log(film2)
        console.log(otherMovies)
        luke.films.forEach((element,i) => {
            console.log(element,i)
        });
        
    })