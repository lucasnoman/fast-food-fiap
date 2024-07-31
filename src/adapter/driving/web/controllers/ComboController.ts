// import { FastifyReply, FastifyRequest } from 'fastify'
// import { ComboServicePort } from 'src/core/application/ports/ComboServicePort'
// import { Combo } from 'src/core/domain/combo/entities/Combo'
// import z from 'zod'

// // NOTE: o combo não precisará de controller. Ele será aberto junto com o Combo quando o cliente criar
// export class ComboController {
//   constructor(private readonly comboService: ComboServicePort) {}

//   async createCombo(req: FastifyRequest, reply: FastifyReply): Promise<void> {
//     const createComboSchema = z.object({
//       name: z.string(),
//       cpf: cpfSchema.nullable(),
//     })
//     const { name, cpf } = createComboSchema.parse(req.body)

//     const combo = new Combo(null, name, cpf)
//     await this.comboService.createCombo(combo)
//     reply.status(201).send()
//   }

//   async getComboByCpf(req: FastifyRequest, reply: FastifyReply): Promise<void> {
//     const { cpf } = z.object({ cpf: z.string() }).parse(req.params)
//     const combo = await this.comboService.getComboByCpf(cpf)
//     reply.status(200).send(combo)
//   }
// }
