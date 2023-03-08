using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace ShoppingApplication.Models
{
    public class CatProduct
    {
        [Key]
        public int Id { get; set; }

        [ForeignKey("category")]
        public int categoryId { get; set; }
        [ForeignKey("product")]
        public int productId { get; set; }        
    }
}
