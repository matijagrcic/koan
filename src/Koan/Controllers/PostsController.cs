using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNet.Mvc;
using Koan.Models;
using Koan.Data;

namespace Koan.Controllers
{
	[Route("posts")]
    public class PostsController
    {
		[HttpGet]
		public Post[] Get()
		{
            return PostData.GetAll().ToArray();
        }
    }
}