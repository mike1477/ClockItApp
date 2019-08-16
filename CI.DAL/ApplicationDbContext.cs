using CI.DAL.Entities;
using Microsoft.EntityFrameworkCore;

namespace CI.DAL
{
    public class ApplicationDbContext : DbContext
    {
         public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
        : base(options)
        { }

        public DbSet<Value> Values { get; set; }
    }
}