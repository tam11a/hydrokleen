import React from "react";
import useBlogs from "@/hooks/useBlogs";
import { Link, useParams } from "react-router-dom";
import NoBlog from "./NoBlog";
import { Avatar } from "@mui/material";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

const BlogById: React.FC = () => {
	const { id } = useParams<{ id: string }>();

	const { getBlogById, getRelatedBlogs } = useBlogs();

	const blog = getBlogById(parseInt(id || "", 10));

	if (!blog) return <NoBlog />;

	const relateds = getRelatedBlogs(parseInt(id || "", 10));

	return (
		<div className="max-w-xl mx-auto">
			<img
				src={blog.thumbnail}
				alt={blog.title}
				className="mb-7 rounded border border-slate-300"
			/>
			<h1 className="text-3xl font-semibold text-slate-700 mb-4">
				{blog.title}
			</h1>
			<div className="text-sm text-slate-700 font-semibold">
				Author:{" "}
				<Link
					to={"/"}
					target="_blank"
					className="text-primary-700"
				>
					HydroKleen Bangladesh
				</Link>
			</div>
			<div className="list-inside my-4">
				<ReactMarkdown
					rehypePlugins={[rehypeRaw]}
					children={blog?.description || ""}
				/>
			</div>
			<p className="text-2xl font-semibold text-primary-700 mt-20">
				Related Posts{" "}
				<span className="text-slate-700">({relateds?.length || 0})</span>
			</p>
			<ul>
				{relateds?.map((r_blog) => (
					<li
						className="my-4"
						key={r_blog.id}
					>
						<Link
							className="flex flex-row items-center gap-3"
							to={`/blogs/${r_blog.id}`}
						>
							<Avatar
								variant="rounded"
								src={r_blog.thumbnail}
							/>
							<div>
								<p className="font-bold text-slate-800">{r_blog.title}</p>
								<p className="text-xs text-slate-600 font-semibold">
									By HydroKleen Bangladesh
								</p>
							</div>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default BlogById;
