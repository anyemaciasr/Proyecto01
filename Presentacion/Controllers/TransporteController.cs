using System.Collections.Generic;
using System.Linq;
using Datos;
using Entity;
using Logica;
using Logica.Transportes;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Presentacion.Models;
using Presentacion.Models.TransporteModels;


namespace Presentacion.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TransporteController:ControllerBase
    {
        private readonly TransporteService _transporteService;

        public TransporteController(LogisticaSinuContext context)
        {
            _transporteService = new TransporteService(context);
        }

        [HttpPost]
        public ActionResult<TransporteViewModel> Post(TrasnporteInputModel  trasnporteInputModel)
        {
           Transporte transporte = MapearTransporte(trasnporteInputModel);
            var response = _transporteService.Guardar(transporte);
            if (response.Error)
            {
               ModelState.AddModelError ("Guardar Transporte", response.Mensaje);
                var problemDetails = new ValidationProblemDetails (ModelState) {
                    Status = StatusCodes.Status400BadRequest,
                };
                return BadRequest(problemDetails);
            }
            return Ok(response.Transporte);
        }

        private Transporte MapearTransporte(TrasnporteInputModel trasnporteInputModel)
        {
            var transporte = new Transporte
            {
                Nit = trasnporteInputModel.Nit,
                Nombre = trasnporteInputModel.Nombre,
                Pais = trasnporteInputModel.Pais,
                Ciudad = trasnporteInputModel.Ciudad,
                Direccion = trasnporteInputModel.Direccion,
                Barrio = trasnporteInputModel.Barrio,
                Telefono = trasnporteInputModel.Telefono,
                CorreoElectronico = trasnporteInputModel.CorreoElectronico,
                SitioWeb = trasnporteInputModel.SitioWeb
            };
            return transporte;
        }

         [HttpGet]
        public IEnumerable<TransporteViewModel> Gets()
        {
            var transportes = _transporteService.Consultar().Transportes.Select(t=> new TransporteViewModel(t));
            return transportes;
        }
        [HttpGet("{nit}")]
        public ActionResult<TransporteViewModel> Get(string nit)
        {
            var transporte = _transporteService.BuscarxNit(nit);
            if (transporte == null) return NotFound();
            var TransporteViewModel = new TransporteViewModel(transporte);
            return TransporteViewModel;
        }
        
        [HttpPut("{nit}")]
        public ActionResult<string> Put(string nit, Transporte transporte)
        {
            var _nit =_transporteService.BuscarxNit(transporte.Nit);
            if(_nit==null){
                return BadRequest("No encontrado");
            }
            var mensaje=_transporteService.Modificar(transporte);
           return Ok(mensaje) ;
        }

        
    }
}