using Microsoft.AspNetCore.Mvc;

namespace EndV.Controllers
{
    public class FormController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
