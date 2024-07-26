import "./globals.css"
import { Inter as FontSans } from "next/font/google"

import { cn } from "@/lib/utils"
import { Metadata } from "next"
import { ClerkProvider } from "@clerk/nextjs"
import { dark } from "@clerk/themes"
import Provider from "./Provider"
import { Toaster } from "@/components/ui/toaster"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title:"Live Docs App",
  description: "Collaborative editor"
}

const localization = {
  socialButtonsBlockButton: "Đăng nhập bằng {{provider|titleize}}",
  signIn: {
    start: {
      actionLink: 'Đăng ký',
      actionText: 'Bạn chưa có tài khoản?',
      subtitle: 'Vui lòng đăng nhập',
      title: 'Đăng nhập vào {{applicationName}}',
    },
  },
  signUp: {
    start: {
      actionLink: 'Đăng nhập',
      actionText: 'Bạn đã có tài khoản?',
      subtitle: 'Vui lòng đăng ký để bắt đầu.',
      title: 'Tạo tài khoản',
    },
  },
  userButton: {
    action__addAccount: 'Add account',
    action__manageAccount: 'Quản lý tài khoản',
    action__signOut: 'Đăng xuất',
    action__signOutAll: 'Sign out of all accounts',
  },
}

export default function RootLayout({ children }: {children:React.ReactNode}) {
  return (
    <ClerkProvider
      localization={localization}
      appearance={{
        baseTheme: dark,
        variables: { colorPrimary: "#3371FF", fontSize: '16px'}
      }}
    >
      <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen font-sans antialiased",
          fontSans.variable
        )}
      >
        <Provider>
          {children}
          <Toaster />
        </Provider>
      </body>
    </html>
    </ClerkProvider>
  )
}
