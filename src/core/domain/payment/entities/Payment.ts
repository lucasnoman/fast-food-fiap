export class Payment {
  private _status = 'Aceito'
  private _orderId: number

  constructor(status = 'Aceito', orderId: number) {
    this._status = status
    this._orderId = orderId
  }

  public get status(): string {
    return this._status
  }

  public set status(value: string) {
    this._status = value
  }

  public get orderId(): number {
    return this._orderId
  }

  public set orderId(value: number) {
    this._orderId = value
  }
}
