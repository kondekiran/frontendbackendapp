using ShoppingApplication.Interfaces;
using ShoppingApplication.Models;
using ShoppingApplication.RepositoryLayer;

namespace ShoppingApplication.ServiceLayer
{
    public class StoreService : IStore
    {
        private ApplicationDbContext _Dbcontext;
        public StoreService(ApplicationDbContext dbcontext)
        {
            _Dbcontext = dbcontext;
        }

        public stores AddStores(stores store)
        {
            _Dbcontext.stores.Add(store);
            _Dbcontext.SaveChanges();
            return (store);
        }

        public List<stores> GetStores()
        {
            return _Dbcontext.stores.ToList();
        }
    }
}
