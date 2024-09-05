"use client"
import React from "react"
import {
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import "react-phone-number-input/style.css"
import PhoneInput from "react-phone-number-input"

const RenderInput = ({ field, props }) => {
	const { fieldType, iconSrc, iconAlt, placeholder } = props
	switch (fieldType) {
		case "input":
			return (
				<div className="flex rounded-md border border-blue-500 bg-dark-400">
					{iconSrc && (
						<Image
							src={iconSrc}
							height={24}
							width={24}
							alt={iconAlt || "icon"}
							className="ml-2"
						/>
					)}
					<FormControl>
						<Input
							placeholder={placeholder}
							{...field}
							className="shad-input border-0"
						/>
					</FormControl>
				</div>
			)
		case "phone":
			return (
				<FormControl>
					<PhoneInput
						defaultCountry="US"
						placeholder={placeholder}
						international
						withCountryCallingCode
						value={field.value || null}
						onChange={field.onChange}
						className="input-phone"
					/>
				</FormControl>
			)
		default:
			break
	}
}

const CustomFormField = (props) => {
	const { fieldType, control, name, label, placeholder, iconSrc, iconAlt } =
		props
	return (
		<FormField
			control={control}
			name={name}
			render={({ field }) => (
				<FormItem className="flex-1">
					{fieldType !== "checkbox" && label && <FormLabel>{label}</FormLabel>}
					<RenderInput field={field} props={props} />
					<FormMessage className="shad-error" />
				</FormItem>
			)}
		/>
	)
}

export default CustomFormField
