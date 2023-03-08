using System.ComponentModel.DataAnnotations;

namespace ShoppingApplication.Models
{
    public class category
    {
        [Key]
        public int Id { get; set; }
        [Required]
        public string categoryname { get; set; }
    }
}
