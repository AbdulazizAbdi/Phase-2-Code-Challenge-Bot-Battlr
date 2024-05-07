import React, { useEffect, useState } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  
  const [bots, setBots] = useState([])
  const [clickedBots, setClickedBots] = useState([])

  useEffect(() => {
    fetch("http://localhost:8002/bots")
    .then(response => response.json())
    .then(botData => setBots(botData))
  }, [])

  function handleClickedBot(clickedBotObj) {
    const newClickedBots = clickedBots.filter((bot) => bot.id !== clickedBotObj.id);
    setClickedBots([...newClickedBots,clickedBotObj])
    console.log(clickedBotObj)
  }

  function handleRemoveArmyBot(removedBot) {
    const newClickedBots = clickedBots.filter((bot) => bot.id !== removedBot.id);
    setClickedBots(newClickedBots);
    console.log(removedBot);
  }

  function handleDeletedBot(deletedBot) {
    const updatedBots = bots.filter((bot) => bot.id !== deletedBot.id);
    setBots(updatedBots);
  }
 
  return (
    <div>
      <YourBotArmy bots={bots} clickedBots={clickedBots} onRemoveBot={handleRemoveArmyBot} />
      <BotCollection bots={bots} clickedBots={clickedBots} onClickedBot={handleClickedBot} onDeleteBot={handleDeletedBot} />
    </div>
  )
}

export default BotsPage;
