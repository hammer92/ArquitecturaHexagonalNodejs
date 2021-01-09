module.exports = ({
  repository: {
    common: { menu: { menRepository } }
  }
}, {}) => {
  // code for getting all the items paginate
  const allMenu = () => {
    return Promise
      .resolve()
      .then(() =>
        menRepository.all({
          attributes: ['id', 'icon', 'name', 'pKScurPer'],
          where: { pKCommMod: null },
          include: [{
            association: 'menu',
            attributes: ['id', 'icon', 'name', 'pKScurPer'],
            include: { association: 'permiso', attributes: ['state'] }
          },
            { association: 'permiso', attributes: ['state'] }]
        })
      )
      .catch(error => {
        throw new Error(error)
      })
  }

  return {
    allMenu
  }
}