import { Client, Databases, Storage, Users, Messaging } from "node-appwrite"
import * as sdk from "node-appwrite"

// Load environment variables
export const {
	NEXT_PUBLIC_PROJECT_ID: PROJECT_ID,
	NEXT_PUBLIC_API_KEY: API_KEY,
	NEXT_PUBLIC_DATABASE_ID: DATABASE_ID,
	NEXT_PUBLIC_CLIENT_COLLECTION_ID: CLIENT_COLLECTION_ID,
	NEXT_PUBLIC_PROVDER_COLLECTION_ID: PROVIDER_COLLECTION_ID,
	NEXT_PUBLIC_APPOINTMENT_COLLECTION_ID: APPOINTMENT_COLLECTION_ID,
	NEXT_PUBLIC_BUCKET_ID: BUCKET_ID,
	NEXT_PUBLIC_ENDPOINT: ENDPOINT,
} = process.env

// Check if all required environment variables are loaded
console.log({
	ENDPOINT,
	PROJECT_ID,
	API_KEY,
	DATABASE_ID,
	CLIENT_COLLECTION_ID,
	PROVIDER_COLLECTION_ID,
	APPOINTMENT_COLLECTION_ID,
	BUCKET_ID,
})

// Initialize Appwrite client
const client = new sdk.Client()
	.setEndpoint(ENDPOINT) // Ensure this is correct
	.setProject(PROJECT_ID) // Ensure the project ID is correct
	.setKey(API_KEY) // Ensure the API key is loaded

// Export Appwrite services
export const databases = new sdk.Databases(client)
export const storage = new sdk.Storage(client)
export const messaging = new sdk.Messaging(client)
export const users = new sdk.Users(client)

console.log(users)
