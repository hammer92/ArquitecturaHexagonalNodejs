module.exports = ({
  application: {
    security: {
      group: { putCase }
    }
  }, response: { Success, Fail }, Status
}) => {

  return (req, res) => {
    putCase.update({ id: req.params.idGroup, body: req.body })
      .then(data => {
        res.status(Status.OK).json(Success(data))
      })
      .catch((error) => {
        res.status(Status.BAD_REQUEST).json(
          Fail(error.message))
      })

  }
}