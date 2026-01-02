import { z } from "zod";
import { UserScheme } from "../types/user.types";

export const UpdateUserDto = UserScheme.pick({
    uid: true,
    fullName: true,
    email: true,
    authProvider: true,
}).extend({
    fullName: UserScheme.shape.fullName.optional(),
    email: UserScheme.shape.email.optional(),
    authProvider: UserScheme.shape.authProvider.optional(),
    updatedAt: UserScheme.shape.updatedAt.optional(),
});
export type UpdateUserDto = z.infer<typeof UpdateUserDto>;