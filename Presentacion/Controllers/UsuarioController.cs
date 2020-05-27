using System.Collections.Generic;
using System.Linq;
using Datos;
using Entity;
using Logica;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Presentacion.Models;

namespace Presentacion.Controllers {
    [Route ("api/[controller]")]
    [ApiController]
    public class UsuarioController : ControllerBase {
        private readonly UsuarioService _usuarioService;

        public UsuarioController (LogisticaSinuContext context) {
            _usuarioService = new UsuarioService (context);
        }

        [HttpPost]
        public ActionResult<UsuarioViewModel> Post (UsuarioInputModel UsuarioInput) {
            Usuario usuario = MapearUsuario (UsuarioInput);
            var response = _usuarioService.Guardar (usuario);
            if (response.Error) {
                ModelState.AddModelError ("Guardar Usuario", response.Mensaje);
                var problemDetails = new ValidationProblemDetails (ModelState) {
                    Status = StatusCodes.Status400BadRequest,
                };
                return BadRequest (problemDetails);
            }
            return Ok (response.Usuario);
        }

        private Usuario MapearUsuario (UsuarioInputModel usuarioInput) {
            var usuario = new Usuario {
                Identificacion = usuarioInput.Identificacion,
                PrimerNombre = usuarioInput.PrimerNombre,
                SegundoNombre = usuarioInput.SegundoNombre,
                PrimerApellido = usuarioInput.PrimerApellido,
                SegundoApellido = usuarioInput.SegundoApellido,
                Telefono = usuarioInput.Telefono,
                CorreoElectronico = usuarioInput.CorreoElectronico,
                Clave = usuarioInput.Clave
            };
            return usuario;
        }

        [HttpGet ("{identificacion}")]
        public ActionResult<UsuarioViewModel> Get (string identificacion) {
            var usuario = _usuarioService.BuscarxIdentificacion (identificacion);
            if (usuario == null) return NotFound ();
            var usuarioViewModel = new UsuarioViewModel (usuario);
            return usuarioViewModel;
        }

        [HttpGet]
        public IEnumerable<UsuarioViewModel> Gets () {
            var usuarios = _usuarioService.Consultar ().Usuarios.Select (p => new UsuarioViewModel (p));
            return usuarios;
        }

        [HttpPut ("{identificacion}")]
        public ActionResult<string> Put (string identificacion, Usuario usuario) {
            var id = _usuarioService.BuscarxIdentificacion (usuario.Identificacion);
            if (id == null) {
                return BadRequest ("No encontrado");
            }
            var mensaje = _usuarioService.Modificar (usuario);
            return Ok (mensaje);
        }
    }
}