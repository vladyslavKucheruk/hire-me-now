import { CollectionConfig } from "payload/types";

export enum UsersRoleEnum {
  Admin = "admin",
  User = "user",
}

export const Users: CollectionConfig = {
  slug: "users",
  auth: {
    verify: {
      generateEmailHTML: ({ token }) =>
        `<a href="${process.env.NEXT_PUBLIC_SERVER_URL}/verify-email?token=${token}">Verify your email</a>`,
    },
  },
  access: {
    read: () => true,
    create: () => true,
  },
  fields: [
    {
      name: "role",
      type: "select",
      required: true,
      defaultValue: UsersRoleEnum.User,
      admin: {
        condition: () => false,
      },
      options: [
        {
          label: "Admin",
          value: "admin",
        },
        {
          label: "User",
          value: "user",
        },
      ],
    },
  ],
};
