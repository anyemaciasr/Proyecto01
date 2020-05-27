using System.ComponentModel.DataAnnotations;
namespace Presentacion.Models.RestauranteModels
{
    public class RestauranteInputModel
    {
        [Required(ErrorMessage = "El nit es requerido")]
        public string Nit { get; set; }
        [Required(ErrorMessage = "El nombre de la empresa es requerido")]
        public string Nombre { get; set; }
        [Required(ErrorMessage = "El pais de la empresa es requerido")]
        public string Pais { get; set; }
        [Required(ErrorMessage = "la ciudad de la empresa es requerida")]
        public string Ciudad { get; set; }
        [Required(ErrorMessage = "La direccion de la empresa es requerida")]
        public string Direccion { get; set; }
        [Required(ErrorMessage = "El barrio de la empresa es requerido")]
        public string Barrio { get; set; }
        [Required(ErrorMessage = "El numero de telefono de la empresa es requerido")]
        public string Telefono { get; set; }
        [Required(ErrorMessage = "El correo electronico de la empresa es requerido")]
        public string CorreoElectronico { get; set; }
        public string SitioWeb { get; set; }

    }
}