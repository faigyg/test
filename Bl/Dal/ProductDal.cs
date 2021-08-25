using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using test.Entities;

namespace test.Bl.Dal
{
    public class ProductDal:DbContext
    {
        public DbSet<Product> products { get; set; }

        public ProductDal(DbContextOptions<ProductDal> options)  
            : base(options)  
        {  
        }

        public ProductDal()
        {
        }

        public List<Product> GetProduct(int? id)
        {
            List<Product> products = new List<Product>();
            try
            {

                SqlParameter sqlParameter = new SqlParameter("@id", id);
                string sqlQuery = "EXEC [dbo].[GetProducts] " + "@id";

                products = (List<Product>)this.Set<Product>().FromSqlRaw(sqlQuery, sqlParameter);
            }
            catch (Exception ex)
            {
                throw ex;
            }
            return products;
        }

        public int UpdateProducts(Product product)
        {
            //compbility list 
            int idUpdated = 0;
            try
            {
                SqlParameter[] sqlParameters = new SqlParameter[6];
                sqlParameters.Append(new SqlParameter("@id", product.Id));
                sqlParameters.Append(new SqlParameter("@productName", product.Name)); 
                sqlParameters.Append(new SqlParameter("@MAKAT", product.Makat)); 
                sqlParameters.Append(new SqlParameter("@PRICE", product.Price)); 
                sqlParameters.Append(new SqlParameter("@ISACTIVE", product.IsActive));
                sqlParameters.Append(new SqlParameter("@AMOUNT", product.Amount));
                string sqlQuery = "EXEC [dbo].[MargeProducts] " + "@id" + "@productName"+ "@MAKAT" + "@PRICE" + "@ISACTIVE"+ "@AMOUNT";

                //idUpdated = (Int32)this.Set().FromSqlRaw(sqlQuery, sqlParameters);
            }
            catch (Exception ex)
            {
                throw ex;
            }
            return idUpdated;
        }
    }
}
