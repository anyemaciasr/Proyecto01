using Entity;

namespace Logica.Transportes {
    public class GuardarTransporteResponse {
        public bool Error { get; set; }

        public string Mensaje { get; set; }

        public Transporte Transporte { get; set; }

        public GuardarTransporteResponse(Transporte transportes)
        {
            Error=false;
            Transporte = transportes;
        }

        public GuardarTransporteResponse(string mensaje)
        {
            Error=true;
            Mensaje=mensaje;
        }
    }
}