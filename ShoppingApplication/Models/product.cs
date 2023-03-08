using System.ComponentModel.DataAnnotations;

namespace ShoppingApplication.Models
{
    public class product
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string productName { get; set; }
        [Required]
        public int quantity { get; set; }
        [Required]
        public int price { get; set; }
    }
}
