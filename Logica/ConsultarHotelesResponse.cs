using System.Collections.Generic;
using Entity;

namespace Logica
{
    public class ConsultarHotelesResponse
    {
        public bool Error { get; set; }
        public string Mensaje { get; set; }
        public List<Hotel> Hoteles { get; set; }
        public ConsultarHotelesResponse(List<Hotel> hoteles)
        {
            Error = false;
            Hoteles = hoteles;
        }

        public ConsultarHotelesResponse(string mensaje)
        {
            Error = true;
            Mensaje = mensaje;
        }
    }
}