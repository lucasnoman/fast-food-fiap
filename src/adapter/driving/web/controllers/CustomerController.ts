import { FastifyReply, FastifyRequest } from 'fastify'
import { CustomerServicePort } from 'src/core/application/ports/CustomerServicePort'
import { Customer } from 'src/core/domain/customer/entities/Customer'
import { cpfSchema } from 'src/core/domain/customer/value-objects/CpfVO'
import z from 'zod'

export class CustomerController {
  constructor(private readonly customerService: CustomerServicePort) {}

  async createCustomer(req: FastifyRequest, reply: FastifyReply): Promise<void> {
    const createCustomerSchema = z.object({
      name: z.string(),
      cpf: cpfSchema.nullable(),
    })
    const { name, cpf } = createCustomerSchema.parse(req.body)

    const customer = new Customer(null, name, cpf)
    await this.customerService.createCustomer(customer)
    reply.status(201).send()
  }

  async getCustomerByCpf(req: FastifyRequest, reply: FastifyReply): Promise<void> {
    const { cpf } = z.object({ cpf: z.string() }).parse(req.params)
    const customer = await this.customerService.getCustomerByCpf(cpf)
    reply.status(200).send(customer)
  }
}
