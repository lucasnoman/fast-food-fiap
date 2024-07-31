import { OrderStatus } from '../value-objects/OrderStatusVO'

export class Order {
  private _id: number | null
  private _status: OrderStatus
  private _paymentStatus: string
  private _createdAt: Date | null
  private _customerId: number

  constructor(
    id: number | null,
    status: OrderStatus,
    paymentStatus: string,
    createdAt: Date | null,
    customerId: number
  ) {
    this._id = id
    this._status = status
    this._paymentStatus = paymentStatus
    this._createdAt = createdAt
    this._customerId = customerId
  }

  public get id(): number | null {
    return this._id
  }

  public get status(): OrderStatus {
    return this._status
  }

  public set status(value: OrderStatus) {
    this._status = value
  }

  public get paymentStatus(): string {
    return this._paymentStatus
  }

  public set paymentStatus(value: string) {
    this._paymentStatus = value
  }

  public get createdAt(): Date | null {
    return this._createdAt
  }

  public set createdAt(value: Date | null) {
    this._createdAt = value
  }

  public get customerId(): number {
    return this._customerId
  }

  public set customerId(value: number) {
    this._customerId = value
  }
}
