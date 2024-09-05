"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import CustomFormField from "../CustomFormField"
import SubmitButton from "../SubmitButton"
import { useState } from "react"
const formSchema = z.object({
	username: z.string().min(2, {
		message: "Username must be at least 2 characters.",
	}),
})

export function PatientForm() {
	const [isLoading, setIsLoading] = useState(false)

	// 1. Define your form.
	const form = useForm({
		resolver: zodResolver(formSchema),
		defaultValues: {
			username: "",
		},
	})

	// 2. Define a submit handler.
	function onSubmit(values) {
		// Do something with the form values.
		console.log(values)
	}

	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
				<section className="mb-12 space-y-4">
					<h1 className="header">hi there 👋 </h1>
					<p className="text-dark-700">Schedule your first appointment</p>
				</section>
				<CustomFormField
					fieldType="input"
					control={form.control}
					name="name"
					label="Full name"
					placeholder="John Doe"
					iconSrc="/assets/icons/user.svg"
					iconAlt="user"
				/>
				<CustomFormField
					fieldType="input"
					control={form.control}
					name="email"
					label="Email"
					placeholder="Enter Email here"
					iconSrc="/assets/icons/email.svg"
					iconAlt="email"
				/>
				<CustomFormField
					fieldType="phone"
					control={form.control}
					name="phone"
					label="Phone number"
					placeholder="123 456 789"
					iconSrc="/assets/icons/phone.svg"
					iconAlt="phone"
				/>
				<SubmitButton isLoading={isLoading}>Get Started</SubmitButton>
			</form>
		</Form>
	)
}

export default PatientForm
