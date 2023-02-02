import { rareFirstLetter } from "./function"
import './styles.scss'

const input = document.querySelector('#input') as HTMLInputElement 

const form = document.querySelector('#form') as HTMLFormElement

const resultContainer = document.querySelector('#result') as HTMLDivElement

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const resultText = document.createElement('div') as HTMLDivElement
  const resetButton = document.createElement('button') as HTMLButtonElement

  resultText.classList.add('resultText')
  resetButton.innerText = 'Reset'

  resetButton.addEventListener('click', () => {
    resultContainer.removeChild(resultText)
    resultContainer.removeChild(resetButton)
  })

  resultText.innerText = 
    `The first unique letter of your 
    entered sentence is "${rareFirstLetter(input.value).toUpperCase()}"`
  resultContainer.appendChild(resultText)
  resultContainer.appendChild(resetButton)
  form.reset()

})
