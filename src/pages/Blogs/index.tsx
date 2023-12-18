import useBlogs from "@/hooks/useBlogs";
import React from "react";
import { Link } from "react-router-dom";
import xss from "xss";
const Blogs: React.FC = () => {
	const { blogs } = useBlogs();
	return (
		<>
			<h2 className="text-4xl text-slate-700 font-bold text-center mt-9">
				Our <span className="text-primary-600">Blogs</span>
			</h2>
			<p className="text-base font-semibold text-slate-600 text-center mb-9 mt-3 max-w-lg mx-auto">
				We are always trying to share our knowledge with you.
			</p>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-4xl gap-7 mx-auto">
				{blogs.map((blog) => {
					const description = xss(blog.description, {
						whiteList: {}, // empty, means filter out all tags
						stripIgnoreTag: true, // filter out all HTML not in the whilelist
						stripIgnoreTagBody: ["script"], // the script tag is a special case, we need
						// to filter out its content
					});
					return (
						<Link
							to={`/blogs/${blog.id}`}
							key={blog.id}
						>
							<img
								src={blog.thumbnail}
								alt={blog.title}
								className="rounded border border-slate-300 mb-2"
							/>
							<h3 className="font-bold text-slate-700 mb-2">{blog.title}</h3>
							<p className="text-sm ">
								{description?.slice(0, 100)}
								{description?.length > 100 && (
									<>
										...{" "}
										<Link
											to={`/blogs/${blog.id}`}
											className={"text-primary font-medium"}
										>
											Continue Reading
										</Link>
									</>
								)}
							</p>
						</Link>
					);
				})}
			</div>
		</>
	);
};

export default Blogs;
