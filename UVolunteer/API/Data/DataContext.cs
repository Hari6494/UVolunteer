using Microsoft.EntityFrameworkCore;
using API.Entities;

namespace API.Data
{
    public class DataContext:DbContext
    {
        public DataContext(DbContextOptions Options) : base(Options)
        {
            
        }
        public DbSet<AppUser> Users { get; set; }
    }
}