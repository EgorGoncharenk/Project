using Microsoft.AspNetCore.Mvc;

namespace EndV.Controllers
{
    public class PrivacyController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
