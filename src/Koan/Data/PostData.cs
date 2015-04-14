using System;
using System.Collections.Generic;
using Koan.Models;

namespace Koan.Data
{
    public static class PostData
    {
		public static IEnumerable<Post> GetAll()
		{
            yield return new Post
            {
                Title = "First post",
                Content = "This is a post",
                Posted = DateTimeOffset.UtcNow
            };
        }
    }
}