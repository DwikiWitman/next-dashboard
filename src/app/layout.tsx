import './globals.css';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import 'bootstrap-icons/font/bootstrap-icons.css';


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex h-screen">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden bg-gray-100">
          <Header />
          <main className="flex-1 overflow-y-auto p-6">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
