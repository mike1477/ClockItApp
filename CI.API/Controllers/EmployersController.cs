using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Web;
using CI.API.ViewModels;
using CI.DAL;
using CI.DAL.Entities;
using CI.SER.DTOs;
using CI.SER.Interfaces;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;

namespace CI.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployersController : ControllerBase
    {

        private readonly UserManager<User> _userManager;
        private readonly RoleManager<IdentityRole> _roleManager;
        private readonly IOptions<EmailOptionsDTO> _emailOptions;
        private readonly IEmail _email;

        public EmployersController(UserManager<User> userManager, RoleManager<IdentityRole> roleManager,
        IOptions<EmailOptionsDTO> emailOptions, IEmail email)
        {
            _email = email;
            _emailOptions = emailOptions;
            _roleManager = roleManager;
            _userManager = userManager;

        }

        // Post api/employers/create
        [HttpPost("create")]
        public async Task<IActionResult> Create(CreateEmployerViewModel model)
        {
            if (!(await _roleManager.RoleExistsAsync("Employer")))
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

            //Send Email
            var token = await _userManager.GenerateEmailConfirmationTokenAsync(employer);
            var confirmEmailUrl = Request.Headers["confirmEmailUrl"];//http://localhost:4200/email-confirm

            var uriBuilder = new UriBuilder(confirmEmailUrl);
            var query = HttpUtility.ParseQueryString(uriBuilder.Query);
            query["token"] = token;
            query["userid"] = employer.Id;
            uriBuilder.Query = query.ToString();
            var urlString = uriBuilder.ToString();
      
            var emailBody = $"Please confirm your email by clicking on the link below </br>{urlString}";
            await _email.Send(model.Email, emailBody, _emailOptions.Value);

            //////////////////

            var userFromDb = await _userManager.FindByNameAsync(employer.UserName);
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
