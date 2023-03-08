using ShoppingApplication.Models;

namespace ShoppingApplication.Interfaces
{
    public interface IProduct
    {
        List<product> GetProduct();
        product createproducts(product product);

        void Delete(product proId);

        product GetProduct(int proId);

        product EditProduct(product data);
       
    }
}
