function getShortMessages(messages)
{  var res = [];
   result = messages.filter((msg)=>{
      if(msg.message.length < 50)
      res.push(msg.message);
   });
return res;
}

module.exports = getShortMessages;
