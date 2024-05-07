import React from "react";
import BotCard from "./BotCard"

function BotCollection({bots, onClickedBot, onDeleteBot}) {
  
  const botList = bots.map((bot) => {
    return <BotCard key={bot.id} bot={bot} onClickedBot={onClickedBot} onDeleteBot={onDeleteBot} />
  })

  return (
    <div className="ui four column grid">
      <div className="row">
        {/*...and here..*/}
        {botList}
      </div>
    </div>
  );
}

export default BotCollection;
