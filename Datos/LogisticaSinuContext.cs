using Entity;
using Microsoft.EntityFrameworkCore;


namespace Datos {
    public class LogisticaSinuContext: DbContext {

       public LogisticaSinuContext(DbContextOptions options) : base(options)
       {
           
       }
        public DbSet<Hotel> Hoteles { get; set; }
        public DbSet<Usuario> Usuarios { get; set; }
        public DbSet<Restaurante> Restaurantes { get; set; }
        public DbSet<Transporte> Transportes { get; set; }

    }
}