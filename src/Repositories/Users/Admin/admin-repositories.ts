abstract class IAdminRepositories
{
    abstract getAllUsers(take?: number, skip?: number): Promise<any[]>
    abstract getAllOrders(take?: number, skip?: number): Promise<any[]>
    abstract countUsers():Promise<number>
    abstract countOrders():Promise<number>
}
export{IAdminRepositories}