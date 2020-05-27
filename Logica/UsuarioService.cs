using System;
using System.Collections.Generic;
using System.Linq;
using Datos;
using Entity;
using Infraestructura;

namespace Logica {
    public class UsuarioService {

        private  readonly  LogisticaSinuContext  _Context;

        public UsuarioService (LogisticaSinuContext _context) {
            _Context = _context;

        }

        public GuardarUsuarioResponse Guardar (Usuario usuario) {
            try {
                string mensajeEmail = string.Empty;
                Email email = new Email ();
                var UsuarioBuscado = _Context.Usuarios.Find (usuario.Identificacion);
                if (UsuarioBuscado != null) {
                    return new GuardarUsuarioResponse ("El usuario ya se encuentra registrado");
                }
                _Context.Usuarios.Add (usuario);
                _Context.SaveChanges();
                mensajeEmail = email.EnviarEmail (usuario.CorreoElectronico, usuario.PrimerNombre);
                return new GuardarUsuarioResponse (usuario);
            } catch (Exception e) {
                return new GuardarUsuarioResponse ($"Error de la Aplicacion: {e.Message}");
            } 
        }

        public ConsultarUsuarioResponse Consultar () {
            try {

                List<Usuario> usuarios = _Context.Usuarios.ToList ();
                return new ConsultarUsuarioResponse (usuarios);
            } catch (Exception e) {
                return new ConsultarUsuarioResponse ($"Error de la Aplicaion: {e.Message}");
            } 
        }

        public Usuario BuscarxIdentificacion (string identificacion) {
            var usuario =  _Context.Usuarios.Find (identificacion);
    
            return usuario;
        }

        public string Modificar (Usuario usuarioNuevo) {
            try {
            
                var personaVieja = _Context.Usuarios.Find (usuarioNuevo.Identificacion);
                if (personaVieja != null) {
                    personaVieja.PrimerNombre = usuarioNuevo.PrimerNombre;
                    personaVieja.SegundoNombre = usuarioNuevo.SegundoNombre;
                    personaVieja.PrimerApellido = usuarioNuevo.PrimerApellido;
                    personaVieja.SegundoApellido = usuarioNuevo.SegundoApellido;
                    personaVieja.Telefono = usuarioNuevo.Telefono;
                    personaVieja.CorreoElectronico = usuarioNuevo.CorreoElectronico;
                    personaVieja.Clave = usuarioNuevo.Clave;
                    _Context.Usuarios.Update (personaVieja);
                    _Context.SaveChanges();
                    return ($"El registro {usuarioNuevo.PrimerNombre} se ha modificado satisfactoriamente.");
                } else {
                    return ($"Lo sentimos, {usuarioNuevo.Identificacion} no se encuentra registrada.");
                }
            } catch (Exception e) {

                return $"Error de la Aplicación: {e.Message}";
            }

        }
    }
}