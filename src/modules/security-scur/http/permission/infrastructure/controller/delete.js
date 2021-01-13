module.exports = ({
  application: {
    security: {
      permission: { deleteCase }
    }
  }, response: { Success, Fail }, logger, Status
}) => {

  return (req, res) => {
    deleteCase.remove({ id: req.params.idGroup })
      .then(data => {
        res.status(Status.OK).json(Success(data))
      })
      .catch((error) => {
        logger.error(error)
        res.status(Status.BAD_REQUEST).json(
          Fail(error.message))
      })

  }
}