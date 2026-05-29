import { IPaymentsRepositories } from "../../Repositories/Paymets/IPayments.repositories";
import { UsersTypes } from "../../../generated/prisma/enums";
import { HttpException } from "../../Common/Middlewares/Filters/HttpException";

class FindPaymentService {
  constructor(
    private readonly repository: IPaymentsRepositories
  ) {}

  async find(id_order: number, credentials?: { sub: number; user_type: UsersTypes | string }) {
    try {
      if (!id_order) {
        throw new HttpException(false, 400, "Informe todos os campos");
      }

      const result = await this.repository.getPaymentDetail(id_order);

      if (!result) {
        throw new HttpException(false, 404, "Pagamento não encontrado, tente novamente");
      }

      if (credentials?.user_type === "client")
      {
        const id_client =result.order?.user_details?.id_user
        if (!id_client || id_client !== credentials.sub) {
          throw new HttpException(false, 403, "Acesso negado! Você não tem permissão para acessar este recurso.");
        }
      }
      return { success: true, statusCode: 200, datas: result };
    } catch (error: any) {
      if (error instanceof HttpException)
        return { success: false, statusCode: error.statusCode, message: error.message };

      console.log(error);
      return { success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente." };
    }
  }
}

export { FindPaymentService };