using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Swashbuckle.AspNetCore;


var builder = WebApplication.CreateBuilder(args);
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
// Allow CORS for Angular frontend
builder.Services.AddCors(options =>
{
	options.AddPolicy("AllowAngularClient", policy =>
	{
		policy.WithOrigins("http://localhost:4200") // —«»ÿ «·‹ Angular
			  .AllowAnyHeader()
			  .AllowAnyMethod();
			
	});
});

var app = builder.Build();

//app.UseSwagger();
app.UseStaticFiles(); // This line is required to serve wwwroot files
app.UseCors("AllowAngularClient");
app.UseSwaggerUI();
app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();
app.Run();