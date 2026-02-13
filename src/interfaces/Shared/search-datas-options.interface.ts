interface SearchDatasOptions
{
    action: "getAll" | "GetOnlyBasicsDatas" 
}
interface paginationDatas
{
    page: number,
    limit: number,
    returned: number,
    totalItems: number,
    totalPages: number
}
export{SearchDatasOptions, paginationDatas}