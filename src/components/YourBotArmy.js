import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({clickedBots, onRemoveBot}) {
 
  const clickedBotsList = clickedBots.map((bot) => { 
    return <BotCard key={bot.id} bot={bot} onClickedBot={onRemoveBot} />
  })

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {/*...and here...*/}
          {clickedBotsList}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;
