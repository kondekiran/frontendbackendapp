using ShoppingApplication.Models;

namespace ShoppingApplication.Interfaces
{
    public interface IStore
    {
        List<stores> GetStores();

        stores AddStores(stores store);
    }
}
