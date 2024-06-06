import { CpfVO } from '../value-objects/CpfVO'

export class Customer {
  private _id: number | null
  private _name: string
  private _cpf: CpfVO | null

  constructor(id: number | null, name: string, cpf: CpfVO | null) {
    this._id = id
    this._name = name
    this._cpf = cpf
  }

  public get id(): number | null {
    return this._id
  }

  public get name(): string {
    return this._name
  }

  public set name(value: string) {
    this._name = value
  }

  public get cpf(): CpfVO | null {
    return this._cpf
  }

  public set cpf(value: CpfVO) {
    this._cpf = value
  }
}
