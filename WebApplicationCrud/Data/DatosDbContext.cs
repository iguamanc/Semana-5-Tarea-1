using Microsoft.EntityFrameworkCore;
using WebApplicationCrud.Models.Entidades;

namespace WebApplicationCrud.Data
{
    public class DatosDbContext:DbContext
    {
        public DatosDbContext(DbContextOptions options) : base(options){ }
        public DbSet<TercerosModel> Terceros { get; set; }
        public DbSet<UsuariosModel> Usuarios { get; set; }
    }
}
