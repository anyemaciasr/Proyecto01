using Entity;
using System;

namespace Presentacion.Models.RestauranteModels
{
    public class RestauranteViewModel:RestauranteInputModel
    {
        public RestauranteViewModel()
        {
            
        }
          public RestauranteViewModel(Restaurante restaurante){
            Nit = restaurante.Nit.Trim();
            Nombre = restaurante.Nombre.Trim();
            Pais = restaurante.Pais.Trim();
            Ciudad = restaurante.Ciudad.Trim();
            Direccion = restaurante.Direccion.Trim();
            Barrio = restaurante.Barrio.Trim();
            Telefono = restaurante.Telefono.Trim();
            CorreoElectronico = restaurante.CorreoElectronico.Trim();
            SitioWeb = restaurante.SitioWeb.Trim();
        }
    }
}