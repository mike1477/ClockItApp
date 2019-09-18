using System.ComponentModel.DataAnnotations;

namespace CI.API.ViewModels
{
    public class ResetPasswordViewModel
    {
        [Required]
        public string Email { get; set; }
    }
}