module.exports = ({
  application: {
    common: {
      department: { putCase: { update } }
    }
  }, response: { Success, Fail }, Status
}) => {

  return (req, res) => {
    update({ id: req.params.idDepartment, body: req.body })
      .then(data => {
        res.status(Status.OK).json(Success(data))
      })
      .catch((error) => {
        res.status(Status.BAD_REQUEST).json(
          Fail(error.message))
      })

  }
}