using Entity;
using System;
namespace Presentacion.Models
{
    public class UsuarioViewModel:UsuarioInputModel
    {
        public UsuarioViewModel(Usuario usuario){
            Identificacion = usuario.Identificacion.Trim();
            PrimerNombre = usuario.PrimerNombre.Trim();
            SegundoNombre = usuario.SegundoNombre.Trim();
            PrimerApellido = usuario.PrimerApellido.Trim();
            SegundoApellido = usuario.SegundoApellido.Trim();
            Telefono = usuario.Telefono.Trim();
            CorreoElectronico = usuario.CorreoElectronico.Trim();
            Clave = usuario.Clave.Trim();
        }
    }
}