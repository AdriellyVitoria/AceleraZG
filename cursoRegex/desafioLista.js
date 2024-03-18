const texto = 'lista de arquivo mp3: jazz.mp3, rock.mp3, podcast.mp3,blues.mp3'

console.log(texto.match(/\.mp3/g))

//no futuro
console.log(texto.match(/\w+\.mp3/g))

const branco = 'a    b'