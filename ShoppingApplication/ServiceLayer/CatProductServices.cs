using ShoppingApplication.Interfaces;
using ShoppingApplication.Models;
using ShoppingApplication.RepositoryLayer;

namespace ShoppingApplication.ServiceLayer
{
    public class CatProductServices:ICatProduct
    {
        private ApplicationDbContext _Db;
        public CatProductServices(ApplicationDbContext db)
        {
            _Db = db;
        }

        public CatProduct AddCategorytoProduct(CatProduct catproduct)
        {
            _Db.CatProduct.Add(catproduct);
            _Db.SaveChanges();
            return catproduct;
        }

        public List<CatProduct> GetCatProducts()
        {
            return _Db.CatProduct.ToList();
        }
    }
}
