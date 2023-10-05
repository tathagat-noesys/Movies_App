using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.ModelBinding;
using MoviesAPI.Entities;

using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using MoviesAPI.Filters;
using Microsoft.EntityFrameworkCore;
using MoviesAPI.DTOs;
using AutoMapper;

namespace MoviesAPI.Controllers
{
    [Route("/genres")]
    [ApiController]
    //[Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public class GenreController : ControllerBase
    {




        private readonly ILogger<GenreController> logger;
        private readonly ApplicationDbContext context;
        private readonly IMapper mapper;

        public GenreController(ILogger<GenreController> logger,ApplicationDbContext context,IMapper mapper)
        {

            this.logger = logger;
            this.context = context;
            this.mapper = mapper;
        }


        [HttpGet] //api/genres
        // [HttpGet("list")]
        //[ResponseCache(Duration=50)]
        // [ServiceFilter(typeof(MyActionFilter))]
        public async Task<ActionResult<List<GenreDTO>>> Get()
        {
            await Task.Delay(1);
            logger.LogInformation("Getting all genres");
            var genres =  await context.Genres.ToListAsync();
           // var genreDTOs = new List<GenreDTO>();

           // foreach(var genre in genres)
           // {
            //    genreDTOs.Add(new GenreDTO { Id=genre.Id, Name=genre.Name });
          //  }

          //  return genreDTOs;

            return mapper.Map<List<GenreDTO>>(genres);

        }


        [HttpGet("{Id:int}")]
        public ActionResult<Genre> GetGenreById([BindRequired] int Id)


        {


            throw new NotImplementedException();


        }

        [HttpPost]
        public async Task<ActionResult> Post([FromBody] GenreCreationDTO genreCreationDTO)
        {
            var genre = mapper.Map<Genre>(genreCreationDTO);
            context.Genres.Add(genre);
            await context.SaveChangesAsync();
            return NoContent();
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
