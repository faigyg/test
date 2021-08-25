using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using test.Bl.Bl;
using test.Entities;

namespace test.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class ProductController : ControllerBase
    {
        ProductBl productBl = new ProductBl();

        [HttpGet]
        public List<Product> GetProducts(int? id)
        {
            return productBl.GetProduct(id);
            //https://stackblitz.com/angular/gqgalmavnrd?file=src%2Fapp%2Fproducts.ts
            //https://stackblitz.com/edit/angular-cm5aa6?file=src%2Fapp%2Fapp.component.html
            //https://angular-u4wwfc.stackblitz.io
            //https://stackblitz.com/edit/angular-du8mpm?file=src%2Fapp%2Ftop-bar%2Ftop-bar.component.html
        }

        [HttpPost]
        public int UpdateProducts(Product product)
        {
            return productBl.UpdateProducts(product);
        }
    }
}
