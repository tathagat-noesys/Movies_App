using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using MoviesAPI.Entities;

using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using MoviesAPI.Filters;

namespace MoviesAPI.Controllers
{
    [Route("/genres")]
    [ApiController]
    //[Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public class GenreController : ControllerBase
    {




        private readonly ILogger<GenreController> logger;

        public GenreController(ILogger<GenreController> logger)
        {

            this.logger = logger;
        }


        [HttpGet] //api/genres
        // [HttpGet("list")]
        //[ResponseCache(Duration=50)]
        // [ServiceFilter(typeof(MyActionFilter))]
        public async Task<ActionResult<List<Genre>>> Get()
        {
            await Task.Delay(1);
            logger.LogInformation("Getting all genres");
            return new List<Genre>() { new Genre() { Id = 1, Name = "Drama" } };
        }


        [HttpGet("{Id:int}")]
        public ActionResult<Genre> GetGenreById([BindRequired] int Id)


        {


            throw new NotImplementedException();


        }

        [HttpPost]
        public ActionResult Post([FromBody] Genre genre)
        {

            throw new NotImplementedException();

        }

        [HttpPut]
        public ActionResult Put([FromBody] Genre genre)
        {

            throw new NotImplementedException();

        }

        [HttpDelete]
        public ActionResult Delete()
        {

            throw new NotImplementedException();

        }
    }
}
