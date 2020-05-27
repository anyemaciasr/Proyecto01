using Entity;

namespace Logica
{
    public class GuardarHotelResponse
    {
        public GuardarHotelResponse(Hotel hotel)
        {
            Error = false;
            Hotel = hotel;
        }
        public GuardarHotelResponse(string mensaje)
        {
            Error = true;
            Mensaje = mensaje;
        }
        public bool Error { get; set; }
        public string Mensaje { get; set; }
        public Hotel Hotel { get; set; }
    }
}