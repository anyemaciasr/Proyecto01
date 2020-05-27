using Entity;
using System;
namespace Presentacion.Models
{
    public class HotelViewModel:HotelInputModel
    {
        public HotelViewModel()
        {
            
        }

        public HotelViewModel(Hotel hotel){
            Nit = hotel.Nit.Trim();
            Nombre = hotel.Nombre.Trim();
            Pais = hotel.Pais.Trim();
            Ciudad = hotel.Ciudad.Trim();
            Direccion = hotel.Direccion.Trim();
            Barrio = hotel.Barrio.Trim();
            Telefono = hotel.Telefono.Trim();
            CorreoElectronico = hotel.CorreoElectronico.Trim();
            SitioWeb = hotel.SitioWeb.Trim();
        }
    }
}