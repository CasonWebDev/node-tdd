module.exports = () => {
  const findAll = (req, res) => {
    const users = [
      { name: 'John Doe', email: 'john@email.com' },
    ];
    res.status(200).json(users);
  };

  const create = (req, res) => {
    const users = req.body;
    res.status(201).json(users);
  };

  return { findAll, create };
};
