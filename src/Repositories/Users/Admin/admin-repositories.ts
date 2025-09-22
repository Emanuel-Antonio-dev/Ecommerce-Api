abstract class IAdminRepositories
{
    abstract getAllUsers(): Promise<any[]>
}
export{IAdminRepositories}