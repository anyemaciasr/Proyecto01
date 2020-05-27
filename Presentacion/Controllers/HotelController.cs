using System.Collections.Generic;
using System.Linq;
using Datos;
using Entity;
using Logica;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Presentacion.Models;

namespace Presentacion.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HotelController:ControllerBase
    {
        private readonly HotelService _hotelService;

        public HotelController(LogisticaSinuContext context)
        {
            _hotelService = new HotelService(context);
        }
        
        [HttpPost]
        public ActionResult<HotelViewModel> Post(HotelInputModel hotelInput)
        {
            Hotel hotel = MapearHotel(hotelInput);
            var response = _hotelService.Guardar(hotel);
            if (response.Error)
            {
                ModelState.AddModelError ("Guardar Hotel", response.Mensaje);
                var problemDetails = new ValidationProblemDetails (ModelState) {
                    Status = StatusCodes.Status400BadRequest,
                };
                return BadRequest(problemDetails);
            }
            return Ok(response.Hotel);
        }

        private Hotel MapearHotel(HotelInputModel hotelInput)
        {
            var hotel = new Hotel
            {
                Nit = hotelInput.Nit,
                Nombre = hotelInput.Nombre,
                Pais = hotelInput.Pais,
                Ciudad = hotelInput.Ciudad,
                Direccion = hotelInput.Direccion,
                Barrio = hotelInput.Barrio,
                Telefono = hotelInput.Telefono,
                CorreoElectronico = hotelInput.CorreoElectronico,
                SitioWeb = hotelInput.SitioWeb
            };
            return hotel;
        }

        [HttpGet]
        public IEnumerable<HotelViewModel> Gets()
        {
            var hoteles = _hotelService.Consultar().Hoteles.Select(p=> new HotelViewModel(p));
            return hoteles;
        }

        
        [HttpGet("{nit}")]
        public ActionResult<HotelViewModel> Get(string nit)
        {
            var hotel = _hotelService.BuscarxNit(nit);
            if (hotel == null) return NotFound();
            var hotelViewModel = new HotelViewModel(hotel);
            return hotelViewModel;
        }

        [HttpPut("{nit}")]
        public ActionResult<string> Put(string nit, Hotel hotel)
        {
            var _nit =_hotelService.BuscarxNit(hotel.Nit);
            if(_nit==null){
                return BadRequest("No encontrado");
            }
            var mensaje=_hotelService.Modificar(hotel);
           return Ok(mensaje) ;
        }

    }
}