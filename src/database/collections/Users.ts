import { CollectionConfig } from "payload/types";

export enum UsersRoleEnum {
  Admin = "admin",
  User = "user",
}

export const Users: CollectionConfig = {
  slug: "users",
  auth: {
    verify: {
      generateEmailHTML: ({ token }) => `<div>Verify your account on Hire Me Now</div>`,
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
