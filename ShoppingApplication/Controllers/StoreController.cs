using Microsoft.AspNetCore.Mvc;
using ShoppingApplication.Interfaces;
using ShoppingApplication.Models;

namespace ShoppingApplication.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class StoreController : Controller
    {
        private IStore _store;
        public StoreController(IStore store)
        {
            _store = store;
        }
        [HttpGet]
        [Route("GetStores")]
        public IActionResult GetStores()
        {
           var result =  _store.GetStores();
            return Ok(result);
        }
        [HttpPost]
        [Route("AddStore")]
        public IActionResult AddStore(stores store)
        {
            _store.AddStores(store);
            return Created("/" + store.Id, store);
        }
    }
}
