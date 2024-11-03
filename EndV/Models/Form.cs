using Microsoft.Web.Mvc.Controls;
using sun.security.util;
using System.ComponentModel.DataAnnotations;

namespace EndV.Models
{
    public class Form
    {
        [Display(Name = "")]
        [Required(ErrorMessage = "Вам нужно ввести имя")]
        public string Name { get; set; }


        [Display(Name = "")]
        [Required(ErrorMessage = "Вам нужно ввести почту")]
        public string Email { get; set; }

    }
}
