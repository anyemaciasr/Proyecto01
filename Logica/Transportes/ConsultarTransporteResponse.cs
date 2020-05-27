using System.Collections.Generic;
using Entity;

namespace Logica.Transportes
{
    public class ConsultarTransporteResponse
    {
        public bool Error { get; set; }
        public string  Mensaje { get; set; }
        public List<Transporte> Transportes { get; set; }

        public ConsultarTransporteResponse(List<Transporte> transportes)
        {
            Error=false;
            Transportes=transportes;

        }
        public ConsultarTransporteResponse(string mensaje)
        {
            Error=true;
            Mensaje=mensaje;
        }
    }
}