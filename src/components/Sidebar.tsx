import Link from "next/link";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white shadow-md h-screen">
      <div className="p-6 text-2xl font-bold">NEXT DASHBOARD</div>
      <nav className="p-4 space-y-2 text-gray-700 text-sm">

        <Link href="/dashboard" className="block px-3 py-2 rounded hover:bg-gray-100">
          <i className="bi bi-house-door me-2" />
          Home
        </Link>

        {/* Dropdown using details/summary for pure CSS */}
        <details open className="group">
          <summary className="flex items-center justify-between px-3 py-2 cursor-pointer rounded hover:bg-gray-100 list-none">
            <span>
              <i className="bi bi-people me-2" />
              Users
            </span>
            <i className="bi bi-chevron-down group-open:rotate-180 transition-transform" />
          </summary>
          <div className="ml-6 mt-2 space-y-1">
            <Link href="/users" className="block px-2 py-1 rounded hover:bg-gray-100">
              User List
            </Link>
            <Link href="/comments" className="block px-2 py-1 rounded hover:bg-gray-100">
              Users Comments
            </Link>
          </div>
        </details>
      </nav>
    </aside>
  );
};

export default Sidebar;
