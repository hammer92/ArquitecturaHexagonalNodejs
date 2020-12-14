const {updateGroupCase} = require('../application')
const {groupRepository} = require('./repositories')
const {errorSerializer} = require('./serializer')
module.exports = {
    invoke(req, res) {

        const handler = new updateGroupCase(groupRepository)
        handler.execute({
            idGroup: req.params.idGroup,
            updateForm: req.body
        }).then((group) => {
            res.status(201).json(group)
        }).catch((e) => {
            errorSerializer.json(e, res)
            res.end()
        })
    }
}
