using System;
using System.Collections.Generic;
using System.Linq;
using Datos;
using Entity;
using Infraestructura;

namespace Logica {
    public class HotelService {
        private  readonly  LogisticaSinuContext  _Context;

        public HotelService (LogisticaSinuContext  _context) {
            _Context = _context;
        }

        public GuardarHotelResponse Guardar (Hotel hotel) {
            try {
                string MensajeEmail = string.Empty;
                Email email = new Email ();
                var HotelBuscado = _Context.Hoteles.Find (hotel.Nit);
                if (HotelBuscado != null) {
                    return new GuardarHotelResponse ("El Hotel ya se encuentra registrado");
                }
                _Context.Hoteles.Add (hotel);
                _Context.SaveChanges ();
                MensajeEmail = email.EnviarEmail (hotel.CorreoElectronico, hotel.Nombre);
                return new GuardarHotelResponse (hotel);
            } catch (Exception e) {
                return new GuardarHotelResponse ($"Error de la Aplicacion: {e.Message}");
            }
        }

        public ConsultarHotelesResponse Consultar () {
            try {
                List<Hotel> hoteles = _Context.Hoteles.ToList ();
                return new ConsultarHotelesResponse (hoteles);
            } catch (Exception e) {
                return new ConsultarHotelesResponse ($"Error de la Aplicaion: {e.Message}");
            }
        }

        public Hotel BuscarxNit (string nit) {
            Hotel hotel = _Context.Hoteles.Find (nit);
            return hotel;
        }

        public string Modificar (Hotel hotelNuevo) {
            try {
                var hotelViejo = _Context.Hoteles.Find (hotelNuevo.Nit);
                if (hotelViejo != null) {
                    hotelViejo.Nombre = hotelNuevo.Nombre;
                    hotelViejo.Pais = hotelNuevo.Pais;
                    hotelViejo.Ciudad = hotelNuevo.Ciudad;
                    hotelViejo.Direccion = hotelNuevo.Direccion;
                    hotelViejo.Barrio = hotelNuevo.Barrio;
                    hotelViejo.Telefono = hotelNuevo.Telefono;
                    hotelViejo.CorreoElectronico = hotelNuevo.CorreoElectronico;
                    hotelViejo.SitioWeb = hotelNuevo.SitioWeb;
                    _Context.Hoteles.Update (hotelViejo);
                    _Context.SaveChanges ();
                    return ($"El registro {hotelNuevo.Nombre} se ha modificado satisfactoriamente.");
                } else {
                    return ($"Lo sentimos, {hotelNuevo.Nit} no se encuentra registrada.");
                }
            } catch (Exception e) {

                return $"Error de la Aplicación: {e.Message}";
            }

        }

    }
}