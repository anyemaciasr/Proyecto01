using Entity;
namespace Logica.Restaurantes
{
    public class GuardarRestauranteResponse
    {
        public bool Error { get; set; }
        public string Mensaje { get; set; }
        public Restaurante Restaurante { get; set; }
        public GuardarRestauranteResponse(Restaurante restaurante)
        {
            Error = false;
            Restaurante = restaurante;
        }
        public GuardarRestauranteResponse(string mensaje)
        {
            Error = true;
            Mensaje = mensaje;
        }
    }
}