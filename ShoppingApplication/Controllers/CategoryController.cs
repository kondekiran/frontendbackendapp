using Microsoft.AspNetCore.Mvc;
using ShoppingApplication.Interfaces;
using ShoppingApplication.Models;

namespace ShoppingApplication.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CategoryController : Controller
    {
        private ICategory _category;
        public CategoryController(ICategory category)
        {
            _category = category;
        }
        [HttpGet]
        [Route("Get")]
        public IActionResult getCategory()
        {
            var result = _category.GetCategories();
            return Ok(result);
        }

        [HttpPost]
        [Route("api/CreateCategory")]
        public IActionResult CreateNewCategory(category category)
        {
            _category.AddNewCategory(category);
            return Created("/" + category.Id, category);
        }
    
    }
}
