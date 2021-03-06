export default {
    events: {},

    on (event, handler) {
        this.register(event)
        this.events[event].push(handler)
    },

    off (event, handler) {
        this.register(event)
        this.events[event] = this.events[event].filter(_handler => _handler !== handler)
    },

    emit (event, data) {
        this.register(event)
        this.events[event].forEach(handler => handler(data))
    },

    register (event) {
        if (this.events[event] === void(0)) {
            this.events[event] = []
        }
    }
}
