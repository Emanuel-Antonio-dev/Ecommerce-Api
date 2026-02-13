import { IProductsBrandsRepositories } from "../../../Repositories/Products/Brands/products-brands-repositories"

class GetAllProductsBrandsService
{
    constructor(private readonly repository: IProductsBrandsRepositories){}

    async getAllBrands(page?: number, limit?: number)
    {
        try
        {
            const take = limit && limit > 0 ? limit: 50
            const currentPage = page && page > 0 ? page : 1
            const skip = (currentPage-1)*take

            const brandsResult = await this.repository.getAllProductBrandsDatas(take, skip)
            if(brandsResult.length === 0)
            {
                return {success: true, statusCode: 404, message: "De momento não existem marcas cadastradas."}
            }
            const totalItems = await this.repository.countBrands()
            const totalPages = Math.ceil(totalItems / take)
            return {
                success: true,
                statusCode: 200,
                datas: brandsResult,
                paginationDatas: {
                    page: currentPage,
                    limit: take,
                    returned: brandsResult.length,
                    totalItems,
                    totalPages
                }
            }
        } catch (error: any)
        {
            console.log(error)
            return {success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente."}     
        }
    }
}
export {GetAllProductsBrandsService}