using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using test.Bl.Dal;
using test.Entities;

namespace test.Bl.Bl
{
    public class ProductBl
    {
        ProductDal productDal = new ProductDal();

        public List<Product>  GetProduct(int? id)
        {
            return productDal.GetProduct(id);
        }
        public int UpdateProducts(Product product)
        {
            return productDal.UpdateProducts(product);
        }
    }
}
