const search = document.querySelector('.search-box')
const search_btn = document.querySelector('.search-button')
const q = search.value
const display = document.querySelector('.display')
const config1 = {
    method: 'GET',
    headers: {
        'Accept': 'application/json'

    }
}
const placehold = async () => {
    try {
        const pr1 = await fetch('https://icanhazdadjoke.com/', config1)
        const data1 = await pr1.json()
        const joke = data1.joke
        search.placeholder = `Joke of the day:${joke}`


    }
    catch (err) {
        console.log(err)
    }


}
placehold()
const config2 = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '5dadb60719msh7041557f9f1aa59p1ce1a7jsna0d6acd2bd75',
        'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
    }
};
search_btn.addEventListener('click', async (q) => {
    try {
        const pr2 = await fetch(`https://online-movie-database.p.rapidapi.com/auto-complete?q=${search.value}`, config2)
        const data2 = await pr2.json()
        for (const movie of (data2.d)) {
            let div_1 = document.createElement('div')
            let img = document.createElement('img')
            let title = document.createElement('p')
            let cast = document.createElement('p')
            let year = document.createElement('p')
            let type = document.createElement('p')
            let rank = document.createElement('p')
            img.src = movie.i.imageUrl
            title.innerHTML = movie.l
            title.style.fontWeight = 'bolder'
            cast.innerHTML = `Cast: ${movie.s}`
            if(movie.yr){ year.innerHTML = movie.yr}
           
            if (movie.q) {
                type.innerHTML = movie.q
                type.style.fontStyle = 'italic'
            }
            else {
                let str=movie.s
                type.innerHTML='Person'

            }
            if(movie.rank){
                 rank.innerHTML = ` Ranked: ${movie.rank}`
            }

       
        display.append(div_1)
        div_1.append(img, title, type, rank, cast, year)
        div_1.style.display = 'flex'
        div_1.style.flexDirection = 'column'
        div_1.style.justifyContent = 'center'
        div_1.style.alignItems = 'center'
        div_1.style.border = '1px solid white'
        div_1.style.paddingLeft = '25px'
        div_1.style.margin = '15px 10px'
        div_1.paddingRight = '85%'
        search.addEventListener('change', () => {
            for (const movie of (data2.d)) {
                div_1.remove()
            }

        })










    }

        
    } catch (error) {
    console.log(error)

}


})
