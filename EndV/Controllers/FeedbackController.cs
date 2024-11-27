using Microsoft.AspNetCore.Mvc;

namespace EndV.Controllers
{
    public class FeedbackController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
