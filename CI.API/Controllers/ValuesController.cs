using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CI.API.ViewModels;
using CI.DAL;
using CI.SER.Interfaces;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CI.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        private readonly ICloudStorage _storage;

        public ValuesController(ApplicationDbContext context, ICloudStorage storage)
        {
            _storage = storage;
            _context = context;
        }


        // POST api/values
        [HttpPost]
        public async Task<IActionResult> Post([FromForm] IFormFile file)
        {
            await _storage.UploadAsync(file);
            return Ok();
        }

        // POST api/values
        [HttpPost("deleteimage")]
        public async Task<IActionResult> Delete(DeleteImageViewModel model)
        {
            await _storage.DeleteImage(model.Url);
            return Ok();
        }

    }
}
