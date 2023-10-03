using Microsoft.AspNetCore.Mvc;
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


        [HttpGet]
        public List<Genre> Get()
        {
            return repository.GetAllGenres();
        }


        [HttpGet("example")]
        
        public Genre GetGenreById(int id)
        {
            return repository.GetGenreById(id);
        }
        [HttpPost]
        public void Post() { }

        [HttpPut]
        public void Put() { }

        [HttpDelete]
        public void Delete() { }

    }
}
