document.addEventListener('DOMContentLoaded', () => {

    let movieDB = {
        movies: [
            'Американский пирог',
            'Мандалорец',
            'Дом дракона',
            'Красотка',
            'Одни из нас'
        ]
    }
    
    let poster = document.querySelector('.promo__bg'), 
        genre = poster.querySelector('.promo__genre'),
        movieList = document.querySelector('.promo__interactive-list'),
        addForm = document.querySelector('form.add'),
        addInput = addForm.querySelector('.adding__input'),
        checkbox = addForm.querySelector('[type="checkbox"]')
        
    addForm.addEventListener('submit', (event) => {
        event.preventDefault()
    
        let newFilm = addInput.value
        let favorite = checkbox.checked
        
        if (newFilm) {            
            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`
            }            
            if (favorite) {
                console.log('Добавляем любимый фильм')
            }
            
            movieDB.movies.push(newFilm)
            sortArr(movieDB.movies)
            
            createMovieList(movieDB.movies, movieList)
        }
    
        event.target.reset()
    
    })

    let makeChanges = () => {
        genre.innerHTML = 'драма'
        poster.style.backgroundImage = 'url("img/bg.jpg")'
    }

    makeChanges()

    let sortArr = (arr) => {
        arr.sort()
    }
    
    function createMovieList(films, parent) {
        parent.innerHTML = ''
        sortArr(movieDB.movies)
        
        films.forEach((element, i) => {
            parent.innerHTML = parent.innerHTML +
            `<li class="promo__interactive-item">${i + 1} ${element}
                <div class="delete"></div>
            </li>`
        })

        document.querySelectorAll('.delete').forEach((elem, i) => {
            elem.addEventListener('click', () => {
                elem.parentElement.remove()
                movieDB.movies.splice(i, 1)
                
                createMovieList(movieDB.movies, movieList)
            })
        })
    }

    createMovieList(movieDB.movies, movieList)
})







