abstract class IAdminRepositories
{
    abstract getAllUsers(): Promise<any[]>
    abstract getAllOrders(): Promise<any[]>
}
export{IAdminRepositories}