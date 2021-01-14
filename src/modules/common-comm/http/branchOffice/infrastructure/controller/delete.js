module.exports = ({
  application: {
    common: {
      branchOffice: { deleteCase: { remove } }
    }
  }, response: { Success, Fail }, Status
}) => {

  return (req, res) => {
    remove({ id: req.params.idBranchOffice })
      .then(data => {
        res.status(Status.OK).json(Success(data))
      })
      .catch((error) => {
        res.status(Status.BAD_REQUEST).json(
          Fail(error.message))
      })

  }
}