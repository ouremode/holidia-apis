import { db } from "../db";
import { seedData } from "../data";

const SEED_USER = {
	name: "User",
	email: "user@holidia.com",
	username: "user",
	password: "12345678",
	avatar: "https://images.unsplash.com/photo-1557682224-5b8590cd9ec5",
};

async function main() {
	console.log("Starting seed...");

	const user = await db.user.create({
		data: SEED_USER,
	});

	console.log(`Created user: ${user.id}`);

	for (const property of seedData.properties) {
		await db.property.create({
			data: {
				name: property.name,
				description: property.description,
				price_per_night: property.price_per_night,
				ownerId: user.id,
				images: property.images,
				address: property.address,
				city: property.city,
				country: property.country,
				amenities: property.amenities,
				capacity: property.capacity,
				longitude: property.longitude,
				latitude: property.latitude,
				latitude_delta: property.latitude_delta,
				longitude_delta: property.longitude_delta,
			},
		});
		console.log(`Created property: ${property.name}`);
	}

	console.log(`Seeded ${seedData.properties.length} properties`);
}

main()
	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await db.$disconnect();
	});
