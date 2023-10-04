using MoviesAPI.Services;
using MoviesAPI.Entities;
using Microsoft.Extensions.Logging;
using System.IO;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using System.IdentityModel.Tokens.Jwt;
using MoviesAPI.Filters;
using Microsoft.Extensions.Options;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers((options)=>options.Filters.Add(typeof (MyExceptionFilter)));
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme).AddJwtBearer();
builder.Services.AddSingleton<IRepository, InMemoryRepository>();
builder.Services.AddTransient<MyActionFilter>();
builder.Services.AddLogging(builder =>
{
    builder.AddConsole();
});
var app = builder.Build();
builder.Services.AddResponseCaching();
// Configure the HTTP request pipeline.

app.Use(async (context, next) => {

    using (var swapStream = new MemoryStream()) {
        var originalResponseBody = context.Response.Body;
        context.Response.Body = swapStream;
        await next.Invoke();


        swapStream.Seek(0, SeekOrigin.Begin);
        string responseBody = new StreamReader(swapStream).ReadToEnd();
        swapStream.Seek(0, SeekOrigin.Begin);

        await swapStream.CopyToAsync(originalResponseBody);
        context.Response.Body = originalResponseBody;
         var logger = app.Services.GetRequiredService<ILogger<Program>>();
        logger.LogInformation($"Response Body: {responseBody}");
    }
});


if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();


app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();
app.UseResponseCaching();
app.Run();
