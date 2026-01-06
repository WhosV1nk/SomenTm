"use server";

import { prisma } from "@/lib/prisma";

export async function createBooking(data: {
  mode: "normal" | "emergency";
  name: string;
  phone: string;
  city: string;
  vehicle: string;
  issue?: string;
}) {
  const city = await prisma.cities.findFirst({
    where: {
      name: {
        equals: data.city.trim(),
        mode: "insensitive",
      },
    },
  });

  if (!city) {
    throw new Error("City not supported");
  }

  await prisma.bookings.create({
    data: {
      mode: data.mode,
      customer_name: data.name,
      customer_phone: data.phone,
      vehicle_model: data.vehicle,
      issue_description: data.issue,
      city_id: city.id,
    },
  });
}
