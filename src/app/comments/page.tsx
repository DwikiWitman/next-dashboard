import Link from "next/link";

const COMMENTS_API = "https://jsonplaceholder.typicode.com/comments";
const LIMIT = 10;

type Comment = {
  id: number;
  name: string;
  email: string;
  body: string;
};

async function fetchComments(page: number): Promise<Comment[]> {
  const res = await fetch(`${COMMENTS_API}?_page=${page}&_limit=${LIMIT}`);
  if (!res.ok) throw new Error("Failed to fetch comments");
  return res.json();
}

export default async function CommentsPage({ searchParams }: { searchParams: { page?: string } }) {
  const page = parseInt(searchParams.page || "1");
  const comments = await fetchComments(page);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Comments (Page {page})</h2>
      <table className="table-auto w-full border">
        <thead>
          <tr className="bg-gray-200 text-left">
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Comment</th>
          </tr>
        </thead>
        <tbody>
          {comments.map((comment) => (
            <tr key={comment.id} className="border-t">
              <td className="px-4 py-2">{comment.id}</td>
              <td className="px-4 py-2">{comment.name}</td>
              <td className="px-4 py-2">{comment.email}</td>
              <td className="px-4 py-2">{comment.body}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-between mt-6">
        <Link
          href={`/comments?page=${page - 1}`}
          className={`btn btn-outline ${page <= 1 ? "pointer-events-none opacity-50" : ""}`}
        >
          ← Previous
        </Link>
        <Link href={`/comments?page=${page + 1}`} className="btn btn-outline">
          Next →
        </Link>
      </div>
    </div>
  );
}
