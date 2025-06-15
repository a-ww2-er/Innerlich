"use server"

import { client } from "@/lib/prisma"
import { currentUser } from "@clerk/nextjs/server"

export const onAuthenticateUser = async () => {
    try {
        const user = await currentUser()
        if (!user) {
            return { status: 403 }
        }

        const userExists = await client.user.findUnique({
            where: {
                clerkid: user.id
            },
            include: {
                WorkSpace: {
                    where: {
                        User: {
                            clerkid: user.id
                        }
                    }
                }
            }

        })
        if (userExists) {
            return { status: 200, user: userExists }
        }
        const newUser = await client.user.create({
            data: {
                clerkid: user.id,
                email: user.emailAddresses[0].emailAddress,
                firstName: user.firstName,
                lastName: user.lastName,
                image: user.imageUrl,
                studio: {
                    create: {}
                },
                subscription: {
                    create: {}
                },
                WorkSpace: {
                    create: {
                        name: `${user.firstName}'s Workspace`,
                        type: "PERSONAL"
                    }
                }
            },
            include: {
                WorkSpace: {
                    where: {
                        User: {
                            clerkid: user.id
                        }
                    }
                }
                , subscription: {
                    select: {
                        plan: true
                    }
                }
            }
        })
        if (newUser) {
            return { status: 201, user: newUser }
        }
        return { status: 400 }
    }
    catch (error) {

        return { status: 500 }
    }
}