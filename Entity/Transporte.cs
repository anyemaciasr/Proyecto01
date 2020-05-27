using System.ComponentModel.DataAnnotations;

namespace Entity
{
    public class Transporte
    {
         [Key]
        public string Nit { get; set; }
        public string Nombre { get; set; }
        public string Pais { get; set; }
        public string Ciudad { get; set; }
        public string Direccion { get; set; }
        public string Barrio { get; set; }
        public string Telefono { get; set; }
        public string CorreoElectronico { get; set; }
        public string SitioWeb { get; set; }
    }
}