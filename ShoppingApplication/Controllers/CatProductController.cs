using Microsoft.AspNetCore.Mvc;
using ShoppingApplication.Interfaces;
using ShoppingApplication.Models;

namespace ShoppingApplication.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class CatProductController : Controller
    {
        private ICatProduct _CatProducts;

        public CatProductController(ICatProduct catProducts)
        {
            _CatProducts = catProducts;
        }

        [HttpGet]
        [Route("GetCatProduct")]
        public IActionResult GetCatProduct()
        {
            var result = _CatProducts.GetCatProducts();
            return Ok(result);
        }

        [HttpPost]
        [Route("AddCategoryProduct")]
        public IActionResult AddCategoryProduct(CatProduct catproduct)
        {
            _CatProducts.AddCategorytoProduct(catproduct);
            return Created("/" + catproduct.Id,catproduct);
        }
    }
}
