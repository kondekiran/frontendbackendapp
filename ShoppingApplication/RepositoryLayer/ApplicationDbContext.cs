using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using ShoppingApplication.Models;

namespace ShoppingApplication.RepositoryLayer
{
    public class ApplicationDbContext:DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }

        public DbSet<stores> stores { get; set; }
        public DbSet<cat_store> cat_store { get; set; }
        public DbSet<product> product { get; set; }
        public DbSet<category> category { get; set; }
        public DbSet<CatProduct> CatProduct { get; set; }
    }
}
