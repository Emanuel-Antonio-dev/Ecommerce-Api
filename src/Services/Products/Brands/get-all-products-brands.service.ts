import { IProductsBrandsRepositories } from "../../../Repositories/Products/Brands/products-brands-repositories"

class GetAllProductsBrandsService
{
    constructor(private readonly repository: IProductsBrandsRepositories){}

    async getAllBrands()
    {
        try
        {
            const brandsResult = await this.repository.getAllProductBrandsDatas()
            if(brandsResult.length === 0)
            {
                return {success: true, statusCode: 404, message: "De momento não existem marcas cadastradas."}
            }
            return {success: true, statusCode: 200, datas: brandsResult}
        } catch (error: any)
        {
            console.log(error)
            return {success: false, statusCode: 500, message: "Ocorreu um erro interno, tente novamente."}     
        }
    }
}
export {GetAllProductsBrandsService}