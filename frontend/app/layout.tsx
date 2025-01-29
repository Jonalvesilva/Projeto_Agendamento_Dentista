import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Separator } from "./_components/shadcn/ui/separator";
import {
  SidebarProvider,
  SidebarInset,
  SidebarTrigger,
} from "./_components/shadcn/ui/sidebar";
import AppSidebar from "./_components/AppSidebar";
import { DataProvider } from "./_contexts/DateContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Projeto Agendamento Dentista",
  description: "Pequeno projeto de gestão de agenda para dentista",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset>
            <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
              <div className="flex items-center gap-2 px-4">
                <SidebarTrigger className="-ml-1" />
                <Separator orientation="vertical" className="mr-2 h-4" />
              </div>
            </header>
            <DataProvider>{children}</DataProvider>
          </SidebarInset>
        </SidebarProvider>
      </body>
    </html>
  );
}
