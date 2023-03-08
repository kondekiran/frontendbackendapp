using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ShoppingApplication.Models
{
    public class cat_store
    {
        [Key]
        [ForeignKey("store")]
        public int storeId { get; set; }

        [ForeignKey("category")]
        public int catId { get; set; }
    }
}
