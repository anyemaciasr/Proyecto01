using System.Collections.Generic;
using Entity;

namespace Logica.Restaurantes
{
    public class ConsultarRestauranteResponse
    {
        public bool Error { get; set; }
        public string Mensaje { get; set; }
        public List<Restaurante> Restaurantes { get; set; }
        public ConsultarRestauranteResponse(List<Restaurante> restaurantes)
        {
            Error = false;
            Restaurantes = restaurantes;
        }
        public ConsultarRestauranteResponse(string mensaje)
        {
             Error = true;
            Mensaje = mensaje;
        }
    }
}