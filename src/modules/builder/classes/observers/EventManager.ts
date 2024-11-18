type EventListeners<T extends string | number | symbol> = {
  [event in T]: Array<(data: any) => void>
}

// Observer pattern
class EventManager<T extends string | number | symbol> {
  private listeners: EventListeners<T> = {} as EventListeners<T>

  addListener(event: T, listener: (data: any) => void): void {
    if (!this.listeners[event]) {
      this.listeners[event] = []
    }
    this.listeners[event].push(listener)
  }

  removeListener(event: T, listener: (data: any) => void): void {
    if (!this.listeners[event]) return

    this.listeners[event] = this.listeners[event].filter((l) => l !== listener)
  }

  emit(event: T, data: any): void {
    if (!this.listeners[event]) return

    this.listeners[event].forEach((listener) => listener(data))
  }
}

export default EventManager

// Uso
// const eventManager = new EventManager<'dataChanged'>()
// eventManager.addListener('dataChanged', (data) => console.log(data))
