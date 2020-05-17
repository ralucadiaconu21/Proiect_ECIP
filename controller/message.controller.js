const assistant = require("../server");
exports.sendMessage = async (req, res) => {
  try {
    const assistantResponse = await assistant.getAssistant().message({
      input: { text: req.body.message },
      assistantId: process.env.WATSON_ASSISTANT_ID,
      sessionId: req.body.sessionId
    });
    res.send({
      sentAt: assistantResponse.headers.date,
      message: assistantResponse.result.output.generic
    });
  } catch (error) {
    res.status(500).send(error);
  }
};

exports.createSession = async (req, res) => {
  try {
    const sessionId = await assistant
      .getAssistant()
      .createSession({ assistantId: process.env.WATSON_ASSISTANT_ID });
    res.send(sessionId.result);
  } catch (error) {
    res.status(500).send(error);
  }
};
