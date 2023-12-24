function buildResponse(response, code, message) {
    response.status(code).send(message);
  }
  
export default buildResponse;