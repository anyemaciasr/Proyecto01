using System.ComponentModel.DataAnnotations;

namespace Presentacion.Models
{
    public class UsuarioInputModel
    {
        [Required(ErrorMessage = "La identificacion es requerida")]
        public string Identificacion { get; set; }
        [Required(ErrorMessage = "El primer nombre es requerido")]
        public string PrimerNombre { get; set; }
        public string SegundoNombre { get; set; }
        [Required(ErrorMessage = "El primer apellido es requerido")]
        public string PrimerApellido { get; set; }
        [Required(ErrorMessage = "El segundo apellido es requerido")]
        public string SegundoApellido { get; set; }
        [Required(ErrorMessage = "El numero de telefono es requerido")]
        public string Telefono { get; set; }
        [Required(ErrorMessage = "El correo electronico es requerido")]
        [StringLength(50,ErrorMessage="No se permiten mas de 50 caracteres en el correo")]
        [EmailAddress(ErrorMessage="Correo Electronico no valido")]
        public string CorreoElectronico { get; set; }
        [Required(ErrorMessage = "La clave es requerida es requerido")]
        public string Clave { get; set; }
    }
}