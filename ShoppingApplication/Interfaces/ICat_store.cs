using ShoppingApplication.Models;

namespace ShoppingApplication.Interfaces
{
    public interface ICat_store
    {
        List<cat_store> GetCat_Stores();
        cat_store AddData(cat_store cat_Store);
    }
}
