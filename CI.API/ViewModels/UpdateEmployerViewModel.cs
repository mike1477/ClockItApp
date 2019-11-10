using Microsoft.AspNetCore.Http;

namespace CI.API.ViewModels
{
    public class UpdateEmployerViewModel
    {
        public IFormFile ProfileImage { get; set; }
    }
}