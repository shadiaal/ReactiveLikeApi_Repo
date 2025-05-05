using Microsoft.AspNetCore.DataProtection.KeyManagement;
using Microsoft.AspNetCore.Mvc;
using ReactiveLikeApiDemo.Services;
using System.Collections.Generic;
using System;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace ReactiveLikeApiDemo.Controllers
{
    [ApiController]
    [Route("api/posts")]
    public class PostsController : ControllerBase
    {
		[HttpPost("{id}/like")]
		public IActionResult LikePost(int id)
		{
			if (DataStore.Posts.TryGetValue(id, out var post))
			{
				post.Likes++;
				DataStore.PostSubject.OnNext(post);
				return Ok(post);
			}

			return NotFound();
		}

		[HttpGet]
		public IActionResult GetAllPosts()
		{
			return Ok(DataStore.Posts.Values);
		}
	}
}