function getShortMessages(messages) {
  return messages.map(function(messageObj) {
    return messageObj.message;
  }).filter(function(message) {
    return message.length < 50;
  });
}

module.exports = getShortMessages;
