using Microsoft.EntityFrameworkCore;
using ShoppingApplication.Interfaces;
using ShoppingApplication.RepositoryLayer;
using ShoppingApplication.ServiceLayer;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
builder.Services.AddDbContext<ApplicationDbContext>(options => options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

builder.Services.AddScoped<IStore, StoreService>();
builder.Services.AddScoped<ICategory,CategoryServices>();
builder.Services.AddScoped<ICat_store, Cat_StoreServices>();
builder.Services.AddScoped<IProduct, ProductServices>();
builder.Services.AddScoped<ICatProduct, CatProductServices>();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseCors(x => x
           .AllowAnyOrigin()
           .AllowAnyMethod()
           .AllowAnyHeader());

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
