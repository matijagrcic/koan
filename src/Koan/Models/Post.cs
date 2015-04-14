using System;
using System.Collections.Generic;
using System.Linq;

namespace Koan.Models
{
    public class Post
    {
		public string Title { get; set; }
		public string Content { get; set; }
		public DateTimeOffset Posted { get; set; }
    }
}