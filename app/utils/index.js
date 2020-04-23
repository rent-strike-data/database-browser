/** miscellaneous utility methods **/

/** Error handler for route controllers */
const handleError = (res, err) => {
  return res.status(500).json({ message: err });
};

module.exports = {
  handleError
};
