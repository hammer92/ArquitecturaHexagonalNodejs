module.exports = class {

    constructor ({  pKAuthPer, state, type, base }) {
        this.pKAuthPer = pKAuthPer
        this.state = state || true
        this.type = type || "General"
        this.base = base
    }
}