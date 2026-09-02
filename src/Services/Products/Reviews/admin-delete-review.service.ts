import { HttpException } from "../../../Common/Middlewares/Filters/HttpException";
import { IReviewsRepositories } from "../../../Repositories/Products/Reviews/reviews-repositories";
import { CreateSystemLogService } from "../../Settings/create-system-log.service";
import { cacheService } from "../../../lib/cache.service";

class AdminDeleteReviewService {
  constructor(
    private readonly repository: IReviewsRepositories,
    private readonly logService: CreateSystemLogService
  ) {}

  async execute(
    id_review: number,
    admin_id_account: string,
    ip_address: string,
    system_agent: string
  ) {
    try {
      if (!id_review) {
        throw new HttpException(false, 400, "Informe a review");
      }

      const review = await this.repository.findById(id_review);
      if (!review) {
        throw new HttpException(false, 404, "Review não encontrada");
      }

      await this.repository.delete(id_review);

      // ✅ a média de avaliação e a contagem de reviews do produto (cache do
      // detalhe do produto) ficam desatualizadas assim que a review sai
      cacheService.invalidateProduct(review.id_product_fk);

      await this.logService.execute({
        id_account_fk: admin_id_account,
        action:        "admin_action",
        ip_address,
        system_agent,
      });

      return {
        success: true,
        statusCode: 200,
        message: "Review removida com sucesso",
      };
    } catch (error: any) {
      if (error instanceof HttpException) {
        return { success: false, statusCode: error.statusCode, message: error.message };
      }
      console.error(error);
      return { success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente!" };
    }
  }
}

export { AdminDeleteReviewService };
