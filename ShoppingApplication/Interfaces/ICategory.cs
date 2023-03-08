using ShoppingApplication.Models;

namespace ShoppingApplication.Interfaces
{
    public interface ICategory
    {
        List<category> GetCategories();

        category AddNewCategory(category category);
    }
}
