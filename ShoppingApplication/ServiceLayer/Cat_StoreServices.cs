using ShoppingApplication.Interfaces;
using ShoppingApplication.Models;
using ShoppingApplication.RepositoryLayer;

namespace ShoppingApplication.ServiceLayer
{
    public class Cat_StoreServices:ICat_store
    {
        private ApplicationDbContext _Dbcontext;
        public Cat_StoreServices(ApplicationDbContext dbcontext)
        {
            _Dbcontext = dbcontext;
        }

        public cat_store AddData(cat_store cat_Store)
        {
            _Dbcontext.cat_store.Add(cat_Store);
            _Dbcontext.SaveChanges();
            return cat_Store;
        }

        public List<cat_store> GetCat_Stores()
        {
            return _Dbcontext.cat_store.ToList();
        }
    }
}
