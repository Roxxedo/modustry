import { Data } from "@/lib/types"

export interface Subject {
    subscribe(observer: IObserver): void

    unsubscribe(observer: IObserver): void

    notify(): void

    list(): IObserver[]
}

export interface IObserver {
    update(subject: Subject): void
}

export class Observer implements Subject {
    private observers: IObserver[] = []

    subscribe(observer: IObserver): void {
        this.observers.push(observer)
    }

    unsubscribe(observer: IObserver): void {
        const index = this.observers.indexOf(observer)
        this.observers.splice(index, 1)
    }

    notify(): void {
        for (const observer of this.observers) {
            observer.update(this)
        }
    }

    list(): IObserver[] {
        return this.observers
    }
}

export const subject = new Observer()