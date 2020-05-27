using Entity;
using System;
namespace Presentacion.Models.TransporteModels
{
    public class TransporteViewModel:TrasnporteInputModel
    {
        public TransporteViewModel()
        {
            
        }
         public TransporteViewModel(Transporte transporte){
            Nit = transporte.Nit.Trim();
            Nombre = transporte.Nombre.Trim();
            Pais = transporte.Pais.Trim();
            Ciudad = transporte.Ciudad.Trim();
            Direccion = transporte.Direccion.Trim();
            Barrio = transporte.Barrio.Trim();
            Telefono = transporte.Telefono.Trim();
            CorreoElectronico = transporte.CorreoElectronico.Trim();
            SitioWeb = transporte.SitioWeb.Trim();
        }
    }
}