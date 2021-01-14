module.exports = ({
  application: {
    common: {
      branchOffice: { putCase: { update } }
    }
  }, response: { Success, Fail }, Status
}) => {

  return (req, res) => {
    update({ id: req.params.idBranchOffice, body: req.body })
      .then(data => {
        res.status(Status.OK).json(Success(data))
      })
      .catch((error) => {
        res.status(Status.BAD_REQUEST).json(
          Fail(error.message))
      })

  }
}