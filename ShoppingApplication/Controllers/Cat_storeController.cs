using Microsoft.AspNetCore.Mvc;
using ShoppingApplication.Interfaces;
using ShoppingApplication.Models;

namespace ShoppingApplication.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class Cat_storeController : Controller
    {
        private ICat_store _catStore;
        public Cat_storeController(ICat_store catStore)
        {
            _catStore = catStore;
        }
        [HttpGet]
        [Route("Get")]
        public IActionResult catstoreGet()
        {
            var result = _catStore.GetCat_Stores();
            return Ok(result);
        }

        [HttpPost]
        [Route("Create")]
        public IActionResult CreateCatStore(cat_store cat_Store)
        {
            _catStore.AddData(cat_Store);
            return Created("/" +cat_Store.storeId, cat_Store);
        }
    }
}
