import React, { useState } from 'react';
import Instructions from './components/instructions/Instructions';
import Button from './components/button/Button';
import WordAttempts from './components/wordAttempts/WordAttempts';
import './index.css'
import GameService from './services/gameServices'
import gameServices from './services/gameServices';
import Header from './components/header/Header';
import Message from './components/message/Message';
import Menu from './components/menu/Menu';

const generateEmptyWord = (size) => {
  let word = []
  for (let i = 0 ; i < size ; i++){
    word.push({
                color: 'gray',
                value: ''}
              )
  }
  return word
}

const Game = () => {
  //controls INSTRUCTIONS pop up window
  /*const username = null //GET USERNAME FROM SESSION

  const [wordSize, hasPlayed, game] = GameService
    .getSize(username)
    .then(res => {return res.size, res.hasPlayedToday, res.game})

  const emptyWord = generateEmptyWord(wordSize)

  const [attempts, setAttemps] = useState((hasPlayed) ? game.push(...emptyWord) : [[...emptyWord]])
  const [currentWord, setCurrentWord] = useState([...emptyWord])
  const [message, setMessage] = useState({message: '', color: ''})
*/
  const [isOpen, setIsOpen] = useState(false);
  const openIns = () => {
    setIsOpen(true);
  };
  const closeIns = () => {
    setIsOpen(false);
  };
  
/*
  const sendHandler = (event) => {

    event.preventDefault()

    let newAttempt = [...attempts]
    newAttempt.pop()
    const response = gameServices
      .sendWord(currentWord, username)
      .then(res => res)

    newAttempt.push(response.wordChecked)
    
    if(response.win){
      //Case user win
      setAttemps(newAttempt)
      setCurrentWord([])

      setMessage({
        message: `Congratulations!!!. Score: ${response.points}`,
        color: 'green'
      })
    }
    else if(attempts.length == 6){
      setAttemps(newAttempt)
      setCurrentWord([])

      setMessage({
        message: `Sorry. Try it next day`,
        color: 'red'
      })
    }
    else{
      newAttempt.push([...emptyWord])
      setAttemps(newAttempt)
      setCurrentWord([...emptyWord])
    }

    console.log(newAttempt)
  }


  const changeWordHandler = (event, index) => {
    event.preventDefault()
    let newCurrent = [...currentWord]
    newCurrent[index] = event.target.value

    setCurrentWord(newCurrent)
  }
*/
  /*return(
    <>
      <Header />
      <Menu instructionsIsOpen={isOpen} instructionsOnClosed={closeIns}/>
      <Button text="Instructions" onClick={openIns} />
      <Instructions isOpen={isOpen} onClose={closeIns} />
      <WordAttempts attempts={attempts} onChange={changeWordHandler}/>
      <div className='center'>
        <Button text="Send Word" onClick={sendHandler}/>
      </div>
      <Message message={message.message} color={message.color}/>
    </>
  );*/
  return(
    <>
      <Header />
      <Menu instructionsHandlers={{isOpen: isOpen, onOpen: openIns, onClose: closeIns}}/>
    </>
  )
}

export default Game;
