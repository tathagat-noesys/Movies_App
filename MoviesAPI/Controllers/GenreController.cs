using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using MoviesAPI.Entities;
using MoviesAPI.Services;
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
    public class GenreController : ControllerBase{


        private readonly IRepository repository;

        private readonly ILogger<GenreController> logger;

        public GenreController(IRepository repository,ILogger<GenreController> logger)
        {
	        this.repository = repository;
            this.logger = logger;
	    }


        [HttpGet] //api/genres
        [HttpGet("list")]
        //[ResponseCache(Duration=50)]
        [ServiceFilter(typeof(MyActionFilter))]
        public async  Task<ActionResult<List<Genre>>> Get()
        {
            logger.LogInformation("Getting all genres");
            return await repository.GetAllGenres();
        }


        [HttpGet("{Id:int}")]
        public IActionResult  GetGenreById(int Id, [BindRequired] string params2)

            
        {

          
            var genre =  repository.GetGenreById(Id);

            if(genre == null) {

                logger.LogWarning($"Genre with Id {Id} not found");
                //throw new ApplicationException();
                return NotFound();
            }
            return Ok(genre);
        }

        [HttpPost]
        public ActionResult Post([FromBody] Genre genre)
        {
            

           repository.AddGenre(genre);

            return NoContent();
        }

        [HttpPut]
        public ActionResult Put([FromBody]Genre genre)
        {
          
            return NoContent(); }

        [HttpDelete]
        public ActionResult Delete()
        {
           
            return NoContent(); }

    }
}
