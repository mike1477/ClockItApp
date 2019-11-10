using Microsoft.AspNetCore.Identity;

namespace CI.DAL.Entities
{
    public class User : IdentityUser
    {
        public string CompanyName { get; set; }

        public string ProfileImageUrl { get; set; }
    }
}