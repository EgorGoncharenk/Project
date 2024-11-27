using Microsoft.AspNetCore.Mvc;

namespace EndV.Controllers
{
    public class GameMechanics : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
