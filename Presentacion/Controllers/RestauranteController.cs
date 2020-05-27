using System.Collections.Generic;
using System.Linq;
using Datos;
using Entity;
using Logica.Restaurantes;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Presentacion.Models.RestauranteModels;

namespace Presentacion.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class RestauranteController:ControllerBase
    {
        private readonly RestauranteService _restauranteService;

        public RestauranteController(LogisticaSinuContext context)
        {
            _restauranteService = new RestauranteService(context);
        }

         [HttpPost]
        public ActionResult<RestauranteViewModel> Post(RestauranteInputModel restauranteInput)
        {
           Restaurante restaurante = MapearRestaurante(restauranteInput);
            var response = _restauranteService.Guardar(restaurante);
            if (response.Error)
            {
                ModelState.AddModelError ("Guardar Restaurante", response.Mensaje);
                var problemDetails = new ValidationProblemDetails (ModelState) {
                    Status = StatusCodes.Status400BadRequest,
                };
                return BadRequest(problemDetails);
            }
            return Ok(response.Restaurante);
        }

        private Restaurante MapearRestaurante(RestauranteInputModel restauranteInput)
        {
            var restaurante = new Restaurante
            {
                Nit = restauranteInput.Nit,
                Nombre = restauranteInput.Nombre,
                Pais = restauranteInput.Pais,
                Ciudad = restauranteInput.Ciudad,
                Direccion = restauranteInput.Direccion,
                Barrio = restauranteInput.Barrio,
                Telefono = restauranteInput.Telefono,
                CorreoElectronico = restauranteInput.CorreoElectronico,
                SitioWeb = restauranteInput.SitioWeb
            };
            return restaurante;
        }

        [HttpGet]
        public IEnumerable<RestauranteViewModel> Gets()
        {
            var restaurantes = _restauranteService.Consultar().Restaurantes.Select(r=> new RestauranteViewModel(r));
            return restaurantes;
        }
        [HttpGet("{nit}")]
        public ActionResult<RestauranteViewModel> Get(string nit)
        {
            var restaurante = _restauranteService.BuscarxNit(nit);
            if (restaurante == null) return NotFound();
            var RestauranteViewModel = new RestauranteViewModel(restaurante);
            return RestauranteViewModel;
        }
        
        [HttpPut("{nit}")]
        public ActionResult<string> Put(string nit, Restaurante restaurante)
        {
            var _nit =_restauranteService.BuscarxNit(restaurante.Nit);
            if(_nit==null){
                return BadRequest("No encontrado");
            }
            var mensaje=_restauranteService.Modificar(restaurante);
           return Ok(mensaje) ;
        }

    }
}