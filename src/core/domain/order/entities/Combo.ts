export class Combo {
  private _id: number | null
  private _orderId: number

  constructor(id: number | null, orderId: number) {
    this._id = id
    this._orderId = orderId
  }

  public get id(): number | null {
    return this._id
  }

  public get orderId(): number {
    return this._orderId
  }

  public set orderId(value: number) {
    this._orderId = value
  }
}
