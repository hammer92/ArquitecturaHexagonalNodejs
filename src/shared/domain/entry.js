module.exports = class Entry {

    setCreatedBy(User){
        this.createdType = User.type
        this.createdBase = User.base || User.id
    }

    setUpdatedBy(User){
        this.updatedType = User.type
        this.updatedBase = User.base || User.id
    }
}