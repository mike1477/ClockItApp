using CI.DAL.Entities;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace CI.DAL
{
    public class ApplicationDbContext : IdentityDbContext<User>
    {
         public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
        : base(options)
        { }

        public DbSet<Value> Values { get; set; }
    }
}