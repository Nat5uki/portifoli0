document.addEventListener('DOMContentLoaded', () => {
  //opções de cartas
  const cards = [
    {
      name: 'red dead card1',
      img: 'images/latest.png'
    },
    {
      name: 'red dead card2',
      img: 'images/latest2.png'
    },
    {
      name: 'red dead card3',
      img: 'images/latest3.png'
    },
    {
      name: 'red dead card4',
      img: 'images/latest4.png'
    },
    {
      name: 'red dead card5',
      img: 'images/latest5.png'
    },
    {
      name: 'red dead card6',
      img: 'images/latest6.png'
    },
    {
      name: 'red dead card1',
      img: 'images/latest.png'
    },
    {
      name: 'red dead card2',
      img: 'images/latest2.png'
    },
    {
      name: 'red dead card3',
      img: 'images/latest3.png'
    },
    {
      name: 'red dead card4',
      img: 'images/latest4.png'
    },
    {
      name: 'red dead card5',
      img: 'images/latest5.png'
    },
    {
      name: 'red dead card6',
      img: 'images/latest6.png'
    },  
  ]

  //embaralhar todas as cartas
  cards.sort(() => 0.5 - Math.random())

  //recupaerar elementos
  const board = document.querySelector('.board')
  const resultView = document.querySelector('#result')
  let cardsChosen = [] //cartas escolhidas
  let cardsChosenId = [] //ids das cartas escolhidas para caso de click na mesma imagem
  let cardsWon = [] //cartas combinadas

  //criar o quadro de cartas
  function createBoard() {
    for (let i = 0; i < cards.length; i++) {
      const card = document.createElement('img')
      card.setAttribute('src', 'images/board.jpg')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      board.appendChild(card)
    }
  }

  //checagem de combinações
  function checkForMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]
    
    //verificar clique na mesma imagem 
    if(optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'images/board.jpg')
      cards[optionTwoId].setAttribute('src', 'images/board.jpg')
      alert('Você clicou na mesma imagem')
    }
    //verificar combinação se click em imagens diferentes
    else if (cardsChosen[0] === cardsChosen[1]) {
      alert('It´s John Marston Micah, I am gay')
      cards[optionOneId].setAttribute('src', 'images/check.gif')
      cards[optionTwoId].setAttribute('src', 'images/check.gif')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute('src', 'images/board.jpg')
      cards[optionTwoId].setAttribute('src', 'images/board.jpg')
      alert('Errou, seu bobalhão')
    }
    cardsChosen = []
    cardsChosenId = []
    //mostrar placar
    resultView.textContent = 'Pares Encontrados: '+cardsWon.length
    if  (cardsWon.length === cards.length/2) {
      resultView.textContent = 'Parabéns! Você não é idiota que nem o Dutch'
    }
  }

  //virar as cartas
  function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cards[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cards[cardId].img)
    if (cardsChosen.length ===2) {
      setTimeout(checkForMatch, 500)
    }
  }

  createBoard()
})
