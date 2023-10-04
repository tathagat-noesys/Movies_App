using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using MoviesAPI.Entities;
using MoviesAPI.Services;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace MoviesAPI.Controllers
{
	[Route("/genres")]
	public class GenreController : ControllerBase{


        private readonly IRepository repository;

        public GenreController(IRepository repository)
        {
	    this.repository = repository;
	    }


        [HttpGet] //api/genres
        [HttpGet("list")]
        public async  Task<ActionResult<List<Genre>>> Get()
        {
            return await repository.GetAllGenres();
        }


        [HttpGet("{Id:int}")]
        
        public IActionResult  GetGenreById(int Id, [BindRequired] string params2)

            
        {

            if (!ModelState.IsValid) { 
                return BadRequest(ModelState);
            }
            var genre =  repository.GetGenreById(Id);

            if(genre == null) { return NotFound(); }
            return Ok(genre);
        }
        [HttpPost]
        public ActionResult Post([FromBody] Genre genre)
        {
            return NoContent();
        }

        [HttpPut]
        public ActionResult Put([FromBody]Genre genre) { return NoContent(); }

        [HttpDelete]
        public ActionResult Delete() { return NoContent(); }

    }
}
