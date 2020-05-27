using System.ComponentModel.DataAnnotations;

namespace Presentacion.Models.TransporteModels
{
    public class TrasnporteInputModel
    {
        [Required(ErrorMessage = "El nit es requerido")]
        public string Nit { get; set; }
        [Required(ErrorMessage = "El nombre del transporte es requerido")]
        public string Nombre { get; set; }
        [Required(ErrorMessage = "El pais del transportees requerido")]
        public string Pais { get; set; }
        [Required(ErrorMessage = "la ciudad del transporte es requerida")]
        public string Ciudad { get; set; }
        [Required(ErrorMessage = "La direccion del transporte es requerida")]
        public string Direccion { get; set; }
        [Required(ErrorMessage = "El barrio del transporte es requerido")]
        public string Barrio { get; set; }
        [Required(ErrorMessage = "El numero de telefono del transporte es requerido")]
        public string Telefono { get; set; }
        [Required(ErrorMessage = "El correo electronico del transporte es requerido")]
        public string CorreoElectronico { get; set; }
        public string SitioWeb { get; set; }
    }
}