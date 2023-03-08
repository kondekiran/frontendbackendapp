using ShoppingApplication.Interfaces;
using ShoppingApplication.Models;
using ShoppingApplication.RepositoryLayer;

namespace ShoppingApplication.ServiceLayer
{
    public class ProductServices : IProduct
    {
        private ApplicationDbContext _Dbcontext;
        public ProductServices(ApplicationDbContext dbcontext)
        {
            _Dbcontext = dbcontext;
        }

        public product createproducts(product product)
        {
            _Dbcontext.product.Add(product);
            _Dbcontext.SaveChanges();
            return product;
        }

        public void Delete(product proId)
        {
            _Dbcontext.Remove(proId);
            _Dbcontext.SaveChanges();
        }

        public product EditProduct(product data)
        {
            var existingproduct = _Dbcontext.product.Find(data.Id);
            if(existingproduct != null)
            {
                existingproduct.Id = data.Id;
                existingproduct.productName = data.productName;
                existingproduct.quantity = data.quantity;
                existingproduct.price = data.price;
            }
            _Dbcontext.product.Update(existingproduct);
            _Dbcontext.Entry(existingproduct).Property(x => x.Id).IsModified = false; //To prevent Identity column update issue
            _Dbcontext.SaveChanges();
            return data;
        }

        public List<product> GetProduct()
        {
            return _Dbcontext.product.ToList();
        }

        public product GetProduct(int proId)
        {
            var task = _Dbcontext.product.Find(proId);
            return task;
        }

       
    }
}
