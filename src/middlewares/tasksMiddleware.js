const validateBody = (request, response, next) => {
  const { body } = request;

  if (body.title === undefined) {
    return response.status(400).json({ message: 'The field "title" is required' });
  }
  if (body.title === '') {
    return response.status(400).json({ message: 'Title cannot empty' });
  }
  if (body.stat === undefined) {
    return response.status(400).json({ message: 'The field "stat" is required' });
  }
  if (body.stat === '') {
    return response.status(400).json({ message: 'Stat cannot empty' });
  }

  next();

};

module.exports = {
  validateBody
};