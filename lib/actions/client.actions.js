"use server"
import { Query, ID } from "node-appwrite"
import { users } from "../appwrite.config"
import { parseStringify } from "../utils"

export const createUser = async (user) => {
	try {
		console.log("Attempting to create user with data:", user) // Log user creation data
		const newuser = await users.create(
			ID.unique(),
			user.email,
			user.phone,
			user.name
		)

		console.log("new user", newuser)
		console.log("User created successfully:", { newuser }) // Log the result of user creation
		return parseStringify({ newuser })
	} catch (error) {
		console.error("Error occurred during user creation:", error) // Log any errors
		if (error && error?.code === 409) {
			console.log("User already exists, fetching existing user...")
			const documents = await users.list([Query.equal("email", [user.email])])
			console.log("Fetched existing user:", documents?.users[0])
			return documents?.users[0]
		} else {
			throw error // Re-throw any other errors
		}
	}
}
