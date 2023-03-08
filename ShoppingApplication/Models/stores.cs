using System.ComponentModel.DataAnnotations;

namespace ShoppingApplication.Models
{
    public class stores
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string storename { get; set; }

    }
}
