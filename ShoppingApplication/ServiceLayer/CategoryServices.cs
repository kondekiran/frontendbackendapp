using ShoppingApplication.Interfaces;
using ShoppingApplication.Models;
using ShoppingApplication.RepositoryLayer;

namespace ShoppingApplication.ServiceLayer
{
    public class CategoryServices : ICategory
    {
        private ApplicationDbContext _Dbcontext;
        public CategoryServices(ApplicationDbContext dbcontext)
        {
            _Dbcontext = dbcontext;
        }

        public category AddNewCategory(category category)
        {   
            _Dbcontext.category.Add(category);
            _Dbcontext.SaveChanges();
            return category;
        }

        public List<category> GetCategories()
        {
            return _Dbcontext.category.ToList();
        }
    }
}
