using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CI.API.ViewModels;
using CI.DAL;
using CI.DAL.Entities;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CI.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployersController : ControllerBase
    {

        private readonly UserManager<User> _userManager;
        private readonly RoleManager<IdentityRole> _roleManager;

        public EmployersController(UserManager<User> userManager, RoleManager<IdentityRole> roleManager)
        {
            _roleManager = roleManager;
            _userManager = userManager;

        }

        // Post api/employers/create
        [HttpPost("create")]
        public async Task<IActionResult> Create(CreateEmployerViewModel model)
        {
            if(!(await _roleManager.RoleExistsAsync("Employer")))
            {
                await _roleManager.CreateAsync(new IdentityRole("Employer"));
            }
            var employer = new User
            {
                UserName = model.Username,
                Email = model.Email
            };
            var result = await _userManager.CreateAsync(employer, model.Password);

            if (!result.Succeeded)
            {
                return BadRequest(result);
            }

            var userFromDb  = await _userManager.FindByNameAsync(employer.UserName);
            await _userManager.AddToRoleAsync(userFromDb, "Employer");
            
            return Ok(result);
        }


        // POST api/values
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
