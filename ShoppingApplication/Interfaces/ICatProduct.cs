using ShoppingApplication.Models;

namespace ShoppingApplication.Interfaces
{
    public interface ICatProduct
    {
        List<CatProduct> GetCatProducts();

        CatProduct AddCategorytoProduct(CatProduct catproduct);
    }
}
