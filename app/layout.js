import { Plus_Jakarta_Sans } from "next/font/google"
import "./globals.css"
import { cn } from "@/lib/utils"
import { ThemeProvider } from "@/components/theme-provider"

const fontSans = Plus_Jakarta_Sans({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700"], // Corrected typo here
	variable: "--font-sans",
})

export const metadata = {
	title: "Service Scheduler",
	description: "A modern service management system",
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body
				className={cn(
					"min-h-screen bg-dark-300 font-sans antialiased ",
					fontSans.variable
				)}
			>
				<ThemeProvider attribute="class" defaultTheme="dark">
					{children}
				</ThemeProvider>
			</body>
		</html>
	)
}
