import { ProductCategory } from '../value-objects/ProductCategoryVO'
import {
  productImageSchema,
  ProductImagesVO,
} from '../value-objects/ProductImagesVO'

export class Product {
  private _id: number
  private _name: string
  private _category: ProductCategory
  private _price: number
  private _description: string | null
  private _images: ProductImagesVO

  constructor(
    id: number,
    name: string,
    category: ProductCategory,
    price: number,
    description: string | null,
    images: ProductImagesVO
  ) {
    this._id = id
    this._name = name
    this._category = category
    this._price = price
    this._description = description
    this._images = productImageSchema.parse(images)
  }

  public get id(): number {
    return this._id
  }

  public get name(): string {
    return this._name
  }

  public set name(value: string) {
    this._name = value
  }

  public get category(): string {
    return this._category
  }

  public set category(value: ProductCategory) {
    this._category = value
  }

  public get price(): number {
    return this._price
  }

  public set price(value: number) {
    this._price = value
  }

  public get description(): string | null {
    return this._description
  }

  public set description(value: string) {
    this._description = value
  }

  public get images(): ProductImagesVO {
    return this._images
  }

  public set images(value: ProductImagesVO) {
    this._images = productImageSchema.parse(value)
  }
}
